import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    target: 'es2015',
    modulePreload: {
      polyfill: false,
      resolveDependencies(_filename, deps) {
        return deps.filter(
          (dep) => !dep.includes('locales-data') && !dep.includes('seo-data')
        );
      },
    },
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('motion')) {
              return 'vendor-motion';
            }
            if (id.includes('react') || id.includes('scheduler')) {
              return 'vendor-framework';
            }
            if (id.includes('i18next')) {
              return 'vendor-i18n';
            }
            if (id.includes('lucide-react')) {
              return 'vendor-icons';
            }
          }
          if (id.includes('localizedSeoData.json')) {
            return 'seo-data';
          }
          if (id.includes('src/locales/en.json')) {
            return 'locale-en';
          }
          if (id.includes('src/locales/')) {
            return 'locales-other';
          }
        },
      },
    },
  },
});
