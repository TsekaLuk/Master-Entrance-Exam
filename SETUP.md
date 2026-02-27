# 仓库初始化指南 SETUP

> 本文档说明如何 clone 本仓库并获得一个**完整可用**的 Obsidian 学习框架。

---

## 快速开始

```bash
git clone https://github.com/TsekaLuk/Master-Entrance-Exam.git
cd Master-Entrance-Exam
```

用 [Obsidian](https://obsidian.md) 打开该文件夹为 Vault 即可。

---

## 必要插件

首次打开时，Obsidian 会提示安装社区插件，请确认安装：

| 插件 | 用途 |
|------|------|
| **Dataview** | 动态查询错题、进度、待复习列表 |
| **Templater** | 新建错题/知识点时自动填充模板字段 |
| **Calendar** | 可选：配合间隔复习查看复习日历 |

安装路径：`设置 → 社区插件 → 浏览` 搜索上述插件名称。

---

## 框架结构说明

```
Master-Entrance-Exam/
├── 00-MOC/               学习进度总览、各科 MOC 入口
├── 01-规划/              备考计划、周计划
├── 02-科目/              各学科内容
│   ├── 数学/             知识点、错题（含 DataviewJS 看板）
│   ├── 英语一/           词根词缀图谱、写作模板
│   └── 政治/             马原/毛概/史纲/思修知识点
├── 97-Templates/         Templater 模板（错题记录、知识点卡片）
└── 98-附件/              图片等附件
```

---

## 关于 GRE 词汇目录

`02-科目/英语一/GRE核心词汇/` 下有 35 个课程目录（003 ~ 037）。

这些目录中只包含 `_NOTICE.md` 占位符，**课程转录内容未随仓库开源**（版权原因）。

但**词根词缀知识图谱已完整收录**，可直接学习：

- [GRE 词根词缀总览](02-科目/英语一/知识点/词汇/00-GRE词根词缀总览.md)
- [GRE 词汇主题索引](02-科目/英语一/GRE核心词汇/00-GRE词汇主题索引.md)

如需补充原词汇内容，将词汇 Markdown 文件放入对应目录（如 `003-GRE核心词汇-创新对模仿/`），即可与词根图谱自动建立双链。

---

## 间隔复习机制

知识点卡片 frontmatter 中有 `next-review` 字段，配合 Dataview 在总览页面自动显示今日待复习内容。

使用 Templater 模板新建笔记时会自动填充初始复习日期（7天后），之后手动更新该字段即可。

---

## 持续更新

本仓库由作者持续维护，追踪备考进展：

```bash
git pull origin main
```

如果你 fork 了本仓库并添加了自己的学习内容，记得定期从上游同步框架更新：

```bash
git remote add upstream https://github.com/TsekaLuk/Master-Entrance-Exam.git
git fetch upstream
git merge upstream/main
```

---

## 许可证

学习框架、知识整理、原创写作模板：[CC BY-NC-SA 4.0](LICENSE)

课程转录内容：未包含在本仓库中，版权归原课程作者所有。
