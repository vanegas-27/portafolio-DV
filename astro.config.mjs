import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  pages: {
    v1: {
      route: '/v1'
    },
    v2: {
      route: '/v2'
    }
  },
  server: {
    routes: [
      {
        path: '/',
        respond: '/v1/index.astro'
      },
      {
        path: '/v1',
        respond: '/v1/index.astro'
      },
      {
        path: '/v2',
        respond: '/v2/index.astro'
      },
      {
        path: '(.*)', // Captura cualquier otra ruta
        respond: '/404.astro' // Página de error 404 personalizada
      }
    ]
  },
  integrations: [tailwind()]
});
