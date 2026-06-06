import { motion } from 'framer-motion';

const InlineReview = ({ quote, author, bgGradient }) => (
  <section
    style={{
      background: bgGradient || 'linear-gradient(to bottom, var(--surface) 0%, var(--surface-deep) 100%)',
      padding: '60px 24px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      boxSizing: 'border-box',
    }}
  >
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{
        maxWidth: '680px',
        width: '100%',
        backgroundColor: 'rgba(30, 37, 53, 0.45)',
        border: '1px solid rgba(148, 163, 184, 0.08)',
        borderRadius: '16px',
        padding: '32px 36px',
        textAlign: 'center',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        boxSizing: 'border-box',
      }}
    >
      {/* Quote Text */}
      <p style={{
        fontSize: '15.5px',
        color: 'var(--silver, #e2e8f0)',
        lineHeight: '1.7',
        margin: '0 auto 16px auto',
        maxWidth: '600px',
        fontWeight: 400,
        fontFamily: 'Inter, system-ui, sans-serif',
      }}>
        "{quote}"
      </p>

      {/* Author & Source */}
      <div style={{
        fontSize: '13px',
        color: 'var(--slate, #94a3b8)',
        fontWeight: 500,
        fontFamily: 'Inter, system-ui, sans-serif',
      }}>
        {author} &middot; Google Review
      </div>
    </motion.div>
  </section>
);

export default InlineReview;
