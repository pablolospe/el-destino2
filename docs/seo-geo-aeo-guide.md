# Guía de Optimización: SEO, GEO y AEO para El Destino Ediciones

Esta documentación describe la arquitectura y los textos de optimización implementados en **El Destino Ediciones** para motores de búsqueda tradicionales (SEO), búsquedas locales y regionales (GEO), y motores de respuestas de Inteligencia Artificial (AEO) como Gemini, ChatGPT y Perplexity.

---

## 1. Centralización de Textos (Fácil de Encontrar y Editar)

Para facilitar la actualización de la información que consumen las IAs y buscadores, se ha centralizado toda la configuración y redacción en un único archivo:

* **Ruta**: [`src/config/seo-aeo.ts`](file:///Users/pablolospe/Documents/proyectos/vitons-projects/el-destino/el-destino2/src/config/seo-aeo.ts)

### Estructura de Edición de Datos:
1. **`siteConfig.defaultTitle` & `defaultDescription`**: Textos generales del sitio que aparecen como metadatos de búsqueda por defecto en Google si una página interna no provee metatags personalizados.
2. **`siteConfig.localBusiness`**: Datos geográficos y de localización física de la editorial (Ciudad de Buenos Aires, Argentina), teléfono y enlaces oficiales a redes sociales (`sameAs`).
3. **`siteConfig.editorialServices`**: Catálogo que describe los servicios editoriales ofrecidos (corrección de estilo, edición e impresión). Es usado directamente por el esquema de organización e IA.
4. **`siteConfig.faqs`**: Colección de Preguntas y Respuestas (FAQs) diseñadas para que los motores de IA respondan directamente preguntas acerca de la editorial, sus libros o dónde comprarlos.

---

## 2. Esquemas Estructurados (JSON-LD)

Los datos estructurados le permiten a las IAs entender el contenido sin adivinar en base a HTML.

* **Home (`src/pages/index.astro`)**:
  - Inyecta un `@graph` tipo **`Publisher` / `Organization`** que vincula la marca con sus redes, su logotipo, dirección en CABA, y sus servicios editoriales (`hasOfferCatalog`).
  - Inyecta un **`FAQPage`** para responder consultas conversacionales directamente.
* **Detalle del Libro (`src/layouts/MarkdownPostLayout.astro`)**:
  - Inyecta dinámicamente un esquema tipo **`Book`** que mapea el autor, cantidad de páginas, descripción de contratapa y el enlace a la tienda en Empretienda (`offers`).
* **Página de Contacto (`src/pages/contacto.astro`)**:
  - Inyecta el esquema de **`LocalBusiness`** para consolidar el posicionamiento GEO (SEO Local) en Argentina.

---

## 3. Canales de Descubrimiento de Agentes

* **`public/llms.txt`**: Un archivo en formato Markdown plano accesible públicamente que resume en texto legible la estructura de la editorial, las pautas para manuscritos y la lista completa de libros publicados. Optimizado para lectura directa de LLMs.
* **`public/robots.txt`**: Configurado con directivas **Content-Signal** bajo borradores de la IETF:
  - `Content-Signal: ai-train=no`: Impide el entrenamiento de modelos sobre tus contenidos.
  - `search=yes, ai-input=yes`: Habilita la indexación para búsquedas tradicionales y motores de respuestas basados en IA (AI Overviews).
