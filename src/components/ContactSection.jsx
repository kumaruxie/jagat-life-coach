import { useState } from 'react';
import { motion } from 'framer-motion';

const GHL_WEBHOOK_URL =
  'https://services.leadconnectorhq.com/hooks/UV9lQH2lpnsX6mPHlFQR/webhook-trigger/e439fe60-5421-4341-b288-a86fb3767cba';

/* ─── Validation helpers ─── */
const BLOCKED_EMAIL_DOMAINS = [
  'mailinator.com','guerrillamail.com','tempmail.com','throwam.com',
  'yopmail.com','sharklasers.com','guerrillamailblock.com','grr.la',
  'spam4.me','trashmail.com','dispostable.com','fakeinbox.com',
  'maildrop.cc','mailnull.com','spamgourmet.com','test.com',
  'fake.com','example.com','noemail.com','nomail.com',
];

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  if (!re.test(email)) return 'Enter a valid email address.';
  const domain = email.split('@')[1]?.toLowerCase();
  if (BLOCKED_EMAIL_DOMAINS.includes(domain)) return 'Please use your real email address.';
  return null;
}

function validatePhone(phone) {
  const digits = phone.replace(/\D/g, '');
  if (digits.length !== 10) return 'Enter a valid 10-digit mobile number.';
  if (!/^[6-9]/.test(digits)) return 'Enter a valid Indian mobile number.';
  // Reject obviously fake numbers: all same digit or sequential
  if (/^(\d)\1{9}$/.test(digits)) return 'Enter your real mobile number.';
  if (digits === '1234567890' || digits === '9876543210') return 'Enter your real mobile number.';
  return null;
}

