
import { motion } from 'framer-motion';

const TransformationSection = () => {
  const cards = [
    {
      title: "Peace of Mind",
      desc: "Your home will feel lighter. You'll express yourself freely — without fear, tension, or walking on eggshells.",
      accent: '#10b981'
    },
    {
      title: "Deeper Connection",
      desc: "Instead of petty arguments, your family will genuinely try to understand each other — building real closeness.",
      accent: '#60a5fa'
    },
    {
      title: "A New Perspective",
      desc: "You'll have a clear, simple approach to handle every difficult situation with love and composure.",
      accent: '#f59e0b'
    }
  ];

  return (
    <section className="section" style={{ background: 'var(--surface)' }}>
      <div className="section-inner">
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-6)' }}>
          <span className="tag">The Outcome</span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            What Your Life Looks Like After 30 Days
          </motion.h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-4)' }}>
          {cards.map((card, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04, duration: 0.3 }}
              whileHover={{ 
                y: -6, 
                boxShadow: `0 16px 40px ${card.accent}33, 0 0 0 1px ${card.accent}66`,
                transition: { duration: 0.12, ease: "easeOut" }
              }}
              style={{
                backgroundColor: 'var(--surface-raised)',
                padding: 'var(--space-5)',
                borderRadius: '16px',
                border: '1px solid var(--border)',
                borderTop: `3px solid ${card.accent}`,
                boxShadow: '0 8px 30px rgba(18, 36, 33, 0.02)',
                cursor: 'default',
                transition: 'box-shadow 0.12s ease, border-color 0.12s, transform 0.12s'
              }}
            >
              <h3 style={{ marginBottom: 'var(--space-2)', fontSize: '24px' }}>{card.title}</h3>
              <p style={{ margin: 0 }}>{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TransformationSection;
