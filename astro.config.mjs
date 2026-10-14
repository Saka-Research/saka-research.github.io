// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  // Final URL of the site (change this if the group moves to its own domain)
  site: 'https://sakaresearch.org',
  trailingSlash: 'ignore',
  // Publications written as .mdx (with a text body) get their own project page at /publications/<file-name>/
  integrations: [mdx()],
});
