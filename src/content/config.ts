import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
    schema: z.object({
      title: z.string(),
      subtitle: z.string().optional(),
      type: z.string().optional(),
      pubDate: z.date(),
      description: z.string(),
      pages: z.string(),
      size: z.string(),
      bookbinding: z.string(),
      author: z.string(),
      bio: z.string().optional(),

      image: z.object({
        url: z.string(),
        alt: z.string()
      }),

      portrait: z.object({
        url: z.string(),
        alt: z.string()
      }).optional(),

      tags: z.array(z.string()),
      tienda: z.string(),
    })
 });

export const collections = {
  posts: postsCollection,
};