import type { VercelRequest, VercelResponse } from '@vercel/node';

// Enable CORS middleware
const cors = async (req: VercelRequest, res: VercelResponse) => {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

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
  console.log('Supabase config endpoint called:', {
    method: req.method,
    url: req.url,
    headers: req.headers
  });

  try {
    // Handle CORS
    if (await cors(req, res)) {
      console.log('CORS preflight handled');
      return;
    }

    if (req.method !== 'GET') {
      console.log('Method not allowed:', req.method);
      return res.status(405).json({ error: 'Method not allowed' });
    }

    // Validate environment variables
    if (!process.env.VITE_SUPABASE_URL || !process.env.VITE_SUPABASE_ANON_KEY) {
      console.error('Supabase configuration is not set:', {
        hasUrl: !!process.env.VITE_SUPABASE_URL,
        hasKey: !!process.env.VITE_SUPABASE_ANON_KEY,
        env: process.env.NODE_ENV
      });
      return res.status(500).json({ error: 'Supabase configuration is not set' });
    }

    console.log('Returning Supabase configuration');
    
    // Return Supabase configuration
    return res.status(200).json({
      supabaseUrl: process.env.VITE_SUPABASE_URL,
      supabaseKey: process.env.VITE_SUPABASE_ANON_KEY
    });
  } catch (error: any) {
    console.error('Error in API handler:', error);
    return res.status(500).json({ 
      error: 'Internal server error',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
} 