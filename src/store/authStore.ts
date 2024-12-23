import { create } from 'zustand';
import { User } from '@supabase/supabase-js';

interface AuthState {
  user: User | null;
  profile: any | null;
  isLoading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, username: string) => Promise<void>;
  signOut: () => Promise<void>;
  fetchProfile: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  profile: null,
  isLoading: true,

  signIn: async (email: string, password: string) => {
    const response = await fetch('/api/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        action: 'signIn',
        payload: { email, password }
      })
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.error);
    set({ user: data.user });
  },

  signUp: async (email: string, password: string, username: string) => {
    const response = await fetch('/api/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        action: 'signUp',
        payload: { email, password, username }
      })
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.error);
    set({ user: data.user });
  },

  signOut: async () => {
    const response = await fetch('/api/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'signOut' })
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.error);
    set({ user: null, profile: null });
  },

  fetchProfile: async () => {
    try {
      const response = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'getProfile' })
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error);
      set({ user: data.user, profile: data.profile, isLoading: false });
    } catch (error) {
      set({ user: null, profile: null, isLoading: false });
      throw error;
    }
  }
}));