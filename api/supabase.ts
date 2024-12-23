import { createClient } from '@supabase/supabase-js';
import type { Request, Response } from 'express';

// Initialize Supabase client (server-side only)
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.SUPABASE_SERVICE_KEY || ''
);

export async function handler(req: Request, res: Response) {
  const { action, payload } = req.body;

  try {
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

      case 'getDomains':
        const { data: { user }, error: userError } = await supabase.auth.getUser();
        if (userError) throw userError;

        const { data: domains, error: domainsError } = await supabase
          .from('domains')
          .select('*')
          .eq('profile_id', user.id)
          .order('created_at', { ascending: true });

        if (domainsError) throw domainsError;
        return res.status(200).json({ domains });

      case 'updateDomain':
        const { data: updatedDomain, error: updateDomainError } = await supabase
          .from('domains')
          .update({ 
            name: payload.name, 
            updated_at: new Date().toISOString() 
          })
          .eq('id', payload.id)
          .select()
          .single();

        if (updateDomainError) throw updateDomainError;
        return res.status(200).json({ domain: updatedDomain });

      case 'getLatestMessage':
        const { data: latestMessage, error: latestMessageError } = await supabase
          .from('messages')
          .select('content')
          .eq('conversation_id', payload.conversationId)
          .order('created_at', { ascending: false })
          .limit(1)
          .single();

        if (latestMessageError) throw latestMessageError;
        return res.json({ message: latestMessage });

      case 'getProfile':
        const { data: { user: currentUser }, error: userError } = await supabase.auth.getUser();
        if (userError) throw userError;

        const { data: profile, error: profileError } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', currentUser.id)
          .single();

        if (profileError) throw profileError;
        return res.json({ user: currentUser, profile });

      case 'updateProfile':
        const { data: { user: authUser }, error: authError } = await supabase.auth.getUser();
        if (authError) throw authError;

        const { data: updatedProfile, error: updateProfileError } = await supabase
          .from('profiles')
          .update({
            name: payload.name,
            username: payload.username,
            company: payload.company,
            updated_at: new Date().toISOString()
          })
          .eq('id', authUser.id)
          .select()
          .single();

        if (updateProfileError) throw updateProfileError;
        return res.json({ profile: updatedProfile });

      case 'uploadAvatar':
        const { data: { user: avatarUser }, error: avatarAuthError } = await supabase.auth.getUser();
        if (avatarAuthError) throw avatarAuthError;

        const file = req.body.file;
        const fileExt = file.name.split('.').pop();
        const fileName = `${avatarUser.id}-${Date.now()}.${fileExt}`;

        const { data: uploadData, error: uploadError } = await supabase.storage
          .from('avatars')
          .upload(fileName, file);

        if (uploadError) throw uploadError;

        const { data: { publicUrl } } = supabase.storage
          .from('avatars')
          .getPublicUrl(fileName);

        const { data: profileWithAvatar, error: avatarUpdateError } = await supabase
          .from('profiles')
          .update({ avatar_url: publicUrl })
          .eq('id', avatarUser.id)
          .select()
          .single();

        if (avatarUpdateError) throw avatarUpdateError;
        return res.json({ avatarUrl: publicUrl });

      case 'getFAQs':
        const { data: faqs, error: faqsError } = await supabase
          .from('faqs')
          .select('*')
          .eq('domain_id', payload.domainId)
          .order('created_at', { ascending: true });

        if (faqsError) throw faqsError;
        return res.json({ faqs });

      case 'addFAQ':
        const { data: newFAQ, error: addFAQError } = await supabase
          .from('faqs')
          .insert({
            question: payload.question,
            answer: payload.answer,
            domain_id: payload.domainId
          })
          .select()
          .single();

        if (addFAQError) throw addFAQError;
        return res.json({ faq: newFAQ });

      case 'deleteFAQ':
        const { error: deleteFAQError } = await supabase
          .from('faqs')
          .delete()
          .eq('id', payload.faqId);

        if (deleteFAQError) throw deleteFAQError;
        return res.json({ success: true });

      case 'getDomainSettings':
        const { data: settings, error: settingsError } = await supabase
          .from('domain_settings')
          .select('*')
          .eq('domain_id', payload.domainId)
          .single();

        if (settingsError && settingsError.code !== 'PGRST116') throw settingsError;
        return res.json({ settings });

      case 'saveDomainSettings':
        const { error: saveSettingsError } = await supabase
          .from('domain_settings')
          .upsert({
            domain_id: payload.domainId,
            chatbot_name: payload.chatbotName,
            greeting_message: payload.greetingMessage,
            color: payload.color,
            header_text_color: payload.headerTextColor,
            primary_color: payload.primaryColor
          });

        if (saveSettingsError) throw saveSettingsError;
        return res.json({ success: true });

      case 'getTrainingData':
        const { data: trainingData, error: trainingError } = await supabase
          .from('training_data')
          .select('*')
          .eq('domain_id', payload.domainId);

        if (trainingError) throw trainingError;
        return res.json({ trainingData });

      case 'addTrainingData':
        const { data: newTrainingData, error: addTrainingError } = await supabase
          .from('training_data')
          .insert({
            content: payload.content,
            domain_id: payload.domainId
          })
          .select()
          .single();

        if (addTrainingError) throw addTrainingError;
        return res.json({ trainingData: newTrainingData });

      case 'deleteTrainingData':
        const { error: deleteTrainingError } = await supabase
          .from('training_data')
          .delete()
          .eq('id', payload.trainingDataId);

        if (deleteTrainingError) throw deleteTrainingError;
        return res.json({ success: true });

      default:
        return res.status(400).json({ error: 'Invalid action' });
    }
  } catch (error) {
    console.error('Supabase API error:', error);
import { NextApiRequest, NextApiResponse } from 'next';
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
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { action, payload } = req.body;

  try {
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

      case 'getDomains':
        const { data: { user }, error: userError } = await supabase.auth.getUser();
        if (userError) throw userError;

        const { data: domains, error: domainsError } = await supabase
          .from('domains')
          .select('*')
          .eq('profile_id', user.id)
          .order('created_at', { ascending: true });

        if (domainsError) throw domainsError;
        return res.status(200).json({ domains });

      case 'updateDomain':
        const { data: updatedDomain, error: updateDomainError } = await supabase
          .from('domains')
          .update({ 
            name: payload.name, 
            updated_at: new Date().toISOString() 
          })
          .eq('id', payload.id)
          .select()
          .single();

        if (updateDomainError) throw updateDomainError;
        return res.status(200).json({ domain: updatedDomain });

      case 'getLatestMessage':
        const { data: latestMessage, error: latestMessageError } = await supabase
          .from('messages')
          .select('content')
          .eq('conversation_id', payload.conversationId)
          .order('created_at', { ascending: false })
          .limit(1)
          .single();

        if (latestMessageError) throw latestMessageError;
        return res.json({ message: latestMessage });

      case 'getProfile':
        const { data: { user: currentUser }, error: userError } = await supabase.auth.getUser();
        if (userError) throw userError;

        const { data: profile, error: profileError } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', currentUser.id)
          .single();

        if (profileError) throw profileError;
        return res.json({ user: currentUser, profile });

      case 'updateProfile':
        const { data: { user: authUser }, error: authError } = await supabase.auth.getUser();
        if (authError) throw authError;

        const { data: updatedProfile, error: updateProfileError } = await supabase
          .from('profiles')
          .update({
            name: payload.name,
            username: payload.username,
            company: payload.company,
            updated_at: new Date().toISOString()
          })
          .eq('id', authUser.id)
          .select()
          .single();

        if (updateProfileError) throw updateProfileError;
        return res.json({ profile: updatedProfile });

      case 'uploadAvatar':
        const { data: { user: avatarUser }, error: avatarAuthError } = await supabase.auth.getUser();
        if (avatarAuthError) throw avatarAuthError;

        const file = req.body.file;
        const fileExt = file.name.split('.').pop();
        const fileName = `${avatarUser.id}-${Date.now()}.${fileExt}`;

        const { data: uploadData, error: uploadError } = await supabase.storage
          .from('avatars')
          .upload(fileName, file);

        if (uploadError) throw uploadError;

        const { data: { publicUrl } } = supabase.storage
          .from('avatars')
          .getPublicUrl(fileName);

        const { data: profileWithAvatar, error: avatarUpdateError } = await supabase
          .from('profiles')
          .update({ avatar_url: publicUrl })
          .eq('id', avatarUser.id)
          .select()
          .single();

        if (avatarUpdateError) throw avatarUpdateError;
        return res.json({ avatarUrl: publicUrl });

      default:
        return res.status(400).json({ error: 'Invalid action' });
    }
  } catch (error: any) {
    console.error('API error:', error);
    return res.status(500).json({ error: error.message });
  }
}
