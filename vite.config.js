import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
const NS_KEY = 'c9af8962e10e46bc92f8e98b501a3894';

export default defineConfig({
  
  server:{
    // setting a redirect proxy to avoid CORS policy block
    proxy: {
      '/api': {
        target: 'https://gateway.apiportal.ns.nl',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, ''), // Removes /api prefix
        secure: true, 
        headers:  {
          'Cache-Control': 'no-cache',
          'Ocp-Apim-Subscription-Key': `${NS_KEY}`,}
      },
    },
  },
  plugins: [react()],
  base: '/qquest_narrowcaster/',
})
