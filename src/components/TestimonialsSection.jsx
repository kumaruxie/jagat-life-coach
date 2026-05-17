import { Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Working with Jagat Turkiya has been life-changing. His guidance, support, and insight have helped me overcome challenges and reach new heights in my personal growth. Jagat's approach is both empowering and compassionate, making every session valuable. Thanks Jagat",
      name: "Rahul Singh",
      role: "Life & Personal Growth Client",
      initials: "RS",
      color: '#60a5fa',
      badge: "Outstanding Growth"
    },
    {
      quote: "Jagat Turkiya Sir is the best author coach in the country... He teaches book writing in great detail... You help the author from writing the book to its launch and best selling.",
      name: "Sunil Bhari",
      role: "Author & Coaching Client",
      initials: "SB",
      color: '#f472b6',
      badge: "Best Author Coach"
    },
    {
      quote: "Jagat is very helpful coach , He is always providing the handholding support to face the challenges and overcome the challenges. Which tools and system he use in his coaching process very easy to use and connect easily",
      name: "Renu Chaudhary",
      role: "Coaching Client",
      initials: "RC",
      color: '#10b981'
    },
    {
      quote: "Jagat is an outstanding mind hacker coach who is always ready to guide and help. I have him as a part of my mastermind and enjoy working with him as a team.",
      name: "Rritu Singhi",
      role: "Mastermind Member",
      initials: "RS",
      color: '#f59e0b'
    },
    {
      quote: "Jagat is very talented, calm, patient, empathetic and empowering coach. he is very easy to talk to, which makes the environment of coaching very pleasant.",
      name: "Neetu Negi",
      role: "Empowerment Client",
      initials: "NN",
      color: '#a78bfa'
    }
  ];

  return (
    <section id="alumni" className="section" style={{ backgroundColor: 'var(--surface-deep)', padding: '80px 0' }}>
      <div className="section-inner">
        <div style={{ marginBottom: '56px' }}>
          <span className="tag" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ width: '20px', height: '2px', backgroundColor: 'var(--emerald)', display: 'inline-block' }}></span>
            Google Reviews
          </span>
          <h2 style={{ marginBottom: '8px', color: 'var(--silver)' }}>
            What Our Clients Say
          </h2>
          <p style={{
            color: 'var(--slate)',
            marginTop: '4px',
            fontFamily: 'var(--font-body)',
            fontSize: '15px'
          }}>
            Real stories from real people — verified Google Business feedback.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="testimonials-bento" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px',
          width: '100%'
        }}>
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="testimonial-card"
              style={{
                backgroundColor: 'var(--surface-raised)',
                border: '1px solid var(--border)',
                borderRadius: '16px',
                padding: '28px 24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '20px',
                position: 'relative',
                cursor: 'default',
                transition: 'transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = 'rgba(16,185,129,0.2)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Top Row with Quote and Stars */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Quote
                  size={20}
                  style={{
                    color: 'rgba(148,163,184,0.15)',
                    transform: 'scaleX(-1)'
                  }}
                />
                
                {/* 5-Star Rating Badge */}
                <div style={{ display: 'flex', gap: '2px', color: '#fbbf24', fontSize: '14px' }} aria-label="5 out of 5 stars">
                  ★★★★★
                </div>
              </div>

              {/* Verified Source */}
              <div style={{
                fontSize: '9px',
                fontWeight: 600,
                color: 'var(--emerald)',
                textTransform: 'uppercase',
                letterSpacing: '0.14em',
                fontFamily: 'var(--font-body)',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--emerald)', display: 'inline-block' }}></span>
                Verified Google Review
              </div>

              {/* Quote text */}
              <p style={{
                fontSize: '13.5px',
                color: 'var(--slate)',
                margin: 0,
                lineHeight: '1.8',
                fontFamily: 'var(--font-body)',
                fontWeight: 400,
                flex: 1
              }}>
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Optional Highlight Badge */}
              {t.badge && (
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '6px 12px',
                  backgroundColor: 'rgba(16,185,129,0.08)',
                  borderRadius: '4px',
                  fontSize: '10px',
                  color: 'var(--emerald)',
                  fontWeight: 600,
                  alignSelf: 'flex-start',
                  fontFamily: 'var(--font-body)',
                  letterSpacing: '0.02em'
                }}>
                  ✦ {t.badge}
                </div>
              )}

              {/* Author Info */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', paddingTop: '12px', borderTop: '1px solid var(--border)' }}>
                <div style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '50%',
                  backgroundColor: `${t.color}18`,
                  color: t.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '11px',
                  fontWeight: 700,
                  fontFamily: 'var(--font-body)',
                  flexShrink: 0
                }}>
                  {t.initials}
                </div>
                <div>
                  <div style={{ fontSize: '13.5px', fontWeight: 600, color: 'var(--silver)', fontFamily: 'var(--font-body)' }}>{t.name}</div>
                  <div style={{ fontSize: '11px', color: 'var(--slate)', fontFamily: 'var(--font-body)', fontWeight: 400 }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
