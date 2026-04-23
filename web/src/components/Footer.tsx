import { LucidePhone, LucideMail, LucideMapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div className="mb-2">
            <span style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--white)', letterSpacing: '-0.025em' }}>TIMES MEDIA</span>
          </div>
          <ul className="contact-info" style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.95rem' }}>
            <li>상호명 : 주식회사 타임스미디어</li>
            <li>대표이사 : 김국진</li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
              <LucideMapPin size={18} style={{ marginTop: '2px', flexShrink: 0 }} />
              <span>서울 서초구 양재천로 19길 26, 6층(양재동)</span>
            </li>
            <li>사업자번호 : 101-86-07479</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <LucidePhone size={18} style={{ flexShrink: 0 }} />
              <span>02-6207-9090</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <LucideMail size={18} style={{ flexShrink: 0 }} />
              <span>hutechc01@gmail.com</span>
            </li>
          </ul>
        </div>
        
        <div className="copy" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            © 2025 Times Media Inc. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '24px' }}>
            <a href="#">이용약관</a>
            <a href="#">개인정보처리방침</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
