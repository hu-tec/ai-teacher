const fs = require('fs');
const path = require('path');

const raw1 = fs.readFileSync(path.join(__dirname, 'raw_data_1.txt'), 'utf8');
const raw2 = fs.readFileSync(path.join(__dirname, 'raw_data_2.txt'), 'utf8');
const raw3 = fs.readFileSync(path.join(__dirname, 'raw_data_3.txt'), 'utf8');
const fullContent = raw1 + '\n\n' + raw2 + '\n\n' + raw3;

function getCategoryInfo(title) {
  if (title.includes('공통') || title.includes('윤리') || title.includes('입문') || title.includes('기초과정') || title.includes('툴활용')) {
    return { id: 'common', name: '공통과정' };
  } else if (title.includes('학교') || title.includes('방과후') || title.includes('교습소') || title.includes('공부방') || title.includes('온라인') || title.includes('TESOL') || title.includes('어린이')) {
    return { id: 'school', name: '학교·교육 강사과정' };
  } else if (title.includes('자녀') || title.includes('진로') || title.includes('소상공인') || title.includes('학부모') || title.includes('업무활용')) {
    return { id: 'target', name: '대상별 맞춤 강사과정' };
  } else if (title.includes('콘텐츠') || title.includes('문화') || title.includes('프롬프트') || title.includes('다국어') || title.includes('교재개발') || title.includes('언어')) {
    return { id: 'content', name: '콘텐츠·수업 제작 강사과정' };
  } else if (title.includes('반도체') || title.includes('조선') || title.includes('에너지') || title.includes('과학') || title.includes('산업')) {
    return { id: 'industry', name: '산업 전문 강사과정' };
  } else if (title.includes('의료') || title.includes('법률') || title.includes('회계') || title.includes('전문적') || title.includes('특허') || title.includes('전문가')) {
    return { id: 'global', name: '전문가·글로벌 강사과정' };
  }
  return { id: 'content', name: '콘텐츠·수업 제작 강사과정' };
}

// split by headings
const courseTitles = [
  "공통  AI툴활용 전문 강사과정",
  "AI 윤리 강사과정",
  "1. AI 방과후 교사 양성과정",
  "2. AI 기업체 산업별 교사 양성과정",
  "3. 교습소·학원·공부방 교사 양성과정",
  "4. AI 온라인 교사 양성과정",
  "5. AI 콘텐츠별 교사 양성과정",
  "🔷 어린이 TESOL 교사 양성과정",
  "•\tTESOL 교사 양성과정",
  "1. AI 자녀교육·학부모 활용 강사과정",
  "2. AI 콘텐츠 제작 강사과정",
  "3. AI K-콘텐츠·K문화 강사과정",
  "4. AI 직업·진로 체험 강사과정",
  "5. AI 업무활용·소상공인 실전 강사과정",
  "6. AI 프롬프트 설계 강사과정",
  "7. AI 다국어·언어별 강사과정",
  "8. AI 교육용 콘텐츠·교재개발 강사과정",
  "9. AI 전문가·직무별 강사과정",
  "10. AI 방과후·교육기관 운영 강사과정",
  "1. AI 반도체 강사 양성과정",
  "2. AI 조선 강사 양성과정",
  "3. AI 에너지 강사 양성과정",
  "4. AI 과학 수업 강사 양성과정",
  "1. AI 의료 강사 양성과정",
  "2. AI 법률 강사 양성과정",
  "3. AI 회계 강사 양성과정"
];

const blocks = [];
let currentIndex = 0;
courseTitles.forEach((title, i) => {
  const startIndex = fullContent.indexOf(title, currentIndex);
  if (startIndex === -1) {
    console.log("Could not find title:", title);
    return;
  }
  let endIndex = fullContent.length;
  if (i < courseTitles.length - 1) {
      endIndex = fullContent.indexOf(courseTitles[i + 1], startIndex + title.length);
      if (endIndex === -1) endIndex = fullContent.length;
  }
  blocks.push({
    title: title.replace(/^[0-9🔷\.\s•\t]+/, '').trim(),
    text: fullContent.substring(startIndex, endIndex)
  });
  currentIndex = startIndex + title.length;
});

const courses = [];

