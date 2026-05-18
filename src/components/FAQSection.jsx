import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQSection = () => {
  const faqs = [
    {
      q: "Meri shaadi nahi hui hai (ya main akela rehta hoon) — kya mere ghar ke tanaav aur rishte bhi isse sulajh sakte hain?",
      a: "Bilkul. Tanaav aur galatfehmiya sirf pati-patni ke beech nahi hoti. Yeh program har us rishte ke liye hai jo aapko pareshan karta hai — chahe wo aapke parents ho, siblings (bhai-behan), business partner ho, ya phir aapka khud ke saath rishta. Isme seekhe frameworks har jagah kaam aate hain."
    },
    {
      q: "Mujhe lagta hai mere paas live sessions ke liye waqt nahi milega... kya main ise apne time par seekh sakta hoon?",
      a: "Haan, bilkul! Core program ke sabhi 8 modules fully pre-recorded hain jinki lifetime access aapko milti hai. Aap inhe raat ko, weekend par, ya jab bhi aap free ho, dekh sakte hain. Weekly live session aur personal 1:1 check-ins ko bhi aapki suvidha ke hisab se schedule kiya ja sakta hai."
    },
    {
      q: "Main koi complex psychology theories ya kathin English nahi seekhna chahta — kya yeh aasan bhasha mein hoga?",
      a: "Yeh program bilkul simple Hinglish (60% Hindi, 40% English) mein hai. Koi complex jargon ya bookish theories nahi hain. Yeh bilkul waisa hi hai jaise aap apne kisi bade bhai ya dost ke saath baithkar chai peete hue dil ki baat kar rahe hon."
    },
    {
      q: "Agar mera parivaar ya partner is coaching mein dilchaspi na le... toh kya akele mere seekhne se ghar mein sukoon aayega?",
      a: "Yeh sabse bada darr hota hai, par sach yeh hai ki rishta ek taale aur chaabi ki tarah hota hai. Jab aap apni baatein rakhne ka tarika badalte hain, toh saamne wale ka reaction aur response apne aap badalne lagta hai. Is program mein aap jo exact verbal scripts aur frameworks seekhenge, unse akele aap hi ghar ki dynamic ko shaant kar sakte hain."
    },
    {
      q: "Kya mujhe apne purane zakhm ya personal baatein sabke saamne kuredni padengi? Mujhe therapy nahi chahiye...",
      a: "Nahi, bilkul nahi! Yeh clinical therapy ya medical counseling nahi hai. Hum aapke past ke zakhm kuredne ke bajaye aapke 'aane wale kal' par focus karte hain. Live group sessions mein bhi aapko apni koi bhi personal baat share karne ke liye force nahi kiya jata. Yeh 100% safe, positive aur solution-oriented hai."
    },
    {
      q: "Maine pehle bhi books padhi hain aur videos dekhi hain, par kuch din baad sab waisa hi ho jata hai — yeh alag kaise hai?",
      a: "Kyunki books aur videos aapko sirf 'gyaan' (information) deti hain, par use 'real life mein kaise apply karna hai' wo koi nahi sikhata. Is program mein aapko exact templates, plug-and-play conversation scripts aur direct 1:1 handholding check-ins milte hain jo aapko sach mein action lene par majboor karte hain. Yeh sirf sunne ka nahi, badlaav laane ka safar hai."
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
          style={{ textAlign: 'center', marginBottom: '16px' }}
        >
          Man Mein Uthne Wale Sawaal, Khulkar Sahi Jawab
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          style={{
            textAlign: 'center',
            margin: '0 auto 48px',
            maxWidth: '560px',
            color: 'var(--slate)',
            fontSize: '15px',
            lineHeight: '1.6'
          }}
        >
          Apne ghar ke mahaul aur rishton ko lekar man mein shanka hona bilkul aam hai. Yahan humne un sawalon ko clarify kiya hai jo aksar professionals humse puchte hain:
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
