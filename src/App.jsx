import { lazy, Suspense, useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import './App.css';

import GatedOverlay from './components/GatedOverlay';

// Lazy-load below-fold components for performance
const ProblemSection = lazy(() => import('./components/ProblemSection'));
const AgitateSection = lazy(() => import('./components/AgitateSection'));
const CTABanner = lazy(() => import('./components/CTABanner'));
const MechanismSection = lazy(() => import('./components/MechanismSection'));
const TransformationSection = lazy(() => import('./components/TransformationSection'));
const ProgramBreakdownSection = lazy(() => import('./components/ProgramBreakdownSection'));
const AboutCoachSection = lazy(() => import('./components/AboutCoachSection'));
const AchievementsSection = lazy(() => import('./components/AchievementsSection'));
const TestimonialsSection = lazy(() => import('./components/TestimonialsSection'));
const PricingSection = lazy(() => import('./components/PricingSection'));
const FAQSection = lazy(() => import('./components/FAQSection'));
const Footer = lazy(() => import('./components/Footer'));

// Minimal loading fallback that matches the dark theme
const SectionFallback = () => (
  <div style={{ minHeight: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <div style={{ width: '24px', height: '24px', border: '2px solid var(--border)', borderTop: '2px solid var(--emerald)', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} />
  </div>
);

function App() {
  const [isLocked, setIsLocked] = useState(() => !localStorage.getItem('site_unlocked'));

  const triggerPayment = () => {
    window.location.href = "https://rzp.io/rzp/iV71t1VO";
  };

  return (
    <div className="app-container">
      {isLocked && (
        <GatedOverlay onUnlock={() => setIsLocked(false)} />
      )}

      <Header triggerPayment={triggerPayment} />
      <main>
        <HeroSection triggerPayment={triggerPayment} />
        <Suspense fallback={<SectionFallback />}>
          <ProblemSection />
          <AgitateSection />
          
          <CTABanner 
            text="Yeh patterns samajhna hi pehla step hai — baaki sab iske baad hota hai."
            buttonText="Apna Pehla Step Lo →"
            triggerPayment={triggerPayment}
          />
          
          <MechanismSection />
          <TransformationSection />
          
          <CTABanner 
            text="30 din mein family dynamics badal sakte hain. Kya aap ready ho?"
            buttonText="Program Join Karo →"
            triggerPayment={triggerPayment}
          />
          
          <ProgramBreakdownSection />
          <AboutCoachSection />
          <AchievementsSection />
          
          <CTABanner 
            text="1,500+ families ne yeh kiya. Ab aapki baari hai."
            buttonText="Apni Seat Reserve Karo →"
            triggerPayment={triggerPayment}
          />
          
          <TestimonialsSection />
          <PricingSection triggerPayment={triggerPayment} />
          <FAQSection />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
