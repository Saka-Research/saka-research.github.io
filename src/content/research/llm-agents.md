---
title: LLM Agents
summary: Language model agents that explore, write code, and learn from feedback to build models that then run on their own, from relational databases to scientific discovery.
tags: [llm-agents, relational-databases, curriculum-learning, scientific-generators]
order: 6
animation: agent
directions:
  - name: Agents as data scientists
    text: "LLM agents that induce SQL feature programs over a relational database from execution and validation feedback, yielding predictors that run without further LLM calls. ([↓](#pub-relagent))"
  - name: Language models as teachers
    text: "Language models that construct intermediate scientific goals and preference judgements, distilling natural-language objectives into pretrained generators for peptides and small molecules."
  - name: Adaptive curricula and environment design
    text: "Curricula of goals, tools, and environments that adapt to an agent's progress, making hard tasks attainable and the acquired capabilities reusable."
---

Which customers are likely to leave, given years of transactions spread across dozens of database tables? Which peptide
will bind a given protein, or which small molecule is both potent and easy to make? How should a hard scientific problem
be broken into steps that can actually be solved?

These diverse problems share a common thread: they are open-ended, and no single model solves them in one shot.
Language models are well placed to explore them, as they bring broad knowledge and the ability to write code and judge
results. Yet calling a language model for every prediction or every sample is slow, costly, and hard to trust. We
therefore use language model agents as a search tool: they construct intermediate objects, such as programs, features,
or goals, and refine them with feedback from execution and validation, while the final predictions and generations are
delegated to models that no longer need the language model at inference time.

For relational data, agents act as data scientists, inducing SQL feature programs over a database; the resulting
predictor consists of queries and a classical model, and is fast, deterministic, and intrinsically interpretable
([↓](#pub-relagent)). For scientific design, language models act as teachers, constructing intermediate goals and
preference judgements that align pretrained generators, such as flow models for peptides and small molecules, with
objectives stated in natural language; the aligned generator then samples on its own.

In all of these settings, the task the agent faces changes as it makes progress. A central goal is to understand how
curriculum learning and environment design can make hard tasks attainable, by shaping the goals, tools, and feedback an
agent receives, and when progress along a curriculum reflects reusable capabilities rather than gains on the task at
hand. Ultimately, we aim to use these systems to accelerate scientific discovery, especially in the life sciences.
