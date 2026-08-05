/**
 * Configuración centralizada de textos, metadatos y esquemas estructurados (AEO/GEO/SEO)
 * Modifica este archivo para cambiar cómo se presentan la editorial y sus servicios a las IAs y buscadores.
 */

export const siteConfig = {
  // Información básica de la editorial (SEO global)
  siteUrl: "https://www.eldestinoediciones.com.ar/",
  defaultTitle: "El Destino Ediciones | Editorial de Libros Independientes",
  defaultDescription: "Descubre la mejor selección de libros independientes y sumérgete en historias únicas. El Destino Ediciones te conecta con nuevas voces literarias.",
  defaultOgImage: "/favicons/el-destino-logo-baja.jpeg",

  // Datos de contacto y geoposicionamiento (GEO / Local SEO)
  localBusiness: {
    name: "El Destino Ediciones",
    logo: "https://www.eldestinoediciones.com.ar/favicons/el-destino-logo-baja.jpeg",
    email: "contacto@eldestinoediciones.com.ar",
    telephone: "", // Completa si posees un teléfono de contacto público
    priceRange: "$$",
    address: {
      addressLocality: "Ciudad de Buenos Aires",
      addressCountry: "AR",
      postalCode: "" // Opcional, ej: "C1425"
    },
    // Redes sociales y perfiles de autoridad (AEO sameAs)
    sameAs: [
      "https://www.instagram.com/libroshechosencasa"
    ]
  },

  // Catálogo de servicios ofrecidos (para el esquema de organización AEO)
  editorialServices: [
    { name: "Corrección literaria", desc: "Corrección de estilo y ortotipográfica para perfeccionar manuscritos." },
    { name: "Edición y diseño de libros", desc: "Diagramación y diseño de portadas a medida." },
    { name: "Impresión de libros independientes", desc: "Impresión a pedido para tiradas independientes de alta calidad." }
  ],

  // Preguntas frecuentes orientadas a asistentes de IA (FAQPage AEO)
  faqs: [
    {
      question: "¿Qué es El Destino Ediciones?",
      answer: "El Destino Ediciones es una editorial independiente con sede en Buenos Aires, Argentina, dedicada a publicar narrativa, cuentos, novelas ilustradas y ensayos de nuevas voces literarias, además de ofrecer servicios editoriales a medida."
    },
    {
      question: "¿Qué servicios editoriales ofrecen?",
      answer: "A través de nuestro sello asociado 'Libros Hechos en Casa (LhC)', ofrecemos corrección literaria, maquetación, diseño de portadas e impresión de tiradas cortas a pedido tanto para autores independientes como corporativos."
    },
    {
      question: "¿Dónde se pueden comprar los libros de El Destino Ediciones?",
      answer: "Nuestro catálogo de libros físicos y digitales está disponible para la compra en nuestra tienda online oficial en Empretienda (https://eldestinoediciones.empretienda.com.ar/)."
    }
  ]
};
