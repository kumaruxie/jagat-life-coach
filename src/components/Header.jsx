const Header = ({ triggerPayment }) => {
  return (
    <header className="main-header header-animate">
      <div className="section-inner header-responsive">
        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="logo header-logo" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <span style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap', lineHeight: 1 }}>
            <span style={{
              fontFamily: "'Rozha One', serif",
              fontSize: '22px',
              color: '#ffffff',
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
              fontSize: '24px',
              color: '#10b981',
              lineHeight: 1
            }}>
              Coach.com
            </span>
          </span>
        </a>
        
        <button className="header-cta" onClick={() => triggerPayment()} aria-label="Start enrollment now">
          Start Now →
        </button>
      </div>
    </header>
  );
};

export default Header;
