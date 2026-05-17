import { motion } from 'framer-motion';
import { Award, Users, BookOpen, Mic, Heart, Globe, Star, Zap, Trophy, Target } from 'lucide-react';

const AchievementsSection = () => {
  /* COPYWRITING: Edit achievements here. Add/remove cards as needed. */
  const achievements = [
    {
      icon: <Users size={22} />,
      title: "1,500+ Clients",
      description: "Personal transformation journeys, one client at a time.",
      color: '#d4a574'
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
      color: '#f87171'
    },
    {
      icon: <Trophy size={22} />,
      title: "Guinness World Record",
      description: "Recognized globally for extraordinary speaking achievements.",
      color: '#60a5fa'
    },
    {
      icon: <Award size={22} />,
      title: "National Icon Award",
      description: "Honored for outstanding contribution to personal development.",
      color: '#f59e0b'
    },
    {
      icon: <Heart size={22} />,
      title: "Family Transformation",
      description: "Specializing in resolving deep-rooted family conflicts.",
      color: '#f472b6'
    },
    {
      icon: <Globe size={22} />,
      title: "Pan-India Reach",
      description: "Coaching professionals and families in 50+ cities.",
      color: '#818cf8'
    },
    {
      icon: <Target size={22} />,
      title: "Personality DNA Method",
      description: "Proprietary framework for understanding behavior patterns.",
      color: '#34d399'
    },
    {
      icon: <Star size={22} />,
      title: "TEDx Speaker",
      description: "Sharing transformative ideas on global stages.",
      color: '#fbbf24'
    },
    {
      icon: <Zap size={22} />,
      title: "30-Day Programs",
      description: "Structured coaching that delivers measurable results.",
      color: '#a78bfa'
    }
  ];

  // Duplicate for seamless infinite loop
  const doubledAchievements = [...achievements, ...achievements];

  return (
    <section style={{ backgroundColor: 'var(--surface-deep)', padding: '80px 0', overflow: 'hidden' }}>
      <div className="section-inner" style={{ marginBottom: '40px' }}>
        <span className="tag">Recognition & Impact</span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Achievements
        </motion.h2>
      </div>

      {/* Infinite Scroll Carousel */}
      <div style={{ position: 'relative' }}>
        {/* Fade edges */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '80px',
          height: '100%',
          background: 'linear-gradient(to right, var(--surface-deep), transparent)',
          zIndex: 2,
          pointerEvents: 'none'
        }} />
        <div style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '80px',
          height: '100%',
          background: 'linear-gradient(to left, var(--surface-deep), transparent)',
          zIndex: 2,
          pointerEvents: 'none'
        }} />

        {/* Scrolling track */}
        <div className="marquee-track">
          {doubledAchievements.map((item, index) => (
            <div
              key={index}
              className="achievement-card"
              style={{
                backgroundColor: 'var(--surface-raised)',
                border: '1px solid var(--border)',
                borderRadius: '12px',
                padding: '28px 24px',
                minWidth: '260px',
                maxWidth: '260px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                flexShrink: 0,
                transition: 'border-color 0.3s, transform 0.3s, box-shadow 0.3s',
                cursor: 'default'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = `${item.color}40`;
                e.currentTarget.style.boxShadow = `0 8px 24px rgba(0,0,0,0.2), 0 0 0 1px ${item.color}15`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = '';
                e.currentTarget.style.boxShadow = '';
              }}
            >
              {/* Icon */}
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                backgroundColor: `${item.color}15`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: item.color
              }}>
                {item.icon}
              </div>

              {/* Title */}
              <h3 style={{
                fontSize: '18px',
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                color: 'var(--silver)',
                lineHeight: 1.3,
                margin: 0
              }}>
                {item.title}
              </h3>

              {/* Description */}
              <p style={{
                fontSize: '13px',
                color: 'var(--slate)',
                margin: 0,
                lineHeight: '1.6'
              }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
