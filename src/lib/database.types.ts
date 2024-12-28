// Generated using supabase-js
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      conversations: {
        Row: {
          id: string;
          created_at: string;
          updated_at: string;
          title: string | null;
          status: 'active' | 'archived' | 'deleted';
          last_message_at: string | null;
          user_id: string;
          domain_id: string;
          session_id: string;
          is_starred: boolean;
          is_read: boolean;
          rating?: 'bad' | 'ok' | 'good' | null;
          requested_live_at?: string | null;
          live_mode?: boolean;
        };
        Insert: {
          id?: string;
          created_at?: string;
          updated_at?: string;
          title?: string | null;
          status?: 'active' | 'archived' | 'deleted';
          last_message_at?: string | null;
          user_id: string;
          domain_id: string;
          session_id: string;
          is_starred?: boolean;
          is_read?: boolean;
          rating?: 'bad' | 'ok' | 'good' | null;
          requested_live_at?: string | null;
          live_mode?: boolean;
        };
        Update: {
          id?: string;
          created_at?: string;
          updated_at?: string;
          title?: string | null;
          status?: 'active' | 'archived' | 'deleted';
          last_message_at?: string | null;
          user_id?: string;
          domain_id?: string;
          session_id?: string;
          is_starred?: boolean;
          is_read?: boolean;
          rating?: 'bad' | 'ok' | 'good' | null;
          requested_live_at?: string | null;
          live_mode?: boolean;
        };
      };
      messages: {
        Row: {
          id: string;
          created_at: string;
          conversation_id: string;
          content: string;
          sender_type: 'user' | 'bot';
          user_id: string | null;
        };
        Insert: {
          id?: string;
          created_at?: string;
          conversation_id: string;
          content: string;
          sender_type: 'user' | 'bot';
          user_id?: string | null;
        };
        Update: {
          id?: string;
          created_at?: string;
          conversation_id?: string;
          content?: string;
          sender_type?: 'user' | 'bot';
          user_id?: string | null;
        };
      };
      domain_settings: {
        Row: {
          id: string;
          created_at: string;
          domain_id: string;
          chatbot_name: string;
          greeting_message: string | null;
          primary_color: string | null;
          header_text_color: string | null;
        };
        Insert: {
          id?: string;
          created_at?: string;
          domain_id: string;
          chatbot_name: string;
          greeting_message?: string | null;
          primary_color?: string | null;
          header_text_color?: string | null;
        };
        Update: {
          id?: string;
          created_at?: string;
          domain_id?: string;
          chatbot_name?: string;
          greeting_message?: string | null;
          primary_color?: string | null;
          header_text_color?: string | null;
        };
      };
    };
    Views: {};
    Functions: {};
    Enums: {};
  };
}