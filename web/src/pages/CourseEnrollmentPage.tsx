import { Link, useSearchParams } from 'react-router-dom';
import CourseEnrollmentForm from '../components/CourseEnrollmentForm';
import { courses } from '../data/courses';

export default function CourseEnrollmentPage() {
  const [searchParams] = useSearchParams();
  const courseId = searchParams.get('courseId') ?? undefined;
  const course = courseId ? courses.find((c) => c.id === courseId) : undefined;

  return (
    <div className="subpage-wrapper">
      <div className="theme-bg">
        <div className="container">
          <h1 className="theme-title animate-fade-in">수강신청</h1>
          <div className="theme-nav">
            <span>HOME</span> &gt; <span>교육과정 안내</span> &gt; <strong>수강신청</strong>
          </div>
        </div>
      </div>

      <div className="container py-12 animate-fade-in">
        {course && (
          <div className="card mb-8" style={{ padding: '16px 20px' }}>
            <p style={{ margin: 0, color: 'var(--color-text-secondary)' }}>
              신청 대상 과정: <strong style={{ color: 'var(--color-text)' }}>{course.title}</strong>
            </p>
            <Link to="/courses" className="text-sm mt-2 inline-block" style={{ color: 'var(--color-primary)' }}>
              ← 교육과정 안내로 돌아가기
            </Link>
          </div>
        )}
        <CourseEnrollmentForm
          key={courseId ?? 'enroll'}
          defaultApplicationType="수업신청"
        />
      </div>
    </div>
  );
}
