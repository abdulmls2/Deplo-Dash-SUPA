import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '',
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
});