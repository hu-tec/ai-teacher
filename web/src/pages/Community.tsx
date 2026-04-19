import { useState } from 'react';

export default function Community() {
  const [activeTab, setActiveTab] = useState('notice');

  return (
    <div>
      <div className="page-header"><div className="container"><h1>커뮤니티</h1></div></div>
      <div className="container py-16">
        <div className="sub-tabs">
           <button className={activeTab === 'notice' ? 'active' : ''} onClick={() => setActiveTab('notice')}>공지사항</button>
           <button className={activeTab === 'faq' ? 'active' : ''} onClick={() => setActiveTab('faq')}>자주 묻는 질문</button>
           <button className={activeTab === 'review' ? 'active' : ''} onClick={() => setActiveTab('review')}>수강후기</button>
           <button className={activeTab === 'data' ? 'active' : ''} onClick={() => setActiveTab('data')}>자료실</button>
        </div>

        <div className="card animate-fade-in shadow-sm border-none p-10">
          {activeTab === 'notice' && (
            <div>
               <h3 className="section-title mb-8">공지사항</h3>
               <div className="list-group">
                 <div className="list-item flex justify-between items-center py-4 border-b border-gray-200 cursor-pointer hover:text-primary transition-colors">
                   <span className="font-bold text-lg">💡 2026년 타임스미디어 AI강사과정 핵심 개강 안내</span> 
                   <span className="text-muted text-sm">2026.04.19</span>
                 </div>
                 <div className="list-item flex justify-between items-center py-4 border-b border-gray-200 cursor-pointer hover:text-primary transition-colors">
                   <span className="font-bold text-lg">[신규] AI윤리 전문가과정 추가 개설 확정 건</span> 
                   <span className="text-muted text-sm">2026.04.18</span>
                 </div>
                 <div className="list-item flex justify-between items-center py-4 border-b border-gray-200 cursor-pointer hover:text-primary transition-colors">
                   <span className="font-bold text-lg">📢 설명회 일정 및 오프라인 참석 방법 안내</span> 
                   <span className="text-muted text-sm">2026.04.10</span>
                 </div>
                 <div className="list-item flex justify-between items-center py-4 border-gray-200 cursor-pointer hover:text-primary transition-colors">
                   <span className="font-bold text-lg">수강생 대상 무료 교육교재 다운로드 방식 변경</span> 
                   <span className="text-muted text-sm">2026.04.05</span>
                 </div>
               </div>
            </div>
          )}
          {activeTab !== 'notice' && (
            <div className="center py-24">
               <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="mx-auto text-muted mb-4" style={{display: 'inline-block'}}><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
               <h3 className="text-xl font-bold mb-2">게시물이 없습니다.</h3>
               <p className="text-muted">이 메뉴의 내용은 현재 준비 중이거나 업데이트 전입니다.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
