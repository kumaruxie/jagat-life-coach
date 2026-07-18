import { lazy, Suspense, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import AboutCoachSection from './components/AboutCoachSection';
import InlineReview from './components/InlineReview';
import { smoothScrollTo } from './utils/scroll';
import { getWhatsAppUrl } from './utils/whatsapp';
import './App.css';

const AgitateSection = lazy(() => import('./components/AgitateSection'));
const CTABanner = lazy(() => import('./components/CTABanner'));
const MechanismSection = lazy(() => import('./components/MechanismSection'));
const TransformationSection = lazy(() => import('./components/TransformationSection'));
const ProgramBreakdownSection = lazy(() => import('./components/ProgramBreakdownSection'));
const AchievementsSection = lazy(() => import('./components/AchievementsSection'));
const VideoTestimonialsSection = lazy(() => import('./components/VideoTestimonialsSection'));
const TextTestimonialsSection = lazy(() => import('./components/TextTestimonialsSection'));
const PricingSection = lazy(() => import('./components/PricingSection'));
const FAQSection = lazy(() => import('./components/FAQSection'));
const ContactSection = lazy(() => import('./components/ContactSection'));
const Footer = lazy(() => import('./components/Footer'));
const CaseStudiesSection = lazy(() => import('./components/CaseStudiesSection'));


// Minimal loading fallback that matches the dark theme
const SectionFallback = () => (
  <div style={{ minHeight: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <div style={{ width: '24px', height: '24px', border: '2px solid var(--border)', borderTop: '2px solid var(--emerald)', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} />
  </div>
);

function App() {
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  useEffect(() => {

    // Check URL parameters for ?payment=success
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('payment') === 'success') {
      setShowSuccessPopup(true);
      
      // Fire Purchase event on Meta Pixel
      if (window.fbq) {
        window.fbq('track', 'Purchase', { value: 1997, currency: 'INR' });
      }
      
      // Clean up the URL so the popup doesn't reappear on page reload
      const newUrl = window.location.pathname;
      window.history.replaceState({}, document.title, newUrl);
    }

    // Force scroll to top on reload
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  const triggerPayment = () => {
    const WHATSAPP_NUMBER = '917011900562';
    const WHATSAPP_MSG = "Hi Jagat! I just visited your website and would love to connect about the \"Conflict to Clarity\" 1:1 coaching program. I'm ready to clear the fog, resolve my internal conflicts, and start taking charge of my future. Let's chat!";
    const whatsappUrl = getWhatsAppUrl(WHATSAPP_NUMBER, WHATSAPP_MSG);

    if (window.fbq) {
      window.fbq('track', 'Lead');
    }
    
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="app-container">
      <AnimatePresence>
        {showSuccessPopup && (
          <motion.div 
            className="success-overlay" 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 10001,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px',
              backgroundColor: 'rgba(20, 24, 32, 0.9)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)'
            }}
          >
            <motion.div 
              className="success-modal"
              initial={{ scale: 0.9, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ 
                type: "spring",
                damping: 25,
                stiffness: 350,
                delay: 0.05
              }}
              style={{
                position: 'relative',
                maxWidth: '480px',
                width: '100%',
                backgroundColor: 'var(--surface-raised, #232b3b)',
                padding: '40px',
                borderRadius: '24px',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                boxShadow: '0 30px 60px rgba(0,0,0,0.6), 0 0 20px rgba(16, 185, 129, 0.1)',
                textAlign: 'center'
              }}
            >
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                backgroundColor: 'rgba(16, 185, 129, 0.1)',
                color: 'var(--emerald, #10b981)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px auto',
                fontSize: '32px',
                fontWeight: 'bold'
              }}>
                ✓
              </div>
              
              <h2 style={{ 
                fontSize: '26px', 
                color: 'var(--silver, #e2e8f0)', 
                marginBottom: '8px', 
                fontFamily: 'Newsreader, Georgia, serif' 
              }}>
                Payment Successful! 🎉
              </h2>
              
              <p style={{ 
                color: 'var(--emerald, #10b981)', 
                fontSize: '15px', 
                fontWeight: 600, 
                marginBottom: '20px' 
              }}>
                Your seat in the Founding Batch is confirmed.
              </p>
              
              <p style={{ 
                color: 'var(--slate, #94a3b8)', 
                fontSize: '14.5px', 
                lineHeight: '1.6', 
                marginBottom: '24px' 
              }}>
                We've sent the program details and your live cohort joining link to your email and WhatsApp number.
              </p>
              
              <div style={{
                backgroundColor: 'rgba(239, 68, 68, 0.08)',
                border: '1px solid rgba(239, 68, 68, 0.25)',
                borderRadius: '12px',
                padding: '16px',
                marginBottom: '28px',
                textAlign: 'left'
              }}>
                <p style={{ 
                  color: '#b91c1c',
                  fontSize: '13px', 
                  margin: 0, 
                  lineHeight: '1.5',
                  fontWeight: 500
                }}>
                  ⚠️ <strong>Important Note:</strong> Automated emails sometimes land in your <strong>Spam or Promotions folder</strong>. If you don't see the email in your primary inbox, please check there and mark it as <strong>"Not Spam"</strong> so you don't miss future live session links.
                </p>
              </div>
              
              <button 
                className="btn-primary" 
                onClick={() => setShowSuccessPopup(false)}
                style={{ 
                  width: '100%', 
                  padding: '16px', 
                  fontSize: '15px', 
                  fontWeight: 700 
                }}
              >
                Okay, Got It!
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Header triggerPayment={triggerPayment} />
      <main>
        <HeroSection triggerPayment={triggerPayment} />
        
        {/* Above-the-fold content loads instantly with the main bundle */}
        <ProblemSection />
        <InlineReview
          quote="My career was sorted, but the moment I stepped home, the same stress was waiting. Balancing both felt impossible. After Jagat Sir's coaching, I felt genuine peace and happiness at home for the first time."
          author="Yogita"
          bgGradient="var(--surface)"
        />

        <AboutCoachSection />

        {/* Defer remaining sections in independent Suspense blocks */}
        <Suspense fallback={<SectionFallback />}>
          <AchievementsSection />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <CTABanner 
            text="1,500+ families have already done it. Now it's your turn."
            buttonText="Request Callback →"
            triggerPayment={triggerPayment}
            bgColor="var(--surface)"
          />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <AgitateSection />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <MechanismSection />
          <InlineReview
            quote="I thought fixing relationships would be incredibly complicated. Jagat Sir's 3 steps are so practical that the atmosphere at home felt lighter from the very first session."
            author="Vikram Singh"
            bgGradient="var(--surface)"
          />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <CaseStudiesSection />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <TransformationSection />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <CTABanner 
            text="Your home's atmosphere can transform in just 30 days."
            buttonText="Connect with Us →"
            triggerPayment={triggerPayment}
            bgColor="var(--surface)"
          />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <ProgramBreakdownSection />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <VideoTestimonialsSection />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <PricingSection triggerPayment={triggerPayment} />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <TextTestimonialsSection />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <CTABanner 
            text="Begin a new journey — toward peace and understanding."
            buttonText="Talk to Jagat's Team →"
            triggerPayment={triggerPayment}
            bgColor="var(--surface)"
          />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <FAQSection />
          <ContactSection />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
