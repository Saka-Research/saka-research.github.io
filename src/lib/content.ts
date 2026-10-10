import { getCollection, type CollectionEntry } from 'astro:content';

export type News = CollectionEntry<'news'>;
export type Research = CollectionEntry<'research'>;
export type Member = CollectionEntry<'team'>;
export type Publication = CollectionEntry<'publications'>;

const byDateDesc = (a: { data: { date: Date } }, b: { data: { date: Date } }) =>
  b.data.date.valueOf() - a.data.date.valueOf();

export async function getNews() {
  return (await getCollection('news', (n) => !n.data.draft)).sort(byDateDesc);
}

export async function getResearch() {
  return (await getCollection('research', (r) => !r.data.draft)).sort(
    (a, b) => a.data.order - b.data.order || a.data.title.localeCompare(b.data.title),
  );
}

export async function getPublications() {
  return (await getCollection('publications', (p) => !p.data.draft)).sort(byDateDesc);
}

// Order in which roles are listed on the team page
export const ROLE_ORDER = [
  'Principal Investigator',
  'Postdoctoral Researcher',
  'PhD Student',
  'Research Assistant',
  'Visiting Researcher',
  'External Collaborator',
  'Visiting Student',
  'Master Student',
] as const;

export async function getTeam() {
  const all = await getCollection('team', (m) => !m.data.draft);
  const sort = (a: Member, b: Member) =>
    ROLE_ORDER.indexOf(a.data.role) - ROLE_ORDER.indexOf(b.data.role) ||
    a.data.order - b.data.order ||
    a.data.name.localeCompare(b.data.name);
  return {
    current: all.filter((m) => !m.data.alumni).sort(sort),
    alumni: all.filter((m) => m.data.alumni).sort((a, b) => a.data.name.localeCompare(b.data.name)),
  };
}

/** Names (and aliases) of everyone on the team, used to highlight group members in author lists. */
export async function getMemberNames() {
  const all = await getCollection('team', (m) => !m.data.draft);
  return new Set(all.flatMap((m) => [m.data.name, ...m.data.aliases].map(normalizeName)));
}

/** Strips equal-contribution / supervision markers and accents so names compare reliably. */
export function normalizeName(name: string) {
  return name
    .replace(/[*†‡]/g, '')
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/ı/g, 'i')
    .trim()
    .toLowerCase();
}

export function formatDate(d: Date) {
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' }).replace(/ (\d{4})$/, ', $1');
}

export function formatMonth(d: Date) {
  return d.toLocaleDateString('en-GB', { month: 'long', year: 'numeric', timeZone: 'UTC' });
}

export function initials(name: string) {
  const parts = name.split(/\s+/).filter(Boolean);
  return ((parts[0]?.[0] ?? '') + (parts.length > 1 ? parts[parts.length - 1][0] : '')).toUpperCase();
}
