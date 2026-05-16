import { motion } from 'framer-motion';

import coachImg from '../assets/jagat photo.jpg';

const AboutCoachSection = () => {
  return (
    <section id="about" className="section" style={{ backgroundColor: 'var(--surface)' }}>
      <div className="section-inner">
        <div className="grid-2-col" style={{ alignItems: 'center' }}>
          {/* Coach Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            style={{
              aspectRatio: '3/4',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 8px 40px rgba(0,0,0,0.5)'
            }}
          >
            <img
              src={coachImg}
              alt="MindErist Training LLP Coach"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 10%' }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="tag">The Mentor</span>
            <h2 style={{ marginBottom: '24px' }}>Meet Your Coach</h2>

            <p style={{ marginBottom: '16px', fontSize: '15px' }}>
              Jagat turkiya ek Life Strategic Family Coach aur Mind Hacker hai  — lekin us ki journey kisi textbook se nahi, real-life struggles se shuru hui thi.
              Form jagat turkiya -
              Maine personally dekha hai ki ek unresolved family conflict kaise ek capable aur intelligent insaan ko andar se khaali kar deta hai.
            </p>

            <p style={{ marginBottom: '32px', fontSize: '15px' }}>
              Aaj tak maine 1,500+ logon ke saath 1-on-1 kaam kiya hai, aur mai 15,000+ life ko live events aur webinars mein transform kiya hai. Main Guinness World Record Speaker, National Icon Award Winner, aur 4 best-selling books ka author hoon — lekin jo cheez mujhe sabse zyada proud karti hai, woh hai mere clients ke ghar mein aane wala real badlaav.
            </p>

            <div className="grid-responsive" style={{
              paddingTop: '32px',
              borderTop: '1px solid var(--border)'
            }}>
              {[
                { label: "1:1 Clients", value: "1,500+" },
                { label: "Event Participants", value: "15,000+" },
                { label: "Bestselling Books", value: "4" },
                { label: "Speaker", value: "Guinness Record" }
              ].map((stat, i) => (
                <div key={i}>
                  <div style={{ fontSize: '30px', fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'var(--silver)', lineHeight: 1 }}>{stat.value}</div>
                  <div style={{ fontSize: '10px', color: 'var(--slate)', marginTop: '4px', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 600 }}>{stat.label}</div>
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
