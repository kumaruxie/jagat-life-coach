import { useState } from 'react';

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

    // Format phone number with country code (+91) for Indian numbers
    let formattedPhone = formData.phone;
    const cleanPhone = formattedPhone.replace(/\D/g, ''); // Strip non-numeric characters
    
    if (cleanPhone.length === 10) {
      formattedPhone = '+91' + cleanPhone;
    } else if (cleanPhone.length === 12 && cleanPhone.startsWith('91')) {
      formattedPhone = '+' + cleanPhone;
    } else if (cleanPhone.length > 0 && !cleanPhone.startsWith('+')) {
      formattedPhone = '+' + cleanPhone;
    }

    // GHL Inbound Webhook
    const GHL_WEBHOOK_URL = "https://services.leadconnectorhq.com/hooks/UV9lQH2lpnsX6mPHlFQR/webhook-trigger/e439fe60-5421-4341-b288-a86fb3767cba";

    try {
      const params = new URLSearchParams();
      params.append('full_name', formData.name);
      params.append('email', formData.email);
      params.append('phone', formattedPhone);
      params.append('city', formData.city);
      params.append('source', 'apkacoach.com');
      params.append('form_name', 'Conflict to Clarity - Lead Capture');

      await fetch(GHL_WEBHOOK_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: params.toString()
      });
      
      localStorage.setItem('ghl_form_submitted_at', Date.now().toString());
      localStorage.setItem('lead_contact_info', JSON.stringify({
        name: formData.name,
        email: formData.email,
        phone: formattedPhone,
        city: formData.city
      }));
      onUnlock();
    } catch (err) {
      console.error("Submission failed:", err);
      // Still unlock so user isn't stuck
      localStorage.setItem('ghl_form_submitted_at', Date.now().toString());
      onUnlock(); 
    }
  };

  const inputStyle = { 
    width: '100%', 
    padding: '14px 16px', 
    borderRadius: '4px', 
    backgroundColor: 'var(--surface, #1a202c)', 
    border: '1px solid rgba(148,163,184,0.25)', 
    color: 'var(--silver, #e2e8f0)', 
    outline: 'none', 
    fontFamily: 'Inter, system-ui, sans-serif', 
    fontSize: '14px' 
  };

  return (
    <div className="gate-overlay" style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 10000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      backgroundColor: 'rgba(20, 24, 32, 0.85)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)'
    }}>

      {/* Form Container */}
      <div className="gate-form" style={{
        position: 'relative',
        maxWidth: '450px',
        width: '100%',
        backgroundColor: 'var(--surface-raised, #232b3b)',
        padding: '40px',
        borderRadius: '24px',
        border: '1px solid var(--border, rgba(148,163,184,0.15))',
        boxShadow: '0 30px 60px rgba(0,0,0,0.5)',
        textAlign: 'center'
      }}>
        <h2 style={{ fontSize: '28px', color: 'var(--silver, #e2e8f0)', marginBottom: '12px', fontFamily: 'Newsreader, Georgia, serif' }}>Welcome to the Journey</h2>
        <p style={{ color: 'var(--slate, #94a3b8)', marginBottom: '32px' }}>
          Please fill in your details to access Jagat Turkiya's exclusive training.
        </p>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <label htmlFor="gate-name" style={{ position: 'absolute', width: '1px', height: '1px', overflow: 'hidden', clip: 'rect(0,0,0,0)' }}>Full Name</label>
            <input id="gate-name" type="text" name="name" placeholder="Full Name" required autoComplete="name" value={formData.name} onChange={handleInputChange} style={inputStyle} />
          </div>
          <div>
            <label htmlFor="gate-email" style={{ position: 'absolute', width: '1px', height: '1px', overflow: 'hidden', clip: 'rect(0,0,0,0)' }}>Email Address</label>
            <input id="gate-email" type="email" name="email" placeholder="Email Address" required autoComplete="email" value={formData.email} onChange={handleInputChange} style={inputStyle} />
          </div>
          <div>
            <label htmlFor="gate-phone" style={{ position: 'absolute', width: '1px', height: '1px', overflow: 'hidden', clip: 'rect(0,0,0,0)' }}>Phone Number</label>
            <input id="gate-phone" type="tel" name="phone" placeholder="Phone Number" required autoComplete="tel" inputMode="numeric" pattern="[0-9]*" value={formData.phone} onChange={handleInputChange} style={inputStyle} />
          </div>
          <div>
            <label htmlFor="gate-city" style={{ position: 'absolute', width: '1px', height: '1px', overflow: 'hidden', clip: 'rect(0,0,0,0)' }}>City</label>
            <input id="gate-city" type="text" name="city" placeholder="City" required autoComplete="address-level2" value={formData.city} onChange={handleInputChange} style={inputStyle} />
          </div>

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
      </div>
    </div>
  );
};

export default GatedOverlay;
