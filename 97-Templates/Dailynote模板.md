---
title: <% tp.date.now("YYYY-MM-DD") %>
created: <% tp.date.now("YYYY-MM-DD") %>
tags: [daily, 考研]
---

# <% tp.date.now("YYYY年MM月DD日 dddd") %>

```dataviewjs
const examDate = new Date('2026-12-21');
const today = new Date();
today.setHours(0,0,0,0);
const daysLeft = Math.ceil((examDate - today) / (1000 * 60 * 60 * 24));

const startDate = new Date('2026-02-16');
const daysSinceStart = Math.max(0, Math.floor((today - startDate) / (1000 * 60 * 60 * 24)));
const weekNum = Math.floor(daysSinceStart / 7) + 1;

let phase, weekCode;
if (today < new Date('2026-07-01')) {
    phase = '基础期';
    weekCode = 'B' + Math.min(weekNum, 20);
} else if (today < new Date('2026-10-01')) {
    const w = Math.floor((today - new Date('2026-07-01')) / (1000 * 60 * 60 * 24 * 7)) + 1;
    phase = '强化期';
    weekCode = 'A' + Math.min(w, 13);
} else {
    const w = Math.floor((today - new Date('2026-10-01')) / (1000 * 60 * 60 * 24 * 7)) + 1;
    phase = '冲刺期';
    weekCode = 'S' + Math.min(w, 12);
}

const schedules = {
    '基础期': ['数学 + 英语','数学 + 专业课','数学 + 英语 + 专业课','数学 + 数学 + 英语','数学 + 专业课 + 政治','数学 + 数学 + 英语','数学 + 英语 + 专业课'],
    '强化期': ['数学 + 政治','英语 + 专业课','数学 + 英语 + 政治','数学 + 数学 + 英语','数学 + 专业课 + 政治','数学 + 英语 + 专业课','数学 + 数学 + 英语'],
    '冲刺期': ['数学 + 英语','数学 + 专业课','政治 + 数学 + 英语','政治 + 数学 + 专业课','政治 + 数学 + 英语','政治 + 数学 + 专业课','政治 + 数学 + 英语']
};
const todaySchedule = schedules[phase][today.getDay()];
dv.paragraph(`> **距考试 ${daysLeft} 天** | ${phase} **${weekCode}** | 今日：**${todaySchedule}**`);
```

---

## 今日计划

| 科目 | 任务 | 时间 | 完成 |
|------|------|------|------|
| 数学 | | | ⬜ |
| 英语 | | | ⬜ |
| 政治 | | | ⬜ |
| 专业课 | | | ⬜ |

---

## 数学

### 今日知识点
-

### 例题/练习
- 题目来源：
- 完成情况：

### 今日错题
> 格式：章节 | 错误类型 | 原因一句话

-

---

## 英语

### 单词打卡
- 今日词数：    个  ✅/❌
- 新增词组：

### 阅读/练习
- 内容：
- 错题：

### 写作/翻译（若有）
-

---

## 政治

- 学习内容：
- 错题：

---

## 专业课

### 技术 or 设计（今日侧重：    ）
- 内容：
- 练习：

### 手绘（若本周计划）
- ⬜ 本周手绘已完成

---

## 今日总结

> 一句话：今天最大的收获 / 遇到的最大障碍

**收获：**

**障碍：**

**明日计划：**
- [ ]
- [ ]

---

## 学习时间记录

| 科目 | 实际时长 |
|------|----------|
| 数学 | 分钟 |
| 英语 | 分钟 |
| 政治 | 分钟 |
| 专业课 | 分钟 |
| **合计** | **分钟** |
