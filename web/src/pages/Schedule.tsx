import { useState } from 'react';

export default function Schedule() {
  const [activeTab, setActiveTab] = useState('common');

  return (
    <div>
      <div className="page-header"><div className="container"><h1>학사일정</h1></div></div>
      <div className="container py-16">
        <div className="sub-tabs">
           <button className={activeTab === 'common' ? 'active' : ''} onClick={() => setActiveTab('common')}>공통과정 일정 안내</button>
           <button className={activeTab === 'industry' ? 'active' : ''} onClick={() => setActiveTab('industry')}>분야별 세부 과정 일정표</button>
        </div>

        {activeTab === 'common' && (
          <div className="animate-fade-in card border-none shadow-sm mt-8 p-0 overflow-hidden">
             <div className="p-8 border-b">
               <h3 className="font-bold text-2xl text-primary">2026년 공통과정 (AI툴활용 + AI윤리) 일정표</h3>
               <p className="text-muted mt-2">수강 전 필수로 거쳐야 공통과정의 이번 년도 연간 스케줄입니다.</p>
             </div>
             <div className="table-wrap border-none" style={{ borderRadius: 0 }}>
               <table className="schedule-table">
                 <thead>
                   <tr>
                     <th>기수 구분</th><th>모집기간</th><th>강의기간</th><th>개설 과정명</th><th>운영방식</th><th>학습 시간/요일</th>
                   </tr>
                 </thead>
                 <tbody>
                   <tr><td className="font-bold">공통 1기</td><td>6/1 ~ 6/25</td><td>7/1 ~ 7/12</td><td>AI 공통과정</td><td>주 3일</td><td>월·수·금 10:00~14:00</td></tr>
                   <tr><td className="font-bold">공통 2기</td><td>6/15 ~ 7/10</td><td>7/15 ~ 7/26</td><td>AI 공통과정</td><td>주 2일</td><td>화·목 10:00~14:00</td></tr>
                   <tr><td className="font-bold">공통 3기</td><td>6/20 ~ 7/15</td><td>7/20 ~ 7/31</td><td>AI 공통과정</td><td><span className="course-badge" style={{background:'#fef3c7',color:'#b45309'}}>야간반</span></td><td>월·수·금 19:00~22:30</td></tr>
                   <tr><td className="font-bold">공통 4기</td><td>6/25 ~ 7/20</td><td>7/26 ~ 8/16</td><td>AI 공통과정</td><td><span className="course-badge" style={{background:'#dbeafe',color:'#1e40af'}}>주말반</span></td><td>토·일 10:00~14:00</td></tr>
                 </tbody>
               </table>
             </div>
          </div>
        )}

        {activeTab === 'industry' && (
          <div className="animate-fade-in card border-none shadow-sm mt-8 p-0 overflow-hidden">
             <div className="p-8 border-b">
               <h3 className="font-bold text-2xl text-primary">2026년 분야별 통합 운영 스케줄</h3>
               <p className="text-muted mt-2">각 카테고리별 특화 과정의 일정을 확인하시어 접수에 참고하시기 바랍니다.</p>
             </div>
             <div className="table-wrap border-none" style={{ borderRadius: 0 }}>
               <table className="schedule-table">
                 <thead>
                   <tr>
                     <th>연간 기수</th><th>강의기간</th><th>과정 구분명</th><th>배정 강의실</th><th>학습 시간/요일</th>
                   </tr>
                 </thead>
                 <tbody>
                   <tr><td className="font-bold">1기</td><td>8/1 ~ 8/23</td><td>AI 방과후 교사과정</td><td>제 1강의실</td><td>월·수·금 10:00~14:00</td></tr>
                   <tr><td className="font-bold">2기</td><td>8/1 ~ 8/23</td><td>학원·공부방 강사과정</td><td>제 2강의실</td><td>월·수·금 10:00~14:00</td></tr>
                   <tr><td className="font-bold">3기</td><td>8/1 ~ 8/23</td><td>온라인 전문 강사과정</td><td>제 3강의실</td><td>월·수·금 10:00~14:00</td></tr>
                   <tr><td className="font-bold">4기</td><td>8/1 ~ 8/23</td><td>콘텐츠 기획 제작 교사</td><td>제 1강의실</td><td>월·수·금 19:00~22:30</td></tr>
                   <tr><td className="font-bold">7기</td><td>9/1 ~ 9/23</td><td>학부모 자녀교육 과정</td><td>제 1강의실</td><td>화·목 10:00~14:00</td></tr>
                   <tr><td className="font-bold">9기</td><td>9/1 ~ 9/23</td><td>반도체/산업 전문 과정</td><td>제 3강의실</td><td>화·목 19:00~22:30</td></tr>
                   <tr><td className="font-bold">10기</td><td>11/1 ~ 11/23</td><td>글로벌 영어 강사과정</td><td>외국어통합반</td><td>토·일 10:00~14:00</td></tr>
                 </tbody>
               </table>
             </div>
             <div className="p-6 bg-secondary text-center text-muted">
               ※ 모든 과정은 기본 5주(총 48시간) 과정으로 운영되며, 학사 진행 상황에 따라 강의 날짜 및 장소가 변동될 수 있습니다.
             </div>
          </div>
        )}
      </div>
    </div>
  );
}
