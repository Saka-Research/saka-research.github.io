---
title: "Global Transport Couplings for Classifier-Free Guided Flows"
authors: ["Katarina Petrović", "Zander W. Blasingame", "Danyal Rehman", "İsmail İlkan Ceylan", "Michael M. Bronstein", "Stephen Y. Zhang", "Lazar Atanackovic", "Alexander Tong"]
venue: "arXiv preprint"
date: 2026-10-06
abstract: "Optimal-transport couplings have been shown to reduce training variance in unconditional flow models, but their role in conditional generation remains unclear. A natural approach constructs separate couplings for each condition, but this is impractical for large or continuous conditioning spaces found in modern image foundation models. We introduce Global Transport (GT), a global class-agnostic optimal-transport coupling, computed without class labels. GT can associate different conditions with different regions of the source noise, and consequently worsens performance without guidance. However, when combined with classifier-free guidance (CFG), GT consistently improves generation across domains, model scales, and sampling budgets. This reversal suggests that couplings for conditional flows should be evaluated both empirically and theoretically under the guided flow used at inference, rather than on unguided generation. We evaluate GT over both discrete class and continuous text conditioned image generation across model scales, and investigate how coupling choice alters guided trajectories. These results identify coupling design in the guided flow setting as a simple training time axis to improve performance without modifying existing architectures, samplers, or guidance mechanisms."
areas: ["generative-modeling"]
arxiv: "2610.07555"
pdf: https://arxiv.org/pdf/2610.07555
---
