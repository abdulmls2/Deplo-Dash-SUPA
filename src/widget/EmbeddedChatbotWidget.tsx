import React, { useState, useEffect, useRef } from 'react';
import { Send, Paperclip, X, Archive, MessageSquare, MessageSquarePlus, ChevronLeft, RefreshCw, ThumbsDown, Minus, ThumbsUp, UserRound, Hourglass } from 'lucide-react';
import { format } from 'date-fns';

const SESSION_KEY = 'chatbot_session_id';
const CONVERSATION_EXPIRY_DAYS = 180; // 6 months default expiry
const API_BASE_URL = 'https://deplo-dash-supa.vercel.app';

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

export default function EmbeddedChatbotWidget({ domainId }: { domainId: string }) {
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
  const [isRequestingLiveChat, setIsRequestingLiveChat] = useState(false);
  const [config, setConfig] = useState<ChatbotConfig>({
    chatbotName: 'Chatbot',
    greetingMessage: 'Hello! How can I help you today?',
    color: '#FF6B00',
    headerTextColor: '#000000'
  });
  const [conversationRating, setConversationRating] = useState<'bad' | 'ok' | 'good' | null>(null);

  const buttonStyle = {
    backgroundColor: config.color,
  };

  useEffect(() => {
    if (isExpanded && (messages.length > 0 || isArchived)) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isExpanded, isArchived]);

  useEffect(() => {
    // Initialize session
    const initializeSession = async () => {
      let currentSessionId = localStorage.getItem(SESSION_KEY);
      
      if (!currentSessionId) {
        currentSessionId = window.crypto.randomUUID();
        localStorage.setItem(SESSION_KEY, currentSessionId);
      }
      
      setSessionId(currentSessionId);
      await loadExistingConversation(currentSessionId);
    };

    initializeSession();
  }, []);

  useEffect(() => {
    const fetchConfig = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/widget`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            action: 'getConfig',
            domainId
          })
        });
        const data = await response.json();
        if (data.error) throw new Error(data.error);

        setConfig({
          chatbotName: data.chatbotName || 'Chatbot',
          greetingMessage: data.greetingMessage || 'Hello! How can I help you today?',
          color: data.color || '#FF6B00',
          headerTextColor: data.headerTextColor || '#000000'
        });
      } catch (error) {
        console.error('Error fetching config:', error);
      }
    };

    fetchConfig();
  }, [domainId]);

  const fetchMessages = async (convId: string) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/widget`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'getMessages',
          domainId,
          payload: { conversationId: convId }
        })
      });
      const data = await response.json();
      if (data.error) throw new Error(data.error);
      setMessages(data.messages);
    } catch (error: any) {
      setError(error.message);
    }
  };

  const sendMessage = async (content: string) => {
    try {
      setIsLoading(true);
      const response = await fetch(`${API_BASE_URL}/api/widget`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'sendMessage',
          domainId,
          payload: {
            message: content,
            sessionId,
            conversationId
          }
        })
      });
      const data = await response.json();
      if (data.error) throw new Error(data.error);
      
      setMessage('');
      await fetchMessages(conversationId || data.message.conversation_id);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() || isLoading) return;
    await sendMessage(message.trim());
  };

  const loadExistingConversation = async (currentSessionId: string) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/widget`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'getConversations',
          domainId,
          payload: { sessionId: currentSessionId }
        })
      });
      const data = await response.json();
      if (data.error) throw new Error(data.error);
      
      if (!data.conversations || data.conversations.length === 0) {
        console.log('No active conversations found');
        return;
      }

      const conversation = data.conversations[0];
      setConversationId(conversation.id);
      await fetchMessages(conversation.id);
    } catch (error: any) {
      console.error('Error loading conversation:', error);
      setError(error.message);
    }
  };

  const handleStartNewConversation = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/widget`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'createConversation',
          domainId,
          payload: { sessionId }
        })
      });
      const data = await response.json();
      if (data.error) throw new Error(data.error);

      setMessages([]);
      setConversationId(data.conversation.id);
      setIsArchived(false);
      setConversationRating(null);
      setIsRequestingLiveChat(false);
      setView('chat');
    } catch (error: any) {
      setError(error.message);
    }
  };

  const handleRateConversation = async (rating: 'bad' | 'ok' | 'good') => {
    if (!conversationId) return;

    try {
      const response = await fetch(`${API_BASE_URL}/api/widget`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'updateConversation',
          domainId,
          payload: {
            conversationId,
            updates: { rating }
          }
        })
      });
      const data = await response.json();
      if (data.error) throw new Error(data.error);

      setConversationRating(rating);
    } catch (error: any) {
      setError(error.message);
    }
  };

  const handleRequestLiveChat = async () => {
    if (!conversationId) return;
    
    try {
      const response = await fetch(`${API_BASE_URL}/api/widget`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'updateConversation',
          domainId,
          payload: {
            conversationId,
            updates: { requested_live_at: new Date().toISOString() }
          }
        })
      });
      const data = await response.json();
      if (data.error) throw new Error(data.error);

      setIsRequestingLiveChat(true);
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-end z-[9999]">
      {/* Toggle Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-white"
        style={buttonStyle}
      >
        {isExpanded ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
      </button>

      {/* Chat Window */}
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
              <p className="text-sm" style={{ color: config.headerTextColor }}>AI Assistant</p>
            </div>
            {view === 'chat' && (
              <div className="flex items-center gap-2">
                <button
                  onClick={handleRequestLiveChat}
                  className="flex items-center gap-1 px-3 py-1.5 bg-white/20 rounded-lg text-sm"
                  style={{ color: config.headerTextColor }}
                  disabled={!conversationId || isArchived || isRequestingLiveChat}
                >
                  {isRequestingLiveChat ? <Hourglass className="h-4 w-4" /> : <UserRound className="h-4 w-4" />}
                </button>
                <button
                  onClick={() => fetchMessages(conversationId!)}
                  className="flex items-center gap-1 px-3 py-1.5 bg-white/20 rounded-lg text-sm"
                  style={{ color: config.headerTextColor }}
                  disabled={!conversationId}
                >
                  <RefreshCw className="h-4 w-4" />
                </button>
              </div>
            )}
          </div>

          {/* Chat Area */}
          <div className="h-[400px] overflow-y-auto p-4 bg-gray-50">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2 mb-4 ${msg.sender_type === 'user' ? 'justify-end' : ''}`}
              >
                {msg.sender_type === 'bot' && (
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex-shrink-0 flex items-center justify-center">
                    🤖
                  </div>
                )}
                <div 
                  className={`p-3 rounded-lg shadow-sm ${
                    msg.sender_type === 'user' 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-white'
                  }`}
                >
                  <p className="text-sm">{msg.content}</p>
                  <span className={`text-xs mt-1 block ${
                    msg.sender_type === 'user' ? 'text-blue-100' : 'text-gray-500'
                  }`}>
                    {format(new Date(msg.created_at), 'h:mm a')}
                  </span>
                </div>
                {msg.sender_type === 'user' && (
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center">
                    👤
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={handleSubmit} className="p-4 border-t bg-white">
            <div className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 border rounded-full focus:outline-none focus:ring-2"
                style={{ '--tw-ring-color': config.color } as React.CSSProperties}
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={!message.trim() || isLoading}
                className="p-2 rounded-full text-white"
                style={buttonStyle}
              >
                {isLoading ? (
                  <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <Send className="h-5 w-5" />
                )}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
