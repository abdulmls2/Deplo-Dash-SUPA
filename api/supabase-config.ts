import type { VercelRequest, VercelResponse } from '@vercel/node';
import { createHash } from 'crypto';

// Enable CORS middleware
const cors = async (req: VercelRequest, res: VercelResponse) => {
  const origin = req.headers.origin || '*';
  
  // Allow requests from any origin since this is a widget
  res.setHeader('Access-Control-Allow-Origin', origin);
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization');
  
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return true;
  }
  return false;
};

// Simple encryption function
function encrypt(text: string): string {
  return Buffer.from(text).toString('base64');
}

// Validate the domain ID against your database
async function validateDomainId(domainId: string): Promise<boolean> {
  try {
    // Here you would typically check if the domain ID exists in your database
    // For now, we'll just check if it's a valid UUID format
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    return uuidRegex.test(domainId);
  } catch (error) {
    console.error('Error validating domain ID:', error);
    return false;
  }
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  console.log('Supabase config endpoint called:', {
    method: req.method,
    origin: req.headers.origin,
    referer: req.headers.referer
  });

  try {
    // Handle CORS
    if (await cors(req, res)) return;

    if (req.method !== 'GET') {
      console.log('Method not allowed:', req.method);
      return res.status(405).json({ error: 'Method not allowed' });
    }

    // Validate domain ID from the request
    const domainId = req.query.domainId as string;
    if (!domainId) {
      return res.status(400).json({ error: 'Domain ID is required' });
    }

    // Validate the domain ID
    const isValidDomain = await validateDomainId(domainId);
    if (!isValidDomain) {
      return res.status(403).json({ error: 'Invalid domain ID' });
    }

    // Validate environment variables
    if (!process.env.VITE_SUPABASE_URL || !process.env.VITE_SUPABASE_ANON_KEY) {
      console.error('Supabase configuration is not set');
      return res.status(500).json({ error: 'Configuration error' });
    }

    // Create a hash of the credentials to use as a simple authentication token
    const timestamp = Math.floor(Date.now() / (1000 * 60)); // Changes every minute
    const hash = createHash('sha256')
      .update(`${domainId}-${timestamp}-${process.env.VITE_SUPABASE_ANON_KEY}`)
      .digest('hex');

    // Return encrypted configuration with the hash
    return res.status(200).json({
      supabaseUrl: encrypt(process.env.VITE_SUPABASE_URL),
      supabaseKey: encrypt(process.env.VITE_SUPABASE_ANON_KEY),
      hash,
      timestamp
    });
  } catch (error: any) {
    console.error('Error in API handler:', error);
    return res.status(500).json({ 
      error: 'Internal server error'
    });
  }
} 