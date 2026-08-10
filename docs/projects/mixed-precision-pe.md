---
title: Mixed-Precision ANN/SNN Processing Element
description: 混合精度 ANN/SNN 处理单元项目档案
---

# Mixed-Precision ANN/SNN Processing Element

<span class="project-label">BF16</span> <span class="project-label">INT8</span> <span class="project-label">SNN</span> <span class="project-label">RTL</span>

!!! warning "内容待补充"
    本页目前是结构化项目模板。未提供真实项目材料的部分统一标记为 `TBD`，不代表已经完成或验证。

## Overview

TBD：用 2～4 句话说明项目目标、应用场景以及最终交付物。

## Motivation

TBD：说明为什么需要混合精度或 ANN/SNN 异构计算，以及设计要解决的核心问题。

## Architecture

```mermaid
flowchart LR
    Input[Input Buffer] --> Decode[Mode / Precision Control]
    Decode --> PE[Processing Element]
    PE --> Acc[Accumulator]
    Acc --> Output[Output Buffer]
```

上图仅用于展示文档中的架构图能力，请根据真实设计替换模块和数据流。

## Metrics

<div class="metrics-grid">
  <div><span>Precision</span><strong>TBD</strong></div>
  <div><span>Target</span><strong>TBD</strong></div>
  <div><span>Language</span><strong>TBD</strong></div>
  <div><span>Verification</span><strong>TBD</strong></div>
</div>

## Key Features

- TBD：支持的数据格式与工作模式；
- TBD：数据复用或计算单元设计；
- TBD：流水线和控制策略。

## My Work

TBD：只填写本人真实负责的设计、验证和实现工作。

## Processing Element

TBD：补充 PE 结构、运算路径、数据格式转换和边界情况处理。

## Pipeline

TBD：补充流水级、握手关系、延迟与吞吐分析。

## Verification

TBD：补充 testbench、参考模型、覆盖场景、波形和结果检查方法。

## Synthesis & FPGA Implementation

| Metric | Result |
| --- | --- |
| Frequency | TBD |
| LUT / Area | TBD |
| FF | TBD |
| DSP | TBD |
| BRAM / SRAM | TBD |

## Gallery

TBD：将架构图、RTL Viewer、验证波形和板级照片放入 `docs/assets/images/projects/` 后在此引用。

## Repository

TBD：确认仓库公开后再添加链接。

[← 返回 Projects](index.md)
