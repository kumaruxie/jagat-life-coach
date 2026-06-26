import { Trophy, Award, FileText, Users, Mic, BookOpen, Heart } from 'lucide-react';

import guinnessImg from '../assets/guniess world record standee.jpg';
import awardImg from '../assets/another acheivement.jpg';
import articleImg from '../assets/article.PNG';

const AchievementsSection = () => {
  const topAchievements = [
    {
      img: guinnessImg,
      icon: <Trophy size={20} />,
      badge: "Guinness Record",
      badgeColor: '#60a5fa',
      badgeBg: 'rgba(96,165,250,0.08)',
      title: "Guinness World Record",
      description: "Participated in the official Guinness World Records attempt for \"Most People in a Speech Relay\" in Surat, 2022.",
      glowColor: '#60a5fa'
    },
    {
      img: awardImg,
      icon: <Award size={20} />,
      badge: "National Honor",
      badgeColor: '#f59e0b',
      badgeBg: 'rgba(245,158,11,0.08)',
      title: "National Icon Award 2024",
      description: "Honored in Pune for outstanding contribution to personal development as a Mind Hacker, Storyteller, Author & Coach.",
      glowColor: '#f59e0b'
    },
    {
      img: articleImg,
      icon: <FileText size={20} />,
      badge: "Media Feature",
      badgeColor: '#10b981',
      badgeBg: 'rgba(16,185,129,0.08)',
      title: "Featured in Business Up2Date",
      description: "Recognized as an inspiring life coach and personal transformation expert with 15 years of experience.",
      glowColor: '#10b981'
    }
  ];

  const bottomAchievements = [
    {
      icon: <Users size={22} />,
      title: "1,500+ Clients",
      description: "Personal transformation journeys, one client at a time.",
      color: '#60a5fa'
    },
    {
      icon: <Mic size={22} />,
      title: "15,000+ Lives Impacted",
      description: "Through live events and webinars across India.",
      color: '#10b981'
    },
    {
      icon: <BookOpen size={22} />,
      title: "4 Bestselling Books",
      description: "Authored works reaching thousands of families nationwide.",
      color: '#f59e0b'
    },
    {
      icon: <Heart size={22} />,
      title: "Family Impact",
      description: "Specially recognized for contribution rooted in family values.",
      color: '#f472b6'
    }
  ];

  // Quadruple elements for seamless infinite scroll loop on all viewports
  const doubledTop = [...topAchievements, ...topAchievements, ...topAchievements, ...topAchievements];
  const doubledBottom = [...bottomAchievements, ...bottomAchievements, ...bottomAchievements, ...bottomAchievements];

  return (
    <section id="achievements" className="section" style={{ background: 'linear-gradient(to bottom, var(--surface) 0%, var(--surface-deep) 150px, var(--surface-deep) 100%)', padding: '90px 0', overflow: 'hidden' }}>
      <div className="section-inner" style={{ marginBottom: '56px' }}>
        
        {/* Title Block */}
        <div>
          <span className="tag">
            Recognition & Impact
          </span>
          <h2 style={{ marginBottom: '8px', color: 'var(--silver)' }}>
            Milestones of <span style={{ color: 'var(--emerald)' }}>Trust & Impact</span>
          </h2>
          <p style={{
            color: 'var(--slate)',
            marginTop: '8px',
            fontFamily: 'var(--font-body)',
            fontSize: '15px'
          }}>
            A lifetime dedicated to personal growth, national honor, and deep family transformation.
          </p>
        </div>
      </div>

      {/* Infinite Marquee Track Wrapper with fade edges */}
      <div style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
        
        {/* Left Side Shadow Fade */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '12%',
          height: '100%',
          background: 'linear-gradient(to right, var(--surface-deep), transparent)',
          zIndex: 5,
          pointerEvents: 'none'
        }} />
        
        {/* Right Side Shadow Fade */}
        <div style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '12%',
          height: '100%',
          background: 'linear-gradient(to left, var(--surface-deep), transparent)',
          zIndex: 5,
          pointerEvents: 'none'
        }} />

        {/* The Marquee Row Container */}
        <div className="achievements-marquee-container">
          
          {/* Row 1: Image Bento Cards (Continuous left scroll) */}
          <div className="achievements-marquee-row1">
            {doubledTop.map((item, index) => (
              <div
                key={index}
                className="achievement-card achievement-image-card"
                style={{
                  backgroundColor: 'var(--surface-raised)',
                  border: '1px solid var(--border)',
                  borderRadius: '18px',
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  position: 'relative',
                  cursor: 'default',
                  transition: 'border-color 0.18s ease, box-shadow 0.18s ease',
                  minWidth: '360px',
                  maxWidth: '360px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `${item.glowColor}30`;
                  e.currentTarget.style.boxShadow = `0 12px 36px rgba(0,0,0,0.3), 0 0 0 1px ${item.glowColor}15`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Header Icon + Label */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '10px',
                    backgroundColor: `${item.glowColor}15`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: item.glowColor
                  }}>
                    {item.icon}
                  </div>
                  
                  {/* Badge pill */}
                  <span style={{
                    fontSize: '10px',
                    fontWeight: 600,
                    color: item.badgeColor,
                    backgroundColor: item.badgeBg,
                    padding: '4px 10px',
                    borderRadius: '100px',
                    fontFamily: 'var(--font-body)',
                    letterSpacing: '0.02em'
                  }}>
                    {item.badge}
                  </span>
                </div>

                {/* Aspect-Ratio Image Container */}
                <div style={{
                  width: '100%',
                  height: '180px',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  border: '1px solid var(--border)',
                  backgroundColor: '#0c0f16',
                  position: 'relative'
                }}>
                  <img
                    src={item.img}
                    alt={item.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: item.badge === "Media Feature" ? 'center top' : 'center center'
                    }}
                  />
                </div>

                {/* Text Content */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '4px' }}>
                  <h3 style={{
                    fontSize: '17px',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 700,
                    color: 'var(--silver)',
                    margin: 0,
                    lineHeight: 1.3
                  }}>
                    {item.title}
                  </h3>
                  <p style={{
                    fontSize: '13px',
                    color: 'var(--slate)',
                    margin: 0,
                    lineHeight: '1.6',
                    fontFamily: 'var(--font-body)'
                  }}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Row 2: Standard Bento Cards (Continuous right scroll - polar opposite) */}
          <div className="achievements-marquee-row2">
            {doubledBottom.map((item, index) => (
              <div
                key={index}
                className="achievement-card"
                style={{
                  backgroundColor: 'var(--surface-raised)',
                  border: '1px solid var(--border)',
                  borderRadius: '16px',
                  padding: '24px 20px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  transition: 'border-color 0.18s ease, box-shadow 0.18s ease',
                  cursor: 'default',
                  minWidth: '280px',
                  maxWidth: '280px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `${item.color}25`;
                  e.currentTarget.style.boxShadow = `0 8px 24px rgba(0,0,0,0.2), 0 0 0 1px ${item.color}10`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Icon block */}
                <div style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  backgroundColor: `${item.color}12`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: item.color,
                  alignSelf: 'flex-start'
                }}>
                  {item.icon}
                </div>

                {/* Title and Description */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <h3 style={{
                    fontSize: '19px',
                    fontFamily: 'var(--font-body)',
                    fontWeight: 700,
                    color: 'var(--silver)',
                    margin: 0,
                    lineHeight: 1.2
                  }}>
                    {item.title}
                  </h3>
                  <p style={{
                    fontSize: '12.5px',
                    color: 'var(--slate)',
                    margin: 0,
                    lineHeight: '1.6',
                    fontFamily: 'var(--font-body)'
                  }}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
