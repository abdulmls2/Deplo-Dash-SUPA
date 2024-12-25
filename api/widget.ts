import { createClient } from '@supabase/supabase-js';
import type { VercelRequest, VercelResponse } from '@vercel/node';

// Initialize Supabase client
const supabase = createClient(
  process.env.SUPABASE_URL || '',
  process.env.SUPABASE_SERVICE_KEY || ''  // Using service key for admin access
);

// Enable CORS middleware
const cors = async (req: VercelRequest, res: VercelResponse) => {
  // Get the origin from the request headers
  const origin = req.headers.origin || '';
  
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', origin || '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', 'true');

  // Handle preflight request
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
    // Handle CORS preflight
    if (await cors(req, res)) return;

    // Log request details
    console.log('Request body:', req.body);
    console.log('Environment variables:', {
      hasSupabaseUrl: !!process.env.SUPABASE_URL,
      hasSupabaseServiceKey: !!process.env.SUPABASE_SERVICE_KEY
    });

    // Validate Supabase credentials
    if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_KEY) {
      console.error('Supabase credentials are not set');
      return res.status(500).json({ error: 'Server configuration error' });
    }

    const { action, payload, domainId } = req.body;
    console.log('Parsed request:', { action, domainId });

    if (!action || !domainId) {
      return res.status(400).json({ error: 'Missing required parameters' });
    }

    // Handle different actions
    switch (action) {
      case 'getConfig':
        try {
          const { data: config, error: configError } = await supabase
            .from('domains')
            .select('chatbot_name, greeting_message, color, header_text_color')
            .eq('id', domainId)
            .single();

          if (configError) {
            console.error('Supabase error:', configError);
            return res.status(500).json({ error: 'Database error', details: configError.message });
          }
          
          if (!config) {
            return res.status(404).json({ error: 'Domain not found' });
          }

          return res.status(200).json({
            chatbotName: config.chatbot_name,
            greetingMessage: config.greeting_message,
            color: config.color,
            headerTextColor: config.header_text_color
          });
        } catch (error) {
          console.error('Error in getConfig:', error);
          return res.status(500).json({ error: 'Internal server error', details: error.message });
        }

      case 'getMessages':
        try {
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

          if (messagesError) {
            console.error('Supabase error:', messagesError);
            return res.status(500).json({ error: 'Database error', details: messagesError.message });
          }
          
          if (!messages) {
            return res.status(404).json({ error: 'Messages not found' });
          }

          return res.status(200).json({ messages });
        } catch (error) {
          console.error('Error in getMessages:', error);
          return res.status(500).json({ error: 'Internal server error', details: error.message });
        }

      case 'sendMessage':
        try {
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

          if (sendError) {
            console.error('Supabase error:', sendError);
            return res.status(500).json({ error: 'Database error', details: sendError.message });
          }
          
          if (!newMessage) {
            return res.status(404).json({ error: 'Message not sent' });
          }

          return res.status(200).json({ message: newMessage });
        } catch (error) {
          console.error('Error in sendMessage:', error);
          return res.status(500).json({ error: 'Internal server error', details: error.message });
        }

      case 'getConversations':
        try {
          const { data: conversations, error: convoError } = await supabase
            .from('conversations')
            .select('*')
            .eq('domain_id', domainId)
            .eq('status', 'active')
            .order('last_message_at', { ascending: false });

          if (convoError) {
            console.error('Supabase error:', convoError);
            return res.status(500).json({ error: 'Database error', details: convoError.message });
          }
          
          if (!conversations) {
            return res.status(404).json({ error: 'Conversations not found' });
          }

          return res.status(200).json({ conversations });
        } catch (error) {
          console.error('Error in getConversations:', error);
          return res.status(500).json({ error: 'Internal server error', details: error.message });
        }

      case 'createConversation':
        try {
          const { data: newConvo, error: createError } = await supabase
            .from('conversations')
            .insert([{
              domain_id: domainId,
              status: 'active'
            }])
            .select()
            .single();

          if (createError) {
            console.error('Supabase error:', createError);
            return res.status(500).json({ error: 'Database error', details: createError.message });
          }
          
          if (!newConvo) {
            return res.status(404).json({ error: 'Conversation not created' });
          }

          return res.status(200).json({ conversation: newConvo });
        } catch (error) {
          console.error('Error in createConversation:', error);
          return res.status(500).json({ error: 'Internal server error', details: error.message });
        }

      case 'updateConversation':
        try {
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

          if (updateError) {
            console.error('Supabase error:', updateError);
            return res.status(500).json({ error: 'Database error', details: updateError.message });
          }
          
          if (!updatedConvo) {
            return res.status(404).json({ error: 'Conversation not updated' });
          }

          return res.status(200).json({ conversation: updatedConvo });
        } catch (error) {
          console.error('Error in updateConversation:', error);
          return res.status(500).json({ error: 'Internal server error', details: error.message });
        }

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
