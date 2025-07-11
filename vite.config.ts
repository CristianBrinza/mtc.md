// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        skipWaiting: true,
        clientsClaim: true,
        cleanupOutdatedCaches: true,
      },
      manifest: {
        name: 'Moldtelecom',
        short_name: 'Moldtelecom',
        description: 'Moldtelecom',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone',
        start_url: '/app/', // Set the default standalone route
        icons: [
          {
            src: '/images/app/icon_logo_app_192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/images/app/icon_logo_app_512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
      devOptions: {
        enabled: true, // Enable PWA in development mode
      },
    }),
  ],
});
