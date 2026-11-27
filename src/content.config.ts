import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
function collection(name: string) {
  return defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/' + name }),
    schema: z.object({ title: z.string(), order: z.number().default(0), poster: z.string().optional(),
      members: z.array(z.object({ group: z.enum(['幹部','分部長']), name: z.string(), role: z.string(), detail: z.string().optional(), photo: z.string(), url: z.string().optional() })).optional(),
      highlights: z.array(z.object({ title: z.string(), photo: z.string() })).optional() }),
  });
}
export const collections = { pages: collection('pages'), concerts: collection('concerts'), officers: collection('officers') };
