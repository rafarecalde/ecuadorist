import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const articles = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/articles" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    section: z.enum(["visit", "retire", "eat", "do"]),
    kicker: z.string(),
    dek: z.string(),
    published: z.coerce.date(),
    updated: z.coerce.date(),
    hero: z.string(),
    related: z.array(z.string()).default([]),
    trip: z.array(z.string()).default([]),
    tripNote: z.string().optional(),
    disclaimer: z.boolean().default(false),
    order: z.number().default(50),
  }),
});

export const collections = { articles };
