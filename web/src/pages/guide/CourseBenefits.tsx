
import { Gift, Zap, Users, Award, BookOpen, Star } from 'lucide-react';

export default function CourseBenefits() {
  const benefits = [
    {
      title: "동시 등록 할인",
      desc: "2개 이상의 과정을 동시에 신청할 경우 전체 수강료의 10%를 할인해 드립니다.",
      icon: <Zap className="w-10 h-10 text-primary" />,
      color: "bg-red-50"
    },
    {
      title: "얼리버드 혜택",
      desc: "개강 4주 전 조기 등록 시 입학금 면제 및 추가 할인 혜택을 제공합니다.",
      icon: <Gift className="w-10 h-10 text-primary" />,
      color: "bg-red-100"
    },
    {
      title: "수료생 사후 관리",
      desc: "수료 후에도 최신 AI 기술 트렌드 세미나 초대 및 커뮤니티 활동을 지원합니다.",
      icon: <Users className="w-10 h-10 text-primary" />,
      color: "bg-red-50"
    },
    {
      title: "프리미엄 교안 제공",
      desc: "현업 전문가가 직접 제작한 실습 중심의 최신 교육 자료를 PDF/인쇄물로 제공합니다.",
      icon: <BookOpen className="w-10 h-10 text-primary" />,
      color: "bg-red-100"
    },
    {
      title: "우수 수료자 시상",
      desc: "성적 우수 수료자에게는 교육원 장학금 또는 파트너사 채용 추천 기회를 드립니다.",
      icon: <Award className="w-10 h-10 text-primary" />,
      color: "bg-red-50"
    },
    {
      title: "자격증 발급 지원",
      desc: "민간 및 국가 공인 자격증 취득을 위한 보충 강의 및 시험 응시를 지원합니다.",
      icon: <Star className="w-10 h-10 text-primary" />,
      color: "bg-red-100"
    }
  ];

  return (
    <div>
      <div className="page-header">
        <div className="container">
          <h1>수강혜택</h1>
        </div>
      </div>
      <div className="container py-16">
        <section className="mb-20 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">타임스미디어만의 특별한 수강 혜택</h2>
          <p className="text-xl text-muted leading-relaxed">
            단순한 교육을 넘어, 실질적인 성장과 성공을 위한 <br/>
            다양한 지원 프로그램을 경험해 보세요.
          </p>
        </section>

        <div className="grid col-3 gap-8">
          {benefits.map((benefit, idx) => (
            <div key={idx} className={`p-10 rounded-3xl transition-all hover:-translate-y-2 hover:shadow-2xl ${benefit.color}`}>
              <div className="mb-6">{benefit.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
              <p className="text-muted text-lg leading-relaxed">{benefit.desc}</p>
            </div>
          ))}
        </div>

        <section className="mt-32">
          <div className="card bg-main text-white p-12 overflow-hidden relative">
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="text-center md:text-left">
                <h3 className="text-3xl font-bold mb-4">현재 진행 중인 특별 이벤트</h3>
                <p className="text-xl opacity-80">지금 등록하면 'AI 프롬프트 엔지니어링 팁북'을 전원 증정합니다!</p>
              </div>
              <div className="shrink-0">
                <span className="text-6xl font-black opacity-30 select-none">EVENT</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
