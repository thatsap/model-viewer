import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';

// This is required for Vite to work correctly with CodeSandbox
const server = {};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@src': resolve(new URL('./src', import.meta.url).pathname),
    },
  },
  server: server,
});
