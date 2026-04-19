import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function GNB() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="gnb-header">
      <div className="container flex items-center justify-between" style={{ width: '100%' }}>
        <Link to="/" className="logo">
          <h1>타임스미디어</h1>
          <span className="subtitle">AI 강사 양성과정</span>
        </Link>
        
        <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
          <NavLink to="/about">교육원 소개</NavLink>
          <NavLink to="/courses">교육과정 안내</NavLink>
          <div className="nav-item">
            <NavLink to="/guide/registration" className={({isActive}) => isActive || window.location.pathname.startsWith('/guide') ? 'active' : ''}>
              수강안내
            </NavLink>
            <div className="dropdown">
              <Link to="/guide/registration" className="dropdown-item">등록안내</Link>
              <Link to="/guide/schedule" className="dropdown-item">학사일정</Link>
              <Link to="/guide/benefits" className="dropdown-item">수강혜택</Link>
              <Link to="/guide/refund" className="dropdown-item">수강료 환불</Link>
              <Link to="/guide/certificates" className="dropdown-item">증명서 출력</Link>
            </div>
          </div>
          <NavLink to="/community">커뮤니티</NavLink>
          <NavLink to="/contact">1:1 문의</NavLink>
        </nav>

        <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
