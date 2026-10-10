---
title: "Approximate weighted model integration on DNF structures"
authors: ["Ralph Abboud", "İsmail İlkan Ceylan", "Radoslav Dimitrov"]
venue: "Artificial Intelligence (journal)"
date: 2022-06-29
abstract: "Weighted model counting consists of computing the weighted sum of all satisfying assignments of a propositional formula. Weighted model counting is well-known to be #P-hard for exact solving, but admits a fully polynomial randomized approximation scheme when restricted to DNF structures. In this work, we study weighted model integration, a generalization of weighted model counting which involves real variables in addition to propositional variables, and pose the following question: Does weighted model integration on DNF structures admit a fully polynomial randomized approximation scheme? Building on classical results from approximate weighted model counting and approximate volume computation, we show that weighted model integration on DNF structures can indeed be approximated for a class of weight functions. Our approximation algorithm is based on three subroutines, each of which can be a weak (i.e., approximate), or a strong (i.e., exact) oracle, and in all cases, comes along with accuracy guarantees. We experimentally verify our approach over randomly generated DNF instances of varying sizes, and show that our algorithm scales to large problem instances, involving up to 1K variables, which are currently out of reach for existing, general-purpose weighted model integration solvers."
areas: ["reasoning"]
doi: "10.1016/j.artint.2022.103753"
---
