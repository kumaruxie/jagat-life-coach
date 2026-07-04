import { useState, useEffect } from 'react';
import { smoothScrollTo } from '../utils/scroll';

const Header = ({ triggerPayment }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    smoothScrollTo(0, 600); // Smoother custom top scroll (600ms duration)
  };

  return (
    <header className={`main-header header-animate ${scrolled ? 'scrolled' : ''}`}>
      <div className="section-inner header-responsive">
        <a href="#" onClick={(e) => { e.preventDefault(); scrollToTop(); }} className="logo header-logo" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', minWidth: 0, flexShrink: 1, overflow: 'hidden' }}>
          <span style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap', lineHeight: 1 }}>
            <span style={{
              fontFamily: "'Rozha One', serif",
              fontSize: 'clamp(16px, 4.5vw, 22px)',
              color: 'var(--silver)',
              lineHeight: 1,
              position: 'relative',
              top: '1px',
              letterSpacing: '-0.5px',
              marginRight: '3px'
            }}>
              आपका
            </span>
            <span style={{
              fontFamily: "'Abril Fatface', cursive",
              fontSize: 'clamp(18px, 5vw, 24px)',
              color: '#10b981',
              lineHeight: 1
            }}>
              Coach.com
            </span>
          </span>
        </a>
        
        <button className="header-cta btn-pill" onClick={() => triggerPayment()} aria-label="Request callback" style={{ flexShrink: 0 }}>
          Request Callback →
        </button>
      </div>
    </header>
  );
};

export default Header;
