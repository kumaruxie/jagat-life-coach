import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const videoRef = useRef(null);
  const trackedMilestones = useRef({ p25: false, p50: false, p75: false, p100: false });

  const handleTimeUpdate = (e) => {
    const video = e.target;
    if (!video.duration) return;
    const progress = (video.currentTime / video.duration) * 100;

    if (progress >= 25 && !trackedMilestones.current.p25) {
      trackedMilestones.current.p25 = true;
      if (window.fbq) window.fbq('trackCustom', 'Video25Percent');
    }
    if (progress >= 50 && !trackedMilestones.current.p50) {
      trackedMilestones.current.p50 = true;
      if (window.fbq) window.fbq('trackCustom', 'Video50Percent');
    }
    if (progress >= 75 && !trackedMilestones.current.p75) {
      trackedMilestones.current.p75 = true;
      if (window.fbq) window.fbq('trackCustom', 'Video75Percent');
    }
  };

  const handleVideoEnded = () => {
    if (!trackedMilestones.current.p100) {
      trackedMilestones.current.p100 = true;
      if (window.fbq) window.fbq('trackCustom', 'VideoCompleted');
    }
  };

  const openVideoModal = () => {
    setIsModalOpen(true);
    trackedMilestones.current = { p25: false, p50: false, p75: false, p100: false };
    if (window.fbq) {
      window.fbq('trackCustom', 'HeroVideoOpened');
    }
  };

  const handleCTAClick = () => {
    if (trackedMilestones.current.p25 || trackedMilestones.current.p50 || trackedMilestones.current.p75 || trackedMilestones.current.p100) {
      if (window.fbq) {
        window.fbq('trackCustom', 'VideoViewerApplied');
      }
    }
    triggerPayment();
  };

  return (
    <section
      className="hero-section"
      style={{ perspective: '1000px', overflowX: 'hidden' }}
    >
      {/* ── Mobile-first responsive overrides ── */}
      <style>{`
        .hero-content {
          width: 100%;
          padding-left: 24px !important; /* Spans full width on mobile viewports */
          padding-right: 24px !important;
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
        @keyframes float-gentle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .hero-floating-panel {
          animation: float-gentle 6s ease-in-out infinite;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
        }
        @media (max-width: 480px) {
          .hero-h1 {
            font-size: 36px !important; /* Premium legible font size */
            line-height: 1.1 !important;
          }
          .hero-cta-btn {
            padding: 14px 24px !important;
            font-size: 13px !important;
            width: 100% !important;
            max-width: 340px !important;
          }
          .hero-sub-text {
            font-size: 13.5px !important; /* Increase contrast and readability */
            text-align: center;
            padding: 0 4px;
          }
        }
        @media (max-width: 360px) {
          .hero-h1 {
            font-size: 32px !important;
          }
        }
      `}</style>
      {/* Zero-Lag CSS Ambient Base Glow (Centered Top) */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 0,
        pointerEvents: 'none',
        background: 'radial-gradient(circle at 50% 35%, rgba(16, 185, 129, 0.08) 0%, rgba(6, 182, 212, 0.03) 45%, transparent 70%)',
        animation: 'ambient-breathe 8s ease-in-out infinite',
        transform: 'translate3d(0,0,0)',
        willChange: 'transform'
      }} />

      {/* Curved SVG S-Curve Separator (Raised Left Cream Pane) */}
      <svg 
        className="hero-s-curve" 
        viewBox="0 0 1000 1000" 
        preserveAspectRatio="none"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1,
          pointerEvents: 'none'
        }}
      >
        <defs>
          <filter id="hero-mask-shadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="4" dy="0" stdDeviation="12" floodOpacity="0.04" floodColor="#122421" />
          </filter>
        </defs>
        <path 
          d="M 0,0 L 590,0 C 670,250 490,480 550,720 C 590,880 470,950 470,1000 L 0,1000 Z" 
          fill="var(--surface)" 
          filter="url(#hero-mask-shadow)"
        />
      </svg>

      {/* Bottom fade transition overlay to blend into next section */}
      <div style={{
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: '150px',
        background: 'linear-gradient(to bottom, transparent 0%, var(--surface) 100%)',
        zIndex: 2, // Sits above rings and dark gradient overlay
        pointerEvents: 'none'
      }} />

      <div className="section-inner hero-content" style={{
        position: 'relative',
        zIndex: 3,
        maxWidth: '1340px',
        width: '100%',
        pointerEvents: 'none',
        paddingLeft: '16px',
        paddingRight: '16px',
        boxSizing: 'border-box',
      }}>
        <div className="hero-split-layout" style={{ pointerEvents: 'auto' }}>

          <h1 
            className="hero-anim hero-anim-1 hero-h1 hero-h1-area"
            style={{ 
              color: 'var(--silver)', 
              marginBottom: '20px',
              fontSize: 'clamp(2.2rem, 4.2vw, 3.4rem)',
              lineHeight: '1.2'
            }}
          >
            Career Mein Success Hai.
            <br />
            <span style={{ display: 'block', marginTop: '12px' }}>
              Ab Ghar Mein Bhi <br className="desktop-only" /><span style={{ color: 'var(--emerald)' }}>Sukoon Wapas Laaiye.</span>
            </span>
          </h1>

          <p 
            className="hero-anim hero-anim-2 hero-sub-text hero-sub-area" 
            style={{ 
              color: 'var(--slate)', 
              fontSize: 'clamp(16px, 1.8vw, 17.5px)', 
              margin: '0 0 32px 0', 
              lineHeight: '1.7'
            }}
          >
            Learn the exact communication framework that has helped 1,500+ families reduce daily arguments, improve understanding, and restore peace at home in just 30 days.
          </p>

          {/* Context Label above Trust Hierarchy */}
          <div className="hero-anim hero-anim-3 hero-trust-label-area" style={{ 
            fontSize: '14px', 
            fontWeight: 700, 
            letterSpacing: '0.04em', 
            color: 'var(--emerald)', 
            opacity: 0.95, 
            textTransform: 'uppercase',
            marginBottom: '12px' 
          }}>
            Trusted By 1,500+ Families Across India
          </div>

          {/* Compact Row of 4 Trust Cards with ranking hierarchy */}
          <div className="hero-anim hero-anim-3 hero-trust-row hero-trust-row-area">
            {[
              { num: "1,500+", label: "Families", highlight: true },
              { num: "4.9★", label: "Rating" },
              { num: "200+", label: "Reviews" },
              { num: "15+", label: "Years" }
            ].map((stat, i) => (
              <motion.div 
                key={i} 
                className="hero-trust-card" 
                whileHover={{ 
                  y: -3, 
                  scale: 1.03, 
                  borderColor: stat.highlight ? 'rgba(16, 185, 129, 0.55)' : 'rgba(18, 36, 33, 0.18)', 
                  background: stat.highlight ? 'rgba(16, 185, 129, 0.08)' : 'rgba(18, 36, 33, 0.04)', 
                  boxShadow: stat.highlight ? '0 8px 24px rgba(16, 185, 129, 0.08)' : '0 8px 24px rgba(18, 36, 33, 0.04)',
                  transition: { duration: 0.12, ease: "easeOut" }
                }}
                style={stat.highlight ? {
                  border: '1px solid rgba(16, 185, 129, 0.35)',
                  background: 'rgba(16, 185, 129, 0.04)',
                  boxShadow: '0 0 16px rgba(16, 185, 129, 0.05)'
                } : {
                  border: '1px solid var(--border)',
                  background: 'rgba(18, 36, 33, 0.02)'
                }}
              >
                <div style={{ 
                  fontSize: stat.highlight ? '26px' : '23px', 
                  fontWeight: 800, 
                  color: stat.highlight ? 'var(--emerald)' : 'var(--silver)', 
                  lineHeight: 1 
                }}>{stat.num}</div>
                <div style={{ 
                  fontSize: '13.5px', 
                  color: stat.highlight ? 'rgba(18, 36, 33, 0.85)' : 'var(--slate)', 
                  fontWeight: 600, 
                  lineHeight: 1.2 
                }}>{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* High-impact CTA Pair (Primary: Green, Secondary: Ghost) */}
          <div className="hero-anim hero-anim-4 hero-cta-wrapper hero-cta-area" style={{ 
            display: 'flex', 
            alignItems: 'center',
            gap: '12px', 
            flexWrap: 'wrap'
          }}>
            <button 
              className="btn-cta btn-cta-pulse btn-shimmer btn-pill" 
              style={{ 
                padding: '0 40px', 
                fontSize: '15px',
                height: '54px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                color: '#fff',
                border: 'none',
                borderRadius: '100px',
                fontWeight: 700,
                cursor: 'pointer'
              }}
              onClick={handleCTAClick}
            >
              Connect with Jagat's Team
            </button>
            <button
              style={{
                background: 'transparent',
                border: '1px solid rgba(18, 36, 33, 0.16)',
                color: 'var(--silver)',
                borderRadius: '100px',
                padding: '0 32px',
                fontSize: '15px',
                height: '54px',
                fontWeight: 600,
                letterSpacing: '0.02em',
                cursor: 'pointer',
                transition: 'background 0.2s ease, transform 0.2s ease, border-color 0.2s, color 0.2s',
                fontFamily: 'Inter, system-ui, sans-serif',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(18, 36, 33, 0.04)';
                e.currentTarget.style.borderColor = 'rgba(18, 36, 33, 0.3)';
                e.currentTarget.style.color = 'var(--silver)';
                e.currentTarget.style.transform = 'scale(1.02)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.borderColor = 'rgba(18, 36, 33, 0.16)';
                e.currentTarget.style.color = 'var(--silver)';
                e.currentTarget.style.transform = 'scale(1)';
              }}
              onClick={openVideoModal}
            >
              ▶ Watch Video
            </button>
          </div>

          {/* Right Column: VSL Video Play Trigger + Founder Authority */}
          <div 
            className="hero-anim hero-anim-3 hero-video-area"
            style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '16px', 
              alignItems: 'center', 
              width: '100%',
              pointerEvents: 'auto'
            }}
          >
            <div className="hero-floating-panel">
              <div 
                onClick={openVideoModal}
                className="video-thumbnail-container"
                style={{
                  width: '100%',
                  maxWidth: '580px', /* Enlarge video card slightly */
                  aspectRatio: '16/9',
                  background: `url(${VSL_THUMBNAIL}) center/cover no-repeat`,
                  borderRadius: '16px',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: '0 0 40px rgba(0,0,0,0.25), 0 0 24px rgba(16,185,129,0.06)', /* Subtle glow behind video for connection */
                  border: '1px solid rgba(255,255,255,0.12)',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {/* Backdrop dark tint with top-down fade gradient to integrate overlay text */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.45) 0%, transparent 40%, rgba(0, 0, 0, 0.45) 100%)',
                  zIndex: 1
                }} />

                {/* VSL Text Overlay with higher curiosity */}
                <div 
                  className="hero-vsl-text"
                  style={{
                    position: 'absolute',
                    top: '28px',
                    left: '20px',
                    right: '20px',
                    zIndex: 2,
                    textAlign: 'center',
                    pointerEvents: 'none'
                  }}
                >
                  <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.7)', fontWeight: 600, marginBottom: '4px' }}>Watch Jagat Turkiya Explain</div>
                  <div style={{ fontSize: '16px', fontWeight: 700, color: '#fff', lineHeight: '1.4' }}>Why Families Keep Fighting<br />(Even When They Love Each Other)</div>
                </div>

                {/* Glowing play icon blob */}
                <div className="play-icon-blob">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="white" style={{ marginLeft: '2px' }}>
                    <polygon points="8,5 19,12 8,19" />
                  </svg>
                </div>
              </div>

              {/* Small, elegant founder info block above the fold */}
              <motion.div 
                whileHover={{ 
                  y: -3, 
                  scale: 1.01, 
                  borderColor: 'rgba(16, 185, 129, 0.25)', 
                  boxShadow: '0 16px 40px rgba(16, 185, 129, 0.08)', 
                  background: 'rgba(255, 255, 255, 0.75)',
                  transition: { duration: 0.12, ease: "easeOut" }
                }}
                transition={{ duration: 0.12, ease: 'easeOut' }}
                style={{ 
                  textAlign: 'center', 
                  fontFamily: 'Inter, system-ui, sans-serif',
                  padding: '16px 24px',
                  marginTop: '4px',
                  background: 'rgba(255, 255, 255, 0.65)',
                  border: '1px solid rgba(18, 36, 33, 0.08)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  borderRadius: '16px',
                  boxShadow: '0 12px 32px rgba(18, 36, 33, 0.05), inset 0 1px 1px rgba(255, 255, 255, 0.6)',
                  width: '100%',
                  maxWidth: '440px',
                  cursor: 'default'
                }}
              >
                <div style={{ fontSize: '15.5px', fontWeight: 700, color: 'var(--silver)', letterSpacing: '0.02em' }}>Jagat Turkiya</div>
                <div style={{ fontSize: '12.5px', color: '#10b981', fontWeight: 600, marginTop: '4px', letterSpacing: '0.04em' }}>Strategic Family Relationship Coach</div>
                <div style={{ fontSize: '11.5px', color: 'var(--slate)', marginTop: '4px', fontWeight: 500 }}>
                  15-Year Family Care Expert <span style={{ opacity: 0.3, margin: '0 6px' }}>•</span> Author of 4 Books
                </div>
              </motion.div>
            </div>
          </div>

        </div>
      </div>

      {/* Premium Fullscreen Morphing VSL Video Modal Overlay */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(10, 13, 20, 0.9)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              zIndex: 10002,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '24px'
            }}
          >
            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.92, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '880px',
                aspectRatio: '16/9',
                backgroundColor: '#000',
                borderRadius: '20px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 30px 60px rgba(0,0,0,0.8), 0 0 45px rgba(0, 208, 132, 0.08)',
                overflow: 'hidden'
              }}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255,255,255,0.15)',
                  color: '#fff',
                  border: 'none',
                  fontSize: '18px',
                  fontWeight: 'bold',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  zIndex: 10003,
                  transition: 'background 0.2s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.3)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.15)'}
              >
                ✕
              </button>

              <video
                ref={videoRef}
                src="https://assets.cdn.filesafe.space/UV9lQH2lpnsX6mPHlFQR/media/6a0d9f3dce0ec8e60c1f6032.mp4"
                controls
                autoPlay
                playsInline
                onTimeUpdate={handleTimeUpdate}
                onEnded={handleVideoEnded}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain'
                }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default HeroSection;
