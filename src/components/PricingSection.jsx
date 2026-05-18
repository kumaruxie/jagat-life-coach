import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const PricingSection = ({ triggerPayment }) => {
  const inclusions = [
    "4 Weeks Structured Program — 8 recorded Hinglish videos (lifetime access)",
    "7 Live Group Coaching Sessions with Jagat",
    "2 × 1:1 Zoom Calls (Week 1–2 + Week 4)",
    "Conflict Detox Worksheets — break old patterns",
    "Family Conversation Scripts — plug-and-play dialogues",
    "Private support community (30 days)",
    "Daily 5-min grounding audio (MP3)",
    "Priority email support throughout"
  ];

  return (
    <section className="section" id="pricing" style={{ background: 'linear-gradient(to bottom, var(--surface) 0%, var(--surface-deep) 150px, var(--surface-deep) 100%)' }}>
      <div className="section-inner" style={{ maxWidth: '1000px' }}>
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-6)' }}>
          <span className="tag">Limited Enrollment</span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Investment in Self
          </motion.h2>
        </div>

        <motion.div 
          className="grid-pricing" 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          whileHover={{ boxShadow: '0 16px 48px rgba(0,0,0,0.3), 0 0 0 1px rgba(16,185,129,0.1)' }}
          style={{
            backgroundColor: 'var(--surface-raised)',
            borderRadius: '24px',
            color: 'var(--silver)',
            overflow: 'hidden',
            boxShadow: 'none',
            border: '1px solid rgba(226,232,240,0.12)',
            transition: 'box-shadow 0.3s ease'
          }}
        >
          {/* Left: What you get */}
          <div style={{ padding: '48px' }}>
            <h3 style={{ fontSize: '18px', marginBottom: '24px', color: 'var(--silver)' }}>What you get</h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {inclusions.map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <div style={{ color: 'var(--emerald)', marginTop: '4px' }}><Check size={16} /></div>
                  <span style={{ color: 'var(--slate)', fontSize: '14px' }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Price & CTA */}
          <div style={{
            backgroundColor: 'rgba(0,0,0,0.15)',
            padding: '48px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center'
          }}>
            <div style={{ width: '100%', marginBottom: '32px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', color: 'var(--slate)', fontSize: '14px' }}>
                <span>Core Program</span>
                <span>₹23,996</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', color: 'var(--slate)', fontSize: '14px' }}>
                <span>Live 1:1 Calls</span>
                <span>₹5,000</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', color: 'var(--slate)', fontSize: '14px' }}>
                <span>Bonuses</span>
                <span>₹2,000+</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '14px', borderTop: '1px solid var(--border)', fontWeight: 600, fontSize: '14px', color: 'var(--silver)' }}>
                <span>Total Value</span>
                <span>₹29,000+</span>
              </div>
            </div>

            <div style={{ marginBottom: '32px' }}>
              <div style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--slate)', marginBottom: '8px', fontWeight: 600 }}>Founding Batch Price</div>
              <div style={{ fontSize: '60px', fontFamily: 'var(--font-heading)', fontWeight: 700, lineHeight: 1, color: 'var(--emerald)' }}>₹1,997</div>
              <div style={{ fontSize: '12px', color: 'var(--slate)', marginTop: '4px' }}>all-inclusive</div>
            </div>

            <button
              className="btn-cta btn-cta-pulse"
              onClick={() => triggerPayment()}
              style={{
                width: '100%',
                padding: '18px',
                fontSize: '14px',
                marginBottom: '16px'
              }}
            >
              Abhi Enroll Karo →
            </button>

            <p style={{ fontSize: '12px', color: 'var(--emerald)', fontWeight: 600 }}>
              Sirf 12 seats available for this cohort. Filling fast.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
