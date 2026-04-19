const fs = require('fs');
const path = require('path');

// Read extracted_docx.md
const docx = fs.readFileSync(path.join(__dirname, '../docs/extracted_docx.md'), 'utf8');
const lines = docx.split(/\r?\n/);

// Read current courses.ts
const coursesFile = fs.readFileSync(path.join(__dirname, 'src/data/courses.ts'), 'utf8');

// Define the courses that need data filled (titles as they appear in extracted_docx.md)
const courseSearchMap = {
  'AI 반도체 강사 양성과정': { searchTitle: 'AI 반도체 강사 양성과정' },
  'AI 조선 강사 양성과정': { searchTitle: 'AI 조선 강사 양성과정' },
  'AI 에너지 강사 양성과정': { searchTitle: 'AI 에너지 강사 양성과정' },
  'AI 과학 수업 강사 양성과정': { searchTitle: 'AI 과학 수업 강사 양성과정' },
  'AI 의료 강사 양성과정': { searchTitle: 'AI 의료 강사 양성과정' },
  'AI 법률 강사 양성과정': { searchTitle: 'AI 법률 강사 양성과정' },
  'AI 회계 강사 양성과정': { searchTitle: 'AI 회계 강사 양성과정' },
  'AI 특허 강사 양성과정': { searchTitle: 'AI 특허 강사 양성과정' },
  '국제 글로벌 강사 양성과정': { searchTitle: '국제 글로벌 강사 양성과정' },
  'AI 글로벌·국제 강사과정': { searchTitle: '국제 글로벌 강사 양성과정' },
  'AI 다국어·언어별 강사과정': { searchTitle: 'AI 다국어·언어별 강사과정' },
  'AI 전문가·직무별 강사과정': { searchTitle: 'AI 전문가·직무별 강사과정' },
  'AI 기업체 산업별 교사 양성과정': { searchTitle: 'AI 기업체 산업별 교사 양성과정' },
  'AI 윤리 강사과정': { searchTitle: 'AI 윤리 강사과정' },
};

// Find a course section in the docx text
function findCourseSection(title) {
  let startIdx = -1;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    // Match title patterns like "1. AI 반도체 강사 양성과정" or just the title
    if (line.includes(title) && (
      /^\d+\.\s/.test(line) || 
      line.startsWith('🔷') ||
      line.startsWith('•') ||
      line === title ||
      /^[A-Z]\.\s/.test(line)
    )) {
      startIdx = i;
      break;
    }
  }
  if (startIdx === -1) return null;

  // Find end - next course section or major separator
  let endIdx = lines.length;
  for (let i = startIdx + 5; i < lines.length; i++) {
    const line = lines[i].trim();
    // Next numbered course or major section
    if (/^\d+\.\s+AI\s/.test(line) || /^\d+\.\s+국제/.test(line) || /^🔷/.test(line)) {
      endIdx = i;
      break;
    }
  }
  return lines.slice(startIdx, endIdx).join('\n');
}

