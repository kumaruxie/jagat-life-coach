import { lazy, Suspense, useState, useEffect } from 'react';
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
  const [isLocked, setIsLocked] = useState(false);

  useEffect(() => {
    // Force scroll to top on reload
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    // Show Gated Overlay based on a strict 15-second total allowance
    const hasUnlocked = localStorage.getItem('site_unlocked');
    if (!hasUnlocked) {
      const firstVisit = localStorage.getItem('first_visit_timestamp');
      
      if (!firstVisit) {
        // First visit ever: start the 15s clock and save the timestamp
        localStorage.setItem('first_visit_timestamp', Date.now().toString());
        const timer = setTimeout(() => setIsLocked(true), 15000);
        return () => clearTimeout(timer);
      } else {
        // They refreshed or came back. How much of their 15s is left?
        const timeElapsed = Date.now() - parseInt(firstVisit, 10);
        
        if (timeElapsed >= 15000) {
          // Their 15 seconds are completely up! Lock immediately.
          setIsLocked(true);
        } else {
          // They refreshed during the teaser. Give them exactly what's left.
          const timeRemaining = 15000 - timeElapsed;
          const timer = setTimeout(() => setIsLocked(true), timeRemaining);
          return () => clearTimeout(timer);
        }
      }
    }
  }, []);

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
            text="Ek naye safar ki shuruaat karein — aapsi samajh aur sukoon ke liye."
            buttonText="Haan, Mujhe Shuruaat Karni Hai →"
            triggerPayment={triggerPayment}
            bgColor="linear-gradient(to bottom, var(--surface-deep) 0%, var(--surface) 100%)"
          />
          
          <MechanismSection />
          <TransformationSection />
          
          <CTABanner 
            text="30 din mein aapke ghar ka mahaul badal sakta hai. Kya aap taiyar hain?"
            buttonText="Apna Pehla Kadam Uthayein →"
            triggerPayment={triggerPayment}
            bgColor="linear-gradient(to bottom, var(--surface) 0%, var(--surface-deep) 100%)"
          />
          
          <ProgramBreakdownSection />
          <AboutCoachSection />
          <AchievementsSection />
          
          <CTABanner 
            text="1,500+ families ne yeh kiya. Ab aapki baari hai."
            buttonText="Apni Seat Reserve Karo →"
            triggerPayment={triggerPayment}
            bgColor="var(--surface-deep)"
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
