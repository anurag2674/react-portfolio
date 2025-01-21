import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      treeshake: true, // Ensure tree shaking is enabled
    },
  },
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
});
