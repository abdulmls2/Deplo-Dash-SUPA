import React from 'react';
import { create } from 'zustand';
import { Database } from '../database.types';
import { toast } from 'react-hot-toast';
import { UserRound } from 'lucide-react';

type Conversation = Database['public']['Tables']['conversations']['Row'];
type Message = Database['public']['Tables']['messages']['Row'];
type Tag = Database['public']['Tables']['tags']['Row'];

interface ConversationStore {
  conversations: (Conversation & { tags?: Tag[] })[];
  currentConversation: (Conversation & { tags?: Tag[] }) | null;
  messages: Message[];
  tags: Tag[];
  selectedTags: string[];
  isLoading: boolean;
  error: string | null;
  currentDomainId: string | null;
  setCurrentDomainId: (domainId: string | null) => void;
  fetchConversations: () => Promise<void>;
  fetchMessages: (conversationId: string) => Promise<void>;
  fetchTags: () => Promise<void>;
  sendMessage: (content: string, conversationId: string) => Promise<void>;
  createConversation: (title?: string) => Promise<string>;
  updateConversation: (id: string, updates: Partial<Conversation>) => Promise<void>;
  addTag: (conversationId: string, tagId: string) => Promise<void>;
  removeTag: (conversationId: string, tagId: string) => Promise<void>;
  setSelectedTags: (tags: string[]) => void;
  fetchConversationTags: (conversationId: string) => Promise<Tag[]>;
  createTag: (name: string, color: string) => Promise<void>;
  deleteTag: (id: string) => Promise<void>;
  sortOrder: 'newest' | 'oldest';
  setSortOrder: (order: 'newest' | 'oldest') => void;
  activeFilter: 'active' | 'all' | 'urgent' | 'closed';
  setActiveFilter: (filter: 'active' | 'all' | 'urgent' | 'closed') => void;
  toggleLiveMode: (conversationId: string) => Promise<void>;
  markConversationAsRead: (conversationId: string) => Promise<void>;
}

export const useConversationStore = create<ConversationStore>((set, get) => ({
  conversations: [],
  currentConversation: null,
  messages: [],
  tags: [],
  selectedTags: [],
  isLoading: false,
  error: null,
  currentDomainId: null,
  sortOrder: 'newest',
  activeFilter: 'active',

  setCurrentDomainId: (domainId: string | null) => set({ currentDomainId: domainId }),

  fetchConversations: async () => {
    const { currentDomainId, selectedTags, sortOrder, activeFilter } = get();
    if (!currentDomainId) return;

    try {
      set({ isLoading: true });

      const response = await fetch('/api/supabase', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: 'getConversations',
          payload: {
            domainId: currentDomainId,
            selectedTags,
            sortOrder,
            activeFilter
          }
        }),
      });

      const { conversations } = await response.json();
      set({ conversations, isLoading: false });
    } catch (error) {
      console.error('Error fetching conversations:', error);
      set({ error: 'Failed to load conversations', isLoading: false });
    }
  },

  fetchMessages: async (conversationId: string) => {
    try {
      set({ isLoading: true });
      const response = await fetch('/api/supabase', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: 'getMessages',
          payload: { conversationId }
        }),
      });

      const { messages } = await response.json();
      set({ messages, isLoading: false });
    } catch (error) {
      console.error('Error fetching messages:', error);
      set({ error: 'Failed to load messages', isLoading: false });
    }
  },

  fetchTags: async () => {
    const { currentDomainId } = get();
    if (!currentDomainId) return;

    try {
      set({ isLoading: true });
      const response = await fetch('/api/supabase', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: 'getTags',
          payload: { domainId: currentDomainId }
        }),
      });

      const { tags } = await response.json();
      set({ tags, isLoading: false });
    } catch (error) {
      console.error('Error fetching tags:', error);
      set({ error: 'Failed to load tags', isLoading: false });
    }
  },

  createConversation: async (title?: string) => {
    const { currentDomainId } = get();
    if (!currentDomainId) throw new Error('No domain ID set');

    try {
      set({ isLoading: true });
      const response = await fetch('/api/supabase', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: 'createConversation',
          payload: {
            conversation: {
              domain_id: currentDomainId,
              title: title || 'New Conversation',
              status: 'active',
              last_message_at: new Date().toISOString()
            }
          }
        }),
      });

      const { conversation } = await response.json();
      set(state => ({
        conversations: [conversation, ...state.conversations],
        currentConversation: conversation,
        isLoading: false
      }));

      return conversation.id;
    } catch (error) {
      console.error('Error creating conversation:', error);
      set({ error: 'Failed to create conversation', isLoading: false });
      throw error;
    }
  },

  updateConversation: async (id: string, updates: Partial<Conversation>) => {
    try {
      set({ isLoading: true });
      const response = await fetch('/api/supabase', {
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

      const { conversation } = await response.json();
      set(state => ({
        conversations: state.conversations.map(conv =>
          conv.id === id ? { ...conv, ...conversation } : conv
        ),
        currentConversation: state.currentConversation?.id === id
          ? { ...state.currentConversation, ...conversation }
          : state.currentConversation,
        isLoading: false
      }));
    } catch (error) {
      console.error('Error updating conversation:', error);
      set({ error: 'Failed to update conversation', isLoading: false });
    }
  },

  setSelectedTags: (tags: string[]) => set({ selectedTags: tags }),
  setSortOrder: (order: 'newest' | 'oldest') => set({ sortOrder: order }),
  setActiveFilter: (filter: 'active' | 'all' | 'urgent' | 'closed') => set({ activeFilter: filter }),

  toggleLiveMode: async (conversationId: string) => {
    const { currentConversation } = get();
    if (!currentConversation) return;

    try {
      await get().updateConversation(conversationId, {
        live_mode: !currentConversation.live_mode
      });
    } catch (error) {
      console.error('Error toggling live mode:', error);
      set({ error: 'Failed to toggle live mode' });
    }
  },

  markConversationAsRead: async (conversationId: string) => {
    try {
      await get().updateConversation(conversationId, {
        unread: false,
        last_read_at: new Date().toISOString()
      });
    } catch (error) {
      console.error('Error marking conversation as read:', error);
      set({ error: 'Failed to mark conversation as read' });
    }
  }
}));