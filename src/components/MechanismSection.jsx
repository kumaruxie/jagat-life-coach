// import React from 'react';
import { motion } from 'framer-motion';

const MechanismSection = () => {
  const steps = [
    {
      title: "Personality DNA Decode",
      desc: "Aap naturally kaise react karte hain, kaunse log aur situations aapko trigger karte hain — yeh pehli baar crystal clear hoga, bina khud ko judge kiye."
    },
    {
      title: "Root Cause Mapping",
      desc: "Aapke current conflicts ke peeche ka real pattern identify hota hai — childhood conditioning, belief systems, unspoken expectations, ego clashes. Jab root dikhega, tabhi fix possible hai."
    },
    {
      title: "NLP Micro Shifts + Real Scripts",
      desc: "Simple, tested tools jisse aap apni language, focus, aur internal response change kar sakte hain. Saath hi ready-made conversation scripts jo aap usi raat ghar par use kar sakte hain."
    }
  ];

  return (
    <section className="section" style={{ backgroundColor: 'var(--color-bg)' }}>
      <div className="section-inner">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="tag">The Method</span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Jagat Ka Signature System: 3 Steps Mein Permanent Change
          </motion.h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              style={{
                backgroundColor: 'white',
                padding: '40px',
                borderRadius: '16px',
                boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
                position: 'relative'
              }}
            >
              <div style={{
                position: 'absolute',
                top: '-20px',
                left: '40px',
                width: '40px',
                height: '40px',
                backgroundColor: 'var(--color-secondary)',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%',
                fontWeight: 'bold',
                fontSize: '20px'
              }}>
                {index + 1}
              </div>
              <h3 style={{ marginTop: '16px', marginBottom: '16px', fontSize: '24px' }}>{step.title}</h3>
              <p style={{ margin: 0 }}>{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MechanismSection;
