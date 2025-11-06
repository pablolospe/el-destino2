import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function get() {
  const posts = await getCollection('posts');
  return rss({
    title: 'El Destino Ediciones | Blog',
    description: 'Descubre la mejor selección de libros independientes y sumérgete en historias únicas. El Destino Ediciones te conecta con nuevas voces literarias.',
    site: 'https://www.eldestinoediciones.com.ar',
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/posts/${post.slug}/`,
    })),
    customData: `<language>es-ar</language>`,
  });
}