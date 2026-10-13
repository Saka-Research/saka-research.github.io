---
title: Generative Modeling
summary: Generative models that account for the structure of data and the objectives of generation, from language and molecules to scientific dynamics and reasoning.
tags: [flow-matching, discrete-data, guidance, geometry]
order: 2
animation: flow
directions:
  - name: Discrete and categorical data
    text: "Continuous generative processes for categorical data, from the Fisher–Rao geometry of the probability simplex to generation in one or a few steps. ([↓](#pub-fisher-flow-matching,categorical-flow-maps))"
  - name: Domain structure and dynamics
    text: "Flows that incorporate the topology of the underlying domain, and the circulating and periodic dynamics of natural processes. ([↓](#pub-topological-flow-matching,curly-flow-matching))"
  - name: Controlling generation
    text: "Steering what a model generates, through noise–data couplings, topological guidance during sampling, and goals stated in natural language. ([↓](#pub-global-transport-couplings,macroguide))"
  - name: Generative models for reasoning
    text: "Recurrent computation trained through denoising, spending more computation at inference and exploring several candidate solutions. ([↓](#pub-looped-flows))"
---

We develop generative models that account for both the structure of the data and the objectives of generation. Our
work combines flow matching and diffusion with ideas from geometry, topology, and optimal transport, with applications
to language, molecular design, biological sequences, scientific dynamics, and reasoning.

Much of our work concerns discrete data, such as text, molecular graphs, and DNA sequences. Rather than generating
tokens directly, we represent discrete objects through probabilities over their categories, which turns generation into
a continuous process on the probability simplex. This brings the tools of continuous generative modelling to discrete
data: geometry gives a principled way to move between distributions ([↓](#pub-fisher-flow-matching)), flow maps make it
possible to generate in one or a few steps ([↓](#pub-categorical-flow-maps)), and existing guidance techniques can be
reused to steer sampling towards downstream objectives.

We also study how the structure of a domain should shape generation. Flows can incorporate the topology of the
underlying domain, accounting for relationships in signals such as brain activity on graphs
([↓](#pub-topological-flow-matching)). In scientific dynamics, combining population snapshots with approximate velocity
information makes it possible to learn circulating and periodic behaviour, such as the cell cycle
([↓](#pub-curly-flow-matching)).

Another focus is controlling what a model generates. We study how the coupling between noise and data affects
generation under classifier-free guidance ([↓](#pub-global-transport-couplings)), and develop methods that steer
pretrained models during sampling, for instance using persistent homology to encourage the formation of large molecular
rings and generate macrocycles ([↓](#pub-macroguide)). We also explore how objectives stated in natural language can be
distilled into a pretrained generator, using a language model as a teacher.

Finally, we view generative processes as a framework for reasoning. Training recurrent computation through denoising
objectives allows a model to spend more computation at inference time and to explore several candidate solutions from
different initial noise samples ([↓](#pub-looped-flows)). Ultimately, we aim to build generative models that are
principled, efficient, and controllable, and to use them to accelerate scientific discovery.
