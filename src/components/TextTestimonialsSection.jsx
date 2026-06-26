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



/* Single premium card */
const TestimonialCard = ({ quote, name, role, index, colorIdx }) => {
  const tint = AVATAR_TINTS[colorIdx % AVATAR_TINTS.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.3, delay: index * 0.04, ease: 'easeOut' }}
      style={{
        background: 'var(--surface-raised)',
        border: '1px solid transparent',
        borderRadius: '16px',
        padding: '34px 28px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative',
        overflow: 'hidden',
      }}
      whileHover={{
        y: -6,
        borderColor: 'rgba(16,185,129,0.2)',
        boxShadow: '0 18px 48px rgba(0,0,0,0.32), 0 0 0 1px rgba(16,185,129,0.08)',
        transition: { duration: 0.12 },
      }}
    >
      {/* ─── Decorative accent quote mark ─── */}
      <span style={{
        position: 'absolute',
        top: '8px',
        left: '18px',
        fontSize: '84px',
        fontFamily: "'Newsreader', Georgia, serif",
        lineHeight: 1,
        color: tint.color,
        opacity: 0.25,
        userSelect: 'none',
        pointerEvents: 'none',
      }}>&ldquo;</span>

      {/* ─── Quote ─── */}
      <p style={{
        margin: '36px 0 24px 0',
        fontSize: '15.5px',
        fontStyle: 'normal',
        fontFamily: "'Inter', system-ui, sans-serif",
        color: 'var(--silver)',
        lineHeight: 1.75,
        flex: 1,
      }}>
        {quote}
      </p>

      {/* ─── Author ─── */}
      <div style={{
        borderLeft: `3px solid ${tint.color}`,
        paddingLeft: '12px',
      }}>
        <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--silver)', marginBottom: '3px' }}>{name}</div>
        <div style={{ fontSize: '12.5px', color: 'var(--slate)' }}>{role}</div>
      </div>
    </motion.div>
  );
};

/* ─── Section ─── */
const TextTestimonialsSection = () => {
  const testimonials = [
    {
      quote: 'Working with Jagat Turkiya has been life-changing. His guidance, support, and insight helped me overcome challenges and reach new heights in my personal growth.',
      name: 'Rahul Singh', role: 'Life & Personal Growth Client',
    },
    {
      quote: 'Jagat Sir is the best author coach in the country. He teaches book writing in great detail — from the first page all the way to launch and best-selling.',
      name: 'Sunil Bhari', role: 'Author & Coaching Client',
    },
    {
      quote: 'A truly life-changing coaching experience — my mindset and clarity have completely shifted after working with him.',
      name: 'Vikram Singh', role: 'Coaching Client',
    },
    {
      quote: 'Jagat Sir guided me through every step — from writing to launching my book successfully. Incredible hand-holding throughout.',
      name: 'Priya Sharma', role: 'Author & Coaching Client',
    },
    {
      quote: 'Jagat is a very helpful coach who always provides the support needed to face challenges. His tools and systems are easy to use and connect with.',
      name: 'Renu Chaudhary', role: 'Coaching Client',
    },
    {
      quote: 'Jagat is an outstanding mind-hacker coach, always ready to guide and help. I have him as part of my mastermind and enjoy working with him as a team.',
      name: 'Rritu Singhi', role: 'Mastermind Member',
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
          <p style={{ color: 'var(--emerald)', fontSize: '13px', fontWeight: 600, marginBottom: '0', letterSpacing: '0.02em' }}>
            ⭐ 4.9 rated on Google · 200+ reviews
          </p>
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
