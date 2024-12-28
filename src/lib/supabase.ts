import { createClient } from '@supabase/supabase-js';
import type { Database } from './database.types';

let supabaseInstance: ReturnType<typeof createClient<Database>> | null = null;

// Function to create Supabase client using credentials from backend
async function createSupabaseClient() {
  try {
    const response = await fetch('https://deplo-dash-supa.vercel.app/api/supabase-config');
    if (!response.ok) {
      throw new Error('Failed to fetch Supabase configuration');
    }
    const { supabaseUrl, supabaseKey } = await response.json();
    return createClient<Database>(supabaseUrl, supabaseKey);
  } catch (error) {
    console.error('Error initializing Supabase client:', error);
    throw error;
  }
}

// Initialize the client
export const initializeSupabase = async () => {
  if (!supabaseInstance) {
    supabaseInstance = await createSupabaseClient();
  }
  return supabaseInstance;
};

// Export a proxy to ensure supabase is initialized
export const supabase = new Proxy({} as ReturnType<typeof createClient<Database>>, {
  get: (target, prop) => {
    if (!supabaseInstance) {
      throw new Error('Supabase client not initialized. Call initializeSupabase() first.');
    }
    return supabaseInstance[prop as keyof typeof supabaseInstance];
  }
});