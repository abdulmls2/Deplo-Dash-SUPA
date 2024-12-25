import { createClient } from '@supabase/supabase-js';
import type { VercelRequest, VercelResponse } from '@vercel/node';

// Initialize Supabase client
const supabase = createClient(
  process.env.VITE_SUPABASE_URL || '',
  process.env.VITE_SUPABASE_SERVICE_KEY || ''  // Using service key for admin access
);

// Enable CORS middleware
const cors = async (req: VercelRequest, res: VercelResponse) => {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return true;
  }
  return false;
};

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  try {
    // Handle CORS
    if (await cors(req, res)) return;

    // Validate Supabase credentials
    if (!process.env.VITE_SUPABASE_URL || !process.env.VITE_SUPABASE_SERVICE_KEY) {
      console.error('Supabase credentials are not set');
      return res.status(500).json({ error: 'Server configuration error' });
    }

    const { action, payload, domainId } = req.body;

    if (!action || !domainId) {
      return res.status(400).json({ error: 'Missing required parameters' });
    }

    // Handle different actions
    switch (action) {
      case 'getConfig':
        const { data: config, error: configError } = await supabase
          .from('domains')
          .select('chatbot_name, greeting_message, color, header_text_color')
          .eq('id', domainId)
          .single();

        if (configError) throw configError;
        return res.status(200).json({
          chatbotName: config.chatbot_name,
          greetingMessage: config.greeting_message,
          color: config.color,
          headerTextColor: config.header_text_color
        });

      case 'getMessages':
        const { conversationId } = payload;
        if (!conversationId) {
          return res.status(400).json({ error: 'Missing conversationId' });
        }
        
        const { data: messages, error: messagesError } = await supabase
          .from('messages')
          .select('*')
          .eq('conversation_id', conversationId)
          .eq('domain_id', domainId)
          .order('created_at', { ascending: true });

        if (messagesError) throw messagesError;
        return res.status(200).json({ messages });

      case 'sendMessage':
        const { message, sessionId, conversationId: msgConvId } = payload;
        if (!message || !sessionId) {
          return res.status(400).json({ error: 'Missing message or sessionId' });
        }

        const { data: newMessage, error: sendError } = await supabase
          .from('messages')
          .insert([{
            content: message,
            sender_type: 'user',
            conversation_id: msgConvId,
            domain_id: domainId,
            session_id: sessionId
          }])
          .select()
          .single();

        if (sendError) throw sendError;
        return res.status(200).json({ message: newMessage });

      case 'getConversations':
        const { data: conversations, error: convoError } = await supabase
          .from('conversations')
          .select('*')
          .eq('domain_id', domainId)
          .eq('status', 'active')
          .order('last_message_at', { ascending: false });

        if (convoError) throw convoError;
        return res.status(200).json({ conversations });

      case 'createConversation':
        const { data: newConvo, error: createError } = await supabase
          .from('conversations')
          .insert([{
            domain_id: domainId,
            status: 'active'
          }])
          .select()
          .single();

        if (createError) throw createError;
        return res.status(200).json({ conversation: newConvo });

      case 'updateConversation':
        const { conversationId: updateConvId, updates } = payload;
        if (!updateConvId || !updates) {
          return res.status(400).json({ error: 'Missing conversationId or updates' });
        }

        const { data: updatedConvo, error: updateError } = await supabase
          .from('conversations')
          .update(updates)
          .eq('id', updateConvId)
          .eq('domain_id', domainId)
          .select()
          .single();

        if (updateError) throw updateError;
        return res.status(200).json({ conversation: updatedConvo });

      default:
        return res.status(400).json({ error: 'Invalid action' });
    }
  } catch (error: any) {
    console.error('Error in widget API handler:', error);
    return res.status(500).json({ 
      error: 'Internal server error',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
}
