import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const guides = defineCollection({
  loader: glob({ base: './src/content/guides', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    eyebrow: z.string().default('Guia'),
    publishedAt: z.string(),
    updatedAt: z.string(),
    gameVersion: z.string(),
    status: z.enum(['draft', 'verified', 'review']),
    sources: z.array(
      z.object({
        label: z.string(),
        url: z.url(),
      }),
    ),
  }),
});

export const collections = { guides };
