'use client';

import { LanguageProvider } from '../contexts/LanguageContext';
import Nav from './Nav';
import Hero from './Hero';
import SocialProof from './SocialProof';
import ValueProp from './ValueProp';
import About from './About';
import Services from './Services';
import Experience from './Experience';
import Testimonials from './Testimonials';
import Location from './Location';
import FinalCTA from './FinalCTA';
import Contact from './Contact';
import Footer from './Footer';

export default function ClientLayout() {
  return (
    <LanguageProvider>
      <Nav />
      <main>
        <Hero />
        <SocialProof />
        <ValueProp />
        <About />
        <Services />
        <Experience />
        <Testimonials />
        <Location />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
