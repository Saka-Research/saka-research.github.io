// Edit the group's details here — they are used across the whole site.
// Anything marked TODO is a placeholder that still needs real content
// (search the project for "TODO" to find all of them).
export const SITE = {
  name: 'Saka Research',
  // Shown in the browser tab after the page title, e.g. "Team | Saka Research"
  shortName: 'Saka Research',
  // Plain-text summary, used as the page description for search engines and link previews.
  tagline:
    'Saka Research is a machine learning research group led by İsmail İlkan Ceylan at TU Wien, AITHYRA, and the University of Oxford, working on relational learning, reasoning, generative AI, AI for mathematics, and AI for science.',
  // Shown above the name on the home page (from the logo)
  motto: ['Discovery', 'Reasoning', 'Generation'],
  // Where the group is based. TODO: confirm institutions and location.
  location: 'Vienna & Oxford',
  institutions: [
    { label: 'TU Wien', href: 'https://www.tuwien.at/' },
    { label: 'AITHYRA', href: 'https://www.aithyra.at/' },
    { label: 'University of Oxford', href: 'https://www.cs.ox.ac.uk/' },
  ],
  pi: {
    name: 'İsmail İlkan Ceylan',
    short: 'İsmail', // used in "Email İsmail" buttons on the Join page
    href: 'https://www.cs.ox.ac.uk/people/ismaililkan.ceylan/', // TODO: replace with personal homepage if there is one
  },
  email: 'ismail.ceylan@tuwien.ac.at',
  // Icons in the footer and on the home page. Remove entries you don't need.
  social: [
    { kind: 'x', label: 'İsmail İlkan Ceylan on X', href: 'https://x.com/ismaililkanc' },
    { kind: 'linkedin', label: 'İsmail İlkan Ceylan on LinkedIn', href: 'https://www.linkedin.com/in/ismaililkan/' },
    { kind: 'scholar', label: 'İsmail İlkan Ceylan on Google Scholar', href: 'https://scholar.google.com/citations?user=avJ5kQcAAAAJ' },
  ] as { kind: 'github' | 'x' | 'scholar' | 'bluesky' | 'linkedin'; label: string; href: string }[],
  // Small text links in the footer.
  footerLinks: [
    { label: 'TU Wien', href: 'https://www.tuwien.at/' },
    { label: 'AITHYRA', href: 'https://www.aithyra.at/' },
    { label: 'University of Oxford', href: 'https://www.cs.ox.ac.uk/' },
    { label: 'Join the group', href: '/join/' },
    { label: 'RSS', href: '/rss.xml' },
  ],
  // Number of news items per page on /news/
  newsPerPage: 8,
  // While true, search engines are asked not to index the site (draft phase). Set to false at launch.
  noindex: true,
};

// Top navigation
export const NAV = [
  { href: '/research/', label: 'Research' },
  { href: '/team/', label: 'Team' },
  { href: '/publications/', label: 'Publications' },
  { href: '/news/', label: 'News' },
  { href: '/join/', label: 'Join' },
];
