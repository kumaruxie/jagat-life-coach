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
              backgroundColor: 'rgba(0, 0, 0, 0.75)',
              backdropFilter: 'blur(8px)',
              zIndex: 9999,
            }}
          />
          <motion.div
            initial={{ opacity: 0, x: '-50%', y: 60, scale: 0.96 }}
            animate={{ opacity: 1, x: '-50%', y: 0, scale: 1 }}
            exit={{ opacity: 0, x: '-50%', y: 60, scale: 0.96 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'fixed',
              top: '5%',
              left: '50%',
              width: '90%',
              maxWidth: '800px',
              height: '90%',
              backgroundColor: 'var(--surface-raised)',
              borderRadius: '16px',
              zIndex: 10000,
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 25px 80px -12px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(148,163,184,0.1)',
              overflow: 'hidden'
            }}
          >
            {/* Header */}
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center', 
              padding: '24px 28px',
              borderBottom: '1px solid var(--border)',
              backgroundColor: 'var(--surface-deep)'
            }}>
              <h2 style={{ 
                margin: 0, 
                fontSize: '1.25rem', 
                fontFamily: 'var(--font-heading)', 
                color: 'var(--silver)',
                fontWeight: 700
              }}>
                {title}
              </h2>
              <button 
                onClick={onClose}
                style={{
                  background: 'none',
                  border: '1px solid var(--border)',
                  cursor: 'pointer',
                  padding: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '8px',
                  color: 'var(--slate)',
                  backgroundColor: 'rgba(148,163,184,0.08)',
                  transition: 'background-color 0.2s, color 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(148,163,184,0.15)';
                  e.currentTarget.style.color = 'var(--silver)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(148,163,184,0.08)';
                  e.currentTarget.style.color = 'var(--slate)';
                }}
              >
                <X size={20} />
              </button>
            </div>
            
            {/* Scrollable content body */}
            <div 
              className="modal-dark"
              style={{ 
                flex: 1, 
                padding: '32px 28px',
                overflowY: 'auto',
                fontSize: '0.9375rem',
                color: 'var(--slate)',
                lineHeight: '1.8'
              }}
            >
              {content}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default PolicyModal;
