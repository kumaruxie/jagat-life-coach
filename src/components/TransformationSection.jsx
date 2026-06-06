
import { motion } from 'framer-motion';

const TransformationSection = () => {
  const cards = [
    {
      title: "Man Ki Shanti (Peace of Mind)",
      desc: "Ghar ka mahaul halka hoga. Aap bina kisi dar ya tanaav ke apni baat rakh payenge.",
      accent: '#10b981'
    },
    {
      title: "Gehra Apnapan (Deeper Connection)",
      desc: "Choti baaton par behas ki jagah, ab ek dusre ko samajhne ki koshish hogi.",
      accent: '#60a5fa'
    },
    {
      title: "Ek Naya Nazariya (A New Perspective)",
      desc: "Aapke paas har mushkil situation ko pyar se sambhalne ka ek aasan aur clear rasta hoga.",
      accent: '#f59e0b'
    }
  ];

  return (
    <section className="section" style={{ background: 'linear-gradient(to bottom, var(--surface-deep) 0%, var(--surface) 60px, var(--surface) calc(100% - 60px), var(--surface-deep) 100%)' }}>
      <div className="section-inner">
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-6)' }}>
          <span className="tag">Natija (The Outcome)</span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            30 Din Baad Aapki Zindagi Kaisi Hogi
          </motion.h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-4)' }}>
          {cards.map((card, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ 
                y: -6, 
                boxShadow: `0 16px 40px ${card.accent}33, 0 0 0 1px ${card.accent}66`
              }}
              style={{
                backgroundColor: 'var(--surface-raised)',
                padding: 'var(--space-5)',
                borderRadius: '16px',
                borderTop: `3px solid ${card.accent}`,
                cursor: 'default',
                transition: 'box-shadow 0.3s ease'
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
