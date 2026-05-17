import { motion } from 'framer-motion';

const CTABanner = ({ text, buttonText = "Secure Your Spot", triggerPayment }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      style={{
        padding: '40px 24px',
        textAlign: 'center',
        position: 'relative'
      }}
    >
      {/* Subtle divider line */}
      <div style={{
        width: '1px',
        height: '40px',
        background: 'linear-gradient(to bottom, transparent, var(--emerald), transparent)',
        margin: '0 auto 28px',
        opacity: 0.5
      }} />

      {text && (
        <p style={{
          fontSize: '15px',
          color: 'var(--slate)',
          margin: '0 auto 20px',
          maxWidth: '420px',
          lineHeight: '1.6'
        }}>
          {text}
        </p>
      )}

      <motion.button
        className="btn-primary"
        onClick={() => triggerPayment()}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        style={{
          padding: '16px 36px',
          fontSize: '13px',
          fontWeight: 700,
          background: 'var(--emerald)',
          color: '#fff',
          borderRadius: '6px',
          letterSpacing: '0.06em',
          border: 'none'
        }}
      >
        {/* COPYWRITING: Change button text here */}
        {buttonText}
      </motion.button>

      {/* Subtle divider line below */}
      <div style={{
        width: '1px',
        height: '40px',
        background: 'linear-gradient(to bottom, transparent, var(--emerald), transparent)',
        margin: '28px auto 0',
        opacity: 0.5
      }} />
    </motion.div>
  );
};

export default CTABanner;
