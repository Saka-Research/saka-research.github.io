# Saka Research website

Group website for Saka Research (*saka* is Turkish for goldfinch). Built with [Astro](https://astro.build). Deployed to GitHub Pages on every push to `main`.

## Run locally

```bash
npm install
npm run dev      # http://localhost:4321
```

## Edit content

Search the project for `TODO` to find every placeholder.

| What | Where |
|---|---|
| Group name, location, PI, email, social links, footer | `src/site.config.ts` |
| Home page intro & group photo | `src/pages/index.astro` (photo goes in `public/media/`) |
| Research areas | `src/content/research/*.md` (one file per area → `/research/<file>/`) |
| Team members & alumni | `src/content/team/*.md` (copy `_template.md`; photos in `public/team/`) |
| Publications | `src/content/publications/*.md` (copy `_template.md`) |
| News | `src/content/news/*.md` (copy `_template.md`) |
| Join page (positions, FAQ, email template) | `src/data/join.ts` |
| Colours & fonts | `src/styles/global.css` (`:root` tokens) |

People and publications are linked to research areas via `areas: [<research-file-name>]`; that is what fills the
"People" and "Selected Publications" sections on each research page and the filter chips on `/publications/`.
Group members are highlighted automatically in author lists (matched by `name` and `aliases`).

## Project pages for papers

A paper written as `.mdx` with a text body (e.g. `src/content/publications/wander.mdx`) gets its own page at
`/publications/<file-name>/`. Its card on the Publications, research and team pages then links to that page
(and turns red on hover) instead of showing PDF/code links. Components for such pages live in
`src/components/<paper>/`, citations in `src/components/cite/`, data files in `public/data/`.

## Pages

`/` · `/research/` · `/research/<area>/` · `/team/` · `/publications/` · `/publications/<paper>/` · `/news/` · `/news/<post>/` ·
`/archives/` · `/join/` · `/search/` · `/rss.xml`

## Deploy (GitHub Pages)

The site lives at https://sakaresearch.org (custom domain, DNS via Cloudflare set to "DNS only") and is built from the repository
`Saka-Research/saka-research.github.io`. Every push to `main` rebuilds and publishes it
(Settings → Pages → Source: GitHub Actions).

While the site is a draft, `noindex: true` in `src/site.config.ts` asks search engines not to index it.
Set it to `false` at launch.
