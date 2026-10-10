---
title: "Shortest Path Networks for Graph Property Prediction"
authors: ["Ralph Abboud", "Radoslav Dimitrov", "İsmail İlkan Ceylan"]
venue: "Learning on Graphs Conference (LoG) 2022"
date: 2022-12-09
abstract: "Most graph neural network models rely on a particular message passing paradigm, where the idea is to iteratively propagate node representations of a graph to each node in the direct neighborhood. While very prominent, this paradigm leads to information propagation bottlenecks, as information is repeatedly compressed at intermediary node representations, which causes loss of information, making it practically impossible to gather meaningful signals from distant nodes. To address this, we propose shortest path message passing neural networks, where the node representations of a graph are propagated to each node in the shortest path neighborhoods. In this setting, nodes can directly communicate between each other even if they are not neighbors, breaking the information bottleneck and hence leading to more adequately learned representations. Our framework generalizes message passing neural networks, resulting in a class of more expressive models, including some recent state-of-the-art models. We verify the capacity of a basic model of this framework on dedicated synthetic experiments, and on real-world graph classification and regression benchmarks, and obtain state-of-the art results."
areas: ["graphs-relational-learning"]
arxiv: "2206.01003"
pdf: https://arxiv.org/pdf/2206.01003
---
