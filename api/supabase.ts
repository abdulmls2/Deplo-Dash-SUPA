import type { VercelRequest, VercelResponse } from '@vercel/node';
import { createClient } from '@supabase/supabase-js';
import { Database } from '../src/lib/database.types';

if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
  throw new Error('Missing NEXT_PUBLIC_SUPABASE_URL');
}

if (!process.env.SUPABASE_SERVICE_KEY) {
  throw new Error('Missing SUPABASE_SERVICE_KEY');
}

const supabase = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { action, payload } = req.body;

    switch (action) {
      case 'getMessages':
        const { conversationId } = payload;
        const { data: messages, error: messagesError } = await supabase
          .from('messages')
          .select('*')
          .eq('conversation_id', conversationId)
          .order('created_at', { ascending: true });

        if (messagesError) throw messagesError;
        return res.status(200).json({ messages });

      case 'getConversations':
        const { domainId, selectedTags, sortOrder, activeFilter } = payload;
        let query = supabase
          .from('conversations')
          .select(`
            *,
            conversation_tags!left (
              tags (
                id,
                name,
                color
              )
            )
          `)
          .eq('domain_id', domainId)
          .neq('status', 'deleted')
          .order('last_message_at', { ascending: sortOrder === 'oldest' });

        // Apply filter based on activeFilter
        switch (activeFilter) {
          case 'active':
            query = query.eq('status', 'active').is('requested_live_at', null);
            break;
          case 'urgent':
            query = query.not('requested_live_at', 'is', null).eq('status', 'active');
            break;
          case 'closed':
            query = query.eq('status', 'archived');
            break;
          // 'all' filter doesn't need additional conditions
        }

        const { data: conversations, error: conversationsError } = await query;
        if (conversationsError) throw conversationsError;

        let filteredConversations = conversations || [];

        // Apply tag filtering if tags are selected
        if (selectedTags?.length > 0) {
          filteredConversations = filteredConversations.filter(conv => {
            const convTags = conv.conversation_tags
              .map((ct: any) => ct.tags)
              .filter((tag: any) => tag !== null);
            return selectedTags.every(tagId => 
              convTags.some(tag => tag.id === tagId)
            );
          });
        }

        const processedConversations = filteredConversations.map(conv => ({
          ...conv,
          tags: conv.conversation_tags
            .map((ct: any) => ct.tags)
            .filter((tag: any) => tag !== null)
        }));

        return res.status(200).json({ conversations: processedConversations });

      case 'getTags':
        const { domainId: tagsDomainId } = payload;
        const { data: tags, error: tagsError } = await supabase
          .from('tags')
          .select('*')
          .eq('domain_id', tagsDomainId)
          .order('name');

        if (tagsError) throw tagsError;
        return res.status(200).json({ tags });

      case 'createMessage':
        const { message } = payload;
        const { data: newMessage, error: createError } = await supabase
          .from('messages')
          .insert([message])
          .select()
          .single();

        if (createError) throw createError;
        return res.status(200).json({ message: newMessage });

      case 'createConversation':
        const { conversation } = payload;
        const { data: newConversation, error: createConvError } = await supabase
          .from('conversations')
          .insert([conversation])
          .select()
          .single();

        if (createConvError) throw createConvError;
        return res.status(200).json({ conversation: newConversation });

      case 'updateConversation':
        const { conversation: convUpdate } = payload;
        const { data: updatedConversation, error: updateError } = await supabase
          .from('conversations')
          .update(convUpdate)
          .eq('id', convUpdate.id)
          .select()
          .single();

        if (updateError) throw updateError;
        return res.status(200).json({ conversation: updatedConversation });

      case 'addTag':
        const { conversationId: tagConvId, tagId } = payload;
        const { error: addTagError } = await supabase
          .from('conversation_tags')
          .insert({ conversation_id: tagConvId, tag_id: tagId });

        if (addTagError) throw addTagError;
        return res.status(200).json({ success: true });

      case 'removeTag':
        const { conversationId: removeConvId, tagId: removeTagId } = payload;
        const { error: removeTagError } = await supabase
          .from('conversation_tags')
          .delete()
          .eq('conversation_id', removeConvId)
          .eq('tag_id', removeTagId);

        if (removeTagError) throw removeTagError;
        return res.status(200).json({ success: true });

      case 'createTag':
        const { name, color, domainId: createTagDomainId } = payload;
        const { data: newTag, error: createTagError } = await supabase
          .from('tags')
          .insert([{ name, color, domain_id: createTagDomainId }])
          .select()
          .single();

        if (createTagError) throw createTagError;
        return res.status(200).json({ tag: newTag });

      case 'deleteTag':
        const { tagId: deleteTagId } = payload;
        const { error: deleteTagError } = await supabase
          .from('tags')
          .delete()
          .eq('id', deleteTagId);

        if (deleteTagError) throw deleteTagError;
        return res.status(200).json({ success: true });

      default:
        return res.status(400).json({ error: 'Invalid action' });
    }
  } catch (error: any) {
    console.error('API error:', error);
    return res.status(500).json({ error: error.message });
  }
}
