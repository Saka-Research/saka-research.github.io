---
title: Generative Modeling
summary: "Flow matching and diffusion models for discrete and structured data: making them principled, fast, and controllable, and using them for reasoning and scientific design."
tags: [flow-matching, discrete-data, guidance, geometry]
order: 2
animation: flow
directions:
  - name: Discrete and categorical data
    text: "Flow matching over categorical data, from the geometry of the probability simplex to few-step generation with flow maps. ([↓](#pub-fisher-flow-matching,categorical-flow-maps))"
  - name: Geometry and topology
    text: "Generative models that account for the geometric and topological structure of the space the data lives on. ([↓](#pub-fisher-flow-matching,topological-flow-matching))"
  - name: Guidance
    text: "Steering pretrained models towards desired properties, through transport couplings, structural constraints, and goals stated in natural language. ([↓](#pub-global-transport-couplings,macroguide))"
  - name: Generative models for reasoning
    text: "Flow-based models that solve reasoning problems, spending more computation on harder ones and returning several valid solutions. ([↓](#pub-looped-flows))"
  - name: Scientific applications
    text: "Designing DNA sequences and macrocyclic molecules, and learning the dynamics of cells from population snapshots. ([↓](#pub-fisher-flow-matching,macroguide,curly-flow-matching))"
---

We develop generative models based on flow matching and diffusion, with a particular interest in data that does not fit
naturally into Euclidean space. Much of our work concerns discrete and categorical data, such as biological sequences, molecular graphs, and text,
where diffusion and flow models have long lagged behind their continuous counterparts. We approach this through
geometry, designing flows that respect the structure of the probability simplex ([↓](#pub-fisher-flow-matching)), and
make them fast enough to generate in one or a few steps ([↓](#pub-categorical-flow-maps)). The same perspective extends
to signals on domains with topological structure, such as brain activity on graphs
([↓](#pub-topological-flow-matching)).

A second theme is guidance: steering a pretrained model towards samples with the properties we care about. We study how
the choice of coupling affects guided generation ([↓](#pub-global-transport-couplings)), how topological constraints can
lead a model towards rare classes of molecules such as macrocycles ([↓](#pub-macroguide)), and how objectives stated in
natural language can be distilled into a scientific generator, using a language model as a teacher.

Generative models can also be used to reason. Looped models tackle harder problems by repeatedly refining a hidden
state, but are hard to train. Looped flows recast this recurrence as a probability flow trained with denoising objectives:
they can spend more computation on a harder problem simply by taking more steps, and can return several valid solutions
from different noise samples, reaching state-of-the-art results on reasoning benchmarks such as ARC-AGI
([↓](#pub-looped-flows)).

Throughout, our work is driven by scientific applications, from designing DNA regulatory sequences and drug-like
molecules to modelling how cells change over time from population snapshots ([↓](#pub-curly-flow-matching)).
