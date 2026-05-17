import { motion } from 'framer-motion';

const CTABanner = ({ text, buttonText = "Secure Your Spot", triggerPayment }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      style={{
        padding: '48px 24px',
        textAlign: 'center',
        position: 'relative'
      }}
    >
      {/* Subtle divider line */}
      <div style={{
        width: '1px',
        height: '48px',
        background: 'linear-gradient(to bottom, transparent, var(--emerald), transparent)',
        margin: '0 auto 32px',
        opacity: 0.4
      }} />

      {text && (
        <p style={{
          fontSize: '16px',
          color: 'var(--slate)',
          margin: '0 auto 24px',
          maxWidth: '480px',
          lineHeight: '1.7',
          fontStyle: 'italic'
        }}>
          {text}
        </p>
      )}

      <motion.button
        className="btn-cta"
        onClick={() => triggerPayment()}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        style={{
          padding: '16px 40px',
          fontSize: '14px'
        }}
      >
        {buttonText}
      </motion.button>

      {/* Subtle divider line below */}
      <div style={{
        width: '1px',
        height: '48px',
        background: 'linear-gradient(to bottom, transparent, var(--emerald), transparent)',
        margin: '32px auto 0',
        opacity: 0.4
      }} />
    </motion.div>
  );
};

export default CTABanner;
