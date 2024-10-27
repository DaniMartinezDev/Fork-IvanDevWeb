import { z, defineCollection } from "astro:content";

const articlesCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
    image: z.string(),
    description: z.string(),
    author: z.string(),
    publish: z.boolean(),
  }),
});

const docsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
    topic: z.string(),
  }),
});

export const collections = {
  posts: articlesCollection,
};

export const collectionsDocs = {
  docs: docsCollection,
};
