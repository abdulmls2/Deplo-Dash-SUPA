import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { Database } from './database.types';

// Function to create Supabase client using credentials from backend
async function createSupabaseClient(): Promise<SupabaseClient<Database>> {
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
let supabase: SupabaseClient<Database>;

// Create and export the client
export const initializeSupabase = async (): Promise<SupabaseClient<Database>> => {
  if (!supabase) {
    supabase = await createSupabaseClient();
  }
  return supabase;
};

// Export the client for use in components
export { supabase };