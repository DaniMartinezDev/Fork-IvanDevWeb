import { z, defineCollection } from "astro:content";

const articlesCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
    image: z.string(),
    description: z.string(),
  }),
});

export const collections = {
  posts: articlesCollection,
};