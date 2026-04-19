const fs = require('fs');
const path = require('path');

// Read extracted_docx.md
const docx = fs.readFileSync(path.join(__dirname, '../docs/extracted_docx.md'), 'utf8');
const lines = docx.split(/\r?\n/);

// Read current courses.ts
const coursesFile = fs.readFileSync(path.join(__dirname, 'src/data/courses.ts'), 'utf8');

// Extract courses array
const arrayMatch = coursesFile.match(/export const courses: Course\[\] = (\[[\s\S]*\]);?\s*$/);
if (!arrayMatch) { console.error('Could not find courses array'); process.exit(1); }
let courses;
try { courses = JSON.parse(arrayMatch[1]); } catch(e) { console.error('Parse error:', e.message); process.exit(1); }
console.log(`Found ${courses.length} courses`);

// Map course titles to line ranges in docx (manually verified from file)
// These courses start AFTER line 1670 in the docx
const courseLineMap = {
  'AI 반도체 강사 양성과정': { start: 1676, end: 1740 },
  'AI 조선 강사 양성과정': { start: 1741, end: 1801 },
  'AI 에너지 강사 양성과정': { start: 1802, end: 1864 },
  'AI 과학 수업 강사 양성과정': { start: 1865, end: 1923 },
  'AI 의료 강사 양성과정': { start: 1924, end: 1984 },
  'AI 법률 강사 양성과정': { start: 1985, end: 2045 },
  'AI 회계 강사 양성과정': { start: 2046, end: 2106 },
  'AI 특허 강사 양성과정': { start: 2107, end: 2168 },
  '국제 글로벌 강사 양성과정': { start: 2169, end: 2230 },
};

function parseCourseFromLines(courseLines) {
  const result = {
    summary: '',
    descriptions: [],
    necessity: [],
    advantages: [],
    recommendations: [],
    beforeAfter: [],
    flow: [],
    weeklyPlan: [],
    evaluation: []
  };

  let section = '';
  let descLines = [];

  for (let i = 0; i < courseLines.length; i++) {
    const line = courseLines[i].trim();
    if (!line || line.startsWith('___')) continue;

    // Detect section headers
    if (line === '한 줄 정의') { section = 'summary'; continue; }
    if (line === '과정소개' || line === '과정 소개') { section = 'description'; continue; }
    if (line.includes('왜 이 과정이 필요한가') || line === '왜 필요한가') { section = 'necessity'; continue; }
    if (line.includes('핵심 장점') || line === '핵심 내용') { section = 'advantages'; continue; }
    if (line.includes('추천합니다') || line === '추천 대상') { section = 'recommendations'; continue; }
    if (line.startsWith('교육 전') && line.includes('교육 후')) { section = 'beforeAfter'; continue; }
    if (line === '교육 흐름') { section = 'flow'; continue; }
    if (line === '커리큘럼') { section = 'curriculum'; continue; }
    if (line.includes('평가 및 자격연계')) { section = 'evaluation'; continue; }
    // Skip curriculum header
    if (section === 'curriculum' && (line.startsWith('강차') || line.startsWith('강좌'))) continue;

    // Parse by section
    switch (section) {
      case 'summary':
        if (line && !line.startsWith('•') && !line.startsWith('1.') && !line.startsWith('2.')) {
          result.summary += (result.summary ? ' ' : '') + line;
        }
        break;
      case 'description':
        if (line && !line.startsWith('•')) {
          descLines.push(line);
        }
        break;
      case 'necessity':
        if (line.startsWith('•')) result.necessity.push(line.replace(/^•\s*/, '').trim());
        break;
      case 'advantages':
        if (line.startsWith('•')) result.advantages.push(line.replace(/^•\s*/, '').trim());
        break;
      case 'recommendations':
        if (line.startsWith('•')) result.recommendations.push(line.replace(/^•\s*/, '').trim());
        break;
      case 'beforeAfter':
        if (line.includes('\t') && !line.startsWith('교육 전')) {
          const parts = line.split('\t').map(p => p.trim()).filter(Boolean);
          if (parts.length >= 2) {
            result.beforeAfter.push({ before: parts[0], after: parts[1] });
          }
        }
        break;
      case 'flow':
        if (line.includes('\t')) {
          const parts = line.split('\t').map(p => p.trim()).filter(Boolean);
          if (parts.length >= 4 && parts[0].includes('단계')) {
            // Header row: 1단계 2단계 3단계 4단계
            result.flow = parts.map(p => ({ step: p, title: '', content: '' }));
          } else if (parts.length >= 2 && result.flow.length > 0 && !result.flow[0].title) {
            // Title row
            for (let j = 0; j < parts.length && j < result.flow.length; j++) {
              result.flow[j].title = parts[j];
            }
          } else if (parts.length >= 2 && result.flow.length > 0 && !result.flow[0].content) {
            // Content row
            for (let j = 0; j < parts.length && j < result.flow.length; j++) {
              result.flow[j].content = parts[j];
            }
          }
        }
        break;
      case 'curriculum':
        if (/^\d+강/.test(line) && line.includes('\t')) {
          const parts = line.split('\t').map(p => p.trim()).filter(Boolean);
          if (parts.length >= 3) {
            result.weeklyPlan.push({ week: parts[0], title: parts[1], content: parts[2] });
          } else if (parts.length === 2) {
            result.weeklyPlan.push({ week: parts[0], title: parts[1], content: '' });
          }
        }
        break;
      case 'evaluation':
        if (line && !line.startsWith('___')) {
          result.evaluation.push(line);
        }
        break;
    }
  }

  if (descLines.length > 0) {
    result.descriptions = [descLines.join(' ')];
  }

  return result;
}

