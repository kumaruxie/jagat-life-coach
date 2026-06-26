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
              Jagat Turkiya ki journey kisi academic textbook se nahi, balki ek gehre realization se shuru hui thi. Ek shaam, unke ek behad safal dost — jo ek badi company mein 500+ employees ki team chalaate the — unke saamne rote hue bole: <em style={{ color: 'var(--emerald)', fontStyle: 'italic' }}>"Main office mein saikdo logon ko manage kar leta hoon, par ghar aakar apne parivar se 5 minute bina behas ke baat nahi kar paata."</em>
            </p>

            <p style={{ marginBottom: 'var(--space-4)', fontSize: '15.5px', lineHeight: '1.75' }}>
              Tab Jagat ko samajh aaya ki log career set karne mein apni saari energy laga dete hain, par ghar aate hi wahi tanaav aur khaalipan mehsus karte hain. Unhone family conflict resolution par saalon research ki aur exact **dialogue scripts** aur **habits** banayein. Jab unke dost ne in scripts ko ghar par use kiya, toh barson purana tanaav ek hi shaam mein halka ho gaya. Yahan se shuru hua Jagat Turkiya ka signature system.
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
