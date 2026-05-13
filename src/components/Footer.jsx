import { useState } from 'react';
import PolicyModal from './PolicyModal';
import { policyContent } from '../utils/policyContent';
import logoImg from '../assets/jagat logo png.png';

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
      <footer style={{ backgroundColor: 'white', padding: '60px 0', borderTop: '1px solid var(--color-border)' }}>
        <div className="section-inner footer-responsive">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img 
              src={logoImg} 
              alt="MindErist Training LLP Logo" 
              style={{ height: '48px', width: 'auto', objectFit: 'contain' }} 
            />
          </div>
          
          <div style={{ display: 'flex', gap: '24px', fontSize: '14px', color: 'var(--color-text-light)' }}>
            <a href="#" onClick={(e) => openModal(e, 'privacy')}>Privacy Policy</a>
            <a href="#" onClick={(e) => openModal(e, 'refund')}>Refund Policy</a>
            <a href="#" onClick={(e) => openModal(e, 'terms')}>Terms and Conditions</a>
            <a href="#" onClick={(e) => openModal(e, 'disclaimer')}>Disclaimer</a>
          </div>
          
          <div style={{ fontSize: '14px', color: 'var(--color-text-muted)' }}>
            © 2026 All rights reserved by apkacoach.com
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
