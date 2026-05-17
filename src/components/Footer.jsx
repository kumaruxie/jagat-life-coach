import { useState } from 'react';
import PolicyModal from './PolicyModal';
import { policyContent } from '../utils/policyContent';
const Footer = () => {
  const [modalConfig, setModalConfig] = useState({ isOpen: false, title: '', content: null });

  const openModal = (e, policyKey) => {
    e.preventDefault();
    const policy = policyContent[policyKey];
    if (policy) {
      setModalConfig({ isOpen: true, title: policy.title, content: policy.content });
    }
  };

  const closeModal = () => {
    setModalConfig({ ...modalConfig, isOpen: false });
  };

  return (
    <>
      <footer style={{ backgroundColor: 'var(--surface-deep)', padding: '48px 0 32px', borderTop: '1px solid var(--border)' }}>
        <div className="section-inner" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '28px' }}>
          
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', margin: '8px 0' }}>
            <span style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap', lineHeight: 1 }}>
              <span style={{
                fontFamily: "'Yatra One', cursive",
                fontSize: '30px',
                color: '#ffffff',
                lineHeight: 1,
                position: 'relative',
                top: '1px',
                letterSpacing: '-0.5px',
                marginRight: '4px'
              }}>
                आपका
              </span>
              <span style={{
                fontFamily: "'Lobster', cursive",
                fontSize: '34px',
                color: '#10b981',
                lineHeight: 1
              }}>
                Coach.com
              </span>
            </span>
          </div>

          {/* Policy Links */}
          <nav aria-label="Legal policies" style={{ display: 'flex', gap: '8px', fontSize: '12px', color: 'var(--slate)', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
            <button type="button" onClick={(e) => openModal(e, 'privacy')} style={{ background: 'none', border: 'none', color: 'var(--slate)', fontSize: '12px', cursor: 'pointer', fontFamily: 'inherit', transition: 'color 0.2s', padding: 0 }} onMouseEnter={(e) => e.target.style.color = 'var(--emerald)'} onMouseLeave={(e) => e.target.style.color = 'var(--slate)'}>Privacy Policy</button>
            <span style={{ color: 'var(--border)' }} aria-hidden="true">|</span>
            <button type="button" onClick={(e) => openModal(e, 'terms')} style={{ background: 'none', border: 'none', color: 'var(--slate)', fontSize: '12px', cursor: 'pointer', fontFamily: 'inherit', transition: 'color 0.2s', padding: 0 }} onMouseEnter={(e) => e.target.style.color = 'var(--emerald)'} onMouseLeave={(e) => e.target.style.color = 'var(--slate)'}>Terms & Conditions</button>
            <span style={{ color: 'var(--border)' }} aria-hidden="true">|</span>
            <button type="button" onClick={(e) => openModal(e, 'refund')} style={{ background: 'none', border: 'none', color: 'var(--slate)', fontSize: '12px', cursor: 'pointer', fontFamily: 'inherit', transition: 'color 0.2s', padding: 0 }} onMouseEnter={(e) => e.target.style.color = 'var(--emerald)'} onMouseLeave={(e) => e.target.style.color = 'var(--slate)'}>Refund Policy</button>
          </nav>

          {/* Disclaimer - visible directly */}
          <p style={{
            fontSize: '9px',
            color: 'var(--slate)',
            textAlign: 'center',
            maxWidth: '800px',
            lineHeight: '1.7',
            margin: 0,
            opacity: 0.7
          }}>
            DISCLAIMER: Apkacoach.com and Jagat Turkiya do not guarantee any specific results and outcomes. Any client examples, testimonials, or success stories shared are intended solely for illustrative and marketing purposes and should not be considered as a promise, guarantee, or expectation of similar results. Individual outcomes may vary based on personal effort, skills, experience, and other factors.
          </p>

          {/* Copyright */}
          <div style={{ fontSize: '12px', color: 'var(--slate)', opacity: 0.5 }}>
            ©2026 apkacoach.com. All Rights Reserved.
          </div>
        </div>
      </footer>

      <PolicyModal 
        isOpen={modalConfig.isOpen} 
        onClose={closeModal} 
        title={modalConfig.title} 
        content={modalConfig.content} 
      />
    </>
  );
};

export default Footer;
