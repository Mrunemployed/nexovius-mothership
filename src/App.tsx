/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, useScroll, useSpring, AnimatePresence } from 'motion/react';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import PortfolioPage from './pages/PortfolioPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-[#03040b] selection:bg-blue-500/30 selection:text-blue-200 relative overflow-x-hidden">
        {/* Premium Visual Layers */}
        <div className="noise-overlay" />
        <motion.div 
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-400 z-[100] origin-left"
          style={{ scaleX }}
        />
        
        <Navbar />
        
        <main className="relative z-10">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/:id" element={<ServiceDetailPage />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </AnimatePresence>
        </main>
        
        <Footer />
        <ScrollToTopButton />

        {/* Global Background Accents */}
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
          <div className="absolute top-[20%] -left-[10%] w-[40%] h-[40%] bg-blue-600/5 rounded-full blur-[120px]" />
          <div className="absolute top-[60%] -right-[10%] w-[40%] h-[40%] bg-purple-600/5 rounded-full blur-[120px]" />
        </div>
      </div>
    </Router>
  );
}


