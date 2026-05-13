import Header from './components/Header';
import HeroSection from './components/HeroSection';
import VSLSection from './components/VSLSection';
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

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <HeroSection />
        <VSLSection />
        <ProblemSection />
        <AgitateSection />
        <MechanismSection />
        <TransformationSection />
        <ProgramBreakdownSection />
        <AboutCoachSection />
        <TestimonialsSection />
        <PricingSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
