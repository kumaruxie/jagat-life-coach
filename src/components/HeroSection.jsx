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

  // State to drive the interactive 3D background tilt & glow tracker
  const [bgStyle, setBgStyle] = useState({
    transform: 'translate(-50%, -50%) rotateX(0deg) rotateY(0deg)',
    transition: 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)',
    glowLeft: '50%',
    glowTop: '40%',
    glowOpacity: 0.08
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
      glowOpacity: 0.12 // Increase glow intensity slightly on hover (subtle Teal lift)
    });
  };

  const handleMouseLeave = () => {
    setBgStyle({
      transform: 'translate(-50%, -50%) rotateX(0deg) rotateY(0deg)',
      transition: 'transform 0.8s cubic-bezier(0.25, 1, 0.5, 1)', // Smooth return transition
      glowLeft: '50%',
      glowTop: '40%',
      glowOpacity: 0.08
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
        width: 'min(380px, 80vw)',
        height: 'min(380px, 80vw)',
        borderRadius: '50%',
        background: `radial-gradient(circle, rgba(16, 185, 129, ${bgStyle.glowOpacity * 0.6}) 0%, rgba(6, 182, 212, ${bgStyle.glowOpacity * 0.2}) 45%, transparent 70%)`,
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
        background: 'radial-gradient(circle at 50% 30%, rgba(13, 148, 136, 0.05) 0%, rgba(6, 182, 212, 0.02) 40%, transparent 60%)',
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
        background: 'radial-gradient(ellipse at center, rgba(26,32,44,0.3) 0%, rgba(26,32,44,0.92) 80%)',
        zIndex: 1, // Sits on top of the base ambient glow
        pointerEvents: 'none'
      }} />

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
        maxWidth: '1200px',
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
              fontSize: 'clamp(1.65rem, 3.6vw, 2.45rem)', /* Reduced by 10% to let layout breathe */
              lineHeight: '1.25'
            }}
          >
            Career Mein Success Hai.
            <br />
            <span style={{ display: 'block', marginTop: '12px' }}>
              Ab Ghar Mein Bhi <br className="desktop-only" />Sukoon Wapas Laaiye.
            </span>
          </h1>

          <p 
            className="hero-anim hero-anim-2 hero-sub-text hero-sub-area" 
            style={{ 
              color: 'rgba(226, 232, 240, 0.9)', /* Increased contrast for readability */
              fontSize: 'clamp(14.5px, 2vw, 16px)', 
              margin: '0 0 28px 0', 
              lineHeight: '1.65'
            }}
          >
            Learn the exact communication framework that has helped 1,500+ families reduce daily arguments, improve understanding, and restore peace at home in just 30 days.
          </p>

          {/* Context Label above Trust Hierarchy */}
          <div className="hero-anim hero-anim-3 hero-trust-label-area" style={{ 
            fontSize: '13px', 
            fontWeight: 600, 
            letterSpacing: '0.04em', 
            color: '#10b981', 
            opacity: 0.85, 
            textTransform: 'uppercase',
            marginBottom: '10px' 
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
              <div key={i} className="hero-trust-card" style={stat.highlight ? {
                border: '1px solid rgba(16, 185, 129, 0.35)',
                background: 'rgba(16, 185, 129, 0.04)',
                boxShadow: '0 0 16px rgba(16, 185, 129, 0.05)'
              } : {}}>
                <div style={{ 
                  fontSize: stat.highlight ? '21px' : '18.5px', 
                  fontWeight: 800, 
                  color: stat.highlight ? '#10b981' : '#ffffff', 
                  lineHeight: 1 
                }}>{stat.num}</div>
                <div style={{ 
                  fontSize: '12px', 
                  color: stat.highlight ? 'rgba(255, 255, 255, 0.75)' : 'rgba(255, 255, 255, 0.65)', 
                  fontWeight: 500, 
                  lineHeight: 1.2 
                }}>{stat.label}</div>
              </div>
            ))}
          </div>

          {/* High-impact CTA Pair (Primary: Green, Secondary: Ghost) */}
          <div className="hero-anim hero-anim-4 hero-cta-wrapper hero-cta-area" style={{ 
            display: 'flex', 
            alignItems: 'center',
            gap: '8px', 
            flexWrap: 'wrap'
          }}>
            <button 
              className="btn-cta btn-cta-pulse btn-shimmer btn-pill" 
              style={{ 
                padding: '0 32px', 
                fontSize: '13.5px',
                height: '48px',
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
              Join Founding Batch
            </button>
            <button
              style={{
                background: 'transparent',
                border: '1px solid rgba(255, 255, 255, 0.25)',
                color: 'rgba(255, 255, 255, 0.9)',
                borderRadius: '100px',
                padding: '0 24px',
                fontSize: '13.5px',
                height: '48px',
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
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)';
                e.currentTarget.style.color = '#fff';
                e.currentTarget.style.transform = 'scale(1.02)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.25)';
                e.currentTarget.style.color = 'rgba(255, 255, 255, 0.9)';
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
            <div 
              onClick={openVideoModal}
              className="video-thumbnail-container"
              style={{
                width: '100%',
                maxWidth: '520px', /* Enlarge video card slightly */
                aspectRatio: '16/9',
                background: `url(${VSL_THUMBNAIL}) center/cover no-repeat`,
                borderRadius: '16px',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 0 40px rgba(0,0,0,0.25), 0 0 24px rgba(16,185,129,0.06)', /* Subtle glow behind video for connection */
                border: '1px solid rgba(255,255,255,0.08)',
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
              <div style={{
                position: 'absolute',
                top: '28px',
                left: '20px',
                right: '20px',
                zIndex: 2,
                textAlign: 'center',
                pointerEvents: 'none'
              }}>
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
            <div style={{ 
              textAlign: 'center', 
              fontFamily: 'Inter, system-ui, sans-serif',
              padding: '0 var(--space-1)',
              marginTop: '4px'
            }}>
              <div style={{ fontSize: '15.5px', fontWeight: 700, color: '#ffffff', letterSpacing: '0.02em' }}>Jagat Turkiya</div>
              <div style={{ fontSize: '12.5px', color: '#10b981', fontWeight: 600, marginTop: '2.5px', letterSpacing: '0.04em' }}>Strategic Family Relationship Coach</div>
              <div style={{ fontSize: '11.5px', color: 'rgba(255, 255, 255, 0.55)', marginTop: '2.5px', fontWeight: 500 }}>
                15-Year Family Care Expert <span style={{ opacity: 0.3, margin: '0 6px' }}>•</span> Author of 4 Books
              </div>
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
