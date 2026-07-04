import { useState } from 'react';
import { smoothScrollTo } from '../utils/scroll';
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

  const scrollToTop = () => {
    smoothScrollTo(0, 600); // Smoother custom top scroll (600ms duration)
  };

  return (
    <>
      <footer style={{ background: 'var(--surface)', padding: '48px 0 32px', borderTop: '1px solid var(--border)' }}>
        <div className="section-inner" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '28px' }}>
          
          {/* Logo */}
          <div onClick={scrollToTop} style={{ display: 'flex', alignItems: 'center', margin: '8px 0', cursor: 'pointer', userSelect: 'none', WebkitTapHighlightColor: 'transparent' }}>
            <span style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap', lineHeight: 1 }}>
              <span style={{
                fontFamily: "'Rozha One', serif",
                fontSize: '28px',
                color: 'var(--silver)',
                lineHeight: 1,
                position: 'relative',
                top: '1px',
                letterSpacing: '-0.5px',
                marginRight: '3px'
              }}>
                आपका
              </span>
              <span style={{
                fontFamily: "'Abril Fatface', cursive",
                fontSize: '30px',
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

          {/* Social Links */}
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center', margin: '4px 0' }}>
            <a 
              href="https://www.instagram.com/jagatturkiya/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Instagram"
              style={{
                color: 'var(--slate)',
                transition: 'color 0.2s, transform 0.2s',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#e1306c';
                e.currentTarget.style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--slate)';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a 
              href="https://www.facebook.com/jagatturkiya" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Facebook"
              style={{
                color: 'var(--slate)',
                transition: 'color 0.2s, transform 0.2s',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#1877f2';
                e.currentTarget.style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--slate)';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a 
              href="https://www.youtube.com/@coachjagatturkiya" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="YouTube"
              style={{
                color: 'var(--slate)',
                transition: 'color 0.2s, transform 0.2s',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#ff0000';
                e.currentTarget.style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--slate)';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
              </svg>
            </a>
          </div>

          {/* Disclaimer - visible directly */}
          <p style={{
            fontSize: '11.5px',
            color: 'var(--slate)',
            textAlign: 'center',
            maxWidth: '850px',
            lineHeight: '1.75',
            margin: '8px 0',
            opacity: 0.85
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
