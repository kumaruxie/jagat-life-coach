import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import video1 from '../assets/ajit_coach.mp4';
import video2 from '../assets/yogita_sunil_yogesh.mp4';
import video3 from '../assets/satisfied_client_1.mp4';
import video4 from '../assets/satisfied_client_2.mp4';
// import video5 from '../assets/20260525_163927.mp4';


/* ── Thumbnail colours per card ── */
const THUMB_GRADIENTS = [
  'linear-gradient(135deg, #0f2417 0%, #0d1d2e 100%)',
  'linear-gradient(135deg, #1a1025 0%, #0d1a2e 100%)',
  'linear-gradient(135deg, #1a1208 0%, #141820 100%)',
  'linear-gradient(135deg, #0d1a1a 0%, #0d1420 100%)',
];
const THUMB_ACCENTS = ['#10b981', '#818cf8', '#f59e0b', '#38bdf8'];

const VideoCard = ({ id, videoSrc, thumbnail, name, role, quote, index, thumbInitials, currentlyPlaying, setCurrentlyPlaying }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const accent = THUMB_ACCENTS[index % THUMB_ACCENTS.length];

  useEffect(() => {
    if (currentlyPlaying !== id && isPlaying) {
      setIsPlaying(false);
    }
  }, [currentlyPlaying, id, isPlaying]);

  const handlePlay = () => {
    setIsPlaying(true);
    setCurrentlyPlaying(id);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.3, delay: index * 0.04, ease: 'easeOut' }}
      style={{
        borderRadius: '18px',
        overflow: 'hidden',
        background: 'var(--surface-raised)',
        border: '1px solid rgba(148,163,184,0.1)',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 4px 24px rgba(0,0,0,0.25)',
      }}
    >
      {/* ── Video + Thumbnail area ── */}
      <div style={{ position: 'relative', width: '100%', aspectRatio: '16/10', backgroundColor: '#0a0d14', flexShrink: 0 }}>

        {/* Actual Video — shown and loaded only when playing */}
        {isPlaying && (
          <video
            ref={videoRef}
            src={videoSrc}
            autoPlay
            style={{
              position: 'absolute', inset: 0,
              width: '100%', height: '100%',
              objectFit: 'contain',
              backgroundColor: '#0a0d14',
            }}
            onEnded={() => setIsPlaying(false)}
            controls
            playsInline
          />
        )}

        {/* ── Custom Thumbnail (shown before play) ── */}
        {!isPlaying && (
          <div
            onClick={handlePlay}
            style={{
              position: 'absolute', inset: 0,
              background: thumbnail ? `url(${thumbnail}) center/cover no-repeat` : THUMB_GRADIENTS[index % THUMB_GRADIENTS.length],
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '16px',
              cursor: 'pointer',
              userSelect: 'none',
            }}
          >
            {/* Dark glass overlay tint for image thumbnails to ensure high contrast and text readability */}
            {thumbnail && (
              <div style={{
                position: 'absolute', inset: 0,
                background: 'rgba(10, 13, 20, 0.45)',
                zIndex: 0,
                pointerEvents: 'none'
              }} />
            )}

            {/* Decorative rings (hidden if custom thumbnail is used to keep it perfectly clean) */}
            {!thumbnail && (
              <>
                <div style={{
                  position: 'absolute',
                  width: '200px', height: '200px',
                  borderRadius: '50%',
                  border: `1px solid ${accent}18`,
                  top: '50%', left: '50%',
                  transform: 'translate(-50%, -50%)',
                  pointerEvents: 'none',
                }} />
                <div style={{
                  position: 'absolute',
                  width: '140px', height: '140px',
                  borderRadius: '50%',
                  border: `1px solid ${accent}28`,
                  top: '50%', left: '50%',
                  transform: 'translate(-50%, -50%)',
                  pointerEvents: 'none',
                }} />
              </>
            )}

            {/* Avatar initial (shown only if no custom thumbnail to maintain clean design) */}
            {!thumbnail && (
              <div style={{
                width: '52px', height: '52px',
                borderRadius: '50%',
                background: `${accent}22`,
                border: `2px solid ${accent}55`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '18px', fontWeight: 700, color: accent,
                letterSpacing: '0.05em',
                zIndex: 1,
              }}>
                {thumbInitials}
              </div>
            )}

            {/* Name and Role (shown only if no custom thumbnail to maintain clean design) */}
            {!thumbnail && (
              <div style={{
                zIndex: 1, textAlign: 'center', padding: '0 16px',
              }}>
                <div style={{ fontSize: '13px', fontWeight: 600, color: '#e2e8f0', marginBottom: '3px' }}>{name}</div>
                <div style={{ fontSize: '11px', color: '#64748b' }}>{role}</div>
              </div>
            )}

            {/* Play button */}
            <div style={{
              position: 'absolute',
              bottom: '16px', right: '16px',
              width: '40px', height: '40px',
              borderRadius: '50%',
              background: accent,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: `0 4px 16px ${accent}55`,
              zIndex: 1,
            }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                <polygon points="5,3 19,12 5,21" />
              </svg>
            </div>

            {/* ● VIDEO badge */}
            <div style={{
              position: 'absolute', top: '12px', left: '12px',
              display: 'flex', alignItems: 'center', gap: '5px',
              background: 'rgba(0,0,0,0.5)',
              backdropFilter: 'blur(6px)',
              padding: '3px 9px', borderRadius: '5px',
              fontSize: '10px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase',
              color: '#e2e8f0',
              zIndex: 1,
            }}>
              <span style={{
                width: '5px', height: '5px', borderRadius: '50%',
                background: '#ef4444',
                boxShadow: '0 0 5px #ef4444',
                animation: 'pulse-red 2s infinite',
              }} />
              Video
            </div>
          </div>
        )}
      </div>

      {/* ── Card Info ── */}
      <div style={{ padding: '18px 20px 20px', display: 'flex', flexDirection: 'column', gap: '10px', flex: 1 }}>
        {/* Stars */}
        <div style={{ display: 'flex', gap: '2px' }}>
          {[...Array(5)].map((_, i) => (
            <span key={i} style={{ color: '#f59e0b', fontSize: '12px' }}>★</span>
          ))}
        </div>

        {/* Quote */}
        <p style={{ margin: 0, fontSize: '13px', fontStyle: 'italic', color: 'var(--slate)', lineHeight: '1.65', flex: 1 }}>
          &ldquo;{quote}&rdquo;
        </p>

        {/* Divider */}
        <div style={{ height: '1px', background: 'rgba(148,163,184,0.08)' }} />

        {/* Author */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: '30px', height: '30px', borderRadius: '50%',
            background: `${accent}1a`,
            border: `1px solid ${accent}44`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '10px', fontWeight: 700, color: accent, flexShrink: 0,
          }}>
            {thumbInitials}
          </div>
          <div>
            <div style={{ fontSize: '12.5px', fontWeight: 600, color: 'var(--silver)' }}>{name}</div>
            <div style={{ fontSize: '11px', color: 'var(--slate)', marginTop: '1px' }}>{role}</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

