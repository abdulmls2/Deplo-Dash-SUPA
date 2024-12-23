import React, { useEffect, useRef } from 'react';
import { useConversationStore } from '../../lib/store/conversationStore';
import { format } from 'date-fns';
import { Archive } from 'lucide-react';

interface MessageListProps {
  conversationId: string;
}

export default function MessageList({ conversationId }: MessageListProps) {
  const { messages, fetchMessages, isLoading, currentConversation } = useConversationStore();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetchMessages(conversationId);

    // Set up WebSocket connection for real-time updates
    const ws = new WebSocket(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/realtime/v1/websocket`);
    
    ws.onopen = () => {
      ws.send(JSON.stringify({
        type: 'subscribe',
        table: 'messages',
        schema: 'public',
        filter: `conversation_id=eq.${conversationId}`,
      }));
    };

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.type === 'INSERT') {
        fetchMessages(conversationId);
      }
    };

    return () => {
      ws.close();
    };
  }, [conversationId, fetchMessages]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  if (isLoading && messages.length === 0) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`flex flex-col ${
            message.sender_type === 'user' ? 'items-start' : 'items-end'
          }`}
        >
          <div
            className={`max-w-[70%] rounded-lg p-3 ${
              message.sender_type === 'user'
                ? 'bg-gray-100 dark:bg-gray-800'
                : 'bg-gray-900 text-white'
            }`}
          >
            <p className="whitespace-pre-wrap">{message.content}</p>
            <div
              className={`text-xs mt-1 ${
                message.sender_type === 'user'
                  ? 'text-gray-500 dark:text-gray-400'
                  : 'text-gray-100'
              }`}
            >
              {format(new Date(message.created_at), 'h:mm a')}
            </div>
          </div>
        </div>
      ))}
      <div ref={messagesEndRef} />

      {currentConversation?.status === 'archived' && (
        <div className="flex items-center justify-center gap-2 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-600 dark:text-gray-300">
          <Archive className="w-4 h-4" />
          <span>This conversation has been archived</span>
        </div>
      )}
    </div>
  );
}