import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      'sb-3pch41bud26x.vercel.run',
      '.vercel.run'
    ]
  }
})