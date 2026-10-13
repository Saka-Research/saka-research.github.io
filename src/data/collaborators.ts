// Long-term collaborators, shown on the Team page. Each name links to the person's Google Scholar profile.
// Affiliations are taken from the Scholar profiles; keep them short.
const scholar = (id: string) => `https://scholar.google.com/citations?user=${id}`;

export const COLLABORATORS = [
  { name: 'Michael Bronstein', affiliation: 'University of Oxford & AITHYRA', href: scholar('UU3N6-UAAAAJ') },
  { name: 'Alexander Tong', affiliation: 'AITHYRA', href: scholar('CS80pt4AAAAJ') },
  { name: 'Avishek Joey Bose', affiliation: 'Imperial College London', href: scholar('ybPyI7IAAAAJ') },
  { name: 'Haggai Maron', affiliation: 'Technion & NVIDIA', href: scholar('4v8uJrIAAAAJ') },
  { name: 'Xiaowen Dong', affiliation: 'University of Oxford', href: scholar('_8tUq8kAAAAJ') },
  { name: 'Jinwoo Kim', affiliation: 'KAIST', href: scholar('kSJAiE4AAAAJ') },
  { name: 'Seunghoon Hong', affiliation: 'KAIST', href: scholar('hvr3ALkAAAAJ') },
  { name: 'Floris Geerts', affiliation: 'University of Antwerp', href: scholar('SGay8u4AAAAJ') },
  { name: 'Pablo Barceló', affiliation: 'PUC Chile', href: scholar('9OH3PokAAAAJ') },
  { name: 'Matthias Lanzinger', affiliation: 'TU Wien', href: scholar('XAR1lVUAAAAJ') },
];
