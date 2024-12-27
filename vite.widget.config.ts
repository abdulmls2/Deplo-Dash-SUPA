// vite.widget.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '',
  define: {
    // Remove access to process.env entirely from the client bundle
    'process.env': '{}',
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
    sourcemap: false, // Disable source maps to prevent exposing sensitive data
    emptyOutDir: true
  }
});