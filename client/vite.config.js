import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  root: path.resolve(__dirname, './'), // root is client folder
  build: {
    outDir: 'dist', // will generate client/dist
    emptyOutDir: true,
    rollupOptions: {
      input: path.resolve(__dirname, 'public/index.html')
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src') // optional if you want '@/components/...'
    }
  }
})