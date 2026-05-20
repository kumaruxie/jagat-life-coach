import { useState, useRef, useEffect } from 'react';

const PremiumVideoPlayer = ({ src, poster }) => {
  const [hasClicked, setHasClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
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
    <div 
      ref={containerRef} 
      style={{ 
        width: '100%', 
        height: '100%', 
        position: 'absolute', 
        top: 0, 
        left: 0,
        backgroundColor: '#000'
      }}
    >
      {!hasClicked ? (
        <button
          onClick={() => setHasClicked(true)}
          aria-label="Play Masterclass Video"
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
            cursor: 'pointer',
            background: poster ? `url(${poster}) center/cover no-repeat` : 'linear-gradient(135deg, rgba(20, 24, 32, 0.95) 0%, rgba(26, 32, 44, 0.85) 100%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Subtle black overlay to ensure the play button pops nicely on top of the image */}
          {poster && (
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0, 0, 0, 0.3)',
              zIndex: 1,
              pointerEvents: 'none'
            }} />
          )}

          {/* Animated glow blob behind play button */}
          <div style={{
            position: 'absolute',
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, transparent 70%)',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            animation: 'ambient-breathe 4s ease-in-out infinite',
            pointerEvents: 'none',
            zIndex: 1
          }} />

          {/* Glowing Play Button */}
          <div 
            className="video-play-btn-wrapper"
            style={{
              width: '72px',
              height: '72px',
              borderRadius: '50%',
              backgroundColor: 'rgba(16, 185, 129, 0.95)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 2,
              boxShadow: '0 8px 32px rgba(16, 185, 129, 0.4)',
              transition: 'transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), background-color 0.2s',
              position: 'relative'
            }}
          >
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="white" 
              style={{ marginLeft: '4px' }}
              aria-hidden="true"
            >
              <polygon points="8,5 19,12 8,19" />
            </svg>
          </div>
        </button>
      ) : (
        <video
          src={src}
          controls
          autoPlay
          playsInline
          style={{ 
            width: '100%', 
            height: '100%', 
            border: 'none', 
            objectFit: 'contain',
            backgroundColor: '#000'
          }}
        />
      )}
    </div>
  );
};

export default PremiumVideoPlayer;