// Parse a course section
function parseCourseData(text) {
  if (!text) return null;
  const tlines = text.split('\n');
  
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

  // Extract summary (한 줄 정의)
  let inSection = '';
  let descriptionText = '';
  
  for (let i = 0; i < tlines.length; i++) {
    const line = tlines[i].trim();
    if (!line || line.startsWith('___')) continue;

    // Detect sections
    if (line === '한 줄 정의' || line.includes('한 줄 정의')) {
      inSection = 'summary';
      continue;
    }
    if (line.startsWith('과정소개') || line === '과정 소개') {
      inSection = 'description';
      continue;
    }
    if (line.includes('왜 이 과정이 필요한가') || line.includes('왜 필요한가')) {
      inSection = 'necessity';
      continue;
    }
    if (line.includes('핵심 장점') || line.includes('핵심 내용')) {
      inSection = 'advantages';
      continue;
    }
    if (line.includes('추천합니다') || line.includes('추천 대상')) {
      inSection = 'recommendations';
      continue;
    }
    if (line.includes('교육 전') && line.includes('교육 후')) {
      inSection = 'beforeAfter';
      continue;
    }
    if (line === '교육 흐름') {
      inSection = 'flow';
      continue;
    }
    if (line === '커리큘럼') {
      inSection = 'curriculum';
      continue;
    }
    if (line.includes('평가 및 자격연계')) {
      inSection = 'evaluation';
      continue;
    }

    // Parse based on current section
    if (inSection === 'summary' && line && !line.startsWith('•')) {
      if (!result.summary) result.summary = line;
      else result.summary += ' ' + line;
    }
    
    if (inSection === 'description' && line) {
      if (line.startsWith('•')) continue;
      descriptionText += (descriptionText ? ' ' : '') + line;
    }

    if (inSection === 'necessity' && line.startsWith('•')) {
      result.necessity.push(line.replace(/^•\s*/, '').trim());
    }
    
    if (inSection === 'advantages' && line.startsWith('•')) {
      result.advantages.push(line.replace(/^•\s*/, '').trim());
    }
    
    if (inSection === 'recommendations' && line.startsWith('•')) {
      result.recommendations.push(line.replace(/^•\s*/, '').trim());
    }

    if (inSection === 'beforeAfter') {
      // Tab-separated: before\tafter
      if (line.includes('\t') && !line.startsWith('교육 전')) {
        const parts = line.split('\t').map(p => p.trim()).filter(Boolean);
        if (parts.length >= 2) {
          result.beforeAfter.push({ before: parts[0], after: parts[1] });
        }
      }
    }

    if (inSection === 'flow') {
      if (line.includes('\t') && /\d단계/.test(line)) {
        const parts = line.split('\t').map(p => p.trim()).filter(Boolean);
        if (parts.length >= 2) {
          result.flow.push({ step: parts[0], title: parts[1], content: parts[2] || '' });
        }
      } else if (line.includes('\t') && !line.startsWith('1단계') && result.flow.length > 0) {
        // Content row for flow
        const parts = line.split('\t').map(p => p.trim()).filter(Boolean);
        for (let j = 0; j < parts.length && j < result.flow.length; j++) {
          if (result.flow[j] && !result.flow[j].content) {
            result.flow[j].content = parts[j];
          } else if (result.flow[j]) {
            result.flow[j].content += ' ' + parts[j];
          }
        }
      }
    }

    if (inSection === 'curriculum') {
      // Skip header row
      if (line.startsWith('강차') || line.startsWith('강좌')) continue;
      if (/^\d+강\s/.test(line) || /^\d+강\t/.test(line)) {
        const parts = line.split('\t').map(p => p.trim()).filter(Boolean);
        if (parts.length >= 3) {
          result.weeklyPlan.push({ week: parts[0], title: parts[1], content: parts[2] });
        } else if (parts.length === 2) {
          result.weeklyPlan.push({ week: parts[0], title: parts[1], content: parts[1] });
        }
      }
    }

    if (inSection === 'evaluation' && line && !line.startsWith('___')) {
      result.evaluation.push(line);
    }
  }

  if (descriptionText) {
    result.descriptions = [descriptionText];
  }

  // If no summary found from 한 줄 정의, use first non-empty line after title
  if (!result.summary && result.descriptions.length > 0) {
    result.summary = result.descriptions[0].substring(0, 100);
  }

  return result;
}

// Now parse the courses.ts JSON array
// We'll do a simpler approach: read the file, parse the courses array, update it, write back

// Extract courses array from the file
const arrayMatch = coursesFile.match(/export const courses: Course\[\] = (\[[\s\S]*\]);?\s*$/);
if (!arrayMatch) {
  console.error('Could not find courses array in courses.ts');
  process.exit(1);
}

let courses;
try {
  courses = JSON.parse(arrayMatch[1]);
} catch(e) {
  console.error('Could not parse courses array:', e.message);
  process.exit(1);
}

console.log(`Found ${courses.length} courses in courses.ts`);

let updated = 0;
for (const course of courses) {
  // Check if this course needs data
  const isEmpty = !course.weeklyPlan || course.weeklyPlan.length === 0 || 
                  !course.summary || course.summary === '' || course.summary === '•' ||
                  (course.descriptions && course.descriptions[0] === '이 과정은 효과적인 교육을 제공합니다.');
  
  if (!isEmpty) continue;

  const searchInfo = courseSearchMap[course.title];
  if (!searchInfo) {
    console.log(`  SKIP: No search mapping for "${course.title}"`);
    continue;
  }

  console.log(`  Filling: "${course.title}" -> searching for "${searchInfo.searchTitle}"`);
  const section = findCourseSection(searchInfo.searchTitle);
  if (!section) {
    console.log(`    NOT FOUND in docx`);
    continue;
  }

  const data = parseCourseData(section);
  if (!data) {
    console.log(`    PARSE FAILED`);
    continue;
  }

  // Update the course
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
  console.log(`    OK: summary=${!!data.summary}, weekly=${data.weeklyPlan.length}, recs=${data.recommendations.length}`);
}

console.log(`\nUpdated ${updated} courses`);

// Get the part before the array
const prefix = coursesFile.substring(0, coursesFile.indexOf('export const courses: Course[] ='));
const safeJson = JSON.stringify(courses, null, 2).replace(/[\u2028\u2029]/g, ' ');
const output = prefix + 'export const courses: Course[] = ' + safeJson + ';\n';

fs.writeFileSync(path.join(__dirname, 'src/data/courses.ts'), output, 'utf8');
console.log('Written updated courses.ts');
