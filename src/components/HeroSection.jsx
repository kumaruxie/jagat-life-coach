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
      overflow: 'hidden',
      backgroundColor: 'var(--surface)',
      color: 'var(--silver)'
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
          style={{ color: 'var(--slate)', marginBottom: '24px' }}
        >
          For working professionals, specifically for hindi and hinglish speaking peoples
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{ color: 'var(--silver)', marginBottom: '24px' }}
        >
          Ghar Ke Conflicts Ko <em style={{ color: 'var(--emerald)', fontStyle: 'normal' }}>Ek Mahine Mai</em> Clarity Mein Badlo.
        </motion.h1>
        
        {/* 
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{ color: 'rgba(255,255,255,0.8)', fontSize: '20px', marginBottom: '40px' }}
        >
          Agar roz ghar aate hi tension, blame game, ya silent treatment face karna pad raha hai — toh problem aap nahi hain. Problem hai aapka <strong>Personality DNA</strong> jo abhi tak decode nahi hua hai. 30 din mein hum isey badlenge.
        </motion.p>
        */}

        {/* VSL added directly to Hero as requested */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{
            width: '100%',
            maxWidth: '800px',
            aspectRatio: '16/9',
            backgroundColor: 'var(--surface-deep)',
            borderRadius: '16px',
            margin: '0 auto 48px',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
            border: '1px solid rgba(255,255,255,0.1)'
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

        {/* CTA restored below VSL as requested */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <button 
            className="btn-primary" 
            style={{ padding: '20px 48px', fontSize: '18px', fontWeight: 700 }}
            onClick={() => triggerPayment()}
          >
            Join the Accelerator — ₹1,997
          </button>
        </motion.div>
        
        {/* Previous text and second CTA remain commented out to keep focus on VSL */}
        {/* 
        <motion.p ... > ... </motion.p>
        <a ... > ▶ Watch Jagat's Message </a>
        */}
      </div>
    </section>
  );
};

export default HeroSection;