function validateName(name) {
  if (name.trim().length < 2) return 'Enter your full name.';
  if (!/^[a-zA-Z\s'-]+$/.test(name.trim())) return 'Name should only contain letters.';
  return null;
}

/* ─── Single field component ─── */
const Field = ({ id, label, type, name, placeholder, value, error, onChange, inputMode, autoComplete }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
    <label htmlFor={id} style={{ fontSize: '12px', fontWeight: 600, color: 'var(--slate)', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
      {label}
    </label>
    <input
      id={id}
      type={type}
      name={name}
      placeholder={placeholder}
      required
      autoComplete={autoComplete}
      inputMode={inputMode}
      value={value}
      onChange={onChange}
      style={{
        width: '100%',
        padding: '13px 16px',
        borderRadius: '8px',
        backgroundColor: 'rgba(148,163,184,0.05)',
        border: `1px solid ${error ? 'rgba(239,68,68,0.5)' : 'rgba(148,163,184,0.15)'}`,
        color: '#e2e8f0',
        outline: 'none',
        fontFamily: 'Inter, system-ui, sans-serif',
        fontSize: '14px',
        transition: 'border-color 0.2s',
        boxSizing: 'border-box',
      }}
      onFocus={e => { e.target.style.borderColor = 'rgba(16,185,129,0.55)'; }}
      onBlur={e => { e.target.style.borderColor = error ? 'rgba(239,68,68,0.5)' : 'rgba(148,163,184,0.15)'; }}
    />
    {error && (
      <span style={{ fontSize: '11.5px', color: '#f87171', display: 'flex', alignItems: 'center', gap: '4px' }}>
        ✕ {error}
      </span>
    )}
  </div>
);

/* ─── Trust pill ─── */
const TrustItem = ({ text }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--emerald)', flexShrink: 0 }} />
    <span style={{ fontSize: '13px', color: 'var(--slate)', lineHeight: '1.5' }}>{text}</span>
  </div>
);

/* ══════════════════════════════════════════════ */
const ContactSection = ({ showPrompt = false, onFormSubmit = () => {} }) => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', city: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | submitting | success

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'phone' ? value.replace(/\D/g, '') : value,
    }));
    // Clear error on change
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: null }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Run all validations
    const newErrors = {
      name: validateName(formData.name),
      email: validateEmail(formData.email),
      phone: validatePhone(formData.phone),
      city: formData.city.trim().length < 2 ? 'Enter your city.' : null,
    };
    setErrors(newErrors);
    if (Object.values(newErrors).some(Boolean)) return;

    setStatus('submitting');

    let phone = formData.phone;
    if (phone.length === 10) phone = '+91' + phone;

    try {
      const params = new URLSearchParams();
      params.append('full_name', formData.name.trim());
      params.append('email', formData.email.trim().toLowerCase());
      params.append('phone', phone);
      params.append('city', formData.city.trim());
      params.append('source', 'apkacoach.com');
      params.append('form_name', 'Conflict to Clarity - Lead Capture');

      await fetch(GHL_WEBHOOK_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params.toString(),
      });

      if (window.fbq) window.fbq('track', 'Lead');
      localStorage.setItem('ghl_form_submitted_at', Date.now().toString());
      localStorage.setItem('lead_contact_info', JSON.stringify({
        name: formData.name.trim(),
        email: formData.email.trim().toLowerCase(),
        phone,
        city: formData.city.trim(),
      }));
    } catch { /* no-cors won't throw on actual success */ }

    setStatus('success');
    onFormSubmit(); // notify App that form is done
  };

  return (
    <section id="contact" className="section" style={{ background: 'var(--surface-deep)' }}>

      {/* ── Warning Banner (shown when user clicks CTA without filling form) ── */}
      {showPrompt && status !== 'success' && (
        <motion.div
          initial={{ opacity: 0, y: -16, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          style={{
            background: 'rgba(239,68,68,0.08)',
            border: '1px solid rgba(239,68,68,0.35)',
            borderLeft: '4px solid #ef4444',
            borderRadius: '10px',
            padding: '16px 20px',
            margin: '0 auto 8px',
            maxWidth: '1200px',
            width: 'calc(100% - 48px)',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '12px',
          }}
        >
          <span style={{ fontSize: '20px', flexShrink: 0, lineHeight: 1.3 }}>⚠️</span>
          <div>
            <p style={{
              margin: 0,
              fontWeight: 700,
              fontSize: '15px',
              color: '#fca5a5',
              lineHeight: '1.5',
            }}>
              Please fill in your details below before proceeding to payment.
            </p>
            <p style={{ margin: '4px 0 0', fontSize: '13px', color: '#f87171', opacity: 0.85 }}>
              This helps us confirm your enrollment and send you all program details via WhatsApp before you pay.
            </p>
          </div>
        </motion.div>
      )}

      <div className="section-inner">
        <div className="contact-layout">

          {/* ── Left: Copy ── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
          >
            <div>
              <span style={{
                fontSize: '11px', fontWeight: 600, letterSpacing: '0.15em',
                color: 'var(--emerald)', textTransform: 'uppercase',
                display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px',
              }}>
                <span style={{ width: '20px', height: '1px', background: 'var(--emerald)', display: 'inline-block' }} />
                Free Consultation
              </span>

              <h2 style={{ color: 'var(--silver)', marginBottom: '16px', lineHeight: '1.25' }}>
                Talk to Jagat Turkiya's Team — No Cost, No Commitment
              </h2>

              <p style={{ color: 'var(--slate)', fontSize: '15px', lineHeight: '1.75' }}>
                Share your details. Our team will call you within 24 hours, understand your situation, and guide you on whether this program is right for you.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <TrustItem text="Response within 24 hours" />
              <TrustItem text="One-on-one call — not a sales pitch" />
              <TrustItem text="No spam. Your details stay private." />
              <TrustItem text="Speak in Hindi, English, or both" />
            </div>

            {/* Stat strip */}
            <div style={{
              display: 'flex', gap: '32px',
              paddingTop: '24px',
              borderTop: '1px solid var(--border)',
            }}>
              {[
                { num: '1,500+', label: 'Families Coached' },
                { num: '30 Days', label: 'Program Duration' },
              ].map(({ num, label }) => (
                <div key={label}>
                  <div style={{ fontSize: '22px', fontWeight: 700, color: 'var(--silver)', marginBottom: '2px' }}>{num}</div>
                  <div style={{ fontSize: '12px', color: 'var(--slate)' }}>{label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Right: Form ── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div style={{
              backgroundColor: 'var(--surface-raised)',
              border: '1px solid var(--border)',
              borderRadius: '16px',
              padding: '36px',
            }}>
              {status === 'success' ? (
                /* ── Thank You ── */
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.35 }}
                  style={{ textAlign: 'center', padding: '20px 0' }}
                >
                  <div style={{
                    width: '52px', height: '52px', borderRadius: '50%',
                    background: 'rgba(16,185,129,0.1)',
                    border: '1px solid rgba(16,185,129,0.3)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    margin: '0 auto 20px',
                    color: 'var(--emerald)', fontSize: '20px', fontWeight: 700,
                  }}>
                    ✓
                  </div>
                  <h3 style={{ color: 'var(--silver)', marginBottom: '12px' }}>
                    Thank you, {formData.name.split(' ')[0]}
                  </h3>
                  <p style={{ color: 'var(--slate)', lineHeight: '1.75', fontSize: '14px', marginBottom: '20px' }}>
                    We've received your details. Expect a call or WhatsApp message from our team within <span style={{ color: 'var(--emerald)', fontWeight: 600 }}>24 hours</span>.
                  </p>
                  <div style={{
                    padding: '12px 16px',
                    background: 'rgba(16,185,129,0.06)',
                    border: '1px solid rgba(16,185,129,0.12)',
                    borderRadius: '8px',
                    fontSize: '13px', color: 'var(--slate)',
                  }}>
                    Keep your phone handy — we'll reach out on WhatsApp.
                  </div>
                </motion.div>
              ) : (
                /* ── Form ── */
                <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  <Field id="c-name"  label="Full Name"     type="text"  name="name"  placeholder="Your full name"         value={formData.name}  error={errors.name}  onChange={handleChange} autoComplete="name" />
                  <Field id="c-phone" label="Mobile Number" type="tel"   name="phone" placeholder="10-digit mobile number" value={formData.phone} error={errors.phone} onChange={handleChange} autoComplete="tel" inputMode="numeric" />
                  <Field id="c-email" label="Email Address" type="email" name="email" placeholder="your@email.com"         value={formData.email} error={errors.email} onChange={handleChange} autoComplete="email" />
                  <Field id="c-city"  label="City"          type="text"  name="city"  placeholder="Your city"              value={formData.city}  error={errors.city}  onChange={handleChange} autoComplete="address-level2" />

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="btn-cta"
                    style={{
                      width: '100%', padding: '15px', fontSize: '14px',
                      fontWeight: 700, marginTop: '4px',
                      borderRadius: '10px',
                      opacity: status === 'submitting' ? 0.7 : 1,
                      cursor: status === 'submitting' ? 'not-allowed' : 'pointer',
                    }}
                  >
                    {status === 'submitting' ? 'Submitting...' : 'Request a Free Callback →'}
                  </button>

                  <p style={{ fontSize: '11.5px', color: 'var(--slate)', opacity: 0.55, textAlign: 'center', margin: 0 }}>
                    Your information is confidential and will not be shared.
                  </p>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </div>

      {/* Responsive layout */}
      <style>{`
        .contact-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }
        @media (max-width: 768px) {
          .contact-layout {
            grid-template-columns: 1fr;
            gap: 36px;
          }
        }
      `}</style>
    </section>
  );
};

export default ContactSection;
