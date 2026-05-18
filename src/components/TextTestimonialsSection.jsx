import { motion } from 'framer-motion';

/* ─────────────────────────────────────────────────────────────
   Text Testimonials — uniform dark cards, all identical in structure.
   Design inspired by editorial card layout, adapted to site theme.
───────────────────────────────────────────────────────────── */

const AVATAR_TINTS = [
  { bg: 'rgba(16,185,129,0.12)',  color: '#6ee7b7' },
  { bg: 'rgba(96,165,250,0.12)',  color: '#93c5fd' },
  { bg: 'rgba(251,191,36,0.12)', color: '#fde68a' },
  { bg: 'rgba(244,114,182,0.12)', color: '#f9a8d4' },
  { bg: 'rgba(167,139,250,0.12)', color: '#c4b5fd' },
  { bg: 'rgba(52,211,153,0.12)',  color: '#6ee7b7' },
];

const GoogleStarIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const TrendIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>
);

const BookIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
  </svg>
);

/* Single uniform card — no featured differential */
const TestimonialCard = ({ quote, name, role, initials, tag, tagIcon, index, colorIdx }) => {
  const av = AVATAR_TINTS[colorIdx % AVATAR_TINTS.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.48, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      style={{
        background: 'var(--surface-raised)',
        border: '1px solid rgba(148,163,184,0.1)',
        borderRadius: '14px',
        padding: '22px',
        display: 'flex',
        flexDirection: 'column',
        gap: '14px',
        position: 'relative',
        overflow: 'hidden',
      }}
      whileHover={{
        y: -4,
        borderColor: 'rgba(148,163,184,0.22)',
        boxShadow: '0 14px 36px rgba(0,0,0,0.28)',
        transition: { duration: 0.25 },
      }}
    >
      {/* Subtle decorative quote watermark */}
      <span style={{
        position: 'absolute', top: '8px', right: '14px',
        fontSize: '64px',
        fontFamily: "'Newsreader', Georgia, serif",
        lineHeight: 1,
        color: 'rgba(148,163,184,0.05)',
        userSelect: 'none',
        pointerEvents: 'none',
      }}>&ldquo;</span>

      {/* ─── Stars + Google Badge ─── */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', gap: '2px' }}>
          {[...Array(5)].map((_, i) => (
            <span key={i} style={{ color: '#f59e0b', fontSize: '13px' }}>★</span>
          ))}
        </div>
        <div style={{
          display: 'flex', alignItems: 'center', gap: '4px',
          fontSize: '10px', fontWeight: 600,
          letterSpacing: '0.08em', textTransform: 'uppercase',
          color: 'var(--emerald)',
        }}>
          <GoogleStarIcon />
          Google
        </div>
      </div>

      {/* ─── Quote ─── */}
      <p style={{
        margin: 0,
        fontSize: '13.5px',
        fontStyle: 'italic',
        fontFamily: "'Newsreader', Georgia, serif",
        color: 'var(--silver)',
        lineHeight: '1.75',
        flex: 1,
      }}>
        &ldquo;{quote}&rdquo;
      </p>

      {/* ─── Optional Badge ─── */}
      {tag ? (
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '5px',
          padding: '4px 11px',
          borderRadius: '20px',
          background: 'rgba(16,185,129,0.1)',
          border: '1px solid rgba(16,185,129,0.2)',
          fontSize: '11px', fontWeight: 600,
          color: '#6ee7b7',
          width: 'fit-content',
          letterSpacing: '0.02em',
        }}>
          {tagIcon}
          {tag}
        </div>
      ) : (
        <div style={{ height: '0px' }} />
      )}

      {/* ─── Divider ─── */}
      <div style={{ height: '1px', background: 'rgba(148,163,184,0.08)' }} />

      {/* ─── Author ─── */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div style={{
          width: '34px', height: '34px',
          borderRadius: '50%',
          background: av.bg,
          color: av.color,
          border: `1px solid ${av.color}44`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '11px', fontWeight: 700,
          letterSpacing: '0.04em',
          flexShrink: 0,
        }}>
          {initials}
        </div>
        <div>
          <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--silver)', marginBottom: '2px' }}>{name}</div>
          <div style={{ fontSize: '11px', color: 'var(--slate)' }}>{role}</div>
        </div>
      </div>
    </motion.div>
  );
};

/* ─── Section ─── */
const TextTestimonialsSection = () => {
  const testimonials = [
    {
      quote: 'Working with Jagat Turkiya has been life-changing. His guidance, support, and insight helped me overcome challenges and reach new heights in my personal growth.',
      name: 'Rahul Singh', role: 'Life & Personal Growth Client', initials: 'RS',
      tag: 'Outstanding Growth', tagIcon: <TrendIcon />,
    },
    {
      quote: 'Jagat Sir is the best author coach in the country. He teaches book writing in great detail — from the first page all the way to launch and best-selling.',
      name: 'Sunil Bhari', role: 'Author & Coaching Client', initials: 'SB',
      tag: 'Best Author Coach', tagIcon: <BookIcon />,
    },
    {
      quote: 'A truly life-changing coaching experience — my mindset and clarity have completely shifted after working with him.',
      name: 'Vikram Singh', role: 'Coaching Client', initials: 'VS',
    },
    {
      quote: 'Jagat Sir guided me through every step — from writing to launching my book successfully. Incredible hand-holding throughout.',
      name: 'Priya Sharma', role: 'Author & Coaching Client', initials: 'PS',
    },
    {
      quote: 'Jagat is a very helpful coach who always provides the support needed to face challenges. His tools and systems are easy to use and connect with.',
      name: 'Renu Chaudhary', role: 'Coaching Client', initials: 'RC',
    },
    {
      quote: 'Jagat is an outstanding mind-hacker coach, always ready to guide and help. I have him as part of my mastermind and enjoy working with him as a team.',
      name: 'Rritu Singhi', role: 'Mastermind Member', initials: 'RS',
    },
  ];

  return (
    <section
      id="text-testimonials"
      className="section"
      style={{ background: 'linear-gradient(to bottom, var(--surface-deep) 0%, var(--surface) 60px, var(--surface) 100%)' }}
    >
      <div className="section-inner">

        {/* ─── Header ─── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '48px' }}
        >
          {/* Eyebrow with lines */}
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            gap: '12px', marginBottom: '14px'
          }}>
            <div style={{ height: '1px', width: '36px', background: 'rgba(148,163,184,0.2)' }} />
            <span style={{
              fontSize: '11px', fontWeight: 600, letterSpacing: '0.14em',
              textTransform: 'uppercase', color: 'var(--slate)', whiteSpace: 'nowrap',
            }}>
              Verified Google Reviews
            </span>
            <div style={{ height: '1px', width: '36px', background: 'rgba(148,163,184,0.2)' }} />
          </div>

          <h2 style={{ color: 'var(--silver)', marginBottom: '10px' }}>
            Jin logon ki zindagi{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--emerald)', fontFamily: "'Newsreader', Georgia, serif" }}>badli</em>
          </h2>
          <p style={{ color: 'var(--slate)', fontSize: '15px', maxWidth: '440px', margin: '0 auto', lineHeight: '1.7' }}>
            200+ clients. Har ek ki apni kahani. Yeh unhi ki zuban mein.
          </p>
        </motion.div>

        {/* ─── 3-col responsive grid ─── */}
        <div className="testimonials-bento">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} index={i} colorIdx={i} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TextTestimonialsSection;
