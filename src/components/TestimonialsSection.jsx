import { motion } from 'framer-motion';
import { Play, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  /* COPYWRITING: Edit testimonials here. 
     type: 'video' shows a video placeholder card, 'text' shows a text-only card.
     For video cards: add videoUrl when you have actual video links */
  const testimonials = [
    {
      type: 'video',
      duration: '2:34 min',
      quote: "Teesre hafte tak ghar ka atmosphere completely shift ho gaya. Mujhe pehle lagta tha main hi overreact karti hoon.",
      name: "Priya S.",
      role: "IT Professional",
      city: "Gurgaon",
      initials: "PS",
      color: '#60a5fa'
    },
    {
      type: 'text',
      featured: true,
      quote: "14 saal ki shadi mein pehli baar mujhe laga ki main actually sun raha hoon — saamne waale ko, aur khud ko bhi. Yeh program sirf coaching nahi hai, balki ek mirror hai jo aapko sach dikhata hai.",
      name: "Rajesh M.",
      role: "Senior Manager",
      city: "Delhi",
      initials: "RM",
      color: '#10b981',
      badge: "30 days · Total transformation"
    },
    {
      type: 'video',
      duration: '3:10 min',
      quote: "Maine therapy try ki, books padhi, reels dekhi — kuch nahi badla. 30 din mein jo clarity aayi, woh pichle 2 saalon mein nahi aayi thi.",
      name: "Ananya K.",
      role: "Entrepreneur",
      city: "Noida",
      initials: "AK",
      color: '#f59e0b'
    },
    {
      type: 'video',
      duration: '1:52 min',
      quote: "Jis raat script use ki, usi raat result mila. Main shocked tha. 30 saal ka pattern ek conversation mein toot gaya.",
      name: "Vikram S.",
      role: "Business Owner",
      city: "Pune",
      initials: "VS",
      color: '#a78bfa'
    },
    {
      type: 'text',
      quote: "Pehle session ke baad hi mujhe laga ki main sahi jagah aayi hoon. Jagat ne jo mirror dikhaaya, woh koi therapist nahi dikha sakta tha.",
      name: "Neha K.",
      role: "Homemaker",
      city: "Jaipur",
      initials: "NK",
      color: '#f472b6'
    }
  ];

  const VideoCard = ({ t, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className="testimonial-card"
      style={{
        backgroundColor: 'var(--surface-raised)',
        border: '1px solid var(--border)',
        borderRadius: '16px',
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: '18px'
      }}
    >
      {/* Duration badge */}
      <div style={{
        fontSize: '11px',
        color: 'var(--slate)',
        fontFamily: 'var(--font-body)',
        fontWeight: 500,
        letterSpacing: '0.02em'
      }}>
        {t.duration}
      </div>

      {/* Video placeholder */}
      <div style={{
        width: '100%',
        aspectRatio: '16/10',
        borderRadius: '10px',
        backgroundColor: 'rgba(148,163,184,0.05)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
        border: '1px solid var(--border)',
        cursor: 'pointer',
        transition: 'background-color 0.2s'
      }}>
        <div style={{
          width: '44px',
          height: '44px',
          borderRadius: '50%',
          backgroundColor: 'rgba(16,185,129,0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'background-color 0.2s'
        }}>
          <Play size={16} style={{ color: 'var(--emerald)', marginLeft: '2px' }} />
        </div>
        <span style={{
          fontSize: '10px',
          fontWeight: 600,
          color: 'var(--emerald)',
          textTransform: 'uppercase',
          letterSpacing: '0.12em',
          fontFamily: 'var(--font-body)'
        }}>
          Watch Story
        </span>
      </div>

      {/* Quote */}
      <p style={{
        fontSize: '13.5px',
        color: 'var(--slate)',
        margin: 0,
        lineHeight: '1.75',
        fontFamily: 'var(--font-body)',
        fontWeight: 400
      }}>
        &ldquo;{t.quote}&rdquo;
      </p>

      {/* Author */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', paddingTop: '4px', borderTop: '1px solid var(--border)' }}>
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
          <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--silver)', fontFamily: 'var(--font-body)' }}>{t.name}</div>
          <div style={{ fontSize: '11px', color: 'var(--slate)', fontFamily: 'var(--font-body)', fontWeight: 400 }}>{t.role}, {t.city}</div>
        </div>
      </div>
    </motion.div>
  );

  const TextCard = ({ t, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className="testimonial-card"
      style={{
        backgroundColor: t.featured ? 'rgba(16,185,129,0.04)' : 'var(--surface-raised)',
        border: `1px solid ${t.featured ? 'rgba(16,185,129,0.15)' : 'var(--border)'}`,
        borderRadius: '16px',
        padding: '28px 24px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: '20px',
        position: 'relative'
      }}
    >
      {/* Quote icon */}
      <Quote
        size={20}
        style={{
          color: t.featured ? 'var(--emerald)' : 'rgba(148,163,184,0.15)',
          transform: 'scaleX(-1)'
        }}
      />

      {/* Tag for non-featured */}
      {!t.featured && (
        <div style={{
          fontSize: '9px',
          fontWeight: 600,
          color: 'var(--slate)',
          textTransform: 'uppercase',
          letterSpacing: '0.14em',
          fontFamily: 'var(--font-body)'
        }}>
          Text Review
        </div>
      )}

      {/* Quote */}
      <p style={{
        fontSize: t.featured ? '15.5px' : '13.5px',
        color: t.featured ? 'var(--silver)' : 'var(--slate)',
        margin: 0,
        lineHeight: '1.8',
        fontFamily: 'var(--font-body)',
        fontWeight: t.featured ? 400 : 400,
        flex: 1
      }}>
        &ldquo;{t.quote}&rdquo;
      </p>

      {/* Badge */}
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

      {/* Author */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', paddingTop: '4px', borderTop: '1px solid var(--border)' }}>
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
          <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--silver)', fontFamily: 'var(--font-body)' }}>{t.name}</div>
          <div style={{ fontSize: '11px', color: 'var(--slate)', fontFamily: 'var(--font-body)', fontWeight: 400 }}>{t.role}, {t.city}</div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="alumni" className="section" style={{ backgroundColor: 'var(--surface-deep)' }}>
      <div className="section-inner">
        <div style={{ marginBottom: '56px' }}>
          <span className="tag" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ width: '20px', height: '2px', backgroundColor: 'var(--emerald)', display: 'inline-block' }}></span>
            Client Stories
          </span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ marginBottom: '8px' }}
          >
            What Our Clients Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{
              color: 'var(--slate)',
              marginTop: '4px',
              fontFamily: 'var(--font-body)',
              fontSize: '15px'
            }}
          >
            Real clients, real conversations — unscripted.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="testimonials-bento">
          {testimonials.map((t, index) => (
            t.type === 'video' 
              ? <VideoCard key={index} t={t} index={index} />
              : <TextCard key={index} t={t} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
