import { motion } from 'framer-motion';
import { Calendar, Target, FileText, Users, Lock } from 'lucide-react';

const ProgramBreakdownSection = () => {
  const phases = [
    {
      phase: "01",
      week: "Week 1",
      title: "Personality DNA Decode",
      desc: "Pehli baar khud ko 'problem' nahi, balki ek 'pattern' ki nazar se dekhna. Un 3 core beliefs ko identify karna jo aapki poori life chala rahe hain."
    },
    {
      phase: "02",
      week: "Week 2",
      title: "Root Causes of Conflict",
      desc: "Aapke ghar ki recent fights ke exact root causes ka ek clear map. Blame game se bahar aakar responsibility mode mein shift hona."
    },
    {
      phase: "03",
      week: "Week 3",
      title: "NLP Shifts & New Scripts",
      desc: "Ready-made conflict de-escalation scripts. Anchoring, reframing, aur perspective shifts. Reaction se seedha Response mode mein aana."
    },
    {
      phase: "04",
      week: "Week 4",
      title: "Integration & Long-Term Clarity",
      desc: "Aapka personal Conflict to Clarity Blueprint. Bina guilt ke healthy boundaries set karna. 90-day follow-through roadmap."
    }
  ];

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.5 }
    })
  };

  return (
    <section id="program" className="section" style={{ backgroundColor: 'var(--surface-deep)', color: 'var(--silver)' }}>
      <div className="section-inner">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="tag">The Program</span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ color: 'var(--silver)' }}
          >
            Conflict to Clarity — One Month Accelerator
          </motion.h2>
        </div>

        <div className="grid-program">
          {/* Left Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p style={{ fontSize: '15px', color: 'var(--slate)', marginBottom: '2rem' }}>
              Yeh ek structured 30-day journey hai — recorded modules, live Zoom sessions, worksheets, aur direct coaching. Sirf gyaan nahi, <strong style={{ color: 'var(--silver)' }}>real ground-level change</strong>.
            </p>
            
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                { icon: <Calendar size={20} />, text: "8 Recorded Hinglish Modules (112 min total)" },
                { icon: <Target size={20} />, text: "2 Live one on one Coaching Sessions (120 min total)" },
                { icon: <FileText size={20} />, text: "Worksheets, scripts & reflection exercises" },
                { icon: <Users size={20} />, text: "Private community support" },
                { icon: <Lock size={20} />, text: "Lifetime access to all recordings" },
              ].map((item, i) => (
                <motion.li 
                  key={i} 
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={listItemVariants}
                  whileHover={{ x: 6 }}
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '12px', 
                    color: 'var(--slate)', 
                    fontSize: '14px',
                    cursor: 'default',
                    transition: 'color 0.2s'
                  }}
                >
                  <span style={{ color: 'var(--emerald)' }}>{item.icon}</span>
                  {item.text}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right Column - Phases */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {phases.map((phase, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                whileHover={{ 
                  x: 4,
                  borderLeftColor: 'var(--emerald)',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.15)'
                }}
                style={{ 
                  backgroundColor: 'var(--surface-raised)', 
                  padding: '22px 24px', 
                  borderRadius: '8px',
                  border: '1px solid var(--border)',
                  borderLeftWidth: '3px',
                  borderLeftColor: 'var(--border-accent)',
                  cursor: 'default',
                  transition: 'box-shadow 0.3s ease'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <span style={{ fontWeight: 600, color: 'var(--slate)', letterSpacing: '0.12em', fontSize: '11px', textTransform: 'uppercase' }}>PHASE {phase.phase}</span>
                  <span style={{ fontSize: '11px', color: 'var(--slate)', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 600 }}>{phase.week}</span>
                </div>
                <h3 style={{ color: 'var(--silver)', marginBottom: '8px', fontSize: '17px' }}>{phase.title}</h3>
                <p style={{ color: 'var(--slate)', margin: 0, fontSize: '13px' }}>{phase.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramBreakdownSection;
