import { motion } from 'framer-motion';

const CTABanner = ({ text, buttonText = "Secure Your Spot", triggerPayment, bgColor = 'transparent' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      style={{
        padding: '48px 16px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        background: bgColor
      }}
    >
      <div style={{
        maxWidth: '800px',
        width: '100%',
        backgroundColor: 'rgba(35, 43, 59, 0.25)', 
        border: '1px solid rgba(255, 255, 255, 0.05)',
        borderRadius: '24px',
        padding: '48px 32px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.25)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)'
      }}>
        {/* Luxury Radial Glow Background */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '350px',
          height: '350px',
          background: 'radial-gradient(circle, rgba(16,185,129,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 1
        }} />

        <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
          {text && (
            <p style={{
              fontSize: '17px',
              color: 'var(--silver)',
              margin: 0,
              maxWidth: '540px',
              lineHeight: '1.7',
              fontFamily: 'var(--font-heading)',
              fontStyle: 'italic',
              fontWeight: 400,
              letterSpacing: '0.01em'
            }}>
              &ldquo;{text}&rdquo;
            </p>
          )}

          <motion.button
            className="btn-cta btn-shimmer"
            onClick={() => triggerPayment()}
            whileHover={{ scale: 1.02, translateY: -2 }}
            whileTap={{ scale: 0.98 }}
            style={{
              padding: '14px 32px',
              fontSize: '13.5px',
              borderRadius: '8px',
              fontWeight: 700,
              letterSpacing: '0.05em',
              textTransform: 'uppercase'
            }}
          >
            {buttonText}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default CTABanner;
