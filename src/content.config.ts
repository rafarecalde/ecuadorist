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
    expat: z.array(z.string()).default([]),
    expatAffiliate: z.array(z.string()).default([]),
    expatNote: z.string().optional(),
    disclaimer: z.boolean().default(false),
    order: z.number().default(50),
  }),
});

const news = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/news" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
    dek: z.string(),
    hero: z.string(),
    items: z
      .array(
        z.object({
          headline: z.string(),
          photo: z.string(),
          text: z.string(),
          take: z.string(),
          sources: z.array(z.object({ name: z.string(), url: z.string().url() })).min(1),
          guide: z.object({ href: z.string(), label: z.string() }).optional(),
          partners: z.array(z.string()).default([]),
        }),
      )
      .min(5)
      .max(7),
  }),
});

export const collections = { articles, news };
