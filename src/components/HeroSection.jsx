import { useState, useEffect, useRef } from 'react';

/* ──────────────────────────────────────────────────────────
   SPLINE 3D (Disabled for performance — enable when ready)
   
   To re-enable:
   1. Add: const Spline = lazy(() => import('@splinetool/react-spline'));
   2. Uncomment the Spline JSX block in the render
   Scene URL: https://prod.spline.design/JnbmEpncnp-VXFu3/scene.splinecode
────────────────────────────────────────────────────────── */

const LazyYouTube = ({ src, title }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasClicked, setHasClicked] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}>
      {!hasClicked ? (
        <button
          onClick={() => setHasClicked(true)}
          aria-label={`Play ${title}`}
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
            cursor: 'pointer',
            backgroundColor: 'var(--surface-deep)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            position: 'relative'
          }}
        >
          {isVisible && (
            <img
              src="https://img.youtube.com/vi/92mCOUkNrj0/hqdefault.jpg"
              alt={title}
              loading="lazy"
              width={480}
              height={360}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                opacity: 0.7
              }}
            />
          )}
          <div style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            backgroundColor: 'rgba(16,185,129,0.9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1,
            boxShadow: '0 4px 24px rgba(16,185,129,0.3)'
          }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white" aria-hidden="true">
              <polygon points="8,5 19,12 8,19" />
            </svg>
          </div>
          <span style={{ 
            color: 'var(--silver)', 
            fontSize: '13px', 
            fontWeight: 600,
            zIndex: 1,
            textTransform: 'uppercase',
            letterSpacing: '0.1em'
          }}>
            Watch the Video
          </span>
        </button>
      ) : (
        <iframe
          src={`${src}&autoplay=1`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
          style={{ width: '100%', height: '100%', border: 'none' }}
        />
      )}
    </div>
  );
};

const HeroSection = ({ triggerPayment }) => {
  return (
    <section className="hero-section">
      {/* Zero-Lag CSS Ambient Background */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 0,
        pointerEvents: 'none',
        background: 'radial-gradient(circle at 50% 30%, rgba(16,185,129,0.15) 0%, transparent 60%)',
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
        background: 'radial-gradient(ellipse at center, rgba(26,32,44,0.4) 0%, rgba(26,32,44,0.88) 70%)',
        zIndex: 0,
        pointerEvents: 'none'
      }} />

      <div className="section-inner hero-content" style={{ 
        position: 'relative', 
        zIndex: 1, 
        maxWidth: '900px',
        textAlign: 'center',
        pointerEvents: 'none'
      }}>
        <span 
          className="tag hero-anim hero-anim-1"
          style={{ color: 'var(--slate)', marginBottom: 'var(--space-3)' }}
        >
          Hindi-speaking professionals ke liye — jo ghar ke roz-roz ke tanaav se thak chuke hain
        </span>
        
        <h1 
          className="hero-anim hero-anim-2"
          style={{ color: 'var(--silver)', marginBottom: 'var(--space-4)' }}
        >
          Ghar Ki Uljhanon Ko Ek Mahine Mein <em style={{ color: 'var(--emerald)', fontStyle: 'normal' }}>Sukoon</em> Mein Badlo.
        </h1>

        <p
          className="hero-anim hero-anim-3 hide-on-mobile"
          style={{
            fontSize: '16px',
            color: 'var(--slate)',
            maxWidth: '560px',
            margin: '0 auto var(--space-6)',
            lineHeight: '1.7'
          }}
        >
          Ek aasan 30-din ka safar jo aapko apne parivar ko behtar samajhne aur rishton mein aapsi pyar wapas laane mein madad karega — bina kisi complex theory ke.
        </p>

        <div
          className="hero-anim hero-anim-4"
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
          <LazyYouTube
            src="https://www.youtube.com/embed/92mCOUkNrj0?rel=0&modestbranding=1&controls=1"
            title="Video Sales Letter — Jagat Turkiya Conflict to Clarity Program"
          />
        </div>

        <div 
          className="hero-anim hero-anim-5"
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', pointerEvents: 'auto' }}
        >
          <button 
            className="btn-cta btn-cta-pulse btn-shimmer" 
            style={{ padding: '18px 48px', fontSize: '15px' }}
            onClick={() => triggerPayment()}
          >
            Haan, Mujhe Sukoon Chahiye →
          </button>
          <span style={{ 
            fontSize: '12px', 
            color: 'var(--slate)', 
            opacity: 0.7,
            letterSpacing: '0.02em'
          }}>
            30-din ka aasan safar · Abhi shuru karein · Limited seats
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
