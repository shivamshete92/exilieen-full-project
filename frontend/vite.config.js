import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist' // 👈 ensure build output goes to "dist" folder
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // optional, for cleaner imports
    },
  },
});
