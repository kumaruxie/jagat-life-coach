
import { motion } from 'framer-motion';

const TransformationSection = () => {
  const cards = [
    {
      title: "Absolute Clarity",
      desc: "Pata chalega ki aap actually kaun hain — aap koi 'problem' nahi hain, balki ek specific personality pattern hain jise samjha aur badla ja sakta hai."
    },
    {
      title: "Unshakable Confidence",
      desc: "Reaction se Response mode mein shift ho jayenge. Same situation, same log — lekin aapka internal experience completely different hoga."
    },
    {
      title: "Structured Roadmap",
      desc: "30 din ke baad aapke paas hoga aapka personal Conflict to Clarity Blueprint — sirf generic advice nahi, balki aapke ghar ke liye customized."
    }
  ];

  return (
    <section className="section" style={{ backgroundColor: 'var(--surface)' }}>
      <div className="section-inner">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="tag">The Outcome</span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            30 Din Baad Aap Kaisa Feel Karenge
          </motion.h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
          {cards.map((card, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              style={{
                backgroundColor: 'var(--surface-raised)',
                padding: '40px',
                borderRadius: '16px',
                borderTop: '3px solid var(--border-accent)'
              }}
            >
              <h3 style={{ marginBottom: '16px', fontSize: '24px' }}>{card.title}</h3>
              <p style={{ margin: 0 }}>{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TransformationSection;
