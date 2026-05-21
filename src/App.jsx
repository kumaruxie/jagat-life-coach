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
const VideoTestimonialsSection = lazy(() => import('./components/VideoTestimonialsSection'));
const TextTestimonialsSection = lazy(() => import('./components/TextTestimonialsSection'));
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

    // Clean up old localStorage keys from the previous Google Forms approach
    localStorage.removeItem('site_unlocked');
    localStorage.removeItem('first_visit_timestamp');

    // 3-hour re-show logic:
    // If user has submitted/closed the form, we store a timestamp.
    // If 3+ hours have passed (or no timestamp exists), show the form again.
    const THREE_HOURS_MS = 3 * 60 * 60 * 1000;
    const lastSubmitted = localStorage.getItem('ghl_form_submitted_at');

    const shouldShowForm = !lastSubmitted || 
      (Date.now() - parseInt(lastSubmitted, 10)) >= THREE_HOURS_MS;

    if (shouldShowForm) {
      // Clear the old timestamp so it's treated as fresh
      localStorage.removeItem('ghl_form_submitted_at');
      // Show form after 15 seconds of browsing
      const timer = setTimeout(() => setIsLocked(true), 15000);
      return () => clearTimeout(timer);
    }
  }, []);

  const triggerPayment = () => {
    window.location.href = "https://rzp.io/rzp/kmJwGTB";
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
            bgColor="var(--surface-deep)"
          />
          
          <MechanismSection />
          <TransformationSection />
          
          <CTABanner 
            text="30 din mein aapke ghar ka mahaul badal sakta hai. Kya aap taiyar hain?"
            buttonText="Apna Pehla Kadam Uthayein →"
            triggerPayment={triggerPayment}
            bgColor="var(--surface-deep)"
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
          
          <VideoTestimonialsSection />

          <PricingSection triggerPayment={triggerPayment} />
          
          <TextTestimonialsSection />
          
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
