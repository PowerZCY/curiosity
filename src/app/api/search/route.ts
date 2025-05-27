import { blogSource } from '@/lib/source';
import { createSearchAPI } from 'fumadocs-core/search/server';
 
export const { GET } = createSearchAPI('advanced', {
  indexes: blogSource.getLanguages().flatMap(({ pages }) =>
    pages
      .filter(page => typeof page.data.title === 'string' && page.data.title.length > 0)
      .map((page) => ({
        title: page.data.title as string,
        description: page.data.description,
        url: page.url,
        keywords: (page.data.keywords || []).join(' '),
        structuredData: page.data.structuredData,
        id: page.url,
      })),
  ),
});