import React, { useState, useEffect, useRef } from 'react';
import { Send, Paperclip, X, Archive, MessageSquare, MessageSquarePlus, ChevronLeft, RefreshCw, ThumbsDown, Minus, ThumbsUp, UserRound, Hourglass } from 'lucide-react';
import { getMessages, getConversations, updateConversation, createMessage } from '../lib/supabase';
import { format } from 'date-fns';
import { useConversationStore } from '../lib/store/conversationStore';
import { useChatbotStore } from '../lib/store/chatbotStore';

const SESSION_KEY = 'chatbot_session_id';
const CONVERSATION_EXPIRY_DAYS = 180; // 6 months default expiry

interface ChatbotConfig {
  chatbotName: string;
  greetingMessage: string;
  color: string;
  headerTextColor: string;
}

interface Message {
  id: string;
  content: string;
  sender_type: 'user' | 'bot';
  created_at: string;
}

interface Conversation {
  id: string;
  created_at: string;
  status: 'active' | 'archived';
  last_message_at: string;
  rating?: 'bad' | 'ok' | 'good';
}

export default function ChatbotWidget({ domainId }: { domainId: string }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [view, setView] = useState<'history' | 'chat'>('history');
  const [conversationId, setConversationId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [processedMessageIds] = useState(new Set<string>());
  const [error, setError] = useState<string | null>(null);
  const [sessionId, setSessionId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [isArchived, setIsArchived] = useState(false);
  const notificationSound = useRef<HTMLAudioElement | null>(null);
  const { sendMessage: chatbotSendMessage } = useChatbotStore();
  const [isRequestingLiveChat, setIsRequestingLiveChat] = useState(false);

  const isMessageDuplicate = (newMsg: Message, existingMessages: Message[]) => {
    return existingMessages.some(msg => 
      msg.id === newMsg.id ||
      (msg.id.startsWith('temp-') && msg.content === newMsg.content && msg.sender_type === newMsg.sender_type) ||
      (msg.content === newMsg.content && 
       msg.sender_type === newMsg.sender_type && 
       Math.abs(new Date(msg.created_at).getTime() - new Date(newMsg.created_at).getTime()) < 2000)
    );
  };

  const fetchMessages = async (convId: string) => {
    try {
      const messagesData = await getMessages(convId);
      setMessages(messagesData);
    } catch (error) {
      console.error('Error fetching messages:', error);
      setError('Failed to load messages');
    }
  };

  const fetchConversations = async () => {
    if (!sessionId) return;
    try {
      const conversationsData = await getConversations(sessionId);
      setConversations(conversationsData);
    } catch (error) {
      console.error('Error fetching conversations:', error);
      setError('Failed to load conversations');
    }
  };

  const handleArchive = async () => {
    if (!conversationId) return;
    try {
      await updateConversation(conversationId, {
        status: 'archived',
        last_message_at: new Date().toISOString()
      });
      setIsArchived(true);
      await fetchConversations();
    } catch (error) {
      console.error('Error archiving conversation:', error);
      setError('Failed to archive conversation');
    }
  };

  const handleRating = async (rating: 'bad' | 'ok' | 'good') => {
    if (!conversationId) return;
    try {
      await updateConversation(conversationId, {
        rating,
        last_message_at: new Date().toISOString()
      });
      await fetchConversations();
    } catch (error) {
      console.error('Error updating rating:', error);
      setError('Failed to update rating');
    }
  };

  useEffect(() => {
    if (isExpanded && (messages.length > 0 || isArchived)) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isExpanded, isArchived]);

  const handleStartNewConversation = async () => {
    setMessages([]);
    setConversationId(null);
    setIsArchived(false);
    setConversationRating(null);  // Reset conversation rating
    setIsRequestingLiveChat(false); // Reset live chat request state
    setView('chat');
  };

  const handleBackToHistory = () => {
    setView('history');
    setMessages([]);
    setConversationId(null);
    setIsArchived(false);
  };

  const handleSelectConversation = async (conversation: Conversation) => {
    try {
      setConversationId(conversation.id);
      setIsArchived(conversation.status === 'archived');
      setConversationRating(null);
      setIsRequestingLiveChat(false); // Reset live chat request state
      
      await fetchMessages(conversation.id);
      
      if (conversation.status === 'archived') {
        setConversationRating(conversation.rating || null);
      }
      
      setView('chat');
    } catch (error) {
      console.error('Error loading conversation:', error);
    }
  };

  useEffect(() => {
    if (sessionId) {
      fetchConversations();
    }
  }, [sessionId]);

  const createConversation = async () => {
    try {
      // Get or create anonymous user
      const response = await fetch('/api/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ action: 'signInAnonymously' }),
      });
      
      const { user } = await response.json();
      if (!user) throw new Error('Failed to create anonymous session');

      // Create conversation
      const conversationData = {
        domain_id: domainId,
        user_id: user.id,
        session_id: sessionId,
        last_message_at: new Date().toISOString(),
        status: 'active'
      };

      const createResponse = await fetch('/api/supabase', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: 'createConversation',
          payload: { conversation: conversationData }
        }),
      });

      const { conversation } = await createResponse.json();
      return conversation.id;
    } catch (error) {
      console.error('Error creating conversation:', error);
      throw error;
    }
  };

  const fetchConfig = async () => {
    try {
      const response = await fetch('/api/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: 'getDomainSettings',
          domainId
        }),
      });

      const { settings } = await response.json();
      
      if (settings) {
        setConfig({
          chatbotName: settings.chatbot_name,
          greetingMessage: settings.greeting_message || 'Hello! How can I help you today?',
          color: settings.primary_color || '#FF6B00',
          headerTextColor: settings.header_text_color || '#000000'
        });
      } else {
        setConfig({
          chatbotName: 'Friendly Assistant',
          greetingMessage: 'Hello! How can I help you today?',
          color: '#FF6B00',
          headerTextColor: '#000000'
        });
      }
    } catch (error) {
      console.error('Error fetching chatbot config:', error);
      setConfig({
        chatbotName: 'Friendly Assistant',
        greetingMessage: 'Hello! How can I help you today?',
        color: '#FF6B00',
        headerTextColor: '#000000'
      });
    }
  };

  useEffect(() => {
    if (domainId) {
      fetchConfig();
    }
  }, [domainId]);

  const [config, setConfig] = useState<ChatbotConfig>({
    chatbotName: 'Chatbot',
    greetingMessage: 'Hello! How can I help you today?',
    color: '#FF6B00', 
    headerTextColor: '#000000'
  });

  const buttonStyle = {
    backgroundColor: config.color,
  };

  const handleRefreshChat = async () => {
    if (conversationId) {
      try {
        setMessages([]);
        processedMessageIds.clear();
        
        await fetchMessages(conversationId);
      } catch (error) {
        console.error('Error refreshing chat:', error);
        setError('Failed to refresh chat');
      }
    }
  };

  const [conversationRating, setConversationRating] = useState<'bad' | 'ok' | 'good' | null>(null);

  const handleRateConversation = async (rating: 'bad' | 'ok' | 'good') => {
    await handleRating(rating);
  };

  const handleRequestLiveChat = async () => {
    if (!conversationId) return;
    
    try {
      await updateConversation(conversationId, {
        requested_live_at: new Date().toISOString()
      });
      setIsRequestingLiveChat(true);
      
      const systemMessage = {
        id: `temp-${Date.now()}`,
        content: "I'll connect you with a live agent. Please wait a moment while I transfer your chat.",
        sender_type: 'bot',
        created_at: new Date().toISOString(),
      };

      setMessages(prev => [...prev, systemMessage]);

    } catch (error) {
      console.error('Error requesting live chat:', error);
      setError('Failed to request live chat. Please try again.');
    }
  };

  useEffect(() => {
    const initializeSession = async () => {
      let currentSessionId = localStorage.getItem(SESSION_KEY);
      
      if (!currentSessionId) {
        currentSessionId = window.crypto.randomUUID();
        localStorage.setItem(SESSION_KEY, currentSessionId);
      }
      
      setSessionId(currentSessionId);
    };

    initializeSession();
  }, []);

  const sendMessage = async (content: string) => {
    try {
      setIsLoading(true);
      setError(null);

      const { data: { user } } = await fetch('/api/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ action: 'getUser' }),
      }).then(response => response.json());

      if (!user) {
        await fetch('/api/auth', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ action: 'signInAnonymously' }),
        });
      }

      const currentConversationId = conversationId || await createConversation();
      if (!conversationId) {
        setConversationId(currentConversationId);
      }

      const tempMessage: Message = {
        id: `temp-${Date.now()}`,
        content: content,
        sender_type: 'user',
        created_at: new Date().toISOString(),
      };

      setMessages(prevMessages => {
        if (isMessageDuplicate(tempMessage, prevMessages)) {
          return prevMessages;
        }
        return [...prevMessages, tempMessage];
      });

      await chatbotSendMessage(content, currentConversationId);

      setMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
      setError('Failed to send message. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() || isLoading) return;
    await sendMessage(message.trim());
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-end z-[9999]">
      {isExpanded && (
        <div className="mb-4 w-[380px] bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden">
          {/* Header */}
          <div className="p-4 border-b flex items-center gap-3" style={{ backgroundColor: config.color }}>
            <div className="relative flex-shrink-0">
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                <span className="text-lg">🤖</span>
              </div>
              <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white" style={buttonStyle}></div>
            </div>
            <div className="flex-1">
              <h3 className="font-medium" style={{ color: config.headerTextColor }}>{config.chatbotName}</h3>
              <p className="text-sm" style={{ color: config.headerTextColor }}>from {config.chatbotName}</p>
            </div>
            {view === 'chat' && (
              <div className="flex items-center gap-2">
                {!isRequestingLiveChat ? (
                  <button
                    onClick={handleRequestLiveChat}
                    className="flex items-center gap-1 px-3 py-1.5 bg-white/20 rounded-lg text-sm hover:bg-white/30"
                    style={{ color: config.headerTextColor }}
                    title="Request live agent"
                    disabled={!conversationId || isArchived}
                  >
                    <UserRound className="h-4 w-4" />
                  </button>
                ) : (
                  <div
                    className="flex items-center gap-1 px-3 py-1.5 bg-white/20 rounded-lg text-sm"
                    style={{ color: config.headerTextColor }}
                    title="Waiting for agent"
                  >
                    <Hourglass className="h-4 w-4" />
                  </div>
                )}
                <button
                  onClick={handleRefreshChat}
                  className="flex items-center gap-1 px-3 py-1.5 bg-white/20 rounded-lg text-sm"
                  style={{ color: config.headerTextColor }}
                  title="Refresh chat"
                >
                  <RefreshCw className="h-4 w-4" />
                </button>
                <button
                  onClick={handleBackToHistory}
                  className="flex items-center gap-1 px-3 py-1.5 bg-white/20 rounded-lg text-sm"
                  style={{ color: config.headerTextColor }}
                >
                  <MessageSquare className="h-4 w-4" />
                </button>
              </div>
            )}
          </div>

          {/* Chat Area */}
          <div className="h-[400px] overflow-y-auto p-4 bg-gray-50 relative">
            {view === 'history' ? (
              <div className="space-y-4 h-full">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-medium text-gray-900">Conversation History</h3>
                  <button
                    onClick={handleStartNewConversation}
                    className="flex items-center gap-2 px-3 py-1.5 bg-orange-500 text-white text-sm rounded-lg hover:bg-orange-600"
                  >
                    <MessageSquarePlus className="h-4 w-4" />
                    Start New Chat
                  </button>
                </div>
                {conversations.map((conv) => (
                  <button
                    key={conv.id}
                    onClick={() => handleSelectConversation(conv)}
                    className="w-full text-left p-4 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200"
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium text-gray-900">
                        {format(new Date(conv.created_at), 'PPP')}
                      </span>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        conv.status === 'archived' 
                          ? 'bg-gray-100 text-gray-600' 
                          : 'bg-green-100 text-green-600'
                      }`}>
                        {conv.status === 'archived' ? 'Archived' : 'Active'}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">
                      Last message: {format(new Date(conv.last_message_at), 'p')}
                    </p>
                  </button>
                ))}
                {conversations.length === 0 && (
                  <div className="flex flex-col items-center justify-center h-full text-center">
                    <p className="mb-4">No previous conversations found</p>
                  </div>
                )}
              </div>
            ) : (
              <div className="space-y-4">
                {/* Welcome Message */}
                {view === 'chat' && (
                  <div className="flex gap-2">
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex-shrink-0 flex items-center justify-center">
                      🤖
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-sm max-w-[80%]">
                      <p className="text-sm">{config.greetingMessage}</p>
                      <span className="text-xs text-gray-500 mt-1 block">
                        {format(new Date(), 'h:mm a')}
                      </span>
                    </div>
                  </div>
                )}
                
                {/* Messages */}
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex gap-2 ${msg.sender_type === 'user' ? 'justify-end' : ''}`}
                  >
                    {msg.sender_type === 'bot' && (
                      <div className="w-8 h-8 rounded-full bg-gray-100 flex-shrink-0 flex items-center justify-center">
                        🤖
                      </div>
                    )}
                    <div 
                      className={`p-3 rounded-lg max-w-[80%] ${
                        msg.sender_type === 'user' 
                          ? 'bg-orange-500 text-white ml-auto' 
                          : 'bg-white shadow-sm'
                      }`}
                    >
                      <p className="text-sm">{msg.content}</p>
                      <span className={`text-xs mt-1 block ${
                        msg.sender_type === 'user' ? 'text-orange-100' : 'text-gray-500'
                      }`}>
                        {format(new Date(msg.created_at), 'h:mm a')}
                      </span>
                    </div>
                    {msg.sender_type === 'user' && (
                      <div className="w-8 h-8 rounded-full bg-orange-100 flex-shrink-0 flex items-center justify-center">
                        👤
                      </div>
                    )}
                  </div>
                ))}
                {isArchived && (
                  <div className="flex flex-col items-center gap-3 my-4">
                    <div className="bg-gray-100 rounded-lg px-4 py-3 flex items-center gap-2 text-gray-600">
                      <Archive className="h-4 w-4" />
                      <span className="text-sm">This conversation has been archived</span>
                    </div>
                    
                    {!conversationRating && (
                      <div className="flex flex-col items-center gap-2">
                        <p className="text-sm text-gray-600">How was this conversation?</p>
                        <div className="flex gap-3">
                          <button
                            onClick={() => handleRateConversation('bad')}
                            className="flex items-center gap-1 px-4 py-2 rounded-lg bg-red-100 text-red-600 hover:bg-red-200 transition-colors"
                          >
                            <ThumbsDown className="h-4 w-4" />
                            <span>Bad</span>
                          </button>
                          <button
                            onClick={() => handleRateConversation('ok')}
                            className="flex items-center gap-1 px-4 py-2 rounded-lg bg-yellow-100 text-yellow-600 hover:bg-yellow-200 transition-colors"
                          >
                            <Minus className="h-4 w-4" />
                            <span>OK</span>
                          </button>
                          <button
                            onClick={() => handleRateConversation('good')}
                            className="flex items-center gap-1 px-4 py-2 rounded-lg bg-green-100 text-green-600 hover:bg-green-200 transition-colors"
                          >
                            <ThumbsUp className="h-4 w-4" />
                            <span>Good</span>
                          </button>
                        </div>
                      </div>
                    )}
                    {conversationRating && (
                      <div className="flex flex-col items-center gap-2 text-center">
                        <span className="text-sm text-gray-600">You rated this conversation:</span>
                        <span className={`font-medium ${
                          conversationRating === 'bad' ? 'text-red-600' :
                          conversationRating === 'ok' ? 'text-yellow-600' :
                          'text-green-600'
                        }`}>
                          {conversationRating === 'bad' ? 'Bad 👎' : 
                           conversationRating === 'ok' ? 'OK 😐' : 
                           'Good 👍'}
                        </span>
                      </div>
                    )}
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            )}
          </div>

          {/* Input Area */}
          {view === 'chat' && <form onSubmit={handleSubmit} className="p-4 border-t bg-white">
            <div className="flex gap-2">
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 pr-10 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ '--tw-ring-color': config.color } as React.CSSProperties}
                  disabled={isLoading || isArchived} />
              </div>
              <button 
                type="submit"
                disabled={!message.trim() || isLoading || isArchived}
                className="p-2 rounded-full text-white flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                style={buttonStyle}
              >
                {isLoading ? (
                  <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <Send className="h-5 w-5" />
                )}
              </button>
            </div>
            <div className="text-center mt-2">
              <a 
                href="https://dashboard.ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-gray-600 hover:text-gray-700"
              >
                Powered by Dashboard.ai
              </a>
            </div>
          </form>}
        </div>
      )}

      {/* Toggle Button */}
      <button
        className="w-14 h-14 rounded-full text-white flex items-center justify-center shadow-lg"
        style={buttonStyle}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? '×' : '💬'}
      </button>
    </div>
  );
}