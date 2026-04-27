import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  base: '/Developer-Landing-Page/',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: 'index.html',
    },
  },
});