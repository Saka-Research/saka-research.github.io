---
title: "One Model, Any Conjunctive Query: Graph Neural Networks for Answering Queries over Incomplete Knowledge Graphs"
authors: ["Krzysztof Olejniczak", "Xingyue Huang", "Mikhail Galkin", "İsmail İlkan Ceylan"]
venue: "Learning on Graphs Conference (LoG) 2025"
date: 2025-12-10
abstract: "Motivated by the incompleteness of modern knowledge graphs, a new setup for query answering has emerged, where the goal is to predict answers that do not necessarily appear in the knowledge graph, but are present in its completion. In this paper, we formally introduce and study two query answering problems, namely, query answer classification and query answer retrieval. To solve these problems, we propose AnyCQ, a model that can classify answers to any conjunctive query on any knowledge graph. At the core of our framework lies a graph neural network trained using a reinforcement learning objective to answer Boolean queries. Trained only on simple, small instances, AnyCQ generalizes to large queries of arbitrary structure, reliably classifying and retrieving answers to queries that existing approaches fail to handle. This is empirically validated through our newly proposed, challenging benchmarks. Finally, we empirically show that AnyCQ can effectively transfer to completely novel knowledge graphs when equipped with an appropriate link prediction model, highlighting its potential for querying incomplete data."
areas: ["graphs-relational-learning", "reasoning"]
arxiv: "2409.13959"
pdf: https://arxiv.org/pdf/2409.13959
featured: true
---
