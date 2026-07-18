import { motion } from 'framer-motion';

const AgitateSection = () => {
  const items = [
    "Your children will unknowingly absorb this same tension — and their childhood will never feel truly free or joyful.",
    "The unrest at home will seep into your work, because your mind will always be stuck on what's waiting for you back there.",
    "And the biggest loss of all: the warmth, the sweetness, the feeling of belonging in your relationships — gone forever."
  ];

  return (
    <section className="section" style={{ background: 'var(--surface)', color: 'var(--silver)' }}>
      <div className="section-inner" style={{ textAlign: 'center', maxWidth: '800px' }}>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ color: 'var(--silver)', marginBottom: 'var(--space-5)' }}
        >
          If nothing changes, <span style={{ color: 'var(--emerald)' }}>what will you lose?</span>
        </motion.h2>
 
        <div className="agitate-cards-list" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', textAlign: 'left', marginBottom: 'var(--space-5)' }}>
          {items.map((item, i) => (
            <motion.div 
              key={i}
              className="agitate-card"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.3 }}
              whileHover={{ 
                x: 8,
                borderLeftColor: '#0D1B18',
                backgroundColor: 'rgba(18, 36, 33, 0.03)',
                transition: { duration: 0.12, ease: "easeOut" }
              }}
              style={{
                padding: 'var(--space-3)',
                borderLeft: '3px solid var(--gold-accent)',
                backgroundColor: 'var(--surface-raised)',
                borderTopRightRadius: '8px',
                borderBottomRightRadius: '8px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.02)',
                border: '1px solid var(--border)',
                borderLeftWidth: '3px',
                cursor: 'default',
                transition: 'background-color 0.12s ease, border-color 0.12s, transform 0.12s ease'
              }}
            >
              <p style={{ color: 'var(--slate)', margin: 0, fontSize: '15px' }}>{item}</p>
            </motion.div>
          ))}
        </div>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.4 }}
          style={{ fontSize: '16px', color: 'var(--slate)' }}
        >
          This isn't your fault. These are simply tangled <strong style={{ color: 'var(--silver)' }}>threads</strong> — and with the right love and understanding, they can be gently untangled.
        </motion.p>
      </div>
    </section>
  );
};

export default AgitateSection;
