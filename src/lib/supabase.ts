import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { Database } from './database.types';

const VERCEL_URL = 'https://deplo-dash-supa.vercel.app';

// Get the domain ID from the global config
function getDomainId(): string {
  if (typeof window === 'undefined') return '';
  
  // Try to get from CHATBOT_CONFIG
  const config = (window as any).CHATBOT_CONFIG;
  if (config?.domainId) return config.domainId;

  // Try to get from data attribute
  const script = document.currentScript as HTMLScriptElement;
  if (script?.dataset.domainId) return script.dataset.domainId;

  return '';
}

// Initialize with default values (will be replaced with actual values)
let supabase: SupabaseClient<Database> = createClient(
  'https://placeholder.supabase.co',
  'placeholder-key'
);

// Function to create Supabase client using credentials from backend
async function createSupabaseClient(): Promise<SupabaseClient<Database>> {
  try {
    const domainId = getDomainId();
    if (!domainId) {
      throw new Error('Domain ID is required. Please set it in CHATBOT_CONFIG or data-domain-id attribute.');
    }

    console.log('Fetching Supabase config from:', `${VERCEL_URL}/api/supabase-config`);
    
    const response = await fetch(`${VERCEL_URL}/api/supabase-config?domainId=${domainId}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
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
    console.log('Successfully fetched encrypted Supabase config');

    // Decrypt the credentials
    const decryptedUrl = atob(supabaseUrl);
    const decryptedKey = atob(supabaseKey);
    
    return createClient<Database>(decryptedUrl, decryptedKey);
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