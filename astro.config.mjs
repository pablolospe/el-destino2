import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel"; // Para Serverless Functions
import tailwindcss from '@tailwindcss/vite';

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap"; // Added import

import dotenv from 'dotenv'; // Importa dotenv
dotenv.config(); // Carga las variables de entorno desde .env

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercel(),
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    drafts: true,
    shikiConfig: {
      theme: "css-variables"
    }
  },
  shikiConfig: {
    wrap: true,
    skipInline: false,
    drafts: true
  },
  site: 'https://www.eldestinoediciones.com.ar',
  integrations: [mdx(), sitemap()] // Added sitemap()
});