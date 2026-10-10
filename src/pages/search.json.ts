import { getNews, getPublications, getResearch, getTeam, formatDate } from '../lib/content';

// Build-time search index, fetched by /search/.
export async function GET() {
  const [news, pubs, research, team] = await Promise.all([getNews(), getPublications(), getResearch(), getTeam()]);
  const entries = [
    ...research.map((r) => ({
      type: 'Research',
      title: r.data.title,
      url: `/research/${r.id}/`,
      text: [r.data.summary, r.data.tags.join(' '), r.body ?? ''].join(' '),
    })),
    ...[...team.current, ...team.alumni].map((m) => ({
      type: 'Team',
      title: m.data.name,
      url: `/team/#${m.id}`,
      text: [m.data.role, m.data.bio, m.data.alumni?.now ?? ''].join(' '),
    })),
    ...pubs.map((p) => ({
      type: 'Publication',
      title: p.data.title,
      url: `/publications/`,
      meta: p.data.venue,
      text: [p.data.authors.join(' '), p.data.venue, p.data.abstract ?? ''].join(' '),
    })),
    ...news.map((n) => ({
      type: 'News',
      title: n.data.title,
      url: `/news/${n.id}/`,
      meta: formatDate(n.data.date),
      text: [n.data.summary, n.body ?? ''].join(' '),
    })),
    { type: 'Page', title: 'Join the group', url: '/join/', text: 'join positions PhD postdoc visiting intern' },
  ];
  return new Response(JSON.stringify(entries), { headers: { 'Content-Type': 'application/json' } });
}
