import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Set the base path to your GitHub Pages repo (e.g., '/game-selector/')
  base: '/game-selector/',
  plugins: [react()]
});