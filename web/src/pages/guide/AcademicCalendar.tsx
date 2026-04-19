import { useState } from 'react';

export default function AcademicCalendar() {
  const [activeTab, setActiveTab] = useState('common');

  return (
    <div>
      <div className="page-header">
        <div className="container">
          <h1>학사일정</h1>
        </div>
      </div>
      <div className="container py-16">
        <div className="flex justify-center mb-12">
          <div className="sub-tabs inline-flex p-1 bg-secondary rounded-xl">
            <button 
              className={`px-8 py-3 rounded-lg font-bold transition-all ${activeTab === 'common' ? 'bg-primary text-white shadow-lg' : 'text-muted hover:text-main'}`} 
              onClick={() => setActiveTab('common')}
            >
              공통과정 일정
            </button>
            <button 
              className={`px-8 py-3 rounded-lg font-bold transition-all ${activeTab === 'industry' ? 'bg-primary text-white shadow-lg' : 'text-muted hover:text-main'}`} 
              onClick={() => setActiveTab('industry')}
            >
              분야별 세부 일정
            </button>
          </div>
        </div>

        {activeTab === 'common' && (
          <div className="animate-fade-in">
             <div className="mb-8">
               <h3 className="text-2xl font-bold text-primary">2026년 공통과정 연간 일정표</h3>
               <p className="text-muted mt-2">AI 툴 활용 및 윤리 교육을 포함한 필수 교육 과정의 일정입니다.</p>
             </div>
             
             <div className="overflow-x-auto shadow-xl rounded-2xl">
               <table className="schedule-table w-full">
                 <thead>
                   <tr>
                     <th className="bg-primary text-white p-4">기수</th>
                     <th className="bg-primary text-white p-4">모집기간</th>
                     <th className="bg-primary text-white p-4">강의기간</th>
                     <th className="bg-primary text-white p-4">운영방식</th>
                     <th className="bg-primary text-white p-4">학습시간</th>
                   </tr>
                 </thead>
                 <tbody className="bg-white">
                   <tr className="border-b">
                     <td className="p-4 font-bold text-center">공통 1기</td>
                     <td className="p-4 text-center">06.01 ~ 06.25</td>
                     <td className="p-4 text-center">07.01 ~ 07.12</td>
                     <td className="p-4 text-center">주 3일 (월/수/금)</td>
                     <td className="p-4 text-center text-muted">10:00 ~ 14:00</td>
                   </tr>
                   <tr className="border-b">
                     <td className="p-4 font-bold text-center">공통 2기</td>
                     <td className="p-4 text-center">06.15 ~ 07.10</td>
                     <td className="p-4 text-center">07.15 ~ 07.26</td>
                     <td className="p-4 text-center">주 2일 (화/목)</td>
                     <td className="p-4 text-center text-muted">10:00 ~ 14:00</td>
                   </tr>
                   <tr className="border-b">
                     <td className="p-4 font-bold text-center">공통 3기</td>
                     <td className="p-4 text-center">06.20 ~ 07.15</td>
                     <td className="p-4 text-center">07.20 ~ 07.31</td>
                     <td className="p-4 text-center"><span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-bold">야간반</span></td>
                     <td className="p-4 text-center text-muted">19:00 ~ 22:30</td>
                   </tr>
                   <tr>
                     <td className="p-4 font-bold text-center">공통 4기</td>
                     <td className="p-4 text-center">06.25 ~ 07.20</td>
                     <td className="p-4 text-center">07.26 ~ 08.16</td>
                     <td className="p-4 text-center"><span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-bold">주말반</span></td>
                     <td className="p-4 text-center text-muted">10:00 ~ 14:00</td>
                   </tr>
                 </tbody>
               </table>
             </div>
          </div>
        )}

        {activeTab === 'industry' && (
          <div className="animate-fade-in">
             <div className="mb-8">
               <h3 className="text-2xl font-bold text-primary">2026년 분야별 통합 운영 스케줄</h3>
               <p className="text-muted mt-2">각 전문 분야별 과정의 상세 일정을 확인하세요.</p>
             </div>

             <div className="overflow-x-auto shadow-xl rounded-2xl">
               <table className="schedule-table w-full">
                 <thead>
                   <tr>
                     <th className="bg-primary text-white p-4">기수</th>
                     <th className="bg-primary text-white p-4">강의기간</th>
                     <th className="bg-primary text-white p-4">과정 구분</th>
                     <th className="bg-primary text-white p-4">배정 강의실</th>
                     <th className="bg-primary text-white p-4">학습 요일/시간</th>
                   </tr>
                 </thead>
                 <tbody className="bg-white">
                   <tr className="border-b">
                     <td className="p-4 font-bold text-center">1기</td>
                     <td className="p-4 text-center">08.01 ~ 08.23</td>
                     <td className="p-4 text-center">AI 방과후 교사</td>
                     <td className="p-4 text-center text-muted">제 1강의실</td>
                     <td className="p-4 text-center">월·수·금 10:00~14:00</td>
                   </tr>
                   <tr className="border-b">
                     <td className="p-4 font-bold text-center">2기</td>
                     <td className="p-4 text-center">08.01 ~ 08.23</td>
                     <td className="p-4 text-center">학원·공부방 강사</td>
                     <td className="p-4 text-center text-muted">제 2강의실</td>
                     <td className="p-4 text-center">월·수·금 10:00~14:00</td>
                   </tr>
                   <tr className="border-b">
                     <td className="p-4 font-bold text-center">3기</td>
                     <td className="p-4 text-center">08.01 ~ 08.23</td>
                     <td className="p-4 text-center">온라인 전문 강사</td>
                     <td className="p-4 text-center text-muted">제 3강의실</td>
                     <td className="p-4 text-center">월·수·금 10:00~14:00</td>
                   </tr>
                   <tr className="border-b">
                     <td className="p-4 font-bold text-center">4기</td>
                     <td className="p-4 text-center">08.01 ~ 08.23</td>
                     <td className="p-4 text-center">콘텐츠 기획 제작</td>
                     <td className="p-4 text-center text-muted">제 1강의실</td>
                     <td className="p-4 text-center">월·수·금 19:00~22:30</td>
                   </tr>
                 </tbody>
               </table>
             </div>
             <div className="mt-8 p-6 bg-secondary rounded-xl text-center text-muted border-dashed border-2">
               ※ 모든 과정은 기본 5주(총 48시간) 과정으로 운영되며, 학사 진행 상황에 따라 일정이 변동될 수 있습니다.
             </div>
          </div>
        )}
      </div>
    </div>
  );
}