/* ─────────────────────────────────────────────────────────────
   Section
 ───────────────────────────────────────────────────────────── */
const VideoTestimonialsSection = () => {
  const [currentlyPlaying, setCurrentlyPlaying] = useState(null);

  const videos = [
    { id: 'v1', videoSrc: video1, thumbInitials: 'AC', name: 'Ajit - A coach', role: 'Coaching Client', quote: 'A truly life-changing experience — my mindset and clarity have completely shifted.' },
    { id: 'v2', videoSrc: video2, thumbInitials: 'YS', name: 'Yogita - Sunil and Yogesh', role: 'Family Coaching Client', quote: 'Ghar ka tanaav aur career ke beech balance banana bohot mushkil tha. Jagat sir ke coaching se mujhe aur meri family ko sukoon mila.' },
    { id: 'v3', videoSrc: video3, thumbInitials: 'SC', name: 'A Satisifed client', role: 'Coaching Client', quote: 'Jagat Sir\'s methodology is very practical. Confidence, clarity aur ghar mein sukoon — teeno mili.' },
    { id: 'v4', videoSrc: video4, thumbInitials: 'SC', name: 'A Satisfied client', role: 'Transformation Client', quote: 'Is program ne meri zindagi ka nazariya badal diya. Jagat Sir ke saath kaam karna ek privilege hai.' },
    // { id: 'v5', videoSrc: video5, thumbInitials: 'SC', name: 'A Satisfied client', role: 'Coaching Client', quote: 'Ghar ke tanaav se nikal kar aapsi samajh banana ab aasan lagta hai. Coaching ke baad rishton mein bahut sukoon mila.' },
  ];



  return (
    <section
      id="video-testimonials"
      className="section"
      style={{
        background: 'var(--surface-deep)'
      }}
    >
      <style>{`@keyframes pulse-red { 0%,100%{opacity:1} 50%{opacity:0.35} }`}</style>

      <div className="section-inner">
        {/* ─── Header ─── */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: '40px' }}
        >
          <span className="tag">
            Real Stories
          </span>
          <h2 style={{ color: 'var(--silver)', marginBottom: '10px' }}>
            Unhe suniye jo <span style={{ color: 'var(--gold-accent)' }}>badal chuke hain</span>
          </h2>
          <p style={{ color: 'var(--slate)', fontSize: '15px', maxWidth: '500px', lineHeight: '1.7' }}>
            Yeh sirf reviews nahi — yeh woh log hain jinki zindagi actually badli is safar ke baad.
          </p>
        </motion.div>

        {/* ─── 2×2 Grid — always 2 columns on desktop, 1 on mobile ─── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '24px',
        }}
          className="video-testimonials-grid"
        >
          {videos.map((v, i) => (
            <VideoCard
              key={v.id}
              index={i}
              currentlyPlaying={currentlyPlaying}
              setCurrentlyPlaying={setCurrentlyPlaying}
              {...v}
            />
          ))}
        </div>
      </div>

      {/* Responsive override */}
      <style>{`
        @media (max-width: 768px) {
          .video-testimonials-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default VideoTestimonialsSection;
