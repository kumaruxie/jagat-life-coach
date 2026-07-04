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
                Bhugtan Safal Raha! 🎉
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
                Humne program ki details aur live cohort join karne ka link aapke email aur WhatsApp number par bhej diya hai.
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
                  ⚠️ <strong>Important Note:</strong> GHL automations email kabhi-kabhi <strong>Spam or Promotions folder</strong> mein chale jaate hain. Agar mail primary inbox mein na dikhe, toh please wahan check karke use <strong>"Not Spam"</strong> mark karein taaki aage ke live sessions ke links miss na hon.
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
                Theek Hai, Got It!
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
          quote="Career set tha. Ghar aate hi wahi tanaav... Lagta tha balance banana impossible hai. Jagat sir ki coaching ke baad pehli baar ghar mein sukoon aur khushi mehsus hui."
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
            text="1,500+ families ne yeh kiya. Ab aapki baari hai."
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
            quote="Mujhe laga tha ki rishton ko sudharna bohot complicated hoga. Jagat sir ke 3 steps itne practical hain ki pehli hi session se ghar ka mahaul instantly halka ho gaya."
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
            text="30 din mein aapke ghar ka mahaul badal sakta hai."
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
            text="Ek naye safar ki shuruaat karein — sukoon aur samajh ke liye."
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
