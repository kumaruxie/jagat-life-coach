import { motion } from 'framer-motion';

const AgitateSection = () => {
  const items = [
    "Aapke bachche bhi jaane-anjane mein yahi tanaav seekhenge, aur unka bachpan khul ke nahi beet payega.",
    "Ghar ki ashaanti ka asar aapke kaam par padega, kyunki dimaag aakhir wahin atka rahega.",
    "Aur sabse bada nuksaan: Rishton se wo mithaas aur apnapan hamesha ke liye gayab ho jayega."
  ];

  return (
    <section className="section" style={{ background: 'linear-gradient(to bottom, var(--surface) 0%, var(--surface-deep) 150px, var(--surface-deep) 100%)', color: 'var(--silver)' }}>
      <div className="section-inner" style={{ textAlign: 'center', maxWidth: '800px' }}>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ color: 'var(--silver)', marginBottom: 'var(--space-5)' }}
        >
          Agar cheezein aisi hi chalti rahin, toh kya khoyenge aap?
        </motion.h2>

        <div className="agitate-cards-list" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', textAlign: 'left', marginBottom: 'var(--space-5)' }}>
          {items.map((item, i) => (
            <motion.div 
              key={i}
              className="agitate-card"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              whileHover={{ 
                x: 8,
                borderLeftColor: '#f87171',
                backgroundColor: '#1f2a3d'
              }}
              style={{
                padding: 'var(--space-3)',
                borderLeft: '3px solid var(--border-accent)',
                backgroundColor: '#1e2535',
                cursor: 'default',
                transition: 'background-color 0.3s ease'
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
          transition={{ delay: 0.5, duration: 0.8 }}
          style={{ fontSize: '16px', color: 'var(--slate)' }}
        >
          Yeh koi aapki galti nahi hai. Yeh sirf kuch uljhe hue <strong style={{ color: 'var(--silver)' }}>dhage</strong> hain, jinhe pyar aur sahi samajh se suljhaya ja sakta hai.
        </motion.p>
      </div>
    </section>
  );
};

export default AgitateSection;
