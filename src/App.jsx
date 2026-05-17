import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import AgitateSection from './components/AgitateSection';
import CTABanner from './components/CTABanner';
import MechanismSection from './components/MechanismSection';
import TransformationSection from './components/TransformationSection';
import ProgramBreakdownSection from './components/ProgramBreakdownSection';
import AboutCoachSection from './components/AboutCoachSection';
import AchievementsSection from './components/AchievementsSection';
import TestimonialsSection from './components/TestimonialsSection';
import PricingSection from './components/PricingSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import './App.css';

import GatedOverlay from './components/GatedOverlay';

function App() {
  const [isLocked, setIsLocked] = useState(() => !localStorage.getItem('site_unlocked'));

  const triggerPayment = () => {
    /* ──────────────────────────────────────────────
       RAZORPAY LINK: Replace the URL below with 
       the LIVE payment link when you receive it.
       Currently in TEST MODE.
    ────────────────────────────────────────────── */
    window.location.href = "https://rzp.io/rzp/iV71t1VO";
  };

  return (
    <div className="app-container">
      <AnimatePresence>
        {isLocked && (
          <GatedOverlay onUnlock={() => setIsLocked(false)} />
        )}
      </AnimatePresence>

      <Header triggerPayment={triggerPayment} />
      <main>
        <HeroSection triggerPayment={triggerPayment} />
        <ProblemSection />
        <AgitateSection />
        
        {/* CTA 1: After Agitate, before Mechanism */}
        <CTABanner 
          text="Patterns decode kiye ja sakte hain. Pehla step yahi hai."
          buttonText="Start Your Transformation"
          triggerPayment={triggerPayment}
        />
        
        <MechanismSection />
        <TransformationSection />
        
        {/* CTA 2: After Transformation, before Program Breakdown */}
        <CTABanner 
          text="Ready to see what 30 days can do for your family?"
          buttonText="Join the Program"
          triggerPayment={triggerPayment}
        />
        
        <ProgramBreakdownSection />
        <AboutCoachSection />
        <AchievementsSection />
        
        {/* CTA 3: After Achievements, before Testimonials */}
        <CTABanner 
          text="1,500+ families transformed. Yours could be next."
          buttonText="Secure Your Spot"
          triggerPayment={triggerPayment}
        />
        
        <TestimonialsSection />
        <PricingSection triggerPayment={triggerPayment} />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
