---
title: "New preprint: Thinking with Looped Flows"
date: 2026-09-10
summary: "Looped flows train recurrent models with local denoising objectives, so that extra computation at inference time can help solve harder problems."
---

In [Thinking with Looped Flows](https://arxiv.org/abs/2609.11801), led by Ayhan Suleymanzade, we propose looped flows: recurrent models trained with local denoising objectives at decreasing noise levels, so that their hidden states carry useful computation forward even when gradients only cover a few updates. Inference then becomes integrating a probability flow coupled with these recurrent states.
