import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const PricingSection = ({ triggerPayment }) => {
  const inclusions = [
    "4 Weeks Structured Program — 8 recorded Hinglish videos (lifetime access)",
    "4 Live Group Coaching Sessions with Jagat",
    "2 × 1:1 Zoom Calls (Week 1–2 + Week 4)",
    "Conflict Detox Worksheets — break old patterns",
    "Family Conversation Scripts — plug-and-play dialogues",
    "Private support community (30 days)",
    "Daily 5-min grounding audio (MP3)",
    "Priority email support throughout"
  ];

  return (
    <section className="section" id="pricing" style={{ background: 'var(--surface)' }}>
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
          transition={{ duration: 0.3 }}
          whileHover={{ 
            boxShadow: '0 24px 48px rgba(18, 36, 33, 0.06), 0 0 0 1px rgba(16,185,129,0.15)',
            transition: { duration: 0.12, ease: "easeOut" }
          }}
          style={{
            backgroundColor: 'var(--surface-raised)',
            borderRadius: '24px',
            color: 'var(--silver)',
            overflow: 'hidden',
            boxShadow: '0 12px 32px rgba(18, 36, 33, 0.03)',
            border: '1px solid var(--border)',
            transition: 'box-shadow 0.12s ease, border-color 0.12s'
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

          {/* Right: Application & Value */}
          <div style={{
            backgroundColor: 'var(--surface-deep)',
            padding: '48px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            textAlign: 'left'
          }}>
            <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--silver)', marginBottom: '8px' }}>
              Apply for the Founding Batch
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--slate)', marginBottom: '24px', lineHeight: '1.5' }}>
              We limit each cohort to exactly 12 families to guarantee deeply personalized, high-touch support and real relationship breakthroughs.
            </p>

            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <div style={{ color: 'var(--emerald)', fontSize: '18px', lineHeight: 1 }}>•</div>
                <div>
                  <h4 style={{ fontSize: '14px', fontWeight: 600, color: 'var(--silver)', margin: '0 0 2px 0' }}>100% Tailored Roadmap</h4>
                  <p style={{ fontSize: '12.5px', color: 'var(--slate)', margin: 0 }}>Customized solutions built specifically around your family dynamic.</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <div style={{ color: 'var(--emerald)', fontSize: '18px', lineHeight: 1 }}>•</div>
                <div>
                  <h4 style={{ fontSize: '14px', fontWeight: 600, color: 'var(--silver)', margin: '0 0 2px 0' }}>Direct 1:1 Coaching</h4>
                  <p style={{ fontSize: '12.5px', color: 'var(--slate)', margin: 0 }}>Get direct audio, Zoom, and message support from Jagat and his team.</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <div style={{ color: 'var(--emerald)', fontSize: '18px', lineHeight: 1 }}>•</div>
                <div>
                  <h4 style={{ fontSize: '14px', fontWeight: 600, color: 'var(--silver)', margin: '0 0 2px 0' }}>Free Compatibility Call</h4>
                  <p style={{ fontSize: '12.5px', color: 'var(--slate)', margin: 0 }}>Discuss your situation confidentially to ensure a perfect programmatic fit.</p>
                </div>
              </div>
            </div>

            <button
              className="btn-cta btn-cta-pulse btn-pill"
              onClick={() => triggerPayment()}
              style={{
                width: '100%',
                padding: '18px',
                fontSize: '14px',
                marginBottom: '16px',
                textAlign: 'center'
              }}
            >
              Apply via WhatsApp Chat →
            </button>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', width: '100%', textAlign: 'center' }}>
              <p style={{ fontSize: '12px', color: 'var(--emerald)', fontWeight: 600, margin: 0 }}>
                ⚠️ Strictly limited to 12 active slots.
              </p>
              <p style={{ fontSize: '11px', color: 'var(--slate)', margin: 0 }}>
                Application calls are completely free and confidential.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
