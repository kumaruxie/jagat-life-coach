import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import video1 from '../assets/video testimonial 1.mp4';
import video2 from '../assets/video testimonial 2.mp4';

const VideoCard = ({ id, videoSrc, quote, name, role, initials, currentlyPlaying, setCurrentlyPlaying }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (currentlyPlaying !== id && isPlaying && videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  }, [currentlyPlaying, id, isPlaying]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
        setCurrentlyPlaying(id);
      }
    }
  };

  return (
    <div className="glass-glow-hover" style={{
      backgroundColor: '#2a2a35', 
      borderRadius: '16px',
      overflow: 'hidden',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Video Container */}
      <div 
        style={{ 
          position: 'relative', 
          width: '100%', 
          height: '320px', // Consistent height
          backgroundColor: '#111116', // Very dark background for the letterboxing
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        onClick={togglePlay}
      >
        <video 
          ref={videoRef}
          src={videoSrc}
          style={{ width: '100%', height: '100%', objectFit: 'contain' }} // Contain prevents any zooming/enlarging
          onEnded={() => setIsPlaying(false)}
        />
        
        {/* Play Overlay */}
        {!isPlaying && (
          <div style={{
            position: 'absolute',
            top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.4)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <div style={{
              width: '48px', height: '48px',
              borderRadius: '50%',
              border: '1px solid rgba(255,255,255,0.6)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(255,255,255,0.1)',
              backdropFilter: 'blur(4px)'
            }}>
              <Play size={20} color="#fff" fill="#fff" style={{ marginLeft: '4px' }} />
            </div>
          </div>
        )}

        {/* Top Left Tag */}
        <div style={{
          position: 'absolute',
          top: '16px', left: '16px',
          backgroundColor: 'rgba(0,0,0,0.6)',
          padding: '4px 10px',
          borderRadius: '4px',
          fontSize: '11px',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          backdropFilter: 'blur(4px)'
        }}>
          <div style={{ width: '6px', height: '6px', backgroundColor: '#ef4444', borderRadius: '50%' }}></div>
          Video Review
        </div>
      </div>

      {/* Text Info Container */}
      <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px', flex: 1, backgroundColor: '#3b3b4a' }}>
        <div style={{ display: 'flex', gap: '2px', color: '#fbbf24', fontSize: '14px' }}>★★★★★</div>
        <p style={{ margin: 0, fontStyle: 'italic', fontSize: '14.5px', color: '#e2e8f0', lineHeight: '1.6' }}>
          &ldquo;{quote}&rdquo;
        </p>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: 'auto' }}>
          <div style={{
            width: '36px', height: '36px',
            borderRadius: '50%',
            backgroundColor: '#fff',
            color: '#1e1e2f',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '12px',
            fontWeight: 700
          }}>
            {initials}
          </div>
          <div>
            <div style={{ fontSize: '13.5px', fontWeight: 600, color: '#fff' }}>{name}</div>
            <div style={{ fontSize: '12px', color: '#cbd5e1' }}>{role}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  const [currentlyPlaying, setCurrentlyPlaying] = useState(null);
  const testimonials = [
    {
      quote: "Working with Jagat Turkiya has been life-changing. His guidance, support, and insight have helped me overcome challenges and reach new heights in my personal growth. His approach is both empowering and compassionate, making every session valuable. Thanks Jagat",
      name: "Rahul Singh",
      role: "Life & Personal Growth Client",
      initials: "RS",
      color: '#60a5fa',
      badge: "Outstanding Growth"
    },
    {
      quote: "Jagat Turkiya Sir is the best author coach in the country. He teaches book writing in great detail. You help the author from writing the book to its launch and best selling.",
      name: "Sunil Bhari",
      role: "Author & Coaching Client",
      initials: "SB",
      color: '#f472b6',
      badge: "Best Author Coach"
    },
    {
      quote: "Jagat is very helpful coach. He is always providing the handholding support to face the challenges and overcome them. The tools and systems he uses in his coaching process are very easy to use and connect with.",
      name: "Renu Chaudhary",
      role: "Coaching Client",
      initials: "RC",
      color: '#10b981'
    },
    {
      quote: "Jagat is an outstanding mind hacker coach who is always ready to guide and help. I have him as a part of my mastermind and enjoy working with him as a team.",
      name: "Rritu Singhi",
      role: "Mastermind Member",
      initials: "RS",
      color: '#f59e0b'
    },
    {
      quote: "Jagat is very talented, calm, patient, empathetic and empowering coach. He is very easy to talk to, which makes the environment of coaching very pleasant.",
      name: "Neetu Negi",
      role: "Empowerment Client",
      initials: "NN",
      color: '#a78bfa'
    }
  ];

  return (
    <section id="alumni" className="section" style={{ backgroundColor: 'var(--surface)', padding: '80px 0' }}>
      <div className="section-inner">
        
        {/* Top Header */}
        <div style={{ marginBottom: '40px' }}>
          <span style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.15em', color: 'var(--slate)', textTransform: 'uppercase' }}>
            What Clients Say
          </span>
          <h2 style={{ fontSize: '2.5rem', color: 'var(--silver)', margin: '8px 0' }}>
            Real results, real voices
          </h2>
          <p style={{ color: 'var(--slate)', fontSize: '15.5px' }}>
            Hear directly from those who've transformed with Jagat Turkiya
          </p>
        </div>

        {/* Video Reviews Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '24px',
          marginBottom: '60px'
        }}>
          <VideoCard 
            id="video1"
            currentlyPlaying={currentlyPlaying}
            setCurrentlyPlaying={setCurrentlyPlaying}
            videoSrc={video1}
            quote="A truly life-changing coaching experience — my mindset and clarity have completely shifted."
            name="Vikram Singh"
            role="Coaching Client"
            initials="VS"
          />
          <VideoCard 
            id="video2"
            currentlyPlaying={currentlyPlaying}
            setCurrentlyPlaying={setCurrentlyPlaying}
            videoSrc={video2}
            quote="Jagat Sir guided me through every step — from writing to launching my book successfully."
            name="Priya Sharma"
            role="Author & Coaching Client"
            initials="PS"
          />
        </div>

        {/* Separator */}
        <div style={{ textAlign: 'center', margin: '60px 0', position: 'relative' }}>
          <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: '1px', backgroundColor: 'var(--border)' }}></div>
          <span style={{ position: 'relative', backgroundColor: 'var(--surface)', padding: '0 20px', color: 'var(--slate)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Verified Google Reviews
          </span>
        </div>

        {/* Google Reviews Bento Grid */}
        <div className="testimonials-bento" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px',
          width: '100%'
        }}>
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="testimonial-card glass-glow-hover"
              style={{
                backgroundColor: '#2a2a35', // Match design dark background
                borderRadius: '12px',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                position: 'relative'
              }}
            >
              {/* Verified Source Top */}
              <div style={{
                fontSize: '10px',
                fontWeight: 600,
                color: 'var(--emerald)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--emerald)', display: 'inline-block' }}></span>
                Verified Google Review
              </div>

              {/* 5-Star Rating Badge */}
              <div style={{ display: 'flex', gap: '2px', color: '#fbbf24', fontSize: '14px' }}>
                ★★★★★
              </div>

              {/* Quote text */}
              <p style={{
                fontSize: '13.5px',
                color: 'var(--silver)',
                margin: 0,
                lineHeight: '1.7',
                fontWeight: 400,
                flex: 1
              }}>
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Optional Highlight Badge */}
              {t.badge && (
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '4px 10px',
                  backgroundColor: 'rgba(16,185,129,0.15)',
                  border: '1px solid rgba(16,185,129,0.3)',
                  borderRadius: '4px',
                  fontSize: '10px',
                  color: '#a7f3d0',
                  fontWeight: 600
                }}>
                  <div style={{ width: '4px', height: '4px', border: '1px solid #a7f3d0' }}></div>
                  {t.badge}
                </div>
              )}

              {/* Author Info */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  color: 'var(--slate)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '11px',
                  fontWeight: 600
                }}>
                  {t.initials}
                </div>
                <div>
                  <div style={{ fontSize: '13px', fontWeight: 600, color: '#fff' }}>{t.name}</div>
                  <div style={{ fontSize: '11px', color: 'var(--slate)' }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