let updated = 0;
for (const course of courses) {
  // Only update courses that have empty/placeholder data
  const isEmpty = !course.weeklyPlan || course.weeklyPlan.length === 0 ||
    (course.descriptions && course.descriptions[0] === '이 과정은 효과적인 교육을 제공합니다.') ||
    (course.descriptions && course.descriptions[0] && course.descriptions[0].includes('이 과정은 모든 강사과정의 출발점입니다') && course.categoryId !== 'common');

  // Also detect wrongly mapped data (e.g., AI 의료 showing AI윤리 content)
  const isWrongData = course.summary && (
    course.summary.includes('본문 구성') ||
    course.summary.includes('과정소개 AI를 안전하고') ||
    course.summary === '•' ||
    course.summary.includes('과정 상세페이지 공통 템플릿') ||
    course.summary.includes('전문가, 글로벌·국제 강사과정에는')
  );

  if (!isEmpty && !isWrongData) continue;

  // Find in courseLineMap
  let mapEntry = courseLineMap[course.title];
  
  // Handle alternate names
  if (!mapEntry && course.title === 'AI 글로벌·국제 강사과정') {
    mapEntry = courseLineMap['국제 글로벌 강사 양성과정'];
  }
  
  if (!mapEntry) {
    console.log(`  SKIP: No line mapping for "${course.title}" (${course.categoryId})`);
    continue;
  }

  const sectionLines = lines.slice(mapEntry.start - 1, mapEntry.end);
  const data = parseCourseFromLines(sectionLines);

  console.log(`  Filling: "${course.title}"`);
  console.log(`    summary: ${data.summary ? data.summary.substring(0, 50) + '...' : 'NONE'}`);
  console.log(`    weekly: ${data.weeklyPlan.length}, recs: ${data.recommendations.length}, ba: ${data.beforeAfter.length}, flow: ${data.flow.length}`);

  if (data.summary) course.summary = data.summary;
  if (data.descriptions.length) course.descriptions = data.descriptions;
  if (data.necessity.length) course.necessity = data.necessity;
  if (data.advantages.length) course.advantages = data.advantages;
  if (data.recommendations.length) course.recommendations = data.recommendations;
  if (data.beforeAfter.length) course.beforeAfter = data.beforeAfter;
  if (data.flow.length) course.flow = data.flow;
  if (data.weeklyPlan.length) course.weeklyPlan = data.weeklyPlan;
  if (data.evaluation.length) course.evaluation = data.evaluation;

  updated++;
}

console.log(`\nUpdated ${updated} courses`);

// Write back
const prefix = coursesFile.substring(0, coursesFile.indexOf('export const courses: Course[] ='));
const safeJson = JSON.stringify(courses, null, 2).replace(/[\u2028\u2029]/g, ' ');
const output = prefix + 'export const courses: Course[] = ' + safeJson + ';\n';
fs.writeFileSync(path.join(__dirname, 'src/data/courses.ts'), output, 'utf8');
console.log('Written updated courses.ts');
