import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// One Markdown file per project in src/content/projects/. `order` sets the order on the
// Projects page (lowest first).
const projects = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
    schema: z.object({
        title: z.string(),
        summary: z.string(),
        when: z.string(),
        context: z.string(),
        tech: z.array(z.string()),
        order: z.number(),
        links: z.array(z.object({ label: z.string(), url: z.string().url() })).default([]),
    }),
});

export const collections = { projects };
