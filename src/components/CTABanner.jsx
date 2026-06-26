import { motion } from 'framer-motion';

const CTABanner = ({ text, buttonText = "Secure Your Spot", triggerPayment, bgColor = 'transparent' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      style={{
        padding: 'var(--space-4) var(--space-2)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        background: bgColor
      }}
    >
      <div className="cta-banner-card" style={{
        maxWidth: '800px',
        width: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.8)', 
        border: '1px solid var(--border)',
        borderRadius: '24px',
        padding: 'var(--space-6) var(--space-4)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 20px 40px rgba(18, 36, 33, 0.03), 0 1px 3px rgba(18, 36, 33, 0.01)',
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
          background: 'radial-gradient(circle, rgba(16,185,129,0.03) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 1
        }} />

        <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-3)' }}>
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
            className="btn-cta btn-shimmer btn-pill"
            onClick={() => triggerPayment()}
            whileHover={{ scale: 1.02, translateY: -2, transition: { duration: 0.12, ease: "easeOut" } }}
            whileTap={{ scale: 0.98 }}
            style={{
              padding: '14px 32px',
              fontSize: '13.5px',
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
