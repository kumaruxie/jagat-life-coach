import { motion } from 'framer-motion';

const AgitateSection = () => {
  const items = [
    "Aapke bachche bhi jaane-anjane mein yahi tanaav seekhenge, aur unka bachpan khul ke nahi beet payega.",
    "Ghar ki ashaanti ka asar aapke kaam par padega, kyunki dimaag aakhir wahin atka rahega.",
    "Aur sabse bada nuksaan: Rishton se wo mithaas aur apnapan hamesha ke liye gayab ho jayega."
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
          Agar cheezein aisi hi chalti rahin, toh <span style={{ color: 'var(--emerald)' }}>kya khoyenge aap?</span>
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
          Yeh koi aapki galti nahi hai. Yeh sirf kuch uljhe hue <strong style={{ color: 'var(--silver)' }}>dhage</strong> hain, jinhe pyar aur sahi samajh se suljhaya ja sakta hai.
        </motion.p>
      </div>
    </section>
  );
};

export default AgitateSection;
