import React from 'react';
import Navbar from './components/sections/Navbar';
import Hero from './components/sections/Hero';
import Logos from './components/sections/Logos';
import Services from './components/sections/Services';
import CTABanner from './components/sections/CTABanner';
import CaseStudies from './components/sections/CaseStudies';
import Process from './components/sections/Process';
import Team from './components/sections/Team';
import Testimonials from './components/sections/Testimonials';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';
import { useGSAPAnimations } from './hooks/useGSAPAnimations';

function App() {
  useGSAPAnimations();

  return (
    <div className="min-h-screen bg-white font-sans text-dark">
      <Navbar />
      <main>
        <Hero />
        <Logos />
        <Services />
        <CTABanner />
        <CaseStudies />
        <Process />
        <Team />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
