

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'white', padding: '60px 0', borderTop: '1px solid var(--color-border)' }}>
      <div className="section-inner footer-responsive">
        <div style={{ fontWeight: 600, color: 'var(--color-primary)' }}>
          Jagat Turkiya — Life Strategic Family Coach
        </div>
        
        <div style={{ display: 'flex', gap: '24px', fontSize: '14px', color: 'var(--color-text-light)' }}>
          <a href="https://jagatturkiya.com/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
          <a href="https://jagatturkiya.com/refund-policy" target="_blank" rel="noopener noreferrer">Refund Policy</a>
          <a href="https://jagatturkiya.com/terms-and-conditions" target="_blank" rel="noopener noreferrer">Terms and Conditions</a>
          <a href="https://jagatturkiya.com/disclaimer" target="_blank" rel="noopener noreferrer">Disclaimer</a>
        </div>
        
        <div style={{ fontSize: '14px', color: 'var(--color-text-muted)' }}>
          © 2026 All rights reserved by apkacoach.com
        </div>
      </div>
    </footer>
  );
};

export default Footer;
