import { defineCollection, reference } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// News: one Markdown file per post in src/content/news → /news/<file-name>/
const news = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/news' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string(), // shown in lists, on the home page and in the RSS feed
    draft: z.boolean().default(false), // hidden from the site
  }),
});

// Research areas: one Markdown file per area → /research/<file-name>/
const animations = ['graph', 'flow', 'molecule', 'proof', 'search', 'lean'] as const;
const research = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/research' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(), // card text on /research/
    status: z.enum(['active', 'past']).default('active'),
    tags: z.array(z.string()).default([]),
    directions: z.array(z.object({ name: z.string(), text: z.string() })).default([]), // "Key directions" list
    image: z.string().optional(), // e.g. /research/my-figure.png (put the file in public/research/); replaces the animation
    animation: z.enum(animations).default('graph'), // animated thumbnail, see components/AreaAnimation.astro
    bannerAnimation: z.enum(animations).optional(), // banner on the area's own page; defaults to `animation`
    order: z.number().default(100), // lower comes first
    draft: z.boolean().default(false),
  }),
});

// Team: one Markdown file per person in src/content/team.
// Alumni are people with `alumni:` set.
const team = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/team' }),
  schema: z.object({
    name: z.string(),
    // Extra spellings used in author lists (to highlight group members on publications)
    aliases: z.array(z.string()).default([]),
    role: z.enum([
      'Principal Investigator',
      'Postdoctoral Researcher',
      'PhD Student',
      'Research Assistant',
      'Visiting Researcher',
      'External Collaborator',
      'Visiting Student',
      'Master Student',
    ]),
    affiliation: z.string().optional(), // e.g. "University of Oxford"
    topic: z.string().optional(), // PhD topic, shown under the role
    since: z.number().optional(), // year the person joined
    photo: z.string().optional(), // e.g. /team/jane-doe.jpg (put the file in public/team/); initials otherwise
    bio: z.string(),
    cosupervisors: z.array(z.string()).default([]),
    areas: z.array(reference('research')).default([]), // research areas this person works on
    links: z
      .object({
        website: z.string().optional(),
        scholar: z.string().optional(),
        github: z.string().optional(),
        x: z.string().optional(),
        linkedin: z.string().optional(),
        email: z.string().optional(),
      })
      .default({}),
    order: z.number().default(100), // lower comes first within the same role
    alumni: z
      .object({
        now: z.string().optional(), // "where are they now"
        period: z.string().optional(), // e.g. "PhD, 2018–2022"
        thesis: z.string().optional(),
        website: z.string().optional(),
      })
      .optional(),
    draft: z.boolean().default(false),
  }),
});

// Publications: one Markdown file per paper in src/content/publications.
// Mark equal contribution with a trailing "*" and joint supervision with "†" in author names.
const publications = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/publications' }),
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()),
    venue: z.string(), // e.g. "NeurIPS 2025"
    venueNote: z.string().optional(), // e.g. "Oral", "Spotlight"
    date: z.coerce.date(),
    abstract: z.string().optional(),
    areas: z.array(reference('research')).default([]),
    pdf: z.string().optional(),
    arxiv: z.string().optional(), // e.g. 2501.12345
    doi: z.string().optional(), // e.g. 10.1609/aaai.v36i7.20746
    code: z.string().optional(),
    project: z.string().optional(),
    bibtex: z.string().optional(),
    featured: z.boolean().default(false), // highlighted on research pages
    draft: z.boolean().default(false),
  }),
});

export const collections = { news, research, team, publications };
