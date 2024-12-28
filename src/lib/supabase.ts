import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { Database } from './database.types';

// Get the base URL for the API
function getApiBaseUrl() {
  // Check if we're running in a browser
  if (typeof window !== 'undefined') {
    // If the page is served from localhost or file://, use the production URL
    if (window.location.hostname === 'localhost' || window.location.protocol === 'file:') {
      return 'https://deplo-dash-supa.vercel.app';
    }
    // Otherwise, use the current origin
    return window.location.origin;
  }
  // Fallback to production URL
  return 'https://deplo-dash-supa.vercel.app';
}

// Initialize with default values (will be replaced with actual values)
let supabase: SupabaseClient<Database> = createClient(
  'https://placeholder.supabase.co',
  'placeholder-key'
);

// Function to create Supabase client using credentials from backend
async function createSupabaseClient(): Promise<SupabaseClient<Database>> {
  try {
    const baseUrl = getApiBaseUrl();
    console.log('Fetching Supabase config from:', `${baseUrl}/api/supabase-config`);
    
    const response = await fetch(`${baseUrl}/api/supabase-config`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      mode: 'cors'
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Failed to fetch config:', {
        status: response.status,
        statusText: response.statusText,
        error: errorText
      });
      throw new Error('Failed to fetch Supabase configuration');
    }

    const { supabaseUrl, supabaseKey } = await response.json();
    console.log('Successfully fetched Supabase config');
    
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