import type { Course } from '../data/courses';

interface CourseDetailProps {
  course: Course;
}

export default function CourseDetail({ course }: CourseDetailProps) {
  if (!course) return null;

  return (
    <div className="course-detail animate-fade-in">
      <div className="course-header flex items-center justify-between">
        <h2 className="course-title">{course.title}</h2>
        <span className="course-badge">{course.badge}</span>
      </div>

      <div className="course-info-grid card mb-8">
        <div className="course-image">
          <img src={course.imageUrl} alt={course.title} />
        </div>
        <ul className="course-info-list">
          <li>
            <span className="label">한 줄 정의</span>
            <span className="value">{course.summary}</span>
          </li>
          <li>
            <span className="label">접수기간</span>
            <span className="value">{course.recruitmentPeriod}</span>
          </li>
          <li>
            <span className="label">교육기간</span>
            <span className="value">{course.duration}</span>
          </li>
          <li>
            <span className="label">교육일시</span>
            <span className="value">{course.schedule}</span>
          </li>
          <li>
            <span className="label">수강료</span>
            <span className="value">{course.tuition}</span>
          </li>
          <li className="mt-4">
            <button className="btn-primary" style={{ width: '100%' }} onClick={() => alert('수강신청 페이지로 이동합니다.')}>
              수강신청 바로가기
            </button>
          </li>
        </ul>
      </div>

      <div className="course-section mb-8">
        <h3 className="section-title">과정소개</h3>
        <div className="rich-text card">
          <div className="mb-8">
            {course.descriptions.map((desc, idx) => (
              <p key={idx} className={idx > 0 ? 'mt-4' : ''}>{desc}</p>
            ))}
          </div>

          {course.necessity && course.necessity.length > 0 && (
            <div className="mb-8">
              <h4 className="text-xl font-bold mb-4 text-primary">왜 이 과정이 필요한가</h4>
              <ul className="bullet-list">
                {course.necessity.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {course.advantages && course.advantages.length > 0 && (
            <div className="mb-8">
              <h4 className="text-xl font-bold mb-4 text-primary">이 과정의 핵심 장점</h4>
              <ul className="bullet-list">
                {course.advantages.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {course.recommendations && course.recommendations.length > 0 && (
             <div className="mb-4">
               <h4 className="text-xl font-bold mb-4 text-primary">이런 분들에게 추천합니다</h4>
               <ul className="bullet-list">
                 {course.recommendations.map((rec, idx) => (
                   <li key={idx}>{rec}</li>
                 ))}
               </ul>
             </div>
          )}
        </div>
      </div>

      {course.beforeAfter && course.beforeAfter.length > 0 && (
        <div className="course-section mb-8">
          <h3 className="section-title">교육 전 · 교육 후</h3>
          <div className="table-wrap">
            <table className="schedule-table">
              <thead>
                <tr>
                  <th style={{ width: '50%' }}>교육 전</th>
                  <th style={{ width: '50%' }}>교육 후</th>
                </tr>
              </thead>
              <tbody>
                {course.beforeAfter.map((item, idx) => (
                  <tr key={idx}>
                    <td>{item.before}</td>
                    <td className="text-primary font-bold">{item.after}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {course.flow && course.flow.length > 0 && (
        <div className="course-section mb-8">
          <h3 className="section-title">교육 흐름</h3>
          <div className="flow-grid">
            {course.flow.map((item, idx) => (
              <div key={idx} className="card flow-card">
                {idx < course.flow.length - 1 && (
                  <div className="flow-arrow">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </div>
                )}
                <span className="flow-step">{item.step}</span>
                <h4 className="flow-title">{item.title}</h4>
                <p className="flow-content">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="course-section mb-8">
        <h3 className="section-title">주차별 수업내용</h3>
        <div className="table-wrap">
          <table className="schedule-table">
            <thead>
              <tr>
                <th style={{ width: '15%', textAlign: 'center' }}>강차</th>
                <th style={{ width: '35%' }}>강좌명</th>
                <th style={{ width: '50%' }}>주요 내용</th>
              </tr>
            </thead>
            <tbody>
              {course.weeklyPlan.map((plan, idx) => (
                <tr key={idx}>
                  <td className="center">{plan.week}</td>
                  <td>{plan.title}</td>
                  <td>{plan.content}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {course.evaluation && course.evaluation.length > 0 && (
        <div className="course-section mb-8">
          <h3 className="section-title">평가 및 자격연계</h3>
          <div className="card bg-[var(--color-surface-hover)] border border-[var(--color-border)] p-6 rounded-xl">
            {course.evaluation.map((evalText, idx) => (
              <p key={idx} className="text-[var(--color-text-secondary)] leading-relaxed">{evalText}</p>
            ))}
          </div>
        </div>
      )}

      <div className="course-section">
        <h3 className="section-title">책임 강사</h3>
        <div className="instructor-card card flex items-center gap-8">
           <div className="instructor-img">
             <img src={course.instructor.imageUrl} alt={course.instructor.name} />
           </div>
           <div className="instructor-info">
             <h4>{course.instructor.name} <small>{course.instructor.role}</small></h4>
             <ul className="bullet-list mt-4">
               {course.instructor.history.map((hist, idx) => (
                 <li key={idx}>{hist}</li>
               ))}
             </ul>
           </div>
        </div>
      </div>
    </div>
  );
}
