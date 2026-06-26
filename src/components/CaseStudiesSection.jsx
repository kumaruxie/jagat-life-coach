import { motion } from 'framer-motion';
import { User, Users, Briefcase, ArrowRight } from 'lucide-react';

const CaseStudiesSection = () => {
  const cases = [
    {
      badge: "Working Professional",
      icon: <Briefcase size={20} />,
      name: "Yogita",
      color: "#10b981",
      before: "Successful career as a manager, but returned home to exhausting arguments. She felt balancing work and family was impossible, and the constant stress left her emotionally drained at both places.",
      during: "Began applying Jagat's 3-step system. Instead of reacting defensively to family triggers, she used specific, word-for-word conversation scripts and boundary-setting methods.",
      after: "Restored peace and warmth at home. With a quiet and stress-free household, her work focus improved dramatically, and her relationship with her family became joyful again."
    },
    {
      badge: "Married Couple",
      icon: <Users size={20} />,
      name: "Vikram & Spouse",
      color: "#60a5fa",
      before: "Stuck in a painful loop of high expectations, disappointment, and daily arguments over trivial issues. They believed resolving their deep-seated conflicts would require years of complex therapy.",
      during: "Learned to identify each other's hidden communication triggers and used Jagat's neutral response scripts to defuse arguments before they escalated.",
      after: "Friction reduced by 80% within the first 14 days. The daily atmosphere at home shifted from walking on eggshells to open, supportive, and lighthearted conversation."
    },
    {
      badge: "Single Participant",
      icon: <User size={20} />,
      name: "Rahul",
      color: "#f59e0b",
      before: "Faced constant communication gaps and friction with his parents. The domestic tension caused severe internal anxiety, making it hard to concentrate on his career growth.",
      during: "Used self-discovery modules to manage emotional triggers, and communicated personal boundaries with his parents using respectful, structured scripts.",
      after: "Rebuilt a respectful, warm relationship with his parents. The constant home stress vanished, allowing him to channel his full focus into his career advancement."
    }
  ];

  return (
    <section id="case-studies" className="section" style={{ background: 'var(--surface)', color: 'var(--silver)' }}>
      <div className="section-inner">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-8)' }}>
          <span className="tag">
            Real Case Studies
          </span>
          <h2 style={{ marginBottom: '16px' }}>
            Kahaniyan Jo <span style={{ color: 'var(--emerald)' }}>Sukoon Aur Badlaav</span> Sabit Karti Hain
          </h2>
          <p style={{ color: 'var(--slate)', fontSize: '15px', maxWidth: '600px', margin: '0 auto', lineHeight: '1.7' }}>
            Yeh sirf testimonials nahi hain. Dekhiye kaise humare structured system ne in logon ki zindagi ko badla:
          </p>
        </div>

        {/* 3-Col Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(320px, 100%), 1fr))',
          gap: 'var(--space-4)',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {cases.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: index * 0.04, duration: 0.3 }}
              whileHover={{ 
                y: -6,
                borderColor: `${item.color}35`,
                boxShadow: `0 16px 40px ${item.color}12, 0 0 0 1px ${item.color}15`,
                transition: { duration: 0.12, ease: "easeOut" }
              }}
              style={{
                backgroundColor: 'var(--surface-raised)',
                borderRadius: '20px',
                border: '1px solid var(--border)',
                padding: '32px 28px',
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
                cursor: 'default',
                transition: 'border-color 0.12s, box-shadow 0.12s, transform 0.12s'
              }}
            >
              {/* Card Header: Icon + Name */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '12px',
                    backgroundColor: `${item.color}15`,
                    color: item.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {item.icon}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '18px', margin: 0, color: 'var(--silver)', fontWeight: 700 }}>{item.name}</h3>
                    <span style={{ fontSize: '11px', color: 'var(--slate)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>{item.badge}</span>
                  </div>
                </div>
              </div>

              {/* Before Phase */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <span style={{ 
                  fontSize: '10px', 
                  fontWeight: 700, 
                  letterSpacing: '0.12em', 
                  color: '#ef4444', 
                  textTransform: 'uppercase',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}>
                  ● BEFORE (Tanaav)
                </span>
                <p style={{ fontSize: '13.5px', color: 'var(--slate)', margin: 0, lineHeight: '1.65' }}>
                  {item.before}
                </p>
              </div>

              {/* During Phase */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <span style={{ 
                  fontSize: '10px', 
                  fontWeight: 700, 
                  letterSpacing: '0.12em', 
                  color: item.color, 
                  textTransform: 'uppercase',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}>
                  ● THE ACTION (Badlaav)
                </span>
                <p style={{ fontSize: '13.5px', color: 'var(--slate)', margin: 0, lineHeight: '1.65' }}>
                  {item.during}
                </p>
              </div>

              {/* After Phase */}
              <div style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '6px',
                marginTop: 'auto',
                paddingTop: '16px',
                borderTop: '1px solid rgba(226, 232, 240, 0.05)'
              }}>
                <span style={{ 
                  fontSize: '10px', 
                  fontWeight: 700, 
                  letterSpacing: '0.12em', 
                  color: '#10b981', 
                  textTransform: 'uppercase',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}>
                  ● AFTER (Sukoon)
                </span>
                <p style={{ fontSize: '13.5px', color: 'var(--silver)', fontWeight: 500, margin: 0, lineHeight: '1.65' }}>
                  {item.after}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
