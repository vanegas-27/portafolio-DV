import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  pages: {
    // Definir las rutas para las diferentes versiones
    v1: {
      route: '/v1'
    },
    v2: {
      route: '/v2'
    }
  },
  server: {
    routes: [
    // Establecer la ruta por defecto para cargar el index.astro de v1
    {
      path: '/',
      respond: '/v1/index.astro'
    }]
  },
  integrations: [tailwind()]
});