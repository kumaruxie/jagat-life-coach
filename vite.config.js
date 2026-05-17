import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    chunkSizeWarningLimit: 2000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('@splinetool/react-spline') || id.includes('@splinetool/runtime')) {
              return 'spline';
            }
            if (id.includes('framer-motion')) {
              return 'framer';
            }
            if (id.includes('react/') || id.includes('react-dom/') || id.includes('scheduler/')) {
              return 'react-vendor';
            }
          }
        }
      }
    }
  }
})
