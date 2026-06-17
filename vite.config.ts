import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Sitemap from 'vite-plugin-sitemap'

// Todas las rutas de la aplicación (de src/App.tsx).
// La ruta "/" se incluye por defecto, el resto se listan en dynamicRoutes.
const routes = [
  '/emergencias',
  '/blanqueamiento',
  '/rellenos-esteticos',
  '/coronas-puentes',
  '/servicio/primera-consulta',
]

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Sitemap({
      hostname: 'https://www.dentalexpresiones.com',
      dynamicRoutes: routes,
      changefreq: 'weekly',
      priority: 0.8,
      readable: true,
    }),
  ],
  server: {
    allowedHosts: [
      'sb-3pch41bud26x.vercel.run',
      '.vercel.run'
    ]
  }
})
