
import { motion } from 'framer-motion';

const AboutCoachSection = () => {
  return (
    <section id="about" className="section" style={{ backgroundColor: 'white' }}>
      <div className="section-inner">
        <div className="grid-2-col" style={{ alignItems: 'center' }}>
          {/* Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            style={{
              aspectRatio: '3/4',
              backgroundColor: 'var(--color-bg)',
              borderRadius: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--color-text-muted)'
            }}
          >
            [ Jagat Turkiya Image Placeholder ]
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="tag">The Mentor</span>
            <h2 style={{ marginBottom: '2rem' }}>Meet Your Coach</h2>

            <p style={{ marginBottom: '1.5rem', fontSize: '1.125rem' }}>
              Jagat turkiya ek Life Strategic Family Coach aur Mind Hacker hai  — lekin us ki journey kisi textbook se nahi, real-life struggles se shuru hui thi.
              Form jagat turkiya -
              Maine personally dekha hai ki ek unresolved family conflict kaise ek capable aur intelligent insaan ko andar se khaali kar deta hai.
            </p>

            <p style={{ marginBottom: '2.5rem', fontSize: '1.125rem' }}>
              Aaj tak maine 1,500+ logon ke saath 1-on-1 kaam kiya hai, aur mai 15,000+ life ko live events aur webinars mein transform kiya hai. Main Guinness World Record Speaker, National Icon Award Winner, aur 4 best-selling books ka author hoon — lekin jo cheez mujhe sabse zyada proud karti hai, woh hai mere clients ke ghar mein aane wala real badlaav.
            </p>

            <div className="grid-responsive" style={{
              paddingTop: '32px',
              borderTop: '1px solid var(--color-border)'
            }}>
              {[
                { label: "1:1 Clients", value: "1,500+" },
                { label: "Event Participants", value: "15,000+" },
                { label: "Bestselling Books", value: "4" },
                { label: "Speaker", value: "Guinness Record" }
              ].map((stat, i) => (
                <div key={i}>
                  <div style={{ fontSize: '32px', fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'var(--color-secondary)', lineHeight: 1 }}>{stat.value}</div>
                  <div style={{ fontSize: '14px', color: 'var(--color-text-light)', marginTop: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutCoachSection;
