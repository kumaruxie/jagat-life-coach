import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useEffect } from 'react';

const PolicyModal = ({ isOpen, onClose, title, content }) => {
  // Prevent scrolling on the body when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              backdropFilter: 'blur(4px)',
              zIndex: 9999,
            }}
          />
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.95 }}
            style={{
              position: 'fixed',
              top: '5%',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '90%',
              maxWidth: '800px',
              height: '90%',
              backgroundColor: 'white',
              borderRadius: '16px',
              zIndex: 10000,
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              overflow: 'hidden'
            }}
          >
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center', 
              padding: '24px',
              borderBottom: '1px solid var(--color-border)',
              backgroundColor: '#fafafa'
            }}>
              <h2 style={{ margin: 0, fontSize: '1.5rem', fontFamily: 'var(--font-heading)' }}>{title}</h2>
              <button 
                onClick={onClose}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '50%',
                  color: 'var(--color-text)',
                  backgroundColor: '#eee'
                }}
              >
                <X size={24} />
              </button>
            </div>
            
            <div style={{ 
              flex: 1, 
              padding: '32px',
              overflowY: 'auto',
              fontSize: '1rem'
            }}>
              {content}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default PolicyModal;
