// src/lib/supabase.ts
import type { Database } from './database.types';

// Use window.location.origin to dynamically get the current domain
const API_URL = `${window.location.origin}/api/supabase`;

type TableName = keyof Database['public']['Tables'];
type TableRow<T extends TableName> = Database['public']['Tables'][T]['Row'];

interface SupabaseResponse<T = any> {
  data: T | null;
  error: any;
}

class SupabaseClient {
  private async fetchApi(action: string, payload: any): Promise<SupabaseResponse> {
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ action, payload })
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('API request failed:', error);
      return { data: null, error: error instanceof Error ? error.message : 'Unknown error' };
    }
  }

  from<T extends TableName>(table: T) {
    return {
      select: async (query?: string): Promise<SupabaseResponse<TableRow<T>[]>> => {
        return this.fetchApi('select', { table, query });
      },

      insert: async (data: Partial<TableRow<T>>): Promise<SupabaseResponse> => {
        return this.fetchApi('insert', { table, data });
      },

      update: async (data: Partial<TableRow<T>>, match: any): Promise<SupabaseResponse> => {
        return this.fetchApi('update', { table, data, match });
      },

      eq: async (column: keyof TableRow<T>, value: any): Promise<SupabaseResponse<TableRow<T>[]>> => {
        return this.fetchApi('select', { 
          table, 
          query: '*',
          filters: { type: 'eq', column, value }
        });
      },

      single: async (): Promise<SupabaseResponse<TableRow<T>>> => {
        return this.fetchApi('select', { 
          table,
          query: '*',
          single: true
        });
      }
    };
  }
}

export const supabase = new SupabaseClient();