blocks.forEach(block => {
  const title = block.title;
  let text = block.text;

  const catInfo = getCategoryInfo(title);

  // Parse summary
  let summary = '';
  // Try to find text right below the title or "한 줄 정의" before "과정소개"
  const summaryMatches = text.match(/(?:한 줄 정의|과정\s*소개|과정소개)[\s\S]*?(?:이 과정은|과정소개|왜 이 과정이 필요한가|왜 필요한가)/);
  if (text.includes('한 줄 정의')) {
    const lines = text.split('\n');
    const lineIndex = lines.findIndex(l => l.includes('한 줄 정의'));
    if (lineIndex !== -1 && lines[lineIndex+1]) {
       summary = lines[lineIndex+1].trim() + (lines[lineIndex+2] && !lines[lineIndex+2].includes('과정소개') && !lines[lineIndex+2].includes('__') ? ' ' + lines[lineIndex+2].trim() : '');
    }
  } else {
    // If no explicit 한 줄 정의, extract from text prior to 과정소개
    const parts = text.split(/(과정\s*소개|과정소개)/);
    if (parts.length > 2) {
       const pre = parts[0].replace(title, '').replace(/^[0-9🔷\.\s•\t]+/, '').trim().split('\n').map(l => l.trim()).filter(Boolean).join(' ');
       if (pre) summary = pre;
    }
  }
  if (!summary) summary = title + " 전문가 양성과정입니다.";
  summary = summary.replace(/_+/g, '').trim();

  // Parse descriptions (과정 소개, 왜 이 과정이 필요한가, 이 과정의 핵심 장점)
  let descriptions = [];
  const whyStart = text.search(/왜 이 과정이 필요한가|왜 필요한가/);
  if (whyStart !== -1) {
     const introStart = text.search(/과정\s*소개|과정소개/);
     if (introStart !== -1 && introStart < whyStart) {
         descriptions.push(text.substring(introStart, whyStart).replace(/과정\s*소개|과정소개/g, '').replace(/_+/g, '').trim().split('\n').map(l=>l.trim()).filter(Boolean).join(' '));
     }
  }

  // Parse recommendations (추천 대상, 이런 분들에게 추천합니다)
  let recommendations = [];
  const recMatch = text.match(/(?:이런 분들에게 추천합니다|추천 대상)[\s\S]*?(?:교육 전(?:·| \· | \.)교육 후|교육 흐름)/);
  if (recMatch) {
    recommendations = recMatch[0].replace(/이런 분들에게 추천합니다|추천 대상/g, '').split('\n')
      .map(line => line.trim())
      .filter(line => line.startsWith('•') || line.startsWith("-") || line.startsWith("👉"))
      .map(line => line.replace(/^[•\-👉\s]+/, '').trim());
  }

  // Parse Weekly Plan (커리큘럼)
  let weeklyPlan = [];
  const curriMatch = text.match(/커리큘럼[\s\S]*(?:평가 및 자격연계|$)/);
  if (curriMatch) {
    const lines = curriMatch[0].split('\n').map(l => l.trim());
    let currentWeek = null;
    for (const line of lines) {
      if (/^\d+강\s+/.test(line) || /^\d+강\t/.test(line)) {
        // Assume format is: "1강\t강좌명\t주요 내용" or "1강   강좌명   주요 내용"
        let parts = line.split(/\t|  +/); // split by tab or 2+ spaces
        let week = '', t = '', c = '';
        if (parts.length >= 3) {
            week = parts[0].trim();
            t = parts[1].trim();
            c = parts.slice(2).join(' ').trim();
        } else {
             // Fallback: split by first space, then find main content
             const firstSpace = line.search(/\s/);
             week = line.substring(0, firstSpace).trim();
             const rest = line.substring(firstSpace).trim();
             // Not easily separable without 2+ spaces, so just assign all to title
             t = rest;
             c = rest;
        }
        weeklyPlan.push({ week, title: t, content: c });
      }
    }
  }

  if (weeklyPlan.length === 0) {
     weeklyPlan = [{ week: '1강', title: '오리엔테이션', content: '과정 안내 및 기본 실습' }];
  }
  if (recommendations.length === 0) {
      recommendations = ['해당 분야의 체계적 교육을 희망하는 분', '실전 강의 능력을 키우고 싶은 분'];
  }
  if (descriptions.length === 0) descriptions = [summary];


  let id = 'course-' + Math.random().toString(36).substr(2, 6);
  let imageUrl = 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80';
  if (catInfo.id === 'school') imageUrl = 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80';
  if (catInfo.id === 'content') imageUrl = 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80';
  if (catInfo.id === 'industry') imageUrl = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80';
  if (catInfo.id === 'global') imageUrl = 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80';


  courses.push({
    id,
    categoryId: catInfo.id,
    categoryName: catInfo.name,
    title,
    badge: catInfo.name.replace(' 강사과정', ''),
    imageUrl,
    summary,
    recruitmentPeriod: '상시 모집 (기수별 운영)',
    duration: '5주 (총 48시간)',
    schedule: '월·수·금 10:00~14:00 (협의 가능)',
    tuition: '980,000원',
    descriptions,
    recommendations,
    weeklyPlan,
    instructor: {
      name: '타임스미디어 교수진',
      role: '전문강사',
      imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80',
      history: ['타임스미디어 교육연구소 선임연구원', '과정별 특화 현업 전문가 출강']
    }
  });

});

const safeCourses = JSON.parse(JSON.stringify(courses).replace(/[\u2028\u2029]/g, ' '));
const fileContent = `
export interface CourseScheduleItem {
  week: string;
  title: string;
  content: string;
}

export interface Course {
  id: string;
  categoryId: string;
  categoryName: string;
  title: string;
  badge: string;
  imageUrl: string;
  summary: string;
  recruitmentPeriod: string;
  duration: string;
  schedule: string;
  tuition: string;
  descriptions: string[];
  recommendations: string[];
  weeklyPlan: CourseScheduleItem[];
  instructor: {
    name: string;
    role: string;
    imageUrl: string;
    history: string[];
  };
}

export const courseCategories = [
  { id: 'common', name: '공통과정' },
  { id: 'school', name: '학교·교육 강사과정' },
  { id: 'target', name: '대상별 맞춤 강사과정' },
  { id: 'content', name: '콘텐츠·수업 제작 강사과정' },
  { id: 'industry', name: '산업 전문 강사과정' },
  { id: 'global', name: '전문가·글로벌 강사과정' },
];

export const courses: Course[] = ${JSON.stringify(safeCourses, null, 2)};
`;

fs.writeFileSync(path.join(__dirname, 'src/data/courses.ts'), '\uFEFF' + fileContent, 'utf8');
console.log('Successfully generated courses.ts with ' + courses.length + ' courses.');
