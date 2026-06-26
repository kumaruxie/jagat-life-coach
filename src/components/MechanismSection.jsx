import { motion } from 'framer-motion';
import { Brain, MessageSquare, UserCheck } from 'lucide-react';

const MechanismSection = () => {
  const steps = [
    {
      title: "Kadam 1: Root Analysis (Bina Kisi Blame Ke)",
      desc: "Hum situations ko analyze karenge bina kisi ko galat thehraye, taaki aap samajh sakein ki aakhir triggers shuru kahan se hote hain.",
      icon: <Brain size={22} style={{ color: '#0d9488' }} />,
      accent: '#0d9488', // Teal
      bg: 'rgba(13, 148, 136, 0.03)',
      border: 'rgba(13, 148, 136, 0.15)',
      glow: 'rgba(13, 148, 136, 0.18)'
    },
    {
      title: "Kadam 2: Exact Dialogue Scripts (Word-for-Word)",
      desc: "Kathin psychology nahi — hum aapko exact conversation scripts denge jo aap active arguments mein bolkar tanaav ko instantly neutralize kar sakein.",
      icon: <MessageSquare size={22} style={{ color: '#f43f5e' }} />,
      accent: '#f43f5e', // Rose/Coral
      bg: 'rgba(244, 63, 94, 0.03)',
      border: 'rgba(244, 63, 94, 0.15)',
      glow: 'rgba(244, 63, 94, 0.18)'
    },
    {
      title: "Kadam 3: 1:1 Accountability & Check-Ins",
      desc: "Sirf video dekhna kaafi nahi hai. Hum har hafte aapse 1:1 check-in karenge aur guide karenge taaki yeh nayi aadat aapke jeevan ka hissa ban sake.",
      icon: <UserCheck size={22} style={{ color: '#1d4ed8' }} />,
      accent: '#1d4ed8', // Sapphire Blue
      bg: 'rgba(29, 78, 216, 0.03)',
      border: 'rgba(29, 78, 216, 0.15)',
      glow: 'rgba(29, 78, 216, 0.18)'
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
            Jagat Ka Signature System: <span style={{ color: 'var(--gold-accent)' }}>3 Aasan Kadam</span> Ek Khushal Zindagi Ki Aur
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
              whileHover={{ 
                y: -6, 
                borderColor: step.accent,
                boxShadow: `0 16px 40px ${step.glow}`,
                backgroundColor: step.bg.replace('0.03', '0.06'),
                transition: { duration: 0.12, ease: "easeOut" }
              }}
              style={{
                backgroundColor: step.bg,
                padding: 'var(--space-5)',
                borderRadius: '16px',
                border: `1px solid ${step.border}`,
                position: 'relative',
                cursor: 'default',
                transition: 'border-color 0.12s ease, box-shadow 0.12s ease, background-color 0.12s ease, transform 0.12s ease'
              }}
            >
              {/* Step Badge */}
              <div 
                style={{
                  position: 'absolute',
                  top: '-20px',
                  left: '40px',
                  width: '40px',
                  height: '40px',
                  backgroundColor: step.accent,
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '50%',
                  fontWeight: 'bold',
                  fontSize: '20px',
                  boxShadow: `0 4px 12px ${step.glow}`
                }}>
                {index + 1}
              </div>

              {/* Icon Container above the Title */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '42px',
                height: '42px',
                borderRadius: '10px',
                backgroundColor: '#ffffff',
                border: `1px solid ${step.border}`,
                boxShadow: '0 4px 10px rgba(18, 36, 33, 0.04)',
                marginTop: '12px',
                marginBottom: '16px'
              }}>
                {step.icon}
              </div>

              <h3 style={{ margin: '0 0 12px 0', fontSize: 'clamp(1.05rem, 4vw, 1.25rem)', color: 'var(--silver)', fontWeight: 700, lineHeight: '1.35' }}>
                {step.title}
              </h3>

              <p style={{ margin: 0, color: 'var(--slate)', lineHeight: '1.6', fontSize: '14.5px' }}>
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MechanismSection;

