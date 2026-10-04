import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Every article file lives in src/content/articles/. The front-matter schema
// below is the single source of truth for what Wren must (and may) provide.
const articles = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/articles" }),
  schema: z.object({
    title: z.string().min(3),
    description: z.string().min(10).max(300),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    keywords: z.array(z.string()).default([]),
    /** Set true when the article carries affiliate links — the layout then renders the FTC disclosure. */
    affiliate: z.boolean().default(false),
    ogImage: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { articles };
