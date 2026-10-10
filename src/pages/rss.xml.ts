import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { SITE } from '../site.config';
import { getNews } from '../lib/content';

export async function GET(context: APIContext) {
  const news = await getNews();
  return rss({
    title: `${SITE.name} news`,
    description: SITE.tagline,
    site: context.site!,
    items: news.map((n) => ({
      title: n.data.title,
      pubDate: n.data.date,
      description: n.data.summary,
      link: `/news/${n.id}/`,
    })),
  });
}
