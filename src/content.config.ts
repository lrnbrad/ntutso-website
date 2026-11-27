import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
function collection(name: string) {
  return defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/' + name }),
    schema: z.object({ title: z.string(), order: z.number().default(0), poster: z.string().optional() }),
  });
}
export const collections = { pages: collection('pages'), concerts: collection('concerts'), officers: collection('officers') };
