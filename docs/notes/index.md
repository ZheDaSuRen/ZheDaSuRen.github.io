---
title: 技术笔记
description: 数字 IC、FPGA、体系结构与 AI 加速器技术知识库
---

# Notes / Blog

这里是长期维护的技术知识库。内容继续以 Markdown 为核心，不需要数据库或额外后台。

## 内容方向

| 分类 | 计划内容 |
| --- | --- |
| Digital IC | Verilog、SystemVerilog、CDC、FIFO、SRAM |
| Bus Protocol | APB、AHB、AXI、UART |
| FPGA | Quartus、Vivado、板级验证 |
| Architecture | Pipeline、Cache、Memory System、Systolic Array |
| AI Accelerator | CNN、TPU、Mixed Precision、ANN / SNN |
| Tools | VCS、Verdi、DC、Linux、Git、Makefile、Python |

## 现有文章

- [技术文章写作模板](article-template.md) — 展示代码、公式、Mermaid、表格、标签页等能力。
- [示例课程：如何写一篇学习文章](../course/example.md) — 原有内容，URL 保持不变。

## 新增文章流程

1. 在 `docs/notes/` 下新建 Markdown 文件；
2. 按照[技术文章写作模板](article-template.md)组织正文；
3. 将新文章加入 `mkdocs.yml` 的“技术笔记”导航；
4. 本地构建检查后提交并推送。
