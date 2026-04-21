// Import components here
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import SocialProof from '../components/SocialProof';
import Recognition from '../components/Recognition';
import About from '../components/About';
import Courses from '../components/Courses';
import Benefits from '../components/Benefits';
import Schedule from '../components/Schedule';
import Testimonials from '../components/Testimonials';
import FinalCTA from '../components/FinalCTA';

export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <SocialProof />
      <Recognition />
      <About />
      <Courses />
      <Benefits />
      <Schedule />
      <Testimonials />
      <FinalCTA />
    </div>
  );
}
