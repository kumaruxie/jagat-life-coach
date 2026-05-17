import { motion } from 'framer-motion';
import coachImg from '../assets/jagat photo.jpg';

const AboutCoachSection = () => {
  const tags = ["Family Coach", "Mind Hacker", "Guinness Speaker", "National Icon", "Bestselling Author"];

  return (
    <section id="about" className="section" style={{ backgroundColor: 'var(--surface)' }}>
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
                alt="Jagat Turkiya - Life Strategic Family Coach"
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
            <span className="tag">The Mentor</span>
            <h2 style={{ marginBottom: '8px' }}>Jagat Turkiya</h2>
            
            {/* Role badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 16px',
              backgroundColor: 'rgba(148,163,184,0.08)',
              borderRadius: '6px',
              marginBottom: '28px'
            }}>
              <span style={{ fontSize: '13px', color: 'var(--slate)' }}>🎯 Life Strategic Family Coach & Mind Hacker</span>
            </div>

            {/* COPYWRITING: Edit the bio paragraphs below */}
            <p style={{ marginBottom: '16px', fontSize: '15px' }}>
              Jagat Turkiya ki journey kisi textbook se nahi, real-life struggles se shuru hui thi. Unhone personally dekha hai ki ek unresolved family conflict kaise ek capable aur intelligent insaan ko andar se khaali kar deta hai.
            </p>

            <p style={{ marginBottom: '32px', fontSize: '15px' }}>
              Yahi cheez unhe coaching ki taraf le aayi — is yakeen ke saath ki har ghar mein sukoon ho sakta hai, agar sahi disha mile.
            </p>

            {/* Role Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {tags.map((tag, i) => (
                <span key={i} style={{
                  padding: '8px 16px',
                  border: '1px solid var(--border)',
                  borderRadius: '6px',
                  fontSize: '12px',
                  fontWeight: 600,
                  color: 'var(--silver)',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase'
                }}>
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutCoachSection;
