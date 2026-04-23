import { motion } from 'motion/react';
import Hero from '../components/Hero';
import WebFocus from '../components/WebFocus';
import Services from '../components/Services';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <WebFocus />
      <Services />
      <About />
      <Testimonials />
      <Contact />
    </>
  );
}
