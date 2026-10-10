# Saka Research website

Group website for Saka Research (*saka* is Turkish for goldfinch). Built with [Astro](https://astro.build),
same fonts and colours as the personal website. Deployed to GitHub Pages on every push to `main`.

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

## Pages

`/` · `/research/` · `/research/<area>/` · `/team/` · `/publications/` · `/news/` · `/news/<post>/` ·
`/archives/` · `/join/` · `/search/` · `/rss.xml`

## Deploy (GitHub Pages)

The site lives at https://saka-research.github.io and is built from the repository
`Saka-Research/saka-research.github.io`. Every push to `main` rebuilds and publishes it
(Settings → Pages → Source: GitHub Actions).

While the site is a draft, `noindex: true` in `src/site.config.ts` asks search engines not to index it.
Set it to `false` at launch.
