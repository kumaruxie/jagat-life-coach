import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import AgitateSection from './components/AgitateSection';
import MechanismSection from './components/MechanismSection';
import TransformationSection from './components/TransformationSection';
import ProgramBreakdownSection from './components/ProgramBreakdownSection';
import AboutCoachSection from './components/AboutCoachSection';
import TestimonialsSection from './components/TestimonialsSection';
import PricingSection from './components/PricingSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import './App.css';

import GatedOverlay from './components/GatedOverlay';

function App() {
  const [isLocked, setIsLocked] = useState(() => !localStorage.getItem('site_unlocked'));

  const triggerPayment = () => {
    // Redirecting directly to the client's Razorpay Payment Link
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
        {/* <VSLSection triggerPayment={triggerPayment} /> */}
        <ProblemSection />
        <AgitateSection />
        <MechanismSection />
        <TransformationSection />
        <ProgramBreakdownSection />
        <AboutCoachSection />
        <TestimonialsSection />
        <PricingSection triggerPayment={triggerPayment} />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
