import { useState } from 'react';
import PremiumVideoPlayer from './PremiumVideoPlayer';

// ─────────────────────────────────────────────────────────────────────────────
// VSL VIDEO THUMBNAIL CONFIGURATION
// When you have your new thumbnail image ready:
// 1. Place it in the 'src/assets/' directory.
// 2. Import it here (e.g. import vslThumb from '../assets/your-new-thumbnail.jpg';)
// 3. Replace 'coachImg' below with your imported image variable.
// ─────────────────────────────────────────────────────────────────────────────
import coachImg from '../assets/jagatthumbnail.jpg'; 
const VSL_THUMBNAIL = coachImg;

const HeroSection = ({ triggerPayment }) => {
  // State to drive the interactive 3D background tilt & glow tracker
  const [bgStyle, setBgStyle] = useState({
    transform: 'translate(-50%, -50%) rotateX(0deg) rotateY(0deg)',
    transition: 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)',
    glowLeft: '50%',
    glowTop: '40%',
    glowOpacity: 0.12
  });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Interactive 3D CSS Parallax (tilt background rings based on cursor position)
    const maxTilt = 15; // Max degree tilt
    const rotateX = ((centerY - y) / centerY) * maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;

    setBgStyle({
      transform: `translate(-50%, -50%) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      transition: 'transform 0.1s ease-out', // Snappy & highly responsive tracking
      glowLeft: `${(x / rect.width) * 100}%`,
      glowTop: `${(y / rect.height) * 100}%`,
      glowOpacity: 0.18 // Increase glow intensity on hover
    });
  };

  const handleMouseLeave = () => {
    setBgStyle({
      transform: 'translate(-50%, -50%) rotateX(0deg) rotateY(0deg)',
      transition: 'transform 0.8s cubic-bezier(0.25, 1, 0.5, 1)', // Smooth return transition
      glowLeft: '50%',
      glowTop: '40%',
      glowOpacity: 0.12
    });
  };

  return (
    <section 
      className="hero-section"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: '1000px', overflowX: 'hidden' }}
    >
      {/* ── Mobile-first responsive overrides ── */}
      <style>{`
        .hero-content {
          width: 100%;
          padding-left: 16px !important;
          padding-right: 16px !important;
          box-sizing: border-box;
        }
        .hero-h1 {
          word-break: break-word;
          overflow-wrap: break-word;
          hyphens: auto;
        }
        .hero-tag {
          white-space: normal;
          word-break: break-word;
          text-align: center;
        }
        @media (max-width: 480px) {
          .hero-h1 {
            font-size: 1.65rem !important;
            line-height: 1.28 !important;
          }
          .hero-cta-btn {
            padding: 14px 24px !important;
            font-size: 13px !important;
            width: 100% !important;
            max-width: 340px !important;
          }
          .hero-sub-text {
            font-size: 11px !important;
            text-align: center;
            padding: 0 8px;
          }
        }
        @media (max-width: 360px) {
          .hero-h1 {
            font-size: 1.45rem !important;
          }
        }
      `}</style>
      {/* 3D Interactive CSS Gyroscope Background (Tilts dynamically to cursor!) */}
      <div 
        className="gyro-container"
        style={{
          transform: bgStyle.transform,
          transition: bgStyle.transition,
          transformStyle: 'preserve-3d'
        }}
      >
        <div className="gyro-ring ring-1" />
        <div className="gyro-ring ring-2" />
        <div className="gyro-ring ring-3" />
      </div>

      {/* Interactive Cursor-Following Ambient Backlight Glow */}
      <div style={{
        position: 'absolute',
        top: bgStyle.glowTop,
        left: bgStyle.glowLeft,
        transform: 'translate(-50%, -50%)',
        width: 'min(500px, 90vw)',
        height: 'min(500px, 90vw)',
        borderRadius: '50%',
        background: `radial-gradient(circle, rgba(16, 185, 129, ${bgStyle.glowOpacity}) 0%, transparent 70%)`,
        zIndex: 2, // Set to 2 to sit on top of the black overlay backdrop
        pointerEvents: 'none',
        transition: 'top 0.2s cubic-bezier(0.1, 0.8, 0.3, 1), left 0.2s cubic-bezier(0.1, 0.8, 0.3, 1), background 0.3s ease'
      }} />

      {/* Zero-Lag CSS Ambient Base Glow */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 0,
        pointerEvents: 'none',
        background: 'radial-gradient(circle at 50% 30%, rgba(16,185,129,0.06) 0%, transparent 60%)',
        animation: 'ambient-breathe 8s ease-in-out infinite',
        transform: 'translate3d(0,0,0)'
      }} />

      {/* Dark gradient overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(ellipse at center, rgba(26,32,44,0.4) 0%, rgba(26,32,44,0.92) 75%)',
        zIndex: 1, // Sits on top of the base ambient glow
        pointerEvents: 'none'
      }} />

      <div className="section-inner hero-content" style={{ 
        position: 'relative', 
        zIndex: 3,
        maxWidth: '900px',
        width: '100%',
        textAlign: 'center',
        pointerEvents: 'none',
        paddingLeft: '16px',
        paddingRight: '16px',
        boxSizing: 'border-box',
      }}>

        
        <h1 
          className="hero-anim hero-anim-1 hero-h1"
          style={{ color: 'var(--silver)', marginBottom: 'var(--space-4)' }}
        >
          Ghar Ki Uljhanon Ko Ek Mahine Mein <em style={{ color: 'var(--emerald)', fontStyle: 'normal' }}>Sukoon</em> Mein Badlo.
        </h1>


        {/* Premium Custom Video Card Container */}
        <div 
          id="hero-vsl"
          className="hero-anim hero-anim-2"
          style={{
            width: '100%',
            maxWidth: '780px',
            aspectRatio: '16/9',
            backgroundColor: 'var(--surface-deep)',
            borderRadius: '16px',
            margin: '0 auto var(--space-4)',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 24px 48px rgba(0,0,0,0.4)',
            border: '1px solid rgba(255,255,255,0.08)',
            pointerEvents: 'auto'
          }}
        >
          <div style={{ width: '100%', height: '100%' }}>
            <PremiumVideoPlayer
              src="https://assets.cdn.filesafe.space/UV9lQH2lpnsX6mPHlFQR/media/6a0d9f3dce0ec8e60c1f6032.mp4"
              poster={VSL_THUMBNAIL}
            />
          </div>
        </div>

        <div 
          className="hero-anim hero-anim-3"
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '32px', pointerEvents: 'auto', flexWrap: 'wrap' }}
        >
          <button 
            className="btn-cta btn-cta-pulse btn-shimmer btn-pill hero-cta-btn" 
            style={{ padding: '14px 36px', fontSize: '14px' }}
            onClick={() => triggerPayment()}
          >
            Apply Now →
          </button>
          <button
            className="hero-cta-btn"
            style={{
              background: 'transparent',
              border: '2px solid var(--emerald)',
              color: 'var(--emerald)',
              borderRadius: '100px',
              padding: '14px 32px',
              fontSize: '14px',
              fontWeight: 600,
              letterSpacing: '0.02em',
              cursor: 'pointer',
              transition: 'background 0.2s ease, transform 0.2s ease',
              fontFamily: 'Inter, system-ui, sans-serif',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(16,185,129,0.1)';
              e.currentTarget.style.transform = 'scale(1.04)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.transform = 'scale(1)';
            }}
            onClick={() => {
              const vslContainer = document.getElementById('hero-vsl');
              if (vslContainer) {
                const startY = window.scrollY;
                const targetY = vslContainer.getBoundingClientRect().top + window.scrollY - 40;
                const distance = targetY - startY;
                const duration = 700;
                let startTime = null;
                const ease = (t) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
                const step = (timestamp) => {
                  if (!startTime) startTime = timestamp;
                  const elapsed = timestamp - startTime;
                  const progress = Math.min(elapsed / duration, 1);
                  window.scrollTo(0, startY + distance * ease(progress));
                  if (progress < 1) requestAnimationFrame(step);
                  else {
                    const playBtn = vslContainer.querySelector('button[aria-label="Play Masterclass Video"]');
                    if (playBtn) playBtn.click();
                  }
                };
                requestAnimationFrame(step);
              }
            }}
          >
            ▶ Watch Video
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
