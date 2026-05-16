
import { motion } from 'framer-motion';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Priya S., IT Professional, Gurgaon",
      quote: "Mujhe lagta tha main hi overreact karti hoon. Jagat ne pehle session mein hi mera Personality DNA dikha diya — tab samajh aaya ki main wrong nahi thi, bas mera pattern wrong tha. Teesre hafte tak ghar ka atmosphere completely shift ho gaya."
    },
    {
      name: "Rajesh M., Senior Manager, Delhi",
      quote: "14 saal ki shadi mein pehli baar mujhe laga ki main actually sun raha hoon — saamne waale ko, aur khud ko bhi. Yeh program sirf coaching nahi hai, balki ek mirror hai jo aapko sach dikhata hai."
    },
    {
      name: "Ananya K., Entrepreneur, Noida",
      quote: "Maine therapy try ki, books padhi, reels dekhi — kuch nahi badla. Jagat ke saath 30 din mein jo clarity aayi, woh pichle 2 saalon mein nahi aayi thi. Scripts actually kaam karti hain — jis raat use ki, usi raat result mila."
    }
  ];

  return (
    <section id="alumni" className="section" style={{ backgroundColor: 'var(--surface)' }}>
      <div className="section-inner">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="tag">Alumni Results</span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Inke Ghar Badal Gaye. Aapka Bhi Badal Sakta Hai. 
          </motion.h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
          {testimonials.map((test, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              style={{
                backgroundColor: 'var(--surface-raised)',
                padding: '40px',
                borderRadius: '16px',
                boxShadow: 'none',
                border: '1px solid var(--border)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{ color: 'var(--emerald)', marginBottom: '14px', fontSize: '14px', letterSpacing: '2px' }}>★★★★★</div>
                <p style={{ fontFamily: 'var(--font-heading)', fontStyle: 'italic', fontSize: '14px', color: 'var(--slate)', marginBottom: '20px', lineHeight: '1.7' }}>"{test.quote}"</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ width: '20px', height: '2px', backgroundColor: 'var(--slate)' }}></div>
                <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--silver)' }}>{test.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
