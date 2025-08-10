import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const pages = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/pages" }),
  //   schema: z.object({
  //     title: z.string(),
  //     permalink: z.string().optional(),
  //   }),
});

// Expose your defined collection to Astro
// with the `collections` export
export const collections = { pages };
