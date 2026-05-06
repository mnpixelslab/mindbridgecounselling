import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        blog1: './blog1.html',
        blog2: './blog2.html',
        blog3: './blog3.html',
        blog4: './blog4.html',
      },
    },
  },
});
