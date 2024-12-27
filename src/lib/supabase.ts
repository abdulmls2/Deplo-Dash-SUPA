// src/lib/supabase.ts
import type { Database } from './database.types';

const API_URL = 'https://deplo-dash-supa.vercel.app/api/supabase';

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
      return await response.json();
    } catch (error) {
      return { data: null, error };
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
        const response = await this.fetchApi('select', { 
          table,
          query: '*',
          single: true
        });
        return response;
      }
    };
  }
}

export const supabase = new SupabaseClient();