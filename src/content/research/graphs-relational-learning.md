---
title: Graphs & Relational Learning
summary: Learning and reasoning over graphs, knowledge graphs, and relational databases, from the expressive power of graph neural networks to graph foundation models that transfer across graphs and tasks.
tags: [graph-foundation-models, knowledge-graphs, relational-databases, gnn-theory]
order: 1
animation: graph
directions:
  - name: Graph foundation models
    text: Single models that transfer across graphs, feature spaces, and tasks, built on equivariance and on shared interfaces such as random walks.
  - name: Knowledge graphs
    text: Inductive and zero-shot link prediction over knowledge graphs and relational hypergraphs, knowledge base completion with box embeddings, and complex query answering.
  - name: Relational deep learning
    text: Learning from relational databases and tables, including LLM agents that write interpretable SQL feature programs, and tabular foundation models for graphs.
  - name: Expressive power and theory
    text: Characterising graph neural networks through Weisfeiler-Leman tests, homomorphism counts, random node initialisation, and zero-one laws.
  - name: New architectures
    text: Cooperative GNNs, shortest path networks, planar graph networks, and learning on large graphs via intersecting communities.
---

What is the solubility of a molecule? How do certain genes interact with diseases? Which movies might users prefer
based on their profiles? How do proteins fold into their native 3D structures? How can we accurately estimate arrival
times on road networks?

These diverse questions share a common thread: they all require machine learning on structured, relational data,
including graphs (conventional or geometric), knowledge bases (such as knowledge graphs and databases), and other
relational representations. Such data is deeply embedded across domains, including the life sciences, and forms the
backbone of many high-impact real-world systems.

We focus on advancing machine learning methods for relational data. Traditionally, this has involved developing and
analysing models such as graph neural networks ([↓](#pub-cooperative-gnns)) and graph transformers
([↓](#pub-homomorphism-structural-encodings)). More recently, our work has shifted towards
foundation models for relational data: large-scale, pre-trained models that aim to replicate the success of large
language models in the graph domain, from graph foundation models ([↓](#pub-equivariance-everywhere)) and knowledge
graph foundation models ([↓](#pub-flock)) to agents that learn from relational databases ([↓](#pub-relagent)). Unlike
task-specific methods, these models are designed to generalise across tasks
and domains, making them more suitable for real-world scientific and industrial applications.

A central goal is to theoretically characterise the capabilities and limitations of existing methods, particularly in
terms of expressiveness ([↓](#pub-kgfm-expressivity)), generalisation ([↓](#pub-almost-surely-constant-gnns)), and
transferability ([↓](#pub-wander)), and to use these insights to design novel architectures from first principles
([↓](#pub-plane)). Ultimately, we aim to apply these next-generation models to high-impact scientific challenges,
making graph-based machine learning more interpretable, scalable, and reliable, especially in biology, chemistry, and
physics.
