import { motion } from 'framer-motion';
import logoImg from '../assets/APKACOACH logo png.png';

const Header = ({ triggerPayment }) => {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="main-header"
    >
      <div className="section-inner header-responsive">
        <div className="logo header-logo">
          <img 
            src={logoImg} 
            alt="ApkaCoach logo" 
          />
        </div>
        
        <button className="btn-primary header-cta" onClick={() => triggerPayment()}>
          Apply Now — ₹1,997
        </button>
      </div>
    </motion.header>
  );
};

export default Header;
