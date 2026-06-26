import { useState, useEffect } from 'react';

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
    const startY = window.scrollY;
    const distance = -startY;
    const duration = 800; // 800ms for smooth elegant sweep
    let startTime = null;

    const animateScroll = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      
      // easeInOutQuad curve: slow start, fast middle, slow finish
      const progress = Math.min(timeElapsed / duration, 1);
      const easeProgress = progress < 0.5 
        ? 2 * progress * progress 
        : 1 - Math.pow(-2 * progress + 2, 2) / 2;
      
      window.scrollTo(0, startY + distance * easeProgress);
      
      if (timeElapsed < duration) {
        requestAnimationFrame(animateScroll);
      }
    };
    requestAnimationFrame(animateScroll);
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
