import type { VercelRequest, VercelResponse } from '@vercel/node';

// List of allowed origins
const ALLOWED_ORIGINS = [
  'https://deplo-dash-supa.vercel.app',
  'http://localhost:3000',
  'http://localhost:5173',
  'https://deplo-dash.vercel.app'
];

// Enable CORS middleware with origin validation
const cors = async (req: VercelRequest, res: VercelResponse) => {
  const origin = req.headers.origin;
  
  // Allow all origins in development
  if (process.env.NODE_ENV === 'development') {
    res.setHeader('Access-Control-Allow-Origin', '*');
  } else if (origin && ALLOWED_ORIGINS.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  } else {
    // Default to first allowed origin if none matches
    res.setHeader('Access-Control-Allow-Origin', ALLOWED_ORIGINS[0]);
  }
  
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return true;
  }
  return false;
};

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  try {
    // Handle CORS
    if (await cors(req, res)) return;

    // Only allow GET requests
    if (req.method !== 'GET') {
      return res.status(405).json({ error: 'Method not allowed' });
    }

    // Validate environment variables
    if (!process.env.VITE_SUPABASE_URL || !process.env.VITE_SUPABASE_ANON_KEY) {
      console.error('Supabase configuration is not set');
      return res.status(500).json({ error: 'Configuration error' });
    }

    // Return Supabase configuration
    return res.status(200).json({
      supabaseUrl: process.env.VITE_SUPABASE_URL,
      supabaseKey: process.env.VITE_SUPABASE_ANON_KEY
    });
  } catch (error: any) {
    console.error('Error in API handler:', error);
    return res.status(500).json({ 
      error: 'Server error'
    });
  }
} 