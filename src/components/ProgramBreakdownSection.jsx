// import React from 'react';
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

  return (
    <section id="program" className="section" style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}>
      <div className="section-inner">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="tag">The Program</span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ color: 'white' }}
          >
            Conflict to Clarity — 1-Month Accelerator
          </motion.h2>
        </div>

        <div className="grid-program">
          {/* Left Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.9)', marginBottom: '2rem' }}>
              Yeh ek structured 30-day journey hai — recorded modules, live Zoom sessions, worksheets, aur direct coaching. Sirf gyaan nahi, <strong style={{ color: 'white' }}>real ground-level change</strong>.
            </p>
            
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                { icon: <Calendar size={20} />, text: "8 Recorded Hinglish Modules (112 min total)" },
                { icon: <Target size={20} />, text: "7 Live Group Coaching Sessions (315 min total)" },
                { icon: <FileText size={20} />, text: "Worksheets, scripts & reflection exercises" },
                { icon: <Users size={20} />, text: "Private community support (30 days)" },
                { icon: <Lock size={20} />, text: "Lifetime access to all recordings" },
              ].map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'rgba(255,255,255,0.8)' }}>
                  <span style={{ color: 'var(--color-secondary)' }}>{item.icon}</span>
                  {item.text}
                </li>
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
                transition={{ delay: i * 0.1 }}
                style={{ 
                  backgroundColor: 'rgba(255,255,255,0.05)', 
                  padding: '32px', 
                  borderRadius: '16px',
                  borderLeft: '4px solid var(--color-secondary)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <span style={{ fontWeight: 600, color: 'var(--color-secondary)', letterSpacing: '0.05em' }}>PHASE {phase.phase}</span>
                  <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{phase.week}</span>
                </div>
                <h3 style={{ color: 'white', marginBottom: '12px', fontSize: '22px' }}>{phase.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.7)', margin: 0 }}>{phase.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramBreakdownSection;
