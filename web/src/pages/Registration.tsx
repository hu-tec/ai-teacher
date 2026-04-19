export default function Registration() {
  return (
    <div>
      <div className="page-header"><div className="container"><h1>수강안내</h1></div></div>
      <div className="container py-16">
        <section className="mb-12">
          <h2 className="section-title">1. 타임스미디어 운영 구조</h2>
          <div className="card border-none shadow-sm mt-4 text-lg text-muted">
            <p>타임스미디어 AI강사과정은 공통과정인 <strong>AI툴활용 강사과정</strong>과 <strong>AI윤리 강사과정</strong>을 기반으로, 분야별 전문과정을 선택하여 수강하는 구조로 운영됩니다. 수강을 원하시는 분들은 아래 안내 절차를 확인해주세요.</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="section-title">2. 접수방법 (온라인 및 오프라인)</h2>
          <div className="grid col-4 gap-6 mt-8 text-center">
             <div className="card p-6 shadow-sm border-none bg-secondary">
               <h3 className="font-bold text-primary text-xl mb-3">STEP 1<br/><small className="text-main" style={{fontSize: '1.2rem', marginTop: '10px', display: 'block'}}>과정 선택</small></h3>
               <p className="text-muted" style={{minHeight: '40px'}}>희망 과정 확인 및 선택</p>
             </div>
             <div className="card p-6 shadow-sm border-none bg-secondary">
               <h3 className="font-bold text-primary text-xl mb-3">STEP 2<br/><small className="text-main" style={{fontSize: '1.2rem', marginTop: '10px', display: 'block'}}>상담 및 신청서 작성</small></h3>
               <p className="text-muted" style={{minHeight: '40px'}}>전화/방문 상담 또는 기본정보 입력</p>
             </div>
             <div className="card p-6 shadow-sm border-none bg-secondary">
               <h3 className="font-bold text-primary text-xl mb-3">STEP 3<br/><small className="text-main" style={{fontSize: '1.2rem', marginTop: '10px', display: 'block'}}>접수 확인</small></h3>
               <p className="text-muted" style={{minHeight: '40px'}}>접수 확인 안내 메일 및 문자 수신</p>
             </div>
             <div className="card p-6 shadow-sm border-none bg-secondary">
               <h3 className="font-bold text-primary text-xl mb-3">STEP 4<br/><small className="text-main" style={{fontSize: '1.2rem', marginTop: '10px', display: 'block'}}>수강료 납부</small></h3>
               <p className="text-muted" style={{minHeight: '40px'}}>결제 완료 후 최종 등록 확정 및 안내</p>
             </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="section-title">3. 수강료 안내 / 할인 및 혜택</h2>
          <p className="text-muted mt-4 mb-6 text-lg">수강료는 과정별 운영 방식과 시간에 따라 다르며, 세부적인 입학금 및 수업료는 등록 과정에 따라 상이할 수 있습니다. 기존 수강생, 동시 등록, 설명회 참석자 대상으로 다양한 혜택이 지원됩니다.</p>
          
          <div className="table-wrap">
            <table className="schedule-table">
              <thead style={{ background: 'var(--primary)', color: 'white' }}>
                <tr>
                  <th style={{ color: 'white' }}>구분</th><th style={{ color: 'white' }}>금액</th><th style={{ color: 'white' }}>비고</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="font-bold">입학금</td><td>300,000원</td><td>최초 등록 시 1회 납부</td></tr>
                <tr><td className="font-bold">수업료</td><td>980,000원</td><td>과정별 상이 (약 5~8주 과정 기준)</td></tr>
                <tr className="bg-secondary"><td className="font-bold text-lg">총 비용</td><td className="font-bold text-primary text-lg">1,280,000원</td><td>VAT 개별 안내. 별도의 교재비 및 자격증 발급비는 선택사항입니다.</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="section-title">4. 수료기준 및 환불 규정</h2>
          <ul className="bullet-list mt-6 text-lg">
             <li className="mb-4"><strong>수료 기준:</strong> 지정된 전체 교육 일정의 80% 이상 출석 및 최종 포트폴리오(결과물) 완성 제출</li>
             <li className="mb-4"><strong>환불 규정:</strong> 수강 시작 개강 전 취소 시 전액 환불 처리 가능. 개강 이후 취소 시 평생교육법 또는 관련 기관 환불 규정에 따라 진행률에 비례하여 차등 적용. (접수 시 상세 확인 요망)</li>
             <li className="mb-4"><strong>수강생 유의사항:</strong> 실습을 중심으로 진행되므로 개인 노트북을 필참하셔야 하는 과정이 있습니다. 정원 미달 시 과정 개설이 취소되거나 연기될 수 있습니다.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
