import { motion } from 'framer-motion';

const MechanismSection = () => {
  const steps = [
    {
      title: "Kadam 1: Root Analysis (Bina Kisi Blame Ke)",
      desc: "Hum situations ko analyze karenge bina kisi ko galat thehraye, taaki aap samajh sakein ki aakhir triggers shuru kahan se hote hain."
    },
    {
      title: "Kadam 2: Exact Dialogue Scripts (Word-for-Word)",
      desc: "Kathin psychology nahi — hum aapko exact conversation scripts denge jo aap active arguments mein bolkar tanaav ko instantly neutralize kar sakein."
    },
    {
      title: "Kadam 3: 1:1 Accountability & Check-Ins",
      desc: "Sirf video dekhna kaafi nahi hai. Hum har hafte aapse 1:1 check-in karenge aur guide karenge taaki yeh nayi aadat aapke jeevan ka hissa ban sake."
    }
  ];

  return (
    <section className="section" style={{ background: 'linear-gradient(to bottom, var(--surface-deep) 0%, var(--surface) 60px, var(--surface) 100%)' }}>
      <div className="section-inner">
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-6)' }}>
          <span className="tag">Hamara Tarika</span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Jagat Ka Signature System: 3 Aasan Kadam Ek Khushal Zindagi Ki Aur
          </motion.h2>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))', 
          gap: 'var(--space-4)',
          paddingTop: '20px' // Prevent absolute step badge from clipping at the top
        }}>
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ 
                y: -6, 
                borderColor: 'rgba(16,185,129,0.3)',
                boxShadow: '0 16px 40px rgba(16,185,129,0.15)'
              }}
              style={{
                backgroundColor: 'var(--surface-raised)',
                padding: 'var(--space-5)',
                borderRadius: '16px',
                boxShadow: 'none',
                border: '1px solid var(--border)',
                position: 'relative',
                cursor: 'default',
                transition: 'box-shadow 0.3s ease'
              }}
            >
              <motion.div 
                whileHover={{ scale: 1.1 }}
                style={{
                  position: 'absolute',
                  top: '-20px',
                  left: '40px',
                  width: '40px',
                  height: '40px',
                  backgroundColor: 'var(--silver)',
                  color: 'var(--surface)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '50%',
                  fontWeight: 'bold',
                  fontSize: '20px',
                  boxShadow: '0 4px 16px rgba(226,232,240,0.2)'
                }}>
                {index + 1}
              </motion.div>
              <h3 style={{ marginTop: '16px', marginBottom: '16px', fontSize: 'clamp(1.05rem, 4vw, 1.5rem)' }}>{step.title}</h3>
              <p style={{ margin: 0 }}>{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MechanismSection;
