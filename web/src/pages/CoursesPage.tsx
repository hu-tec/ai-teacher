import { useState, useMemo, useEffect, useRef, useCallback } from 'react';
import CourseDetail from '../components/CourseDetail';
import { courses, courseCategories } from '../data/courses';

export default function CoursesPage() {
  const [activeCategoryId, setActiveCategoryId] = useState('school'); // default
  const [activeCourseId, setActiveCourseId] = useState<string | null>('school-afterschool');

  // Filter courses strictly inside the useMemo based on activeCategoryId
  const categoryCourses = useMemo(() => {
    return courses.filter(c => c.categoryId === activeCategoryId);
  }, [activeCategoryId]);

  // Use useEffect to reset activeCourseId when the category changes
  useEffect(() => {
    if (categoryCourses.length > 0) {
      setActiveCourseId(categoryCourses[0].id);
    } else {
      setActiveCourseId(null);
    }
  }, [categoryCourses]);

  const activeCategoryName = courseCategories.find(c => c.id === activeCategoryId)?.name;
  const activeCourse = courses.find(c => c.id === activeCourseId);

  /* Drag-to-scroll */
  const subnavRef = useRef<HTMLDivElement>(null);
  const dragState = useRef({ isDown: false, startX: 0, scrollLeft: 0, moved: false });

  const onMouseDown = useCallback((e: React.MouseEvent) => {
    const el = subnavRef.current!;
    dragState.current = { isDown: true, startX: e.pageX - el.offsetLeft, scrollLeft: el.scrollLeft, moved: false };
    el.classList.add('dragging');
  }, []);
  const onMouseLeave = useCallback(() => { dragState.current.isDown = false; subnavRef.current?.classList.remove('dragging'); }, []);
  const onMouseUp = useCallback(() => { dragState.current.isDown = false; subnavRef.current?.classList.remove('dragging'); }, []);
  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (!dragState.current.isDown) return;
    e.preventDefault();
    const el = subnavRef.current!;
    const x = e.pageX - el.offsetLeft;
    const walk = (x - dragState.current.startX) * 1.5;
    el.scrollLeft = dragState.current.scrollLeft - walk;
    dragState.current.moved = true;
  }, []);

  /** 버튼 라벨용 축약 */
  const shortenTitle = (title: string) =>
    title
      .replace('교사 양성과정', '과정')
      .replace('강사 양성과정', '강사과정')
      .replace('교사 양성 과정', '과정')
      .replace('강사 양성 과정', '강사과정')
      .replace('전문 강사과정', '강사과정');

  return (
    <div className="subpage-wrapper">
      {/* Visual Header */}
      <div className="theme-bg">
        <div className="container">
          <h1 className="theme-title animate-fade-in">교육과정 안내</h1>
          <div className="theme-nav">
             <span>HOME</span> &gt; <span>교육과정 안내</span> &gt; <strong>{activeCategoryName}</strong>
          </div>
        </div>
      </div>

      <div className="container subpage-content-grid">
        {/* Horizontal Navigation Bar (LNB) */}
        <aside className="lnb">
          <h3>교육과정안내</h3>
          <ul>
            {courseCategories.map((cat) => (
              <li key={cat.id}>
                <button 
                  className={activeCategoryId === cat.id ? 'active' : ''}
                  onClick={() => setActiveCategoryId(cat.id)}
                >
                  {cat.name}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {/* Main Content Area */}
        <div className="subpage-main animate-fade-in">
          {categoryCourses.length > 1 && (
            <div className="course-subnav mb-8" ref={subnavRef} onMouseDown={onMouseDown} onMouseLeave={onMouseLeave} onMouseUp={onMouseUp} onMouseMove={onMouseMove}>
               {categoryCourses.map(course => (
                 <button 
                   key={course.id} 
                   onClick={() => setActiveCourseId(course.id)}
                   className={`subnav-pill${activeCourseId === course.id ? ' active' : ''}`}
                 >
                   {shortenTitle(course.title)}
                 </button>
               ))}
            </div>
          )}

          {activeCourse ? (
            <CourseDetail course={activeCourse} />
          ) : (
            <div className="card animate-fade-in center" style={{ padding: '80px 20px' }}>
               <h2 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>{activeCategoryName}</h2>
               <p style={{ color: 'var(--text-muted)' }}>초기 프로토타입 버전입니다. 해당 카테고리의 세부 과정 데이터는 추후 추가됩니다.</p>
               <button 
                 className="btn-primary mt-6" 
                 onClick={() => {
                   setActiveCategoryId('school');
                   setActiveCourseId('school-afterschool');
                 }}
               >
                 샘플 과정(학교·교육) 보기
               </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
