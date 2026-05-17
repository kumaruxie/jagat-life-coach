const Header = ({ triggerPayment }) => {
  return (
    <header className="main-header header-animate">
      <div className="section-inner header-responsive">
        <div className="logo header-logo" style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap', lineHeight: 1 }}>
            <span style={{
              fontFamily: "'Yatra One', cursive",
              fontSize: '24px',
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
              fontFamily: "'Lobster', cursive",
              fontSize: '28px',
              color: '#10b981',
              lineHeight: 1
            }}>
              Coach.com
            </span>
          </span>
        </div>
        
        <button className="header-cta" onClick={() => triggerPayment()} aria-label="Start enrollment now">
          Start Now →
        </button>
      </div>
    </header>
  );
};

export default Header;
