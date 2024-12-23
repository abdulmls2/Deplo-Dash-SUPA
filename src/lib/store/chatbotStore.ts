import { create } from 'zustand';
import { Database } from '../database.types';
import { toast } from 'react-hot-toast';
import { generateBotResponse } from '../openai';
import { createMessage } from '../supabase';

type Message = Database['public']['Tables']['messages']['Row'];

interface ChatbotStore {
  isLoading: boolean;
  error: string | null;
  sendMessage: (content: string, conversationId: string) => Promise<void>;
}

export const useChatbotStore = create<ChatbotStore>((set, get) => ({
  isLoading: false,
  error: null,

  sendMessage: async (content: string, conversationId: string) => {
    set({ isLoading: true, error: null });
    try {
      // Always send as user message with null user_id to indicate it's from the widget
      console.log('Sending user message from widget:', content);
      const messageData = {
        conversation_id: conversationId,
        content,
        sender_type: 'user' as const,
        user_id: null,
        created_at: new Date().toISOString()
      };

      // Create user message using API
      const userMessage = await createMessage(messageData);
      
      // Generate bot response
      const botResponse = await generateBotResponse(content, conversationId);
      
      // Create bot message using API
      await createMessage({
        conversation_id: conversationId,
        content: botResponse,
        sender_type: 'bot' as const,
        user_id: null,
        created_at: new Date().toISOString()
      });

    } catch (error) {
      console.error('Error in sendMessage:', error);
      set({ error: 'Failed to send message' });
      toast.error('Failed to send message');
    } finally {
      set({ isLoading: false });
    }
  }
}));
