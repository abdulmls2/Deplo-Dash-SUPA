import { createClient } from '@supabase/supabase-js';
import type { VercelRequest, VercelResponse } from '@vercel/node';

// Initialize Supabase client (server-side only)
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.SUPABASE_SERVICE_KEY || ''
);

// Enable CORS middleware
const cors = async (req: VercelRequest, res: VercelResponse) => {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
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
  if (await cors(req, res)) return;

  const { action, payload } = req.body;

  try {
    switch (action) {
      case 'signIn':
        const { data: signInData, error: signInError } = await supabase.auth.signInWithPassword({
          email: payload.email,
          password: payload.password,
        });
        if (signInError) throw signInError;
        return res.json({ user: signInData.user });

      case 'signUp':
        const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
          email: payload.email,
          password: payload.password,
        });
        if (signUpError) throw signUpError;

        if (signUpData.user) {
          const { error: profileError } = await supabase
            .from('profiles')
            .insert([{ 
              id: signUpData.user.id, 
              username: payload.username, 
              email: payload.email 
            }]);
          if (profileError) throw profileError;
        }
        return res.json({ user: signUpData.user });

      case 'signOut':
        const { error: signOutError } = await supabase.auth.signOut();
        if (signOutError) throw signOutError;
        return res.json({ success: true });

      case 'getProfile':
        const { data: { user }, error: userError } = await supabase.auth.getUser();
        if (userError) throw userError;

        if (user) {
          const { data: profile, error: profileError } = await supabase
            .from('profiles')
            .select('*')
            .eq('id', user.id)
            .single();
          if (profileError) throw profileError;
          return res.json({ user, profile });
        }
        return res.json({ user: null, profile: null });

      default:
        return res.status(400).json({ error: 'Invalid action' });
    }
  } catch (error) {
    console.error('Auth API error:', error);
    return res.status(500).json({ error: error.message });
  }
}
