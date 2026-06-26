import { motion } from 'framer-motion';
import { Home, Users, Briefcase, RefreshCw, User, Lightbulb } from 'lucide-react';

const ProblemSection = () => {
  const problems = [
    {
      icon: <Home size={20} />,
      text: "Ghar aate hi ek anjana sa tanaav mehsus hota hai — lagta hai baat baat par charcha shuru ho jayegi."
    },
    {
      icon: <Users size={20} />,
      text: "Apno ko apni baat samjhane ki koshish karte hain, par baat aksar galatfehmi mein badal jaati hai."
    },
    {
      icon: <Briefcase size={20} />,
      text: "Career mein sab theek chal raha hai, par andar ek ajeeb sa khaalipan aur ashaanti lagti hai."
    },
    {
      icon: <RefreshCw size={20} />,
      text: "Rishton mein wahi purana chakkar: Ummid → Nirasha → Behas → Khamoshi."
    },
    {
      icon: <User size={20} />,
      text: "Rishton ko bachane mein itna compromise kiya hai ki ab lagta hai \"Main asliyat mein kaun hoon?\""
    },
    {
      icon: <Lightbulb size={20} />,
      text: "Bahut si videos aur motivational baatein sun li, par agli subah wahi purani ashaanti wapas aa jaati hai."
    }
  ];

  return (
    <section id="problem" className="section" style={{ background: '#0D1B18', color: '#E2E8F0' }}>
      <div className="section-inner">
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-10)', position: 'relative' }}>
          <div style={{ 
            position: 'absolute', 
            top: '50%', 
            left: 0, 
            right: 0, 
            height: '1px', 
            backgroundColor: 'rgba(255, 255, 255, 0.1)', 
            zIndex: 0 
          }}></div>
          <span style={{ 
            backgroundColor: '#0D1B18', 
            padding: '0 var(--space-3)', 
            position: 'relative', 
            zIndex: 1, 
            color: 'var(--emerald)',
            fontSize: '14px',
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
            fontWeight: 700
          }}>
            Kya aap khud ko yahan paate hain?
          </span>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(320px, 100%), 1fr))', 
          gap: 'var(--space-3)',
          maxWidth: '1100px',
          margin: '0 auto'
        }}>
          {problems.map((prob, index) => (
            <motion.div 
              key={index}
              className="problem-card"
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { delay: index * 0.04, duration: 0.3 } },
                hover: { 
                  y: -4, 
                  borderColor: 'rgba(16, 185, 129, 0.4)', 
                  boxShadow: '0 8px 32px rgba(16, 185, 129, 0.12)',
                  transition: { duration: 0.12, ease: "easeOut" }
                }
              }}
              style={{ 
                display: 'flex', 
                gap: 'var(--space-3)', 
                padding: 'var(--space-4)',
                backgroundColor: 'rgba(255, 255, 255, 0.02)',
                borderRadius: '16px',
                alignItems: 'flex-start',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                cursor: 'default',
                transition: 'box-shadow 0.12s ease, border-color 0.12s, background-color 0.12s'
              }}
            >
              <motion.div 
                variants={{
                  hover: { 
                    scale: 1.1, 
                    backgroundColor: 'rgba(16,185,129,0.2)', 
                    color: '#ffffff',
                    transition: { duration: 0.12, ease: "easeOut" }
                  }
                }}
                transition={{ duration: 0.12, ease: "easeOut" }}
                style={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.05)', 
                  color: 'var(--emerald)', 
                  padding: '12px', 
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  transition: 'background-color 0.12s, color 0.12s'
                }}>
                {prob.icon}
              </motion.div>
              <motion.p 
                variants={{
                  hover: { color: '#ffffff' }
                }}
                transition={{ duration: 0.12, ease: "easeOut" }}
                style={{ margin: 0, color: '#CBD5E1', fontSize: '14.5px', lineHeight: '1.7', fontWeight: 400 }}
              >
                {prob.text}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
