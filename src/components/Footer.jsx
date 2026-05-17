import { useState } from 'react';
import PolicyModal from './PolicyModal';
import { policyContent } from '../utils/policyContent';
import logoImg from '../assets/APKACOACH logo png.png';

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
          <img 
            src={logoImg} 
            alt="ApkaCoach Logo" 
            style={{ height: '44px', width: 'auto', objectFit: 'contain' }} 
          />

          {/* Policy Links */}
          <div style={{ display: 'flex', gap: '8px', fontSize: '12px', color: 'var(--slate)', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
            <a href="#" onClick={(e) => openModal(e, 'privacy')} style={{ transition: 'color 0.2s' }}>Privacy Policy</a>
            <span style={{ color: 'var(--border)' }}>|</span>
            <a href="#" onClick={(e) => openModal(e, 'terms')} style={{ transition: 'color 0.2s' }}>Terms & Conditions</a>
            <span style={{ color: 'var(--border)' }}>|</span>
            <a href="#" onClick={(e) => openModal(e, 'refund')} style={{ transition: 'color 0.2s' }}>Refund Policy</a>
          </div>

          {/* Disclaimer - visible directly */}
          <p style={{
            fontSize: '11px',
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
