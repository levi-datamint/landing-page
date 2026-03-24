import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Use relative asset paths so GitHub Pages works without setting a specific base.
  base: './',
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
});

