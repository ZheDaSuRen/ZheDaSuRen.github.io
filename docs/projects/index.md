---
title: 项目
description: 数字 IC、FPGA 与 AI 加速器项目档案
---

# Projects

这里用于系统记录数字 IC、FPGA、计算机体系结构与 AI 加速器方向的项目。项目页重点展示从问题定义到实现验证的完整技术过程。

!!! info "当前状态"
    下列页面已经建立统一结构，但真实架构图、代码仓库与结果指标仍待补充。页面中的 `TBD` 不代表已经完成的成果。

<div class="project-grid project-grid--page">
  <a class="project-card" href="mixed-precision-pe/">
    <span class="project-status">TBD</span>
    <h2>Mixed-Precision ANN/SNN PE</h2>
    <p>BF16 / INT8 / 多时间步 SNN 异构处理单元的项目记录模板。</p>
    <span class="tag-line">RTL · BF16 · INT8 · SNN</span>
  </a>
  <a class="project-card" href="systolic-array/">
    <span class="project-status">TBD</span>
    <h2>Systolic Array Architecture</h2>
    <p>阵列结构、数据流、流水线与验证方法的项目记录模板。</p>
    <span class="tag-line">Architecture · Dataflow · PE</span>
  </a>
  <a class="project-card" href="cnn-fpga/">
    <span class="project-status">TBD</span>
    <h2>CNN FPGA Deployment</h2>
    <p>CNN 硬件映射、FPGA 实现与结果分析的项目记录模板。</p>
    <span class="tag-line">CNN · FPGA · Vivado</span>
  </a>
</div>

## 项目内容标准

每个项目会逐步补充以下内容：

```mermaid
flowchart LR
    A[Problem] --> B[Design Goal]
    B --> C[Architecture]
    C --> D[Implementation]
    D --> E[Verification]
    E --> F[Result]
```

## 新增项目

复制任意项目页面作为模板，替换其中的 `TBD`，再将页面加入 `mkdocs.yml` 的“项目”导航即可。所有频率、功耗、面积、资源利用率和精度数据都应来自真实结果。
