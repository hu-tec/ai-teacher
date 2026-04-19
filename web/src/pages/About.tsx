
import React from 'react';

export default function About() {
  return (
    <div className="animate-fade-in">
      <div className="page-header">
        <div className="container">
          <h1>교육원 소개</h1>
        </div>
      </div>

      <div className="container py-16">
        {/* 1. 인사말 */}
        <section className="mb-12">
          <h2 className="section-title mb-8">인사말</h2>
          <div className="card border-none shadow-sm p-10 bg-white">
            <h3 className="font-bold text-3xl text-primary mb-6">타임스미디어는 사람을 키우는 교육을 이어갑니다</h3>
            <p className="text-muted text-lg leading-relaxed">
              타임스미디어는 오랜 시간 TESOL과 언어교육, 통번역 교육을 운영하며
              교육현장을 이해하고 강사를 양성해온 교육기관입니다.<br />
              이제 AI시대에 맞춰 AI툴활용과 AI윤리를 중심으로 실전형 AI강사 양성과정을 운영하고 있습니다.<br />
              우리는 기술만 가르치는 것이 아니라 사람을 가르칠 수 있는 교육자의 역량을 함께 키우고자 합니다.
            </p>
          </div>
        </section>

        {/* 2. 타임스미디어 소개 */}
        <section className="mb-12">
          <h2 className="section-title mb-8">타임스미디어 소개</h2>
          <div className="card border-none shadow-sm p-10 bg-secondary/30">
            <h3 className="font-bold text-3xl text-main mb-6">오랜 교육경험 위에 새로운 AI교육을 더합니다</h3>
            <p className="text-muted text-lg leading-relaxed">
              타임스미디어는 TESOL을 오랜 기간 운영하며 국내외 교육 네트워크와
              수많은 수강생, 졸업생, 협력기관과 함께 성장해왔습니다.<br />
              특히 3만 명 이상의 TESOL 졸업생 자산과 교육 운영 노하우는
              AI강사 양성과정을 신뢰 있게 운영할 수 있는 강력한 기반입니다.
            </p>
          </div>
        </section>

        {/* 3. 핵심 강점 */}
        <section className="mb-12">
          <h2 className="section-title mb-8">타임스미디어의 강점</h2>
          <div className="grid col-3 gap-8">
            <div className="card hover:-translate-y-2 transition-all">
              <h4 className="font-bold text-xl text-primary mb-4">오랜 TESOL 운영 경험</h4>
              <p className="text-muted">23년 이상의 교사 교육 노하우를 바탕으로 체계적인 커리큘럼을 제공합니다.</p>
            </div>
            <div className="card hover:-translate-y-2 transition-all">
              <h4 className="font-bold text-xl text-primary mb-4">3만 명 이상의 졸업생</h4>
              <p className="text-muted">국내 최대 규모의 테솔 졸업생 네트워크를 보유한 검증된 교육기관입니다.</p>
            </div>
            <div className="card hover:-translate-y-2 transition-all">
              <h4 className="font-bold text-xl text-primary mb-4">국내외 교육 네트워크</h4>
              <p className="text-muted">주요 대학 및 글로벌 기관과의 협력을 통해 공신력 있는 교육 환경을 구축했습니다.</p>
            </div>
            <div className="card hover:-translate-y-2 transition-all">
              <h4 className="font-bold text-xl text-primary mb-4">강사양성 전문성</h4>
              <p className="text-muted">단순 지식 전달이 아닌, 실제 현장에서 가르칠 수 있는 교육자 육성에 집중합니다.</p>
            </div>
            <div className="card hover:-translate-y-2 transition-all">
              <h4 className="font-bold text-xl text-primary mb-4">실전형 과정 설계</h4>
              <p className="text-muted">AI툴활용과 AI윤리를 결합하여 즉시 현장 투입 가능한 교육을 지향합니다.</p>
            </div>
          </div>
        </section>

        {/* 4. 숫자로 보는 타임스미디어 */}
        <section className="mb-12 bg-main rounded-3xl p-10 text-white overflow-hidden relative shadow-2xl">
          <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
            <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="200" cy="200" r="150" stroke="white" strokeWidth="2" />
              <circle cx="200" cy="200" r="190" stroke="white" strokeWidth="1" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold mb-10 center">숫자로 보는 타임스미디어</h2>
          <div className="grid col-3 gap-8">
            <div className="center">
              <div className="text-3xl font-bold text-primary mb-2">23년+</div>
              <div className="text-white opacity-80">교육 운영 경험</div>
            </div>
            <div className="center mt-4">
              <div className="text-3xl font-bold text-primary mb-2">30,000명+</div>
              <div className="text-white opacity-80">TESOL 졸업생</div>
            </div>
            <div className="center mt-4">
              <div className="text-3xl font-bold text-primary mb-2">30만명+</div>
              <div className="text-white opacity-80">시험·교육 네트워크</div>
            </div>
            <div className="center mt-4">
              <div className="text-3xl font-bold text-primary mb-2">10개+</div>
              <div className="text-white opacity-80">주요 협력기관</div>
            </div>
            <div className="center mt-4">
              <div className="text-3xl font-bold text-primary mb-2">12개국+</div>
              <div className="text-white opacity-80">글로벌 네트워크</div>
            </div>
            <div className="center mt-4">
              <div className="text-3xl font-bold text-primary mb-2">다수</div>
              <div className="text-white opacity-80">대학·기관 협약</div>
            </div>
          </div>
        </section>

        {/* 5. 연혁 */}
        <section className="mb-12">
          <h2 className="section-title mb-8">타임스미디어 연혁</h2>
          <div className="card shadow-sm border-secondary">
            <div className="rich-text">
              <p className="mb-6 text-xl text-main font-bold">타임스미디어는 교육의 길을 꾸준히 걸어왔습니다.</p>
              <ul className="bullet-list">
                <li>TESOL 교육과정 운영 시작</li>
                <li>국내외 교육 네트워크 확대</li>
                <li>통번역 및 언어교육 프로그램 확장</li>
                <li>교육 협약기관 확대</li>
                <li>AI교육 및 AI강사 양성과정 확대</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 6. 교육 네트워크 */}
        <section className="mb-8">
          <h2 className="section-title mb-8">교육 네트워크 현황</h2>
          <div className="grid col-2 gap-8">
            <div className="card border-none bg-secondary/30 p-8 hover:bg-secondary transition-all">
              <h4 className="font-bold text-xl text-main mb-3">전국 주요 대학 교육장</h4>
              <p className="text-muted leading-relaxed">연세대 미래교육원 등 전국 주요 거점 대학과 연계한 캠퍼스 네트워크를 구축하고 있습니다.</p>
            </div>
            <div className="card border-none bg-secondary/30 p-8 hover:bg-secondary transition-all">
              <h4 className="font-bold text-xl text-main mb-3">전문 교육센터 및 협력기관</h4>
              <p className="text-muted leading-relaxed">주요 어학원, 방과후협회 등 다양한 교육 단체와의 오프라인 파트너십을 통해 교육 현장을 확장합니다.</p>
            </div>
            <div className="card border-none bg-secondary/30 p-8 hover:bg-secondary transition-all">
              <h4 className="font-bold text-xl text-main mb-3">해외 교육센터 및 협력처</h4>
              <p className="text-muted leading-relaxed">글로벌 TESOL 교육 기반의 국제 인증 센터와 협력하여 세계적 수준의 교육을 운영합니다.</p>
            </div>
            <div className="card border-none bg-secondary/30 p-8 hover:bg-secondary transition-all">
              <h4 className="font-bold text-xl text-main mb-3">해외 제휴 및 협업기관</h4>
              <p className="text-muted leading-relaxed">해외 유수의 제휴 어학원 및 글로벌 AI 툴 개발사들과의 현지 파트너십을 유지하고 있습니다.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
