// API client for widget
const API_URL = 'https://deplo-dash-supa.vercel.app/api';

export const supabaseProxy = {
  async fetchMessages(conversationId: string) {
    const response = await fetch(`${API_URL}/supabase-proxy`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        operation: 'fetchMessages',
        params: { conversationId }
      })
    });

    if (!response.ok) {
      throw new Error('Failed to fetch messages');
    }

    const { data } = await response.json();
    return data;
  },

  async sendMessage(content: string, conversationId: string, senderType: 'user' | 'bot') {
    const response = await fetch(`${API_URL}/supabase-proxy`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        operation: 'sendMessage',
        params: { content, conversationId, senderType }
      })
    });

    if (!response.ok) {
      throw new Error('Failed to send message');
    }

    const { data } = await response.json();
    return data;
  },

  async createConversation(domainId: string, sessionId: string) {
    const response = await fetch(`${API_URL}/supabase-proxy`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        operation: 'createConversation',
        params: { domainId, sessionId }
      })
    });

    if (!response.ok) {
      throw new Error('Failed to create conversation');
    }

    const { data } = await response.json();
    return data;
  },

  async fetchConversations(sessionId: string) {
    const response = await fetch(`${API_URL}/supabase-proxy`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        operation: 'fetchConversations',
        params: { sessionId }
      })
    });

    if (!response.ok) {
      throw new Error('Failed to fetch conversations');
    }

    const { data } = await response.json();
    return data;
  },

  async updateConversation(conversationId: string, updates: any) {
    const response = await fetch(`${API_URL}/supabase-proxy`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        operation: 'updateConversation',
        params: { conversationId, updates }
      })
    });

    if (!response.ok) throw new Error('Failed to update conversation');
    const { data } = await response.json();
    return data;
  },

  async fetchConfig(domainId: string) {
    const response = await fetch(`${API_URL}/supabase-proxy`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        operation: 'fetchConfig',
        params: { domainId }
      })
    });

    if (!response.ok) throw new Error('Failed to fetch config');
    const { data } = await response.json();
    return data;
  },

  async rateConversation(conversationId: string, rating: 'bad' | 'ok' | 'good') {
    const response = await fetch(`${API_URL}/supabase-proxy`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        operation: 'rateConversation',
        params: { conversationId, rating }
      })
    });

    if (!response.ok) throw new Error('Failed to rate conversation');
    const { data } = await response.json();
    return data;
  },

  async requestLiveChat(conversationId: string) {
    const response = await fetch(`${API_URL}/supabase-proxy`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        operation: 'requestLiveChat',
        params: { conversationId }
      })
    });

    if (!response.ok) throw new Error('Failed to request live chat');
    const { data } = await response.json();
    return data;
  }
};