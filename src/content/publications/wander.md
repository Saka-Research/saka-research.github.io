---
title: "To Learn is to Wander: Learning Across Graphs and Tasks with Random Walks"
authors: ["Louis Tichelman", "Xingyue Huang", "Jinwoo Kim", "İsmail İlkan Ceylan"]
venue: arXiv preprint
date: 2026-10-05
abstract: "Graph foundation models aim to transfer across graphs, feature spaces, relational schemas, and prediction tasks, yet existing approaches typically generalize only within particular graph modalities or tasks. We propose Wander, a graph foundation model designed to operate across these settings within a single pretrained checkpoint. Following the prior-predictive perspective, we formulate graph learning as completion of a partially observed graph. We realize this task-general view through a common interface based on random walks, allowing the same model to operate across homogeneous and multi-relational graphs with varying features, labels, and relational schemas. Wander can increase its structural context at inference time without changing its learned parameters and, under suitable assumptions, universally approximates the corresponding Bayes-optimal predictor on bounded connected graphs. Empirically, a single pretrained checkpoint achieves state-of-the-art or highly competitive results across node classification, homogeneous link prediction, and knowledge-graph link prediction. Moreover, joint pretraining across graph modalities and tasks preserves performance in specialized settings while enabling positive transfer and the composition of separately learned capabilities at inference time."
areas: ["graphs-relational-learning"]
arxiv: "2610.06694"
pdf: https://arxiv.org/pdf/2610.06694
code: https://github.com/louistichelman/wander-gfm
featured: true
bibtex: |
  @article{tichelman2026wander,
    title   = {To Learn is to Wander: Learning Across Graphs and Tasks with Random Walks},
    author  = {Tichelman, Louis and Huang, Xingyue and Kim, Jinwoo and Ceylan, {\.I}smail {\.I}lkan},
    journal = {arXiv preprint arXiv:2610.06694},
    year    = {2026}
  }
---
