import { VercelRequest, VercelResponse } from '@vercel/node';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client with environment variables
const supabase = createClient(
  process.env.VITE_SUPABASE_URL || '',
  process.env.VITE_SUPABASE_ANON_KEY || ''
);

// Define allowed operations
type AllowedOperation = 'fetchMessages' | 'sendMessage' | 'createConversation' | 'fetchConversations' | 
  'updateConversation' | 'fetchConfig' | 'rateConversation' | 'requestLiveChat';

// Validate request operation
const isValidOperation = (operation: string): operation is AllowedOperation => {
  const allowedOperations: AllowedOperation[] = [
    'fetchMessages',
    'sendMessage',
    'createConversation',
    'fetchConversations',
    'updateConversation',
    'fetchConfig',
    'rateConversation',
    'requestLiveChat'
  ];
  return allowedOperations.includes(operation as AllowedOperation);
};

// Handle CORS
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

// Operation handlers
const operationHandlers = {
  async fetchMessages(conversationId: string) {
    const { data, error } = await supabase
      .from('messages')
      .select('*')
      .eq('conversation_id', conversationId)
      .order('created_at', { ascending: true });

    if (error) throw error;
    return data;
  },

  async sendMessage(content: string, conversationId: string, senderType: 'user' | 'bot') {
    const { data, error } = await supabase
      .from('messages')
      .insert({
        conversation_id: conversationId,
        content,
        sender_type: senderType
      })
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async createConversation(domainId: string, sessionId: string) {
    const { data, error } = await supabase
      .from('conversations')
      .insert({
        domain_id: domainId,
        session_id: sessionId,
        status: 'active',
        last_message_at: new Date().toISOString()
      })
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async updateConversation(conversationId: string, updates: any) {
    const { data, error } = await supabase
      .from('conversations')
      .update(updates)
      .eq('id', conversationId)
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async fetchConfig(domainId: string) {
    const { data, error } = await supabase
      .from('domain_settings')
      .select('*')
      .eq('domain_id', domainId)
      .single();

    if (error && error.code !== 'PGRST116') throw error;
    return data;
  },

  async rateConversation(conversationId: string, rating: 'bad' | 'ok' | 'good') {
    const { data, error } = await supabase
      .from('conversations')
      .update({ rating })
      .eq('id', conversationId)
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async requestLiveChat(conversationId: string) {
    const { data, error } = await supabase
      .from('conversations')
      .update({ 
        requested_live_at: new Date().toISOString() 
      })
      .eq('id', conversationId)
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async fetchConversations(sessionId: string) {
    const { data, error } = await supabase
      .from('conversations')
      .select('*')
      .eq('session_id', sessionId)
      .order('last_message_at', { ascending: false });

    if (error) throw error;
    return data;
  }
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    // Handle CORS
    if (await cors(req, res)) return;

    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method not allowed' });
    }

    const { operation, params } = req.body;

    if (!operation || !isValidOperation(operation)) {
      return res.status(400).json({ error: 'Invalid operation' });
    }

    if (!params) {
      return res.status(400).json({ error: 'Missing parameters' });
    }

    // Execute operation
    const result = await operationHandlers[operation](...Object.values(params));
    return res.status(200).json({ data: result });

  } catch (error: any) {
    console.error('Error in Supabase proxy:', error);
    return res.status(500).json({ 
      error: 'Internal server error',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
}