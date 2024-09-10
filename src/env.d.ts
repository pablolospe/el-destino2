/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

// en un archivo .d.ts en tu proyecto (ej. custom.d.ts)
declare module '@astrolib/seo' {
    export const AstroSeo: any; // Ajusta el tipo `any` al tipo real si lo conoces
  }
  