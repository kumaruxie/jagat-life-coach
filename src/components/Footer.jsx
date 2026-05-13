

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'white', padding: '60px 0', borderTop: '1px solid var(--color-border)' }}>
      <div className="section-inner footer-responsive">
        <div style={{ fontWeight: 600, color: 'var(--color-primary)' }}>
          Jagat Turkiya — Life Strategic Family Coach
        </div>
        
        <div style={{ display: 'flex', gap: '24px', fontSize: '14px', color: 'var(--color-text-light)' }}>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms</a>
          <a href="#">Contact</a>
        </div>
        
        <div style={{ fontSize: '14px', color: 'var(--color-text-muted)' }}>
          © 2026 Jagat Turkiya. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
