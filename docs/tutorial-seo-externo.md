# Tutorial: Configuración Externa de SEO, GEO y AEO

Para que los cambios implementados en el código tengan impacto real, debes dar de alta y verificar el sitio en las distintas plataformas de búsqueda tradicionales y de inteligencia artificial. Aquí tienes el paso a paso detallado:

---

## Paso 1: Google Search Console (SEO Tradicional y GEO)

Google Search Console es la herramienta principal para informarle a Google que el sitio existe y rastrear cualquier error de indexación local.

1. **Acceder a la herramienta**: Entra en [Google Search Console](https://search.google.com/search-console).
2. **Añadir propiedad**:
   - Elige **Prefijo de la URL** y escribe `https://www.eldestinoediciones.com.ar/` (asegúrate de incluir la URL exacta con `https` y `/` final).
3. **Verificar la propiedad**:
   - Google te ofrecerá varios métodos. El más rápido para ti es el de **Etiqueta HTML** (Meta tag) o **Verificación de DNS** (si tienes acceso al proveedor de dominio como Nic.ar / Cloudflare).
   - *Nota*: Si decides usar el método de **Etiqueta HTML**, copia el código provisto (ej: `<meta name="google-site-verification" content="..." />`) y colócalo en `src/components/BaseHead.astro` (actualmente ya tienes uno configurado en la línea 69, puedes reemplazar el valor de `content` si es necesario).
4. **Enviar el Sitemap**:
   - En el menú lateral izquierdo, haz clic en **Sitemaps**.
   - En "Añadir un nuevo sitemap", escribe: `sitemap-index.xml`.
   - Haz clic en **Enviar**. Esto forzará a Google a indexar todos tus libros de inmediato.

---

## Paso 2: Bing Webmaster Tools (SEO, GEO y AEO de Copilot)

Bing provee los datos de búsqueda e información a **Copilot** (la IA de Microsoft). Si estás indexado correctamente en Bing, Copilot podrá responder preguntas sobre tus libros.

1. **Acceder a la herramienta**: Entra en [Bing Webmaster Tools](https://www.bing.com/webmasters).
2. **Importar desde Google Search Console**:
   - Bing te permite sincronizar y verificar tu sitio haciendo clic en **Importar** directamente desde tu cuenta de Google. Este método es instantáneo y te evita tener que verificar dos veces.
3. **Enviar el Sitemap en Bing**:
   - Ve a la sección **Sitemaps** y verifica que aparezca `https://www.eldestinoediciones.com.ar/sitemap-index.xml`. Si no es así, añádelo manualmente.

---

## Paso 3: IndexNow (Indexación en tiempo real para AEO y Buscadores)

IndexNow es un protocolo que notifica instantáneamente a buscadores (como Bing y buscadores asociados a IAs) cuando agregas un nuevo libro o modificas el sitio, reduciendo el tiempo de indexación a minutos en lugar de semanas.

1. **Generar una clave IndexNow**:
   - Ve al [Generador de Claves de IndexNow](https://www.bing.com/webmaster/indexnow) y genera una clave de verificación única.
2. **Colocar la clave en el servidor**:
   - Copia la clave generada (ej: `e8f498c8cde04fa9921b7145e128bb23`).
   - Crea un archivo de texto en tu carpeta `public/` con el nombre de esa clave y con la clave dentro.
     - *Ejemplo*: Crea el archivo `public/e8f498c8cde04fa9921b7145e128bb23.txt` y pon como único contenido la misma cadena `e8f498c8cde04fa9921b7145e128bb23`.
   - Esto le confirmará a los buscadores que eres el dueño del sitio cuando envíes señales de IndexNow.

---

## Paso 4: Google Business Profile (Crucial para GEO / SEO Local)

Dado que ofreces servicios editoriales e impresión en la Ciudad de Buenos Aires, necesitas que Google te ubique localmente.

1. Entra en [Google Business Profile](https://www.google.com/business/).
2. Registra "El Destino Ediciones" como negocio físico o de área de servicio.
3. Define tu zona de servicio como **Ciudad de Buenos Aires** (y zonas aledañas si corresponde).
4. Vincula la URL de tu web `https://www.eldestinoediciones.com.ar/` en la ficha técnica. Esto potenciará el posicionamiento de tus libros en búsquedas locales desde Argentina.

---

## Paso 5: Optimización Manual en IAs (AEO / ChatGPT / Claude / Perplexity)

Dado que las IAs recuerdan información y navegan por internet, puedes educar a los asistentes directamente:

* **Suministrar enlaces directos**: Cuando converses con ChatGPT, Claude o Gemini sobre tus libros, hazlo compartiendo los enlaces a tu sitio o a tu archivo `https://www.eldestinoediciones.com.ar/llms.txt`.
* **Rastreadores**: El archivo `llms.txt` y las directivas en `robots.txt` que implementamos le dirán a sus rastreadores automáticos exactamente cómo estructurar tu catálogo en su memoria.
