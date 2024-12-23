// API functions for Supabase operations
const API_URL = 'https://deplo-dash.vercel.app/api/supabase';

interface Message {
  id: string;
  content: string;
  sender_type: 'user' | 'bot';
  created_at: string;
  conversation_id: string;
}

interface Conversation {
  id: string;
  created_at: string;
  status: 'active' | 'archived';
  last_message_at: string;
  rating?: 'bad' | 'ok' | 'good';
  session_id: string;
}

export async function getMessages(conversationId: string): Promise<Message[]> {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      action: 'getMessages',
      payload: { conversationId }
    }),
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch messages: ${response.statusText}`);
  }

  const data = await response.json();
  return data.messages;
}

export async function getConversations(sessionId: string): Promise<Conversation[]> {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      action: 'getConversations',
      payload: { sessionId }
    }),
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch conversations: ${response.statusText}`);
  }

  const data = await response.json();
  return data.conversations;
}

export async function createMessage(message: Omit<Message, 'id'>): Promise<Message> {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      action: 'createMessage',
      payload: { message }
    }),
  });

  if (!response.ok) {
    throw new Error(`Failed to create message: ${response.statusText}`);
  }

  const data = await response.json();
  return data.message;
}

export async function updateConversation(
  id: string,
  updates: Partial<Conversation>
): Promise<Conversation> {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      action: 'updateConversation',
      payload: {
        conversation: { id, ...updates }
      }
    }),
  });

  if (!response.ok) {
    throw new Error(`Failed to update conversation: ${response.statusText}`);
  }

  const data = await response.json();
  return data.conversation;
}