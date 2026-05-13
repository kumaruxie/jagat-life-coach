
import { motion } from 'framer-motion';
import logoImg from '../assets/jagat logo png.png';

const Header = () => {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '80px',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(10px)',
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        borderBottom: '1px solid var(--color-border)'
      }}
    >
      <div className="section-inner header-responsive">
        <div className="logo" style={{ display: 'flex', alignItems: 'center' }}>
          <img 
            src={logoImg} 
            alt="Apka coach logo" 
            style={{ height: '48px', width: 'auto', objectFit: 'contain' }} 
          /> APKACOACH
        </div>
        
        <div className="nav-container" style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          <nav className="nav-links">
            <a href="#about" style={{ fontWeight: 500, fontSize: '15px' }}>About</a>
            <a href="#program" style={{ fontWeight: 500, fontSize: '15px' }}>Program</a>
            <a href="#alumni" style={{ fontWeight: 500, fontSize: '15px' }}>Alumni</a>
          </nav>
          <button className="btn-primary" style={{ padding: '12px 24px', fontSize: '13px' }}>
            Apply Now — ₹1,997
          </button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
