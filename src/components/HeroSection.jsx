import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const HeroSection = ({ triggerPayment }) => {
  return (
    <section style={{ 
      position: 'relative', 
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      paddingTop: '80px',
      paddingBottom: '40px',
      overflow: 'hidden',
      backgroundColor: 'var(--surface)',
      color: 'var(--silver)'
    }}>
      {/* 3D Spline Background — follows mouse cursor */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 0,
        opacity: 0.5
      }}>
        {/* SPLINE URL: Replace with your custom Spline scene URL below.
            Current scene is a subtle abstract 3D that follows the mouse cursor. */}
        <Spline scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" />
      </div>

      {/* Dark gradient overlay for text readability */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(ellipse at center, rgba(26,32,44,0.3) 0%, rgba(26,32,44,0.85) 70%)',
        zIndex: 0
      }} />

      <div className="section-inner hero-content" style={{ 
        position: 'relative', 
        zIndex: 1, 
        maxWidth: '900px',
        textAlign: 'center'
      }}>
        {/* Subtitle tag */}
        <motion.span 
          className="tag"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ color: 'var(--slate)', marginBottom: '20px' }}
        >
          {/* COPYWRITING: Edit the subtitle below */}
          For working professionals, specifically for hindi and hinglish speaking peoples
        </motion.span>
        
        {/* Main Heading */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{ color: 'var(--silver)', marginBottom: '32px' }}
        >
          {/* COPYWRITING: Edit the main heading below */}
          Ghar Ke Conflicts Ko <em style={{ color: 'var(--emerald)', fontStyle: 'normal' }}>Ek Mahine Mai</em> Clarity Mein Badlo.
        </motion.h1>

        {/* Sub-description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          style={{
            fontSize: '16px',
            color: 'var(--slate)',
            maxWidth: '560px',
            margin: '0 auto 40px',
            lineHeight: '1.7'
          }}
        >
          {/* COPYWRITING: Edit the description below */}
          A 30-day structured coaching program to decode your Personality DNA and transform family dynamics.
        </motion.p>

        {/* VSL Video */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          style={{
            width: '100%',
            maxWidth: '780px',
            aspectRatio: '16/9',
            backgroundColor: 'var(--surface-deep)',
            borderRadius: '16px',
            margin: '0 auto 40px',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 24px 48px rgba(0,0,0,0.4)',
            border: '1px solid rgba(255,255,255,0.08)'
          }}
        >
          <iframe
            src="https://www.youtube.com/embed/92mCOUkNrj0?autoplay=0&mute=0&rel=0&modestbranding=1&controls=1"
            title="Video Sales Letter"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}
          ></iframe>
        </motion.div>

        {/* CTA Button — no pricing */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}
        >
          <button 
            className="btn-primary" 
            style={{ padding: '18px 44px', fontSize: '14px', fontWeight: 700 }}
            onClick={() => triggerPayment()}
          >
            {/* COPYWRITING: Edit the CTA text below */}
            Join the Accelerator
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
