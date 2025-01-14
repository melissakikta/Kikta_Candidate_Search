import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  envDir: './',
  plugins: [react()],
  define: {
    'process.env': process.env, //debug all env variables
  },
});
