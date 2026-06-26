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
      transition={{ duration: 0.3, ease: 'easeOut' }}
      style={{
        maxWidth: '840px',
        width: '100%',
        backgroundColor: 'var(--surface-raised)',
        border: '1px solid var(--border)',
        borderRadius: '16px',
        padding: '42px 48px',
        textAlign: 'center',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.02)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {/* Google Review Header (Logo & Stars) */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '6px',
        marginBottom: '20px',
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
        }}>
          <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block' }}>
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05" />
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
          </svg>
          <span style={{
            fontSize: '11.5px',
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'var(--slate)',
            fontFamily: 'var(--font-body)',
          }}>
            Google Review
          </span>
        </div>
        <div style={{
          display: 'flex',
          gap: '2px',
          color: '#fbbf24',
          fontSize: '13px',
          userSelect: 'none',
        }}>
          ★ ★ ★ ★ ★
        </div>
      </div>

      {/* Reviewer Name */}
      <h4 style={{
        fontSize: '16.5px',
        fontWeight: 600,
        color: 'var(--silver)',
        margin: '0 0 14px 0',
        fontFamily: 'var(--font-body)',
      }}>
        {author}
      </h4>

      {/* Actual Review Quote */}
      <p style={{
        fontSize: '17.5px',
        color: 'var(--silver)',
        lineHeight: '1.8',
        margin: '0 auto',
        maxWidth: '740px',
        fontWeight: 400,
        fontStyle: 'italic',
        fontFamily: 'var(--font-body)',
      }}>
        "{quote}"
      </p>
    </motion.div>
  </section>
);

export default InlineReview;
