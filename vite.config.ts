import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    // Polyfill process.env for libraries that might rely on it, though we prefer import.meta.env
    'process.env': {} 
  }
});