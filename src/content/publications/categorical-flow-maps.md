---
title: "Categorical Flow Maps"
authors: ["Daan Roos", "Oscar Davis", "Floor Eijkelboom", "Michael M. Bronstein", "Max Welling", "İsmail İlkan Ceylan", "Luca Ambrogioni", "Jan-Willem van de Meent"]
venue: "ICML 2026"
date: 2026-07-06
abstract: "We introduce Categorical Flow Maps, a flow-matching method for accelerated few-step generation of categorical data via self-distillation. Building on recent variational formulations of flow matching and the broader trend towards accelerated inference in diffusion and flow-based models, we define a flow map towards the simplex that transports probability mass toward a predicted endpoint, yielding a parametrisation that naturally constrains model predictions. Since our trajectories are continuous rather than discrete, Categorical Flow Maps can be trained with existing distillation techniques, as well as a new objective based on endpoint consistency. This continuous formulation also automatically unlocks test-time inference: we can directly reuse existing guidance and reweighting techniques in the categorical setting to steer sampling toward downstream objectives. Empirically, we achieve state-of-the-art few-step results on images, molecular graphs, and text, with strong performance even in single-step generation."
areas: ["generative-modeling"]
arxiv: "2602.12233"
pdf: https://arxiv.org/pdf/2602.12233
featured: true
---
