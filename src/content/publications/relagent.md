---
title: "RelAgent: LLM Agents as Data Scientists for Relational Learning"
authors: ["Xingyue Huang", "Louis Tichelman", "Jinwoo Kim", "Krzysztof Olejniczak", "İsmail İlkan Ceylan"]
venue: NeurIPS 2026
date: 2026-12-01
abstract: "Relational learning is a challenging problem that has motivated a wide range of approaches, including graph-based models (e.g., graph neural networks, graph transformers), tabular methods (e.g., tabular foundation models), and sequence-based approaches (e.g., large language models), each with its own advantages and limitations. We propose RelAgent, an LLM-based autonomous data scientist for relational learning, which operates in two phases. In the search phase, an LLM agent uses database, validation, and evaluation workspace tools to construct SQL feature programs and select a predictive model. In the inference phase, the resulting program is executed without further LLM calls. The final predictor consists of SQL queries and a classical model, enabling fast, deterministic, and intrinsically interpretable predictions: features are human-readable queries, and predictions depend only on the resulting query-defined feature map, enabling scalable deployment using standard database systems."
areas: ["graphs-relational-learning", "llm-agents"]
arxiv: "2605.07840"
pdf: https://arxiv.org/pdf/2605.07840
code: https://anonymous.4open.science/r/RelAgent
featured: true
bibtex: |
  @inproceedings{huang2026relagent,
    title     = {RelAgent: LLM Agents as Data Scientists for Relational Learning},
    author    = {Huang, Xingyue and Tichelman, Louis and Kim, Jinwoo and Olejniczak, Krzysztof and Ceylan, {\.I}smail {\.I}lkan},
    booktitle = {Advances in Neural Information Processing Systems (NeurIPS)},
    year      = {2026}
  }
---
