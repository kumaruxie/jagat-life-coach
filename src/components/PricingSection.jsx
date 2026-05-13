// import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const PricingSection = () => {
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
    <section className="section" style={{ backgroundColor: 'white' }}>
      <div className="section-inner" style={{ maxWidth: '1000px' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="tag">Limited Enrollment</span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Investment in Self
          </motion.h2>
        </div>

        <div className="grid-pricing" style={{ 
          backgroundColor: 'var(--color-primary)', 
          borderRadius: '24px', 
          color: 'white',
          overflow: 'hidden',
          boxShadow: '0 20px 40px rgba(0,0,0,0.15)'
        }}>
          {/* Left: What you get */}
          <div style={{ padding: '48px' }}>
            <h3 style={{ fontSize: '24px', marginBottom: '24px', color: 'white' }}>What you get</h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {inclusions.map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <div style={{ color: 'var(--color-accent)', marginTop: '4px' }}><Check size={20} /></div>
                  <span style={{ color: 'rgba(255,255,255,0.9)' }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Price & Form */}
          <div style={{ 
            backgroundColor: 'rgba(0,0,0,0.2)', 
            padding: '48px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center'
          }}>
            <div style={{ width: '100%', marginBottom: '32px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', color: 'rgba(255,255,255,0.7)' }}>
                <span>Core Program</span>
                <span>₹23,996</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', color: 'rgba(255,255,255,0.7)' }}>
                <span>Live 1:1 Calls</span>
                <span>₹5,000</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px', color: 'rgba(255,255,255,0.7)' }}>
                <span>Bonuses</span>
                <span>₹2,000+</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.2)', fontWeight: 600, fontSize: '18px' }}>
                <span>Total Value</span>
                <span>₹29,000+</span>
              </div>
            </div>

            <div style={{ marginBottom: '32px' }}>
              <div style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.7)', marginBottom: '8px' }}>Founding Batch Price</div>
              <div style={{ fontSize: '72px', fontWeight: 700, lineHeight: 1, color: 'var(--color-accent)' }}>₹1,997</div>
              <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', marginTop: '8px' }}>all-inclusive</div>
            </div>

            {/* Basic Form Placeholder for API Integration */}
            <form style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '16px' }}>
              <input type="text" placeholder="Full Name" style={{ padding: '12px 16px', borderRadius: '8px', border: 'none', width: '100%', fontFamily: 'var(--font-body)' }} />
              <input type="email" placeholder="Email Address" style={{ padding: '12px 16px', borderRadius: '8px', border: 'none', width: '100%', fontFamily: 'var(--font-body)' }} />
              <input type="tel" placeholder="Phone Number" style={{ padding: '12px 16px', borderRadius: '8px', border: 'none', width: '100%', fontFamily: 'var(--font-body)' }} />
              
              {/* Razorpay Button Placeholder */}
              <button type="button" className="btn-primary" style={{ width: '100%', padding: '16px', marginTop: '8px' }}>
                Secure Your Spot Now
              </button>
            </form>

            <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)' }}>
              Sirf 12 seats available for this cohort. Filling fast.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
