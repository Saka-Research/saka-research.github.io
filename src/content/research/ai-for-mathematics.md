---
title: AI for Mathematics
summary: Structure-aware machine learning for formal theorem proving in Lean, and broader mathematical reasoning.
tags: [theorem-proving, Lean, formal-mathematics, llms, symmetry, reasoning]
order: 4
animation: proof
bannerAnimation: lean
directions:
  - name: Structural symmetries for Lean theorem proving
    text: Defining and formalising the symmetries that models generating Lean proofs should respect, e.g. related to semantic equivalence of theorems and of proof states.
  - name: Structural biases for formal provers
    text: Overcoming the limits of large language models in formal proof, such as syntactic sensitivity and weak state tracking, by building in the right structural biases.
  - name: Alternative modelling paradigms
    text: Replacing text-based Transformers with architectures that respect the symmetries of mathematical expressions and generalise across proof concepts.
---

Formal languages such as [Lean](https://lean-lang.org/) made proofs machine-checkable: a theorem is established only when every step is correct. Treating theorem proving as the generation of that code has given large language models a real route into formalising mathematics.
However, unlike most languages, natural or programming, Lean is very strict and allows little flexibility, because every line of an argument has to be mathematically sound. That creates a hard environment for LLMs, which in other domains can use exactly that freedom.
Even as these models improve, they still read theorems and proofs as text. Small changes in wording can throw them off, and that syntactic sensitivity can get in the way of the structures and symmetries underneath a statement.

We study how that underlying structure can be built into the proving process, so that the resulting systems carry the structural biases we want and respect symmetries that mathematicians recognise naturally.
