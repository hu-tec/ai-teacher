

export default function RegistrationGuide() {
  return (
    <div>
      <div className="page-header">
        <div className="container">
          <h1>등록안내</h1>
        </div>
      </div>
      <div className="container py-16">
        <section className="mb-16">
          <h2 className="section-title">타임스미디어 AI강사과정 등록 안내</h2>
          <div className="card border-none shadow-sm mt-8 text-lg text-muted p-8">
            <p className="mb-4">타임스미디어 AI강사과정은 공통과정인 <strong>AI툴활용 강사과정</strong>과 <strong>AI윤리 강사과정</strong>을 기반으로, 분야별 전문과정을 선택하여 수강하는 구조로 운영됩니다.</p>
            <p>수강을 원하시는 분들은 아래 안내된 단계별 등록 절차를 확인하여 주시기 바랍니다.</p>
          </div>
        </section>

        <section className="mb-16">
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <span className="w-2 h-8 bg-primary block"></span>
            단계별 등록 절차
          </h3>
          <div className="grid col-4 gap-6 mt-8">
             <div className="card p-8 shadow-sm border-none bg-secondary relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-4 font-black text-4xl opacity-5 group-hover:opacity-10 transition-opacity">01</div>
               <h4 className="font-bold text-primary text-xl mb-4">과정 선택</h4>
               <p className="text-muted leading-relaxed">자신의 목표에 맞는 최적의 AI 전문 과정을 선택합니다.</p>
             </div>
             <div className="card p-8 shadow-sm border-none bg-secondary relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-4 font-black text-4xl opacity-5 group-hover:opacity-10 transition-opacity">02</div>
               <h4 className="font-bold text-primary text-xl mb-4">상담 및 신청</h4>
               <p className="text-muted leading-relaxed">전화 또는 방문 상담 후 수강 신청서를 작성합니다.</p>
             </div>
             <div className="card p-8 shadow-sm border-none bg-secondary relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-4 font-black text-4xl opacity-5 group-hover:opacity-10 transition-opacity">03</div>
               <h4 className="font-bold text-primary text-xl mb-4">접수 확인</h4>
               <p className="text-muted leading-relaxed">접수 확인 안내 메일 및 문자를 수신합니다.</p>
             </div>
             <div className="card p-8 shadow-sm border-none bg-secondary relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-4 font-black text-4xl opacity-5 group-hover:opacity-10 transition-opacity">04</div>
               <h4 className="font-bold text-primary text-xl mb-4">수강료 납부</h4>
               <p className="text-muted leading-relaxed">결제 완료 시 최종 등록이 확정됩니다.</p>
             </div>
          </div>
        </section>

        <section className="mb-16">
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <span className="w-2 h-8 bg-primary block"></span>
            접수 방법
          </h3>
          <div className="grid col-2 gap-8">
            <div className="card p-8 border hover-border-primary transition-colors">
              <h4 className="text-xl font-bold mb-4">온라인 접수</h4>
              <p className="text-muted mb-6">홈페이지 내 [온라인 수강신청] 메뉴를 통해 간편하게 접수 가능합니다.</p>
              <ul className="bullet-list-small">
                <li>24시간 상시 접수 가능</li>
                <li>신용카드, 계좌이체 등 다양한 결제 수단 지원</li>
              </ul>
            </div>
            <div className="card p-8 border hover-border-primary transition-colors">
              <h4 className="text-xl font-bold mb-4">방문/전화 접수</h4>
              <p className="text-muted mb-6">교육원 방문 또는 전화를 통해 상세 상담 후 접수를 도와드립니다.</p>
              <ul className="bullet-list-small">
                <li>상담 시간: 평일 09:00 - 18:00 (주말/공휴일 제외)</li>
                <li>문의 전화: 02-1234-5678</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="bg-primary text-white p-10 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold mb-2">궁금한 점이 있으신가요?</h3>
            <p className="opacity-90">전문 상담사가 상세히 안내해 드립니다.</p>
          </div>
          <button className="bg-white text-primary font-bold px-8 py-3 rounded-full hover:bg-opacity-90 transition-all">
            1:1 문의하기
          </button>
        </div>
      </div>
    </div>
  );
}
