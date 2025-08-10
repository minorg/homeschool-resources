import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const pages = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/pages" }),
  schema: z.object({
    title: z.string(),
  }),
});

const resources = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/resources" }),
  schema: z.object({
    audience: z.enum(["adult", "child"]),
    description: z.string().optional(),
    order: z.number().optional(),
    title: z.string(),
    type: z.enum(["book"]),
  }),
});

export const collections = { pages, resources };
