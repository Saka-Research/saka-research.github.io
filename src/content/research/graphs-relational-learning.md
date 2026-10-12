---
title: Graphs & Relational Learning
summary: Learning and reasoning over graphs, knowledge graphs, and relational databases, from the expressive power of graph neural networks to graph foundation models that transfer across graphs and tasks.
tags: [graph-foundation-models, knowledge-graphs, relational-databases, gnn-theory]
order: 1
animation: graph
directions:
  - name: Generalization across graphs
    text: "What architectures transfer across feature and label spaces, and which experience or prior knowledge enables transfer? ([↓](#pub-wander,equivariance-everywhere,flock,hyper,graphs-to-the-table))"
  - name: Probabilistic equivariance
    text: "Softening the deterministic equivariance requirement of typical GNNs to a probabilistic one, for higher expressiveness and more flexibility. ([↓](#pub-flock,wander,random-node-initialization))"
  - name: Agentic frameworks
    text: "Reasoning over a relational structure from outside of it, instead of using the structure as the computational graph. ([↓](#pub-relagent))"
  - name: Expressive power and theory
    text: "What graph neural networks and graph foundation models can and cannot express, and how they behave in the limit. ([↓](#pub-kgfm-expressivity,relational-weisfeiler-leman,homomorphism-basis,homomorphism-structural-encodings,almost-surely-constant-gnns,random-node-initialization))"
---

What is the solubility of a molecule? How do certain genes interact with diseases? Which movies might users prefer
based on their profiles? How do proteins fold into their native 3D structures? How can we accurately estimate arrival
times on road networks?

These diverse questions share a common thread: they all require machine learning on structured, relational data,
including graphs (conventional or geometric), knowledge bases (such as knowledge graphs and databases), and other
relational representations. Such data is deeply embedded across domains, including the life sciences, and forms the
backbone of many high-impact real-world systems.

We focus on advancing machine learning methods for relational data. Traditionally, this has involved developing and
analysing models such as graph neural networks ([↓](#pub-cooperative-gnns,intersecting-communities,shortest-path-networks))
and graph transformers ([↓](#pub-homomorphism-structural-encodings)). More recently, our work has shifted towards foundation
models for relational data ([↓](#pub-wander,flock,equivariance-everywhere)): large-scale, pre-trained models that aim to
replicate the success of large language models in the graph domain. Unlike task-specific methods, these models are
designed to generalise across tasks and domains, making them more suitable for real-world scientific and industrial
applications.

A central goal is to theoretically characterise the capabilities and limitations of existing methods, particularly in
terms of expressiveness ([↓](#pub-kgfm-expressivity,relational-weisfeiler-leman,random-node-initialization,homomorphism-basis)),
generalisation ([↓](#pub-almost-surely-constant-gnns)), and transferability ([↓](#pub-hyper,graphs-to-the-table)), and to use these
insights to design novel architectures from first principles ([↓](#pub-plane,cooperative-gnns)). Ultimately, we aim to apply
these next-generation models to high-impact scientific challenges, making graph-based machine learning more
interpretable, scalable, and reliable, especially in biology, chemistry, and physics.
