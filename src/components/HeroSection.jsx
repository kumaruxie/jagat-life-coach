// import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section style={{ 
      position: 'relative', 
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      paddingTop: '80px',
      overflow: 'hidden',
      backgroundColor: 'var(--color-primary)',
      color: 'white'
    }}>
      {/* 3D Spline Background Placeholder */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 0,
        opacity: 0.6
      }}>
        {/* Important: Use a valid Spline URL here. Invalid URLs will crash the React app after 1 second! */}
        <Spline scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" />
      </div>

      <div className="section-inner" style={{ 
        position: 'relative', 
        zIndex: 1, 
        maxWidth: '800px',
        textAlign: 'center'
      }}>
        <motion.span 
          className="tag"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ color: '#F6E05E', marginBottom: '24px' }}
        >
          For working professionals, specifically for hindi and hinglish speaking peoples
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{ color: 'white', marginBottom: '24px' }}
        >
          Ghar Ke Conflicts Ko <em style={{ color: 'var(--color-secondary)', fontStyle: 'normal' }}>Ek Mahine Mai</em> Clarity Mein Badlo.
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{ color: 'rgba(255,255,255,0.8)', fontSize: '20px', marginBottom: '40px' }}
        >
          Agar roz ghar aate hi tension, blame game, ya silent treatment face karna pad raha hai — toh problem aap nahi hain. Problem hai aapka <strong>Personality DNA</strong> jo abhi tak decode nahi hua hai. 30 din mein hum isey badlenge.
        </motion.p>
        
        <motion.div 
          className="flex-responsive"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <button className="btn-primary" style={{ padding: '20px 40px', fontSize: '16px' }}>
            Join the Accelerator — ₹1,997
          </button>
          <a 
            href="#vsl" 
            className="btn-ghost" 
            style={{ 
              color: 'white', 
              borderColor: 'rgba(255,255,255,0.3)', 
              padding: '20px 40px', 
              fontSize: '16px',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            ▶ Watch Jagat's Message
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
