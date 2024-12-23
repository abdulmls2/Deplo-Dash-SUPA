import React, { useEffect, useState } from 'react';
import { User, Tag } from 'lucide-react';
import { useConversationStore } from '../../lib/store/conversationStore';
import { useDomain } from '../../context/DomainContext';
import { formatDistanceToNow } from 'date-fns';

interface ConversationListProps {
  onSelectConversation: (conversationId: string) => void;
  selectedId?: string | null;
}

export default function ConversationList({ onSelectConversation, selectedId }: ConversationListProps) {
  const { 
    conversations, 
    fetchConversations, 
    isLoading, 
    setCurrentDomainId,
    markConversationAsRead 
  } = useConversationStore();
  const { currentDomain } = useDomain();
  const [latestMessages, setLatestMessages] = useState<{[key: string]: string}>({});
  const [currentTime, setCurrentTime] = useState(Date.now());

  useEffect(() => {
    const fetchLatestMessages = async () => {
      const messages: {[key: string]: string} = {};
      for (const conversation of conversations) {
        const response = await fetch('/api/supabase', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            action: 'getLatestMessage',
            payload: { conversationId: conversation.id }
          })
        });

        const data = await response.json();
        if (data.message) {
          messages[conversation.id] = data.message.content;
        }
      }
      setLatestMessages(messages);
    };

    if (conversations.length > 0) {
      fetchLatestMessages();
    }
  }, [conversations]);

  useEffect(() => {
    if (currentDomain) {
      setCurrentDomainId(currentDomain.id);
      fetchConversations();
    }
  }, [currentDomain]);

  // Update current time every minute
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(Date.now()), 60000);
    return () => clearInterval(timer);
  }, []);

  const handleConversationClick = (conversationId: string) => {
    onSelectConversation(conversationId);
    markConversationAsRead(conversationId);
  };

  if (isLoading) {
    return <div className="p-4">Loading conversations...</div>;
  }

  if (!conversations.length) {
    return (
      <div className="flex flex-col items-center justify-center h-full p-4 text-gray-500">
        <p>No conversations yet</p>
      </div>
    );
  }

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      {conversations.map((conversation) => (
        <div
          key={conversation.id}
          className={`p-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 ${
            selectedId === conversation.id ? 'bg-gray-100 dark:bg-gray-800' : ''
          }`}
          onClick={() => handleConversationClick(conversation.id)}
        >
          <div className="flex items-center justify-between mb-1">
            <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100">
              {conversation.title || 'Untitled Conversation'}
            </h3>
            <span className="text-xs text-gray-500">
              {formatDistanceToNow(new Date(conversation.last_message_at || conversation.created_at), { addSuffix: true })}
            </span>
          </div>
          
          <div className="flex items-center text-sm text-gray-500 space-x-2">
            <User className="w-4 h-4" />
            <span>{conversation.user_name || 'Anonymous'}</span>
          </div>

          {latestMessages[conversation.id] && (
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
              {latestMessages[conversation.id]}
            </p>
          )}

          {conversation.tags && conversation.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {conversation.tags.map((tag, index) => (
                <div
                  key={index}
                  className="flex items-center px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
                >
                  <Tag className="w-3 h-3 mr-1" />
                  {tag}
                </div>
              ))}
            </div>
          )}

          {!conversation.is_read && (
            <div className="mt-2">
              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
                New
              </span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}