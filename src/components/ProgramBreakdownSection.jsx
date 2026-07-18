import { motion } from 'framer-motion';
import { Calendar, Target, FileText, Users } from 'lucide-react';

const ProgramBreakdownSection = () => {
  const phases = [
    {
      phase: "01",
      week: "Week 1",
      title: "Week 1: Understanding Your Patterns",
      desc: "Begin seeing yourself and your loved ones through a fresh, compassionate lens."
    },
    {
      phase: "02",
      week: "Week 2",
      title: "Week 2: Clearing Misunderstandings",
      desc: "Identify the real issues so the cycle of blame and resentment finally comes to an end."
    },
    {
      phase: "03",
      week: "Week 3",
      title: "Week 3: Speaking with Love",
      desc: "Learn to express your truth clearly — without hurting the person in front of you."
    },
    {
      phase: "04",
      week: "Week 4",
      title: "Week 4: Lasting Harmony",
      desc: "Integrate everything you've learned into daily life — so this peace becomes permanent."
    }
  ];

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.04, duration: 0.3 }
    })
  };

  return (
    <section id="program" className="section" style={{ background: 'var(--surface-deep)', color: 'var(--silver)' }}>
      <div className="section-inner">
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-6)' }}>
          <span className="tag">The Program</span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ color: 'var(--silver)', fontSize: 'clamp(1.8rem, 4.5vw, 2.8rem)' }}
          >
            Your <span style={{ color: 'var(--gold-accent)' }}>30-Day Journey</span> to a Brand New Beginning
          </motion.h2>
        </div>

        <div className="grid-program">
          {/* Left Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
          >
            <p style={{ fontSize: '15px', color: 'var(--slate)', marginBottom: 'var(--space-4)' }}>
              This is a structured 30-day journey — recorded modules, live Zoom sessions, worksheets, and direct coaching. Not just knowledge, but <strong style={{ color: 'var(--silver)' }}>real ground-level change</strong>.
            </p>
            
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
              {[
                { icon: <Calendar size={20} />, text: "8 Recorded Coaching Modules" },
                { icon: <Target size={20} />, text: "2 Live one on one Coaching Sessions" },
                { icon: <FileText size={20} />, text: "Worksheets, scripts & reflection exercises" },
                { icon: <Users size={20} />, text: "Private community support" },
                // { icon: <Lock size={20} />, text: "Lifetime access to all recordings" },
              ].map((item, i) => (
                <motion.li 
                  key={i} 
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={listItemVariants}
                  whileHover={{ x: 6, transition: { duration: 0.1, ease: "easeOut" } }}
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: 'var(--space-2)', 
                    color: 'var(--slate)', 
                    fontSize: '14px',
                    cursor: 'default',
                    transition: 'color 0.1s'
                  }}
                >
                  <span style={{ color: 'var(--emerald)' }}>{item.icon}</span>
                  {item.text}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right Column - Phases */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
            {phases.map((phase, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.3 }}
                whileHover={{ 
                  x: 4,
                  borderLeftColor: 'var(--emerald)',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.15)',
                  transition: { duration: 0.12, ease: "easeOut" }
                }}
                style={{ 
                  backgroundColor: 'var(--surface-raised)', 
                  padding: 'var(--space-3) var(--space-4)', 
                  borderRadius: '8px',
                  border: '1px solid var(--border)',
                  borderLeftWidth: '3px',
                  borderLeftColor: 'var(--border-accent)',
                  cursor: 'default',
                  transition: 'box-shadow 0.12s ease, border-color 0.12s, transform 0.12s'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-2)' }}>
                  <span style={{ fontWeight: 600, color: 'var(--slate)', letterSpacing: '0.12em', fontSize: '11px', textTransform: 'uppercase' }}>PHASE {phase.phase}</span>
                  <span style={{ fontSize: '11px', color: 'var(--slate)', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 600 }}>{phase.week}</span>
                </div>
                <h3 style={{ color: 'var(--silver)', marginBottom: 'var(--space-1)', fontSize: '17px' }}>{phase.title}</h3>
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
