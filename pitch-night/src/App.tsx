/**
 * Pitch Night — Landing Page Main Assembly
 */

import { useEffect } from 'react';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Gallery from './components/Gallery';
import ForWho from './components/ForWho';
import EventDetails from './components/EventDetails';
import RegistrationForm from './components/RegistrationForm';
import Footer from './components/Footer';

export default function App() {
  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll('.fade-up, .image-reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="bg-surface selection:bg-yc-orange selection:text-white">
      <Hero />
      <HowItWorks />
      <Gallery />
      <ForWho />
      <EventDetails />
      <RegistrationForm />
      <Footer />
    </main>
  );
}
