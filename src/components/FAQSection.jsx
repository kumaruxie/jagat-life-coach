import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQSection = () => {
  const faqs = [
    {
      q: "Shaadi nahi hui ya akela rehta hoon — kya yeh sirf couples ke liye hai?",
      a: "Agar ghar mein koi bhi hai jisse ek bhi baar takraav hua ho — yeh aapke liye hai. 1,200+ log jo is program se gaye hain, unme se 38% single the — parents se jhagda, siblings se tension, ya sirf apne andar ki bechain awaaz. Rishte sirf bedroom mein nahi hote."
    },
    {
      q: "Live sessions ke liye time nahi nikalta — program adhoora reh jaayega toh?",
      a: "Aapne pehle bhi yahi socha tha — aur isliye aaj bhi wahi situation hai. Isliye saare 8 modules lifetime access ke saath pre-recorded hain. Raat 11 baje, train mein, lunch break mein — jab chaho. Live sessions optional hain, compulsory nahi. Adhoora rehne ka darr nahi, start karne ki himmat chahiye."
    },
    {
      q: "Complex psychology ya kathin English nahi samajhni — kya yeh mere liye sahi hai?",
      a: "Seedha bolein: agar aap WhatsApp pe Hindi mein type karte hain — yeh program aapke liye hai. Pure Hinglish, zero jargon. Koi 'attachment theory' lecture nahi. Sirf woh words jo kal raat aap actually bol sako. 3 din mein pehla fark mehsoos hoga — ya paise wapas."
    },
    {
      q: "Agar ghar wale participate na karein toh mera seekhna bekaar jaayega na?",
      a: "Yeh program ka sabse bada secret hai — aur jo log yahan ruk jaate hain, woh yahi miss karte hain. Ek insaan ka badalna poori dynamic badal deta hai. Jab aap ek hi baat alag tone, alag timing, alag words se bolte ho — saamne wala option-less ho jaata hai gusse mein rehne ka. Yeh manipulation nahi, yeh physics hai. Jo nahi seekhte, woh 5 saal baad bhi wahi argument repeat karte hain."
    },
    {
      q: "Kya group mein apni personal baatein sab ke saamne bolni padti hain?",
      a: "Nahi — aur jo log yeh poochhhte hain, woh usually sabse zyada transform hote hain. Group sirf seekhne ke liye hai, confess karne ke liye nahi. Aapka naam bhi optional hai. Apply sirf aap karoge — apne ghar mein, apni marzi se. Yeh clinic nahi, workshop hai."
    },
    {
      q: "Pehle bhi books padhi, videos dekhi — sab bhool gaya. Yeh alag kaise hoga?",
      a: "Kyunki aapko gyaan nahi chahiye — aapko aadat chahiye. Books information deti hain. Yeh program exact scripts deta hai — kal raat ke jhagde mein word-for-word kya bolna hai. Plus weekly 1:1 check-in — koi dekh raha hai ki aap use kar rahe ho ya nahi. Accountability woh cheez hai jo books kabhi nahi de sakti."
    },
    {
      q: "Kya yeh program mere unique parivar ki situation par sach mein kaam karega?",
      a: "Haan. Rishton aur conflicts ke patterns repetitive hote hain. Jab aap react karne ka apna tarika aur word-choice badal dete hain, toh saamne wale ka behavior apne aap badal jaata hai. Program mein shamil 1,500+ alag-alag families par yahi identical system kaam kar chuka hai."
    },
    {
      q: "Program ki fees sirf ₹1,997 kyun hai? Itna kam kyun?",
      a: "Yeh humare exclusive Founding Batch ki special price hai. Humara goal is batch ke members se solid reviews aur case studies ikattha karna hai. Agle cohort se fees badhkar standard price (₹4,997) par chali jayegi."
    },
    {
      q: "Maine pehle bhi kai courses aur YouTube videos try kiye hain. Yeh unse alag kaise hai?",
      a: "YouTube videos aur books sirf theoretical gyaan deti hain. Hum aapko concept nahi, balki exact conversation scripts aur weekly 1:1 check-ins dete hain. Jab aapko exact pata ho ki kya bolna hai aur koi aapse updates lene wala ho, toh badlaav aana tay hai."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="section" style={{ background: 'linear-gradient(to bottom, var(--surface) 0%, var(--surface) calc(100% - 60px), var(--surface-deep) 100%)' }}>
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
              transition={{ delay: index * 0.03, duration: 0.3 }}
              style={{
                backgroundColor: openIndex === index ? 'rgba(16,185,129,0.03)' : 'var(--surface-raised)',
                borderRadius: '12px',
                overflow: 'hidden',
                border: openIndex === index ? '1px solid rgba(16,185,129,0.15)' : '1px solid var(--border)',
                transition: 'background-color 0.12s, border-color 0.12s'
              }}
            >
              <motion.button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                whileHover={{ backgroundColor: 'rgba(148,163,184,0.04)', transition: { duration: 0.1, ease: "easeOut" } }}
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
                  transition: 'color 0.12s'
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
