import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  root: './', // Make sure this is set to the correct root
  build: {
    outDir: 'build',
    rollupOptions: {
      input: '/index.html',
      external: ['/src/main.jsx'],
    },
  },
})
