---
title: ⭐ 编程与Agent工具速查
subject: 专业课843
type: 速查表
created: 2026-02-27
tags: [案例库, 843, 速查, AI编程, Agent框架]
---

# ⭐ 编程与 Agent 工具速查

> 了解定位即可 | 考试中作为背景知识或与 ⭐⭐⭐ 案例形成对比

---

## 一、AI 编程代理（⭐）

| 产品 | 一句话定位 | 843 记忆点 |
|------|-----------|-----------|
| **Devin** | 首个"自主软件工程师"Agent | 2024年震惊业界的演示，能独立完成完整开发任务；但实际落地能力有限，是概念先行的里程碑 |
| **Aider** | 开源命令行 AI 编程工具 | 与 Claude Code 同为终端形态，完全开源（Apache 2.0），开发者可本地运行 |
| **Codeium** | 免费 AI 代码补全插件 | Windsurf 的前身产品；主打免费，吸引预算有限的开发者和学生 |
| **Sourcegraph Cody** | 代码库语义搜索 + AI | 核心价值是"大型代码库的精准问答"，用于理解陌生 codebase |
| **PearAI** | 开源 AI 代码编辑器 | 社区驱动，fork 自 VS Code，类似 Cursor 但完全开源 |
| **Sweep** | GitHub Issue 自动解决 | 输入 Issue 描述 → 自动生成 PR，专注单点场景 |
| **Continue** | 开源 IDE 插件框架 | 可接入任意 LLM（本地/云端），高度可定制的开源 Copilot 替代 |
| **OpenDevin** | 开源 Devin 替代 | 社区版自主软件工程师 Agent，验证 Devin 路线的可行性 |

**考试用对比角度：**
```
AI 编程工具的形态谱系：
  IDE插件（Copilot/Codeium）→ 独立编辑器（Cursor/Windsurf）
  → 终端Agent（Claude Code/Aider）→ 全自主Agent（Devin/OpenDevin）

  开源 vs 闭源：
  开源（Aider/Continue/OpenDevin）← 灵活可控，成本低
  闭源（Cursor/Copilot）← 体验更完善，有商业支持
```

---

## 二、Agent 框架与自治系统（⭐）

| 产品 | 一句话定位 | 843 记忆点 |
|------|-----------|-----------|
| **AutoGPT** | 首个自主 Agent 概念产品 | 2023年"AI自主完成任务"概念的起点，GitHub 15万+ Star，但实用性有限；是"概念验证"而非成熟产品 |
| **LlamaIndex** | RAG 数据框架 | 专注"数据→LLM"管道，连接各种数据源（PDF/数据库/API）到 LLM，与 LangChain 互补 |
| **BabyAGI** | 任务自主规划 Agent | 极简代码（200行）展示 Agent 自我分解任务的原理，学术/教育价值大于实用价值 |
| **Semantic Kernel** | 微软企业 AI 框架 | 微软官方 Agent 编排框架，深度整合 Azure/Office 生态，企业 .NET 开发首选 |
| **Haystack** | 开源 NLP/LLM 框架 | 专注搜索和 RAG 场景，比 LangChain 更专注文档检索领域 |
| **SuperAGI** | 开源 Agent 平台 | 带可视化界面的开源 Agent 管理平台，降低 Agent 开发门槛 |
| **AgentOps** | Agent 监控观测平台 | AI 版 DataDog，监控 Agent 的执行轨迹、成本、错误率 |
| **OpenClaw** | Agent 编排平台 | 可视化 Agent 工作流编排，低代码构建多 Agent 系统 |

**考试用框架理解：**
```
Agent 框架的层次：
  底层模型（OpenAI/Claude）
       ↓
  框架层（LangChain/LangGraph）  ← 开发者用这层搭建应用
       ↓
  应用层（Cursor/Harvey/自定义Agent）
       ↓
  监控层（AgentOps）            ← 生产环境必备

AutoGPT 的历史意义：
  第一个让普通人意识到"AI可以自主完成任务"的产品
  → 定义了Agent赛道，但自身被更实用的后来者超越
```

---

## 速查使用说明

- 这些产品**不需要深度分析**，了解定位和与主流产品的关系即可
- 答题时可用作"丰富案例广度"的补充，而非核心论据
- 重点记忆：**AutoGPT**（Agent概念起点）、**Devin**（自主Agent里程碑）、**LlamaIndex**（RAG专用框架）
