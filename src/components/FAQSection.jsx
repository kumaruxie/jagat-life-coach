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
    <section className="section" style={{ backgroundColor: 'var(--color-bg)' }}>
      <div className="section-inner" style={{ maxWidth: '800px' }}>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '60px' }}
        >
          Aapke Sawaal, Seedhe Jawab
        </motion.h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              style={{
                backgroundColor: 'white',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
              }}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                style={{
                  width: '100%',
                  padding: '24px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  textAlign: 'left',
                  fontSize: '18px',
                  fontWeight: 500,
                  color: 'var(--color-text-dark)'
                }}
              >
                {faq.q}
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={20} />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div style={{ padding: '0 24px 24px 24px', color: 'var(--color-text-light)', borderTop: '1px solid var(--color-border)' }}>
                      <p style={{ margin: 0, paddingTop: '16px' }}>{faq.a}</p>
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
