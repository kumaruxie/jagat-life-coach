import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/jagat-life-coach/',
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        // Convert to a function format compatible with Vite v8/Rolldown
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'vendor-react';
            }
            if (id.includes('framer-motion')) {
              return 'vendor-motion';
            }
          }
        }
      }
    },
    cssCodeSplit: true
    // Minify is now handled automatically by Vite v8's default minifier
  }
})
