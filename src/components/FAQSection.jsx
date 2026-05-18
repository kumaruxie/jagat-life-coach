import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQSection = () => {
  const faqs = [
    {
      q: "Kya yeh sirf married logon ke liye hai?",
      a: "Nahi. Yeh program un sabhi ke liye hai jo family conflicts, relationship tension, ya self-doubt ki wajah se stuck feel karte hain — chahe aap married ho, single ho, ya parents ke saath rehte ho, yeh sabke liye relevant hai."
    },
    {
      q: "Live classes hongi ya recorded?",
      a: "Core content 8 recorded modules mein hai jo aap apni suvidha ke anusaar dekh sakte hain. Iske saath hi 7 live group coaching sessions aur 2 personal 1:1 Zoom calls sirf aapke liye hongi."
    },
    {
      q: "Language kya rahegi?",
      a: "Pure Hinglish — 60% Hindi, 40% English. Bilkul waise hi jaise hum naturally baat karte hain."
    },
    {
      q: "Mujhe itna time kahan se milega?",
      a: "Har recorded video approximately 20–30 minutes ka hai. Rozana sirf 30–40 minutes nikaliye — 30 din mein program comfortably complete ho jayega."
    },
    {
      q: "Kya yeh counselling ya therapy hai?",
      a: "Nahi. Yeh ek coaching aur personal transformation program hai. Isme koi medical ya clinical diagnosis nahi hoti. Yeh sirf practical tools aur frameworks hain jinhe aap turant apni real life mein use kar sakte hain."
    },
    {
      q: "Kya family members ko bhi saath laana padega?",
      a: "Aap yeh course apne liye le rahe hain. Isme jo frameworks aur scripts aapko milenge, unhe aap apni family conversations mein directly use kar sakte hain — chahe saamne wala program mein enroll ho ya na ho."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="section" style={{ background: 'linear-gradient(to bottom, var(--surface-deep) 0%, var(--surface) 150px, var(--surface) 100%)' }}>
      <div className="section-inner" style={{ maxWidth: '800px' }}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '60px' }}
        >
          Aapke Sawaal, Seedhe Jawab
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          style={{
            textAlign: 'center',
            margin: '16px auto 48px'
          }}
        >
          Still have questions? We've answered some of the most common
          queries below to help you make an informed decision.
        </motion.p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              style={{
                backgroundColor: openIndex === index ? 'rgba(16,185,129,0.03)' : 'var(--surface-raised)',
                borderRadius: '12px',
                overflow: 'hidden',
                border: openIndex === index ? '1px solid rgba(16,185,129,0.15)' : '1px solid var(--border)',
                transition: 'background-color 0.3s, border-color 0.3s'
              }}
            >
              <motion.button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                whileHover={{ backgroundColor: 'rgba(148,163,184,0.04)' }}
                style={{
                  width: '100%',
                  padding: '24px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  textAlign: 'left',
                  fontSize: '15px',
                  fontWeight: 500,
                  color: openIndex === index ? 'var(--emerald)' : 'var(--silver)',
                  transition: 'color 0.2s'
                }}
              >
                {faq.q}
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  style={{ 
                    color: openIndex === index ? 'var(--emerald)' : 'var(--slate)',
                    flexShrink: 0,
                    marginLeft: '16px'
                  }}
                >
                  <ChevronDown size={20} />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div style={{ padding: '0 24px 20px 24px', color: 'var(--slate)', borderTop: '1px solid var(--border)' }}>
                      <p style={{ margin: 0, paddingTop: '16px', lineHeight: '1.8' }}>{faq.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
