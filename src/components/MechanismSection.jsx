import { motion } from 'framer-motion';

const MechanismSection = () => {
  const steps = [
    {
      title: "Kadam 1: Khud Ki Pehchan (Self-Discovery)",
      desc: "Sabse pehle hum samjhenge ki aap aur aapke apne situations mein kaise react karte hain — bina kisi ko galat thehraye."
    },
    {
      title: "Kadam 2: Uljhan Ki Jad Tak Pahuchna",
      desc: "Hum un choti-choti baaton ko pehchanenge jo darasal badi galatfehmiyon ka kaaran banti hain."
    },
    {
      title: "Kadam 3: Nayi Soch, Naye Tarike",
      desc: "Aasan aur practical tarike jinse aap apne baat karne aur sochne ka dhang badal kar ghar ka mahaul instantly halka kar sakte hain."
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
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
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
              <h3 style={{ marginTop: '16px', marginBottom: '16px', fontSize: '24px' }}>{step.title}</h3>
              <p style={{ margin: 0 }}>{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MechanismSection;
