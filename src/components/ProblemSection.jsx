// import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

const ProblemSection = () => {
  const problems = [
    "Ghar aate hi mood off ho jaata hai — kyunki pata hai ki phir koi baat pakdi jayegi.",
    "Spouse, parents, ya siblings ko samjhana chahte hain, lekin har baat debate ya blame game ban jaati hai.",
    "Career chal raha hai, financially theek hain — par andar se lagta hai ki kuch toh missing hai.",
    "Itne saalon se same pattern repeat ho raha hai: Love → Expectations → Disappointments → Fights → Silence.",
    "Compromise karte-karte khud ko hi kho chuke hain — 'Main kaun hoon?' ka jawab ab clear nahi.",
    "YouTube reels, motivational quotes, sab try kar liya — par agli subah wahi purani reality."
  ];

  return (
    <section className="section" style={{ backgroundColor: 'white', position: 'relative' }}>
      <div className="section-inner">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Yeh Sab Jaana Pehchaana Lagta Hai?
        </motion.h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginBottom: '60px' }}>
          {problems.map((prob, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              style={{ 
                display: 'flex', 
                gap: '16px', 
                padding: '24px',
                backgroundColor: 'var(--color-bg)',
                borderRadius: '12px',
                alignItems: 'flex-start'
              }}
            >
              <div style={{ color: 'var(--color-secondary)', marginTop: '4px' }}>
                <X size={24} strokeWidth={3} />
              </div>
              <p style={{ margin: 0, color: 'var(--color-text-dark)', fontWeight: 500 }}>
                {prob}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            backgroundColor: '#2D3748', // Dark purple/blue overlay
            color: 'white',
            padding: '40px',
            borderRadius: '16px',
            textAlign: 'center',
            maxWidth: '800px',
            margin: '0 auto',
            boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
          }}
        >
          <p style={{ 
            fontSize: '24px', 
            fontFamily: 'var(--font-heading)',
            fontStyle: 'italic',
            color: 'white',
            marginBottom: '16px'
          }}>
            "Sabko lagta hai problem 'saamne wale' mein hai. Asli root aapki apni Personality DNA mein chhupa hota hai."
          </p>
          <span style={{ color: 'var(--color-secondary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            — Jagat Turkiya
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
