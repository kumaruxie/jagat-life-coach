import { motion } from 'framer-motion';

const VSLSection = ({ triggerPayment }) => {
  return (
    <section id="vsl" className="section" style={{ backgroundColor: 'var(--color-bg)' }}>
      <div className="section-inner" style={{ textAlign: 'center', maxWidth: '900px' }}>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: '16px' }}
        >
          Watch This Before You Scroll Further
        </motion.h2>
        
        {/* <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          style={{ marginBottom: '40px' }}
        >
          Jagat explains exactly what's keeping your family stuck — and what the next 30 days will do about it.
        </motion.p> */}
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          style={{
            width: '100%',
            aspectRatio: '16/9',
            backgroundColor: '#000',
            borderRadius: '16px',
            marginBottom: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
          }}
        >
          <iframe
            src="https://www.youtube.com/embed/92mCOUkNrj0?autoplay=1&mute=1&rel=0&modestbranding=1&controls=1"
            title="Video Sales Letter"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}
          ></iframe>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <button 
            className="btn-primary" 
            style={{ padding: '16px 32px' }}
            onClick={() => triggerPayment()}
          >
            I'm Ready — Show Me the Program
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default VSLSection;
