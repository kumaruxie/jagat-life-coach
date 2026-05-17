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
    <section style={{ 
      position: 'relative', 
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      paddingTop: '80px',
      paddingBottom: '40px',
      overflow: 'hidden',
      backgroundColor: 'var(--surface)',
      color: 'var(--silver)'
    }}>
      {/* Ambient background — placeholder for future Spline 3D */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(ellipse at 30% 20%, rgba(16,185,129,0.06) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(16,185,129,0.04) 0%, transparent 50%)',
        zIndex: 0
      }} />

      {/* Dark gradient overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(ellipse at center, rgba(26,32,44,0.4) 0%, rgba(26,32,44,0.88) 70%)',
        zIndex: 0
      }} />

      <div className="section-inner hero-content" style={{ 
        position: 'relative', 
        zIndex: 1, 
        maxWidth: '900px',
        textAlign: 'center'
      }}>
        <span 
          className="tag hero-anim hero-anim-1"
          style={{ color: 'var(--slate)', marginBottom: '20px' }}
        >
          Hindi-speaking professionals ke liye — jo ghar ke conflicts se thak chuke hain
        </span>
        
        <h1 
          className="hero-anim hero-anim-2"
          style={{ color: 'var(--silver)', marginBottom: '32px' }}
        >
          Ghar Ke Conflicts Ko <em style={{ color: 'var(--emerald)', fontStyle: 'normal' }}>Ek Mahine Mein</em> Clarity Mein Badlo.
        </h1>

        <p
          className="hero-anim hero-anim-3"
          style={{
            fontSize: '16px',
            color: 'var(--slate)',
            maxWidth: '560px',
            margin: '0 auto 40px',
            lineHeight: '1.7'
          }}
        >
          A 30-day structured coaching program to decode your Personality DNA and transform family dynamics — with live sessions, 1:1 calls, and proven frameworks.
        </p>

        <div
          className="hero-anim hero-anim-4"
          style={{
            width: '100%',
            maxWidth: '780px',
            aspectRatio: '16/9',
            backgroundColor: 'var(--surface-deep)',
            borderRadius: '16px',
            margin: '0 auto 40px',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 24px 48px rgba(0,0,0,0.4)',
            border: '1px solid rgba(255,255,255,0.08)'
          }}
        >
          <LazyYouTube
            src="https://www.youtube.com/embed/92mCOUkNrj0?rel=0&modestbranding=1&controls=1"
            title="Video Sales Letter — Jagat Turkiya Conflict to Clarity Program"
          />
        </div>

        <div 
          className="hero-anim hero-anim-5"
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}
        >
          <button 
            className="btn-cta btn-cta-pulse" 
            style={{ padding: '18px 48px', fontSize: '15px' }}
            onClick={() => triggerPayment()}
          >
            Haan, Mujhe Clarity Chahiye →
          </button>
          <span style={{ 
            fontSize: '12px', 
            color: 'var(--slate)', 
            opacity: 0.7,
            letterSpacing: '0.02em'
          }}>
            30-day program · Starts immediately · Limited seats
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
