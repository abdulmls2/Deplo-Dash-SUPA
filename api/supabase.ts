// api/supabase.ts
import { createClient } from '@supabase/supabase-js';
import type { VercelRequest, VercelResponse } from '@vercel/node';
import type { Database } from '../src/lib/database.types';

// Initialize Supabase client
const supabaseUrl = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY || process.env.VITE_SUPABASE_ANON_KEY;

const supabase = createClient<Database>(
  supabaseUrl || '',
  supabaseKey || ''
);

// Enable CORS middleware
const cors = async (req: VercelRequest, res: VercelResponse) => {
  // Get origin from request header
  const origin = req.headers.origin || '';
  
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', origin);
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST');
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
  try {
    // Handle CORS
    if (await cors(req, res)) return;

    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method not allowed' });
    }

    // Validate environment variables
    if (!supabaseUrl || !supabaseKey) {
      console.error('Supabase credentials are not set');
      return res.status(500).json({ error: 'Supabase configuration is missing' });
    }

    const { action, payload } = req.body;

    if (!action || !payload) {
      return res.status(400).json({ error: 'Action and payload are required' });
    }

    let query = supabase.from(payload.table);
    let result;

    switch (action) {
      case 'select':
        query = query.select(payload.query || '*');
        if (payload.filters) {
          const { type, column, value } = payload.filters;
          if (type === 'eq') {
            query = query.eq(column, value);
          }
        }
        if (payload.single) {
          result = await query.single();
        } else {
          result = await query;
        }
        break;

      case 'insert':
        result = await query.insert(payload.data);
        break;

      case 'update':
        result = await query
          .update(payload.data)
          .eq(Object.keys(payload.match)[0], Object.values(payload.match)[0]);
        break;

      default:
        return res.status(400).json({ error: 'Invalid action' });
    }

    return res.status(200).json(result);

  } catch (error: any) {
    console.error('Error in Supabase API handler:', error);
    return res.status(500).json({ 
      error: 'Internal server error',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
}