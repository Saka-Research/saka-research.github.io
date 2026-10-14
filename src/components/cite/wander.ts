// References cited on the Wander paper page (from the paper's introduction).
import type { Ref } from './index';

export const REFS: Record<string, Ref> = {
  hollmann2023: {
    cite: 'Hollmann et al., 2023',
    ref: 'N. Hollmann, S. Müller, K. Eggensperger, F. Hutter. TabPFN: A transformer that solves small tabular classification problems in a second. ICLR, 2023.',
    url: 'https://arxiv.org/abs/2207.01848',
  },
  perozzi2014: {
    cite: 'Perozzi et al., 2014',
    ref: 'B. Perozzi, R. Al-Rfou, S. Skiena. DeepWalk: Online learning of social representations. KDD, 2014.',
    url: 'https://arxiv.org/abs/1403.6652',
  },
  grover2016: {
    cite: 'Grover & Leskovec, 2016',
    ref: 'A. Grover, J. Leskovec. node2vec: Scalable feature learning for networks. KDD, 2016.',
    url: 'https://arxiv.org/abs/1607.00653',
  },
  tonshoff2021: {
    cite: 'Tönshoff et al., 2021',
    ref: 'J. Tönshoff, M. Ritzert, H. Wolf, M. Grohe. Walking out of the Weisfeiler Leman hierarchy: Graph learning beyond message passing. TMLR, 2021.',
    url: 'https://arxiv.org/abs/2102.08786',
  },
  tan2023: {
    cite: 'Tan et al., 2023',
    ref: 'Y. Tan, Z. Zhou, H. Lv, W. Liu, C. Yang. WalkLM: A uniform language model fine-tuning framework for attributed graph embedding. NeurIPS, 2023.',
    url: 'https://neurips.cc/virtual/2023/poster/71216',
  },
  kim2025: {
    cite: 'Kim et al., 2025',
    ref: 'J. Kim, O. Zaghen, A. Suleymanzade, Y. Ryou, S. Hong. Revisiting random walks for learning on graphs. ICLR, 2025.',
    url: 'https://arxiv.org/abs/2407.01214',
  },
  kim2026: {
    cite: 'Kim et al., 2026',
    ref: 'J. Kim, X. Huang, K. Olejniczak, K. Min, M. Bronstein, S. Hong, İ. İ. Ceylan. Flock: A knowledge graph foundation model via learning on random walks. ICLR, 2026.',
    url: 'https://arxiv.org/abs/2510.01510',
  },
  finkelshtein2025: {
    cite: 'Finkelshtein et al., 2025',
    ref: 'B. Finkelshtein, İ. İ. Ceylan, M. Bronstein, R. Levie. Equivariance everywhere all at once: A recipe for graph foundation models. NeurIPS, 2025.',
    url: 'https://arxiv.org/abs/2506.14291',
  },
  eremeev2026: {
    cite: 'Eremeev et al., 2026',
    ref: 'D. Eremeev, O. Platonov, G. Bazhenov, A. Babenko, L. Prokhorenkova. GraphPFN: A prior-data fitted graph foundation model. ICML, 2026.',
    url: 'https://arxiv.org/abs/2509.21489',
  },
};
