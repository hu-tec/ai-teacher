
import { Printer, Download, FileText, CheckCircle } from 'lucide-react';

export default function Certificates() {
  const steps = [
    {
       title: "로그인",
       desc: "홈페이지 상단 메뉴를 통해 수강생 계정으로 로그인합니다.",
       icon: <FileText className="w-6 h-6 text-primary" />
    },
    {
       title: "나의 강의실 이동",
       desc: "마이페이지 > 나의 강의실 메뉴에서 증명서 출력 탭을 선택합니다.",
       icon: <FileText className="w-6 h-6 text-primary" />
    },
    {
       title: "증명서 선택",
       desc: "출력을 원하는 증명서(수료증, 재학증명서 등)를 선택합니다.",
       icon: <FileText className="w-6 h-6 text-primary" />
    },
    {
       title: "미리보기 및 출력",
       desc: "PDF 미리보기 확인 후 인쇄 또는 파일로 저장합니다.",
       icon: <Printer className="w-6 h-6 text-white" />,
       featured: true
    }
  ];

  return (
    <div>
      <div className="page-header">
        <div className="container">
          <h1>증명서 출력</h1>
        </div>
      </div>
      <div className="container py-16">
        <section className="mb-20">
          <div className="flex flex-col md:flex-row items-center gap-12 bg-secondary/30 p-12 rounded-3xl border border-secondary">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-6">온라인 증명서 발급 서비스</h2>
              <p className="text-xl text-muted leading-relaxed mb-8">
                방문할 필요 없이 홈페이지에서 간편하게 <br/>
                필요한 증명서를 언제 어디서나 발급받으실 수 있습니다.
              </p>
              <div className="flex gap-4">
                 <button className="btn btn-primary px-8">증명서 발급 바로가기</button>
              </div>
            </div>
            <div className="shrink-0">
               <div className="w-64 h-80 bg-white shadow-2xl rounded-xl border-t-[20px] border-primary p-6 relative">
                  <div className="w-16 h-2 bg-gray-100 mb-4"></div>
                  <div className="w-full h-1 bg-gray-100 mb-2"></div>
                  <div className="w-full h-1 bg-gray-100 mb-2"></div>
                  <div className="w-2/3 h-1 bg-gray-100 mb-8"></div>
                  <div className="flex justify-center mb-8">
                     <div className="w-20 h-20 border-2 border-primary/20 rounded-full flex items-center justify-center">
                        <CheckCircle className="text-primary/10 w-12 h-12" />
                     </div>
                  </div>
                  <div className="absolute bottom-6 right-6">
                     <div className="w-12 h-12 bg-primary/20 rounded-lg"></div>
                  </div>
               </div>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <h3 className="text-2xl font-bold mb-10 text-center">발급 절차 안내</h3>
          <div className="grid col-4 gap-8">
             {steps.map((step, idx) => (
                <div key={idx} className="relative">
                   <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${step.featured ? 'bg-primary shadow-lg' : 'bg-white border'}`}>
                      {step.icon}
                   </div>
                   <h4 className="text-lg font-bold mb-3">{step.title}</h4>
                   <p className="text-muted leading-relaxed">{step.desc}</p>
                   {idx < steps.length - 1 && (
                      <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gray-200 -translate-x-8"></div>
                   )}
                </div>
             ))}
          </div>
        </section>

        <section>
          <h3 className="text-2xl font-bold mb-8">발급 가능한 증명서 종류</h3>
          <div className="grid col-2 gap-6">
             <div className="flex items-start gap-4 p-6 border rounded-2xl">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center shrink-0">
                   <Download className="w-6 h-6" />
                </div>
                <div>
                   <h4 className="font-bold text-lg mb-1">수료증명서 (Certificate of Completion)</h4>
                   <p className="text-muted">전체 과정을 정상적으로 수료한 사실을 증명하는 서류입니다.</p>
                </div>
             </div>
             <div className="flex items-start gap-4 p-6 border rounded-2xl">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center shrink-0">
                   <Download className="w-6 h-6" />
                </div>
                <div>
                   <h4 className="font-bold text-lg mb-1">성적증명서 (Transcript)</h4>
                   <p className="text-muted">이수한 전공 과목과 성적(평가 결과)을 증명하는 서류입니다.</p>
                </div>
             </div>
             <div className="flex items-start gap-4 p-6 border rounded-2xl">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center shrink-0">
                   <Download className="w-6 h-6" />
                </div>
                <div>
                   <h4 className="font-bold text-lg mb-1">재학/수강증명서 (Proof of Enrollment)</h4>
                   <p className="text-muted">현재 교육원에 등록하여 수강 중임을 증명하는 서류입니다.</p>
                </div>
             </div>
             <div className="flex items-start gap-4 p-6 border rounded-2xl">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center shrink-0">
                   <Download className="w-6 h-6" />
                </div>
                <div>
                   <h4 className="font-bold text-lg mb-1">교육비 평생교육시설 영수증</h4>
                   <p className="text-muted">수업료 납부 내역을 확인하고 증빙할 수 있는 공식 영수증입니다.</p>
                </div>
             </div>
          </div>
        </section>

        <div className="mt-20 p-8 rounded-2xl bg-amber-50 border border-amber-200">
           <h4 className="flex items-center gap-2 font-bold text-amber-900 mb-3">
              <FileText className="w-5 h-5" />
              참고사항
           </h4>
           <ul className="bullet-list-small text-amber-800/80">
              <li>온라인 발급이 어려운 경우 본관 행정실(02-1234-5678)로 문의해 주세요.</li>
              <li>증명서 위변조 방지를 위해 전용 뷰어 설치가 필요할 수 있습니다.</li>
              <li>일부 특수 증명서의 경우 우편 발송만 가능하며, 별도의 우편료가 발생할 수 있습니다.</li>
           </ul>
        </div>
      </div>
    </div>
  );
}
