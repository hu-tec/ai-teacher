export default function Contact() {
  return (
    <div>
      <div className="page-header"><div className="container"><h1>1:1 문의하기</h1></div></div>
      <div className="container py-16" style={{maxWidth: '800px'}}>
        <div className="card p-10 shadow-sm border-none">
           <div className="center mb-10">
             <h2 className="section-title center-inline text-3xl">온라인 상담 신청</h2>
             <p className="text-muted mt-4">궁금하신 사항은 언제든 문의해 주시면 친절한 전문가가 빠르게 답변해 드립니다.</p>
           </div>
           <form className="flex" style={{flexDirection: 'column', gap: '24px'}} onSubmit={(e) => { e.preventDefault(); alert('문의가 성공적으로 전달되었습니다.'); }}>
             <div>
               <label className="font-bold mb-2 block" style={{fontSize: '1.1rem'}}>상담 분야 선택</label>
               <select className="input-field w-full" required>
                 <option value="">관심 있는 문의 유형을 선택해주세요</option>
                 <option>과정에 대한 상세 설명 문의</option>
                 <option>기업, 기관, 단체 위탁 교육 제휴</option>
                 <option>방문상담 예약 및 기타</option>
               </select>
             </div>
             <div className="grid col-2 gap-8">
               <div>
                 <label className="font-bold mb-2 block" style={{fontSize: '1.1rem'}}>이름</label>
                 <input type="text" className="input-field w-full" placeholder="성함 또는 업체명을 입력해주세요" required />
               </div>
               <div>
                 <label className="font-bold mb-2 block" style={{fontSize: '1.1rem'}}>연락처</label>
                 <input type="tel" className="input-field w-full" placeholder="010-0000-0000" required />
               </div>
             </div>
             <div>
               <label className="font-bold mb-2 block" style={{fontSize: '1.1rem'}}>문의 내용</label>
               <textarea className="input-field w-full" rows={6} placeholder="과정이나 강의 관련하여 궁금하신 내용을 텍스트로 자세히 적어주세요." required></textarea>
             </div>
             <div className="flex items-center gap-2 mt-2">
               <input type="checkbox" id="privacy" required />
               <label htmlFor="privacy" className="text-muted cursor-pointer text-sm">개인정보 수집 및 이용에 동의합니다.</label>
             </div>
             <button type="submit" className="btn-primary mt-6 py-4 text-lg font-bold" style={{width: '100%'}}>신청 완료 및 전송하기</button>
           </form>
        </div>
      </div>
    </div>
  );
}
