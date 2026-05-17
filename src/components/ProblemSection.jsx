import { motion } from 'framer-motion';
import { Home, Users, Briefcase, RefreshCw, User, Lightbulb } from 'lucide-react';

const ProblemSection = () => {
  const problems = [
    {
      icon: <Home size={20} />,
      text: "Ghar aate hi mood off ho jaata hai — kyunki pata hai ki phir koi baat pakdi jayegi."
    },
    {
      icon: <Users size={20} />,
      text: "Spouse, parents, ya siblings ko samjhana chahte hain, lekin har baat debate ya blame game mai badal jaati hai."
    },
    {
      icon: <Briefcase size={20} />,
      text: "Career chal raha hai, financially theek hain — par andar se lagta hai ki kuch toh missing hai."
    },
    {
      icon: <RefreshCw size={20} />,
      text: "Itne saalon se same pattern repeat ho raha hai: Love → Expectations → Disappointments → Fights → Silence."
    },
    {
      icon: <User size={20} />,
      text: "Compromise karte-karte khud ko hi kho chuke hain — \"Main kaun hoon?\" ka jawab ab clear nahi."
    },
    {
      icon: <Lightbulb size={20} />,
      text: "YouTube, reels, motivational quotes, sab try kar liya — par agli subah wahi purani reality."
    }
  ];

  return (
    <section className="section" style={{ backgroundColor: 'var(--surface)', color: 'var(--silver)', padding: '100px 0' }}>
      <div className="section-inner">
        <div style={{ textAlign: 'center', marginBottom: '80px', position: 'relative' }}>
          <div style={{ 
            position: 'absolute', 
            top: '50%', 
            left: 0, 
            right: 0, 
            height: '1px', 
            backgroundColor: 'var(--border)', 
            zIndex: 0 
          }}></div>
          <span style={{ 
            backgroundColor: 'var(--surface)', 
            padding: '0 24px', 
            position: 'relative', 
            zIndex: 1, 
            color: 'var(--slate)',
            fontSize: '14px',
            textTransform: 'uppercase',
            letterSpacing: '0.2em'
          }}>
            Pehchante hain yeh feelings?
          </span>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '24px',
          maxWidth: '1100px',
          margin: '0 auto'
        }}>
          {problems.map((prob, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              style={{ 
                display: 'flex', 
                gap: '24px', 
                padding: '32px',
                backgroundColor: 'var(--surface-raised)',
                borderRadius: '8px',
                alignItems: 'flex-start',
                border: '1px solid var(--border)',
                transition: 'all 0.1s ease',
              }}
              whileHover={{ y: -2, borderColor: 'rgba(148,163,184,0.3)' }}
            >
              <div style={{ 
                backgroundColor: 'rgba(148,163,184,0.12)', 
                color: 'var(--slate)', 
                padding: '12px', 
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                boxShadow: 'none'
              }}>
                {prob.icon}
              </div>
              <p style={{ margin: 0, color: 'var(--slate)', fontSize: '14px', lineHeight: '1.7', fontWeight: 400 }}>
                {prob.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
