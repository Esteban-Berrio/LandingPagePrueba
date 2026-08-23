import { useEffect } from 'react';
import { artist } from './config/artist';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TattooStyles from './components/TattooStyles';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
//import Testimonials from './components/Testimonials';
import SocialLinks from './components/SocialLinks';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  useEffect(() => {
    document.title = `${artist.artisticName} | Tattoo`;
  }, []);

  return (
    <div className="min-h-screen bg-dark-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <TattooStyles />
        <Portfolio />
        <Process />
       {/* <Testimonials /> */}
        <SocialLinks />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
