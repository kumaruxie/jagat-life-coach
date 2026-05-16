// import React from 'react';
import { motion } from 'framer-motion';

const AgitateSection = () => {
  return (
    <section style={{ backgroundColor: 'var(--surface-deep)', color: 'var(--silver)', padding: '80px 0' }}>
      <div className="section-inner" style={{ textAlign: 'center', maxWidth: '800px' }}>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ color: 'var(--silver)', marginBottom: '40px' }}
        >
          Agar Aise Hi 5–10 Saal Aur Nikal Gaye Toh?
        </motion.h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', textAlign: 'left', marginBottom: '40px' }}>
          {[
            "Aapke bachche yahi conflict patterns copy karenge — family culture hi toxic ban jayega.",
            "Office mein productivity girti rahegi, kyunki dimaag ghar ki baaton mein hi atka rahega.",
            "Aur sabse bada nuksaan: aap khud se disappointed rahenge — 'Itni samajh hai, phir bhi theek kyun nahi ho raha?'"
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{
                padding: '24px',
                borderLeft: '3px solid var(--border-accent)',
                backgroundColor: '#1e2535'
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
          transition={{ delay: 0.4 }}
          style={{ fontSize: '16px', color: 'var(--slate)' }}
        >
          Yeh sirf relationship problem nahi hai. Yeh ek <strong style={{ color: 'var(--silver)' }}>pattern</strong> hai. Aur patterns decode kiye ja sakte hain.
        </motion.p>
      </div>
    </section>
  );
};

export default AgitateSection;
