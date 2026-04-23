import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ scale: 1.1, backgroundColor: '#3b82f6' }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-[90] w-14 h-14 glass rounded-2xl flex items-center justify-center border-white/10 text-white shadow-2xl hover:text-white transition-colors group p-0"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6 group-hover:animate-bounce" />
          
          {/* Subtle Glow Effect */}
          <div className="absolute inset-0 rounded-2xl bg-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
