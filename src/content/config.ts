import { z, defineCollection } from "astro:content";

const articlesCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    createdAt: z.string(),
    updatedAt: z.string(),
    image: z.string(),
  }),
});

export const collections = {
  posts: articlesCollection,
};