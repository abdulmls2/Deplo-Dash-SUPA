import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig(({ mode }) => {
  // Don't load any env variables in the client build
  const env = {};
  
  return {
    plugins: [react()],
    base: '',
    define: {
      // Explicitly set all potential env vars to undefined
      'process.env.VITE_SUPABASE_URL': JSON.stringify(undefined),
      'process.env.VITE_SUPABASE_ANON_KEY': JSON.stringify(undefined),
      'process.env.VITE_OPENAI_API_KEY': JSON.stringify(undefined),
      'process.env': JSON.stringify(env)
    },
    build: {
      lib: {
        entry: 'src/widget/main.tsx',
        name: 'chatbotWidget',
        fileName: (format) => `chatbot-widget.${format}.js`
      },
      outDir: 'public/widget',
      rollupOptions: {
        external: ['react', 'react-dom'],
        output: {
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM'
          }
        }
      },
      sourcemap: true,
      emptyOutDir: true
    }
  };
});