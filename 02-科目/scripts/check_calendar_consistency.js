#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const root = process.cwd();
const htmlPath = path.join(root, '98-Assets/2026考研日历(完整版).html');
const planPath = path.join(root, '00-MOC/2026考研日历.md');
const timelinePath = path.join(root, '98-Assets/存档/考研时间线.md');

function read(file) {
  return fs.readFileSync(file, 'utf8');
}

function normalizeSlashDate(date) {
  return date.replace(/-/g, '/');
}

function extractHtmlMilestones(html) {
  const matches = [...html.matchAll(/\{\s*date:\s*"(\d{4}-\d{2}-\d{2})"\s*,\s*label:\s*"([^"]+)"/g)];
  return matches.map((m) => ({ date: normalizeSlashDate(m[1]), label: m[2] }));
}

function extractMdMilestones(md) {
  const rows = [...md.matchAll(/^\|\s*(2026\/\d{2}\/\d{2})\s*\|\s*([^|]+?)\s*\|\s*$/gm)];
  return rows.map((m) => ({ date: m[1], label: m[2].trim() }));
}

function extractPhaseStarts(html) {
  const out = {};
  const matches = [...html.matchAll(/(basic|advanced|sprint):\s*new Date\(YEAR,\s*(\d+),\s*(\d+)\)/g)];
  for (const m of matches) {
    const phase = m[1];
    const month = String(Number(m[2]) + 1).padStart(2, '0');
    const day = String(Number(m[3])).padStart(2, '0');
    out[phase] = `2026/${month}/${day}`;
  }
  return out;
}

function extractStartDate(html) {
  const match = html.match(/const\s+START_DATE\s*=\s*new Date\(YEAR,\s*(\d+),\s*(\d+)\)/);
  if (!match) return null;
  const month = String(Number(match[1]) + 1).padStart(2, '0');
  const day = String(Number(match[2])).padStart(2, '0');
  return `2026/${month}/${day}`;
}

function ensureContains(text, token) {
  return text.includes(token);
}

function run() {
  const html = read(htmlPath);
  const planMd = read(planPath);
  const timelineMd = read(timelinePath);

  const htmlMilestones = extractHtmlMilestones(html);
  const planMilestones = extractMdMilestones(planMd);
  const timelineMilestones = extractMdMilestones(timelineMd);

  const htmlDates = new Set(htmlMilestones.map((x) => x.date));
  const planDates = new Set(planMilestones.map((x) => x.date));
  const timelineDates = new Set(timelineMilestones.map((x) => x.date));

  const requiredDates = [
    '2026/02/16',
    '2026/04/30',
    '2026/06/30',
    '2026/07/01',
    '2026/09/30',
    '2026/10/01',
    '2026/11/15',
    '2026/12/15',
    '2026/12/21'
  ];

  const docOnlyDates = ['2026/02/15'];

  const phaseStarts = extractPhaseStarts(html);
  const startDate = extractStartDate(html);

  const issues = [];

  for (const d of requiredDates) {
    if (!htmlDates.has(d)) issues.push(`HTML 缺少里程碑日期 ${d}`);
    if (!planDates.has(d)) issues.push(`2026考研日历.md 缺少里程碑日期 ${d}`);
    if (!timelineDates.has(d)) issues.push(`考研时间线.md 缺少里程碑日期 ${d}`);
  }

  for (const d of docOnlyDates) {
    if (!planDates.has(d)) issues.push(`2026考研日历.md 缺少规划起点日期 ${d}`);
    if (!timelineDates.has(d)) issues.push(`考研时间线.md 缺少规划起点日期 ${d}`);
  }

  const requiredTokens = [
    '每日保温',
    '1:1',
    '2026/02/15',
    '2026/07/01',
    '2026/10/01'
  ];

  for (const token of requiredTokens) {
    if (!ensureContains(planMd, token)) {
      issues.push(`2026考研日历.md 缺少关键文本：${token}`);
    }
    if (!ensureContains(timelineMd, token)) {
      issues.push(`考研时间线.md 缺少关键文本：${token}`);
    }
  }

  if (phaseStarts.basic !== '2026/02/16') {
    issues.push(`HTML 阶段起点 basic 非 2026/02/16（当前 ${phaseStarts.basic || '未解析'}）`);
  }
  if (startDate !== '2026/02/15') {
    issues.push(`HTML 规划起点 START_DATE 非 2026/02/15（当前 ${startDate || '未解析'}）`);
  }
  if (phaseStarts.advanced !== '2026/07/01') {
    issues.push(`HTML 阶段起点 advanced 非 2026/07/01（当前 ${phaseStarts.advanced || '未解析'}）`);
  }
  if (phaseStarts.sprint !== '2026/10/01') {
    issues.push(`HTML 阶段起点 sprint 非 2026/10/01（当前 ${phaseStarts.sprint || '未解析'}）`);
  }

  const summary = {
    files: [
      '98-Assets/2026考研日历(完整版).html',
      '00-MOC/2026考研日历.md',
      '98-Assets/存档/考研时间线.md'
    ],
    milestoneCount: {
      html: htmlMilestones.length,
      planMd: planMilestones.length,
      timelineMd: timelineMilestones.length
    },
    startDate,
    phaseStarts,
    status: issues.length === 0 ? 'PASS' : 'FAIL'
  };

  console.log(JSON.stringify(summary, null, 2));
  if (issues.length > 0) {
    console.log('\nIssues:');
    for (const msg of issues) {
      console.log(`- ${msg}`);
    }
    process.exitCode = 1;
  }
}

run();
