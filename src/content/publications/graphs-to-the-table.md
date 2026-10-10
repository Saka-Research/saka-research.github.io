---
title: "Bringing Graphs to the Table: Zero-shot Node Classification via Tabular Foundation Models"
authors: ["Adrian Hayler", "Xingyue Huang", "İsmail İlkan Ceylan", "Michael M. Bronstein", "Ben Finkelshtein"]
venue: "arXiv preprint"
date: 2025-09-08
abstract: "Graph foundation models (GFMs) have recently emerged as a promising paradigm for achieving broad generalization across various graph data. However, existing GFMs are often trained on datasets that may not fully reflect real-world graphs, limiting their generalization performance. In contrast, tabular foundation models (TFMs) not only excel at classical tabular prediction tasks but have also shown strong applicability in other domains such as time series forecasting, natural language processing, and computer vision. Motivated by this, we take an alternative view to the standard perspective of GFMs and reformulate node classification as a tabular problem. In this reformulation, each node is represented as a row with feature, structure, and label information as columns, enabling TFMs to directly perform zero-shot node classification via in-context learning. In this work, we introduce TAG, a tabular approach for graph learning that first converts a graph into a table via feature and structural encoders, applies multiple TFMs to diversely subsampled tables, and then aggregates their outputs through ensemble selection. Experiments on 28 real-world datasets demonstrate that TAG consistently improves upon task-specific GNNs and state-of-the-art GFMs, highlighting the potential of the tabular reformulation for scalable and generalizable graph learning."
areas: ["graphs-relational-learning"]
arxiv: "2509.07143"
pdf: https://arxiv.org/pdf/2509.07143
---
