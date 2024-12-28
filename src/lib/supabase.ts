import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { Database } from './database.types';

// Initialize with default values (will be replaced with actual values)
let supabase: SupabaseClient<Database> = createClient(
  'https://placeholder.supabase.co',
  'placeholder-key'
);

// Function to create Supabase client using credentials from backend
async function createSupabaseClient(): Promise<SupabaseClient<Database>> {
  try {
    // Use the absolute URL for the API endpoint
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

// Create and export the client
export const initializeSupabase = async (): Promise<SupabaseClient<Database>> => {
  try {
    supabase = await createSupabaseClient();
    return supabase;
  } catch (error) {
    console.error('Failed to initialize Supabase client:', error);
    throw error;
  }
};

// Initialize the client immediately
initializeSupabase().catch(console.error);

// Export the client for use in components
export { supabase };