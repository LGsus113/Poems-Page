import { defineCollection, z } from "astro:content";

const poems = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string(),
    img: z.string(),
  }),
});

export const collentions = {
  poems,
};
