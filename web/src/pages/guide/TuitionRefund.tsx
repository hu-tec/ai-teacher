
import { ShieldCheck, Info, AlertTriangle } from 'lucide-react';

export default function TuitionRefund() {
  return (
    <div>
      <div className="page-header">
        <div className="container">
          <h1>수강료 환불 안내</h1>
        </div>
      </div>
      <div className="container py-16">
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <ShieldCheck className="text-primary w-8 h-8" />
            <h2 className="text-2xl font-bold">환불 규정 원칙</h2>
          </div>
          <div className="card p-8 bg-secondary border-none shadow-sm leading-relaxed text-lg text-muted">
            <p className="mb-4">본 교육원은 <strong>'평생교육법 시행령 제23조'</strong>에 의거하여 투명하고 합리적인 환불 정책을 시행하고 있습니다.</p>
            <p>환불은 수강 신청 시 선택한 결제 수단에 따라 처리되며, 환불 사유가 발생한 날로부터 5영업일 이내에 절차가 시작됩니다.</p>
          </div>
        </section>

        <section className="mb-16">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <Info className="text-primary w-5 h-5" />
            학습비 반환 기준
          </h3>
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="p-6">반환 사유 발생 시점</th>
                  <th className="p-6">반환 금액</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr className="border-b">
                  <td className="p-6 font-medium">수업 개시 이전</td>
                  <td className="p-6 text-primary font-bold">이미 납부한 학습비 전액</td>
                </tr>
                <tr className="border-b">
                  <td className="p-6 font-medium">총 수업시간의 1/3 경과 전</td>
                  <td className="p-6">이미 납부한 학습비의 2/3 해당액</td>
                </tr>
                <tr className="border-b">
                  <td className="p-6 font-medium">총 수업시간의 1/2 경과 전</td>
                  <td className="p-6">이미 납부한 학습비의 1/2 해당액</td>
                </tr>
                <tr>
                  <td className="p-6 font-medium">총 수업시간의 1/2 경과 후</td>
                  <td className="p-6 text-muted">반환하지 아니함</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-16">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
             <AlertTriangle className="text-amber-500 w-5 h-5" />
             신청 시 유의사항
          </h3>
          <div className="grid col-2 gap-8">
            <div className="p-8 border rounded-2xl">
               <h4 className="font-bold mb-4">환불 방법</h4>
               <ul className="bullet-list-small text-muted">
                 <li>카드 결제: 승인 취소 (부분 취소 가능)</li>
                 <li>가상계좌/무통장: 본인 명의 계좌로 환불</li>
                 <li>실시간 계좌이체: 이체 내역 취소</li>
               </ul>
            </div>
            <div className="p-8 border rounded-2xl">
               <h4 className="font-bold mb-4">기타 참고</h4>
               <ul className="bullet-list-small text-muted">
                 <li>교재비 및 자격증 응시료는 사정에 따라 별도 정산될 수 있습니다.</li>
                 <li>패키지 할인이 적용된 경우, 정상가 기준으로 잔여 학습비가 산출됩니다.</li>
                 <li>개강 연기 또는 폐강 시에는 전액 환불됩니다.</li>
               </ul>
            </div>
          </div>
        </section>

        <div className="text-center">
          <p className="text-muted mb-6">환불 관련 상세 문의는 고객센터로 연락 주시기 바랍니다.</p>
          <div className="inline-flex items-center gap-6 p-4 border rounded-full px-10">
            <span className="font-bold">상담전화: 02-1234-5678</span>
            <span className="w-px h-4 bg-gray-300"></span>
            <span className="text-muted">평일 09:00 - 18:00</span>
          </div>
        </div>
      </div>
    </div>
  );
}
