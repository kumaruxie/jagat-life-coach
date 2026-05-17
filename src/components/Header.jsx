import logoImg from '../assets/apkacoach_logo_hires.png';

const Header = ({ triggerPayment }) => {
  return (
    <header className="main-header header-animate">
      <div className="section-inner header-responsive">
        <div className="logo header-logo">
          <img 
            src={logoImg} 
            alt="ApkaCoach — Jagat Turkiya coaching platform logo"
            width={180}
            height={72}
          />
        </div>
        
        <button className="header-cta" onClick={() => triggerPayment()} aria-label="Start enrollment now">
          Start Now →
        </button>
      </div>
    </header>
  );
};

export default Header;
