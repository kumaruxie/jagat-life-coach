import { motion } from 'framer-motion';
import coachImg from '../assets/jagat_photo.jpg';

const AboutCoachSection = () => {
  const tags = ["Family Coach", "Mind Hacker", "Guinness Speaker", "National Icon", "Bestselling Author"];

  return (
    <section id="about" className="section" style={{ background: 'linear-gradient(to bottom, var(--surface-deep) 0%, var(--surface) 150px, var(--surface) 100%)' }}>
      <div className="section-inner">
        <div className="grid-2-col" style={{ alignItems: 'center' }}>
          {/* Coach Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            style={{ position: 'relative' }}
          >
            <div style={{
              aspectRatio: '3/4',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 8px 40px rgba(0,0,0,0.5)'
            }}>
              <img
                src={coachImg}
                alt="Jagat Turkiya - Life Strategic Family Coach and Mind Hacker"
                width={600}
                height={800}
                loading="eager"
                decoding="async"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 10%' }}
              />
            </div>
            {/* Accepting clients badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 20px',
              backgroundColor: 'var(--surface-raised)',
              border: '1px solid var(--border)',
              borderRadius: '100px',
              position: 'absolute',
              bottom: '-16px',
              left: '50%',
              transform: 'translateX(-50%)',
              whiteSpace: 'nowrap'
            }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--emerald)', boxShadow: '0 0 8px rgba(16,185,129,0.5)' }} />
              <span style={{ fontSize: '12px', color: 'var(--silver)', fontWeight: 500 }}>Accepting new clients</span>
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="tag">About</span>
            <h2 style={{ marginBottom: 'var(--space-1)' }}>Jagat Turkiya</h2>
            
            {/* Role badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 16px',
              backgroundColor: 'rgba(148,163,184,0.08)',
              borderRadius: '6px',
              marginBottom: 'var(--space-4)'
            }}>
              <span style={{ fontSize: '13px', color: 'var(--slate)' }}>🎯 Life Strategic Family Coach & Mind Hacker</span>
            </div>

            {/* COPYWRITING: Emotional founder story */}
            <p style={{ marginBottom: 'var(--space-3)', fontSize: '15.5px', lineHeight: '1.75' }}>
              Jagat Turkiya's journey didn't begin in a classroom — it began with a moment of raw, painful truth. One evening, a highly successful friend — someone who managed a team of 500+ employees at a major company — broke down in front of him and said: <em style={{ color: 'var(--emerald)', fontStyle: 'italic' }}>"I can manage hundreds of people at the office, but I can't have a 5-minute conversation with my own family without it turning into an argument."</em>
            </p>

            <p style={{ marginBottom: 'var(--space-4)', fontSize: '15.5px', lineHeight: '1.75' }}>
              That's when Jagat realized that people pour every ounce of energy into building their careers, yet come home to the same tension and emptiness every single day. He spent years researching family conflict resolution and developed exact **dialogue scripts** and **daily habits** that transform communication. When his friend used these scripts at home, years of built-up resentment began to dissolve in a single evening. That was the birth of Jagat Turkiya's signature system.
            </p>

            {/* Role Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)' }}>
              {tags.map((tag, i) => (
                <motion.span 
                  key={i} 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  whileHover={{ 
                    borderColor: 'var(--emerald)', 
                    color: 'var(--emerald)',
                    scale: 1.05,
                    transition: { duration: 0.18, ease: "easeOut" }
                  }}
                  style={{
                    padding: '8px 16px',
                    border: '1px solid var(--border)',
                    borderRadius: '6px',
                    fontSize: '12px',
                    fontWeight: 600,
                    color: 'var(--silver)',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    cursor: 'default',
                    transition: 'border-color 0.18s, color 0.18s'
                  }}
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutCoachSection;
