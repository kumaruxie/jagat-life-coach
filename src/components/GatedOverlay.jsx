import { useState } from 'react';
import { motion } from 'framer-motion';

const GatedOverlay = ({ onUnlock }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'phone') {
      const numericValue = value.replace(/\D/g, '');
      setFormData(prev => ({ ...prev, [name]: numericValue }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // GOOGLE FORM CONFIGURATION (Using your latest IDs)
    const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfG27AiLyF07mqf1dRxcF7avVWc_aSOQL5LzACGeqdGn_xKAw/formResponse";
    const entryIds = {
      name: "entry.734389897", 
      email: "entry.1016882557",
      phone: "entry.1784927413",
      city: "entry.1935344953"
    };

    const formDataObj = new FormData();
    formDataObj.append(entryIds.name, formData.name);
    formDataObj.append(entryIds.email, formData.email);
    formDataObj.append(entryIds.phone, formData.phone);
    formDataObj.append(entryIds.city, formData.city);

    try {
      await fetch(GOOGLE_FORM_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: formDataObj
      });
      
      // Save to localStorage so they don't see it again
      localStorage.setItem('site_unlocked', 'true');
      onUnlock();
    } catch (err) {
      console.error("Submission failed:", err);
      // Even if it fails, we might want to let them in or show an error
      onUnlock(); 
    }
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 10000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      {/* Blurred Background Overlay */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.4)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)'
        }}
      />

      {/* Form Container */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        style={{
          position: 'relative',
          maxWidth: '450px',
          width: '100%',
          backgroundColor: 'var(--surface-raised, #232b3b)',
          padding: '40px',
          borderRadius: '24px',
          border: '1px solid var(--border, rgba(148,163,184,0.15))',
          boxShadow: '0 30px 60px rgba(0,0,0,0.5)',
          textAlign: 'center'
        }}
      >
        <h2 style={{ fontSize: '28px', color: 'var(--silver, #e2e8f0)', marginBottom: '12px', fontFamily: 'Newsreader, Georgia, serif' }}>Welcome to the Journey</h2>
        <p style={{ color: 'var(--slate, #94a3b8)', marginBottom: '32px' }}>
          Please fill in your details to access Jagat Turkiya's exclusive training.
        </p>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            value={formData.name}
            onChange={handleInputChange}
            style={{ padding: '14px 16px', borderRadius: '4px', backgroundColor: 'var(--surface, #1a202c)', border: '1px solid rgba(148,163,184,0.25)', color: 'var(--silver, #e2e8f0)', outline: 'none', fontFamily: 'Inter, system-ui, sans-serif', fontSize: '14px' }}
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            value={formData.email}
            onChange={handleInputChange}
            style={{ padding: '14px 16px', borderRadius: '4px', backgroundColor: 'var(--surface, #1a202c)', border: '1px solid rgba(148,163,184,0.25)', color: 'var(--silver, #e2e8f0)', outline: 'none', fontFamily: 'Inter, system-ui, sans-serif', fontSize: '14px' }}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            inputMode="numeric"
            pattern="[0-9]*"
            value={formData.phone}
            onChange={handleInputChange}
            style={{ padding: '14px 16px', borderRadius: '4px', backgroundColor: 'var(--surface, #1a202c)', border: '1px solid rgba(148,163,184,0.25)', color: 'var(--silver, #e2e8f0)', outline: 'none', fontFamily: 'Inter, system-ui, sans-serif', fontSize: '14px' }}
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            required
            value={formData.city}
            onChange={handleInputChange}
            style={{ padding: '14px 16px', borderRadius: '4px', backgroundColor: 'var(--surface, #1a202c)', border: '1px solid rgba(148,163,184,0.25)', color: 'var(--silver, #e2e8f0)', outline: 'none', fontFamily: 'Inter, system-ui, sans-serif', fontSize: '14px' }}
          />

          <button 
            type="submit" 
            className="btn-primary" 
            disabled={isSubmitting}
            style={{ 
              width: '100%', 
              padding: '18px', 
              marginTop: '12px', 
              fontSize: '16px', 
              fontWeight: 700,
              opacity: isSubmitting ? 0.7 : 1
            }}
          >
            {isSubmitting ? 'Entering...' : 'Enter Training Now'}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default GatedOverlay;
