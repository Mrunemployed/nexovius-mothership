import { motion, useMotionValue, useSpring, useTransform, Variants } from 'motion/react';
import { ArrowRight, ChevronRight, Globe, Sparkles, Terminal, Code2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  
  // Mouse tracking for interactivity
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
      {/* Background Layers */}
      <div className="absolute inset-0 bg-dot-grid z-0 opacity-40" />
      <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-blue-600/10 to-transparent z-0">
        <div className="absolute -top-48 left-1/2 -translate-x-1/2 w-full max-w-[1000px] aspect-square hero-glow blur-[120px] opacity-50" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10 w-full">
        <motion.div
           variants={containerVariants}
           initial="hidden"
           animate="visible"
           className="text-center lg:text-left relative"
        >
          {/* Decorative Floating Icons */}
          <motion.div 
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -left-10 opacity-20 pointer-events-none hidden xl:block"
          >
            <Code2 className="w-12 h-12 text-blue-500" />
          </motion.div>
          <motion.div 
            animate={{ 
              y: [0, 15, 0],
              rotate: [0, -10, 0]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-10 right-0 opacity-20 pointer-events-none hidden xl:block"
          >
            <Globe className="w-16 h-16 text-purple-500" />
          </motion.div>

          <h1 className="mt-10 text-4xl sm:text-7xl lg:text-8xl font-display font-black leading-[0.9] mb-8 text-white tracking-tighter uppercase relative">
            Modern <br />
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-gradient-primary inline-block"
            >
              Websites.
            </motion.span>
            
            {/* Animated Decorator */}
            <motion.div 
               animate={{ 
                 scale: [1, 1.2, 1],
                 opacity: [0.2, 0.4, 0.2],
                 rotate: 360
               }}
               transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
               className="absolute -top-10 -right-10 sm:-top-20 sm:-right-20 w-40 h-40 border border-blue-500/10 rounded-full hidden lg:block"
            />
          </h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-base sm:text-xl text-slate-400 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light"
          >
            We build fast, professional websites and tools that help small businesses get more customers and save time. We handle the technology so you can focus on your business.
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5"
          >
            <Link 
              to="/contact"
              className="w-full sm:w-auto bg-white text-black font-black py-4 px-10 rounded-2xl transition-all flex items-center justify-center gap-3 text-xs uppercase tracking-widest shadow-2xl hover:shadow-blue-500/20 group"
            >
              Get Started Now
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/portfolio"
              className="w-full sm:w-auto glass border-white/10 text-white font-black py-4 px-10 rounded-2xl transition-all flex items-center justify-center gap-3 text-xs uppercase tracking-widest group"
            >
              See Our Work
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="mt-16 flex flex-wrap items-center justify-center lg:justify-start gap-8 opacity-30"
          >
            <div className="flex gap-8 items-center grayscale hover:grayscale-0 transition-all duration-500">
               <div className="flex items-center gap-2">
                 <Terminal className="w-4 h-4" />
                 <span className="text-[10px] font-black uppercase tracking-widest">Fast Loading</span>
               </div>
               <div className="flex items-center gap-2">
                 <Code2 className="w-4 h-4" />
                 <span className="text-[10px] font-black uppercase tracking-widest">Secure Code</span>
               </div>
               <div className="flex items-center gap-2">
                 <Globe className="w-4 h-4" />
                 <span className="text-[10px] font-black uppercase tracking-widest">Google Ready</span>
               </div>
            </div>
          </motion.div>
        </motion.div>

        {/* SOPHISTICATED HOLOGRAPHIC ARCHITECTURE CONSOLE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          className="relative hidden lg:block h-[600px]"
        >
          <div className="relative w-full h-full perspective-[1000px]">
            <motion.div 
              style={{ 
                rotateX: mousePos.y * -0.5, 
                rotateY: mousePos.x * 0.5,
                transformStyle: "preserve-3d"
              }}
              className="relative w-full h-full flex items-center justify-center pointer-events-none"
            >
              {/* Central Neural Core */}
              <motion.div 
                animate={{ 
                  boxShadow: [
                    "0 0 40px rgba(37,99,235,0.2)",
                    "0 0 80px rgba(37,99,235,0.4)",
                    "0 0 40px rgba(37,99,235,0.2)"
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute w-64 h-64 glass-premium rounded-[3rem] border-blue-500/30 flex items-center justify-center p-8 overflow-hidden"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.1)_0,transparent_70%)]" />
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-full h-full border border-dashed border-blue-500/20 rounded-full flex items-center justify-center"
                >
                  <motion.div 
                    animate={{ rotate: -720 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="w-4/5 h-4/5 border border-white/5 rounded-full flex items-center justify-center"
                  >
                    <Sparkles className="w-12 h-12 text-blue-400 opacity-50" />
                  </motion.div>
                </motion.div>
                
                {/* Real-time pulse lines */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 2, opacity: [0, 0.5, 0] }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity, 
                        delay: i * 1,
                        ease: "easeOut"
                      }}
                      className="absolute w-32 h-32 border border-blue-500/30 rounded-full"
                    />
                  ))}
                </div>
              </motion.div>

              {/* Floating Architecture Layers */}
              {[
                { title: 'SECURITY_LAYER', value: 'AES_256', color: 'blue', x: -140, y: -160, rotate: -15 },
                { title: 'LATENCY_MS', value: '42.0', color: 'purple', x: 160, y: -120, rotate: 12 },
                { title: 'ACTIVE_NODES', value: '1,204', color: 'emerald', x: -120, y: 160, rotate: 10 },
                { title: 'UPTIME_PCT', value: '99.99', color: 'blue', x: 180, y: 140, rotate: -8 }
              ].map((layer, i) => (
                <motion.div
                  key={i}
                  animate={{ 
                    x: layer.x + (mousePos.x * (i + 1) * 0.2),
                    y: layer.y + (mousePos.y * (i + 1) * 0.2),
                    z: 50 + (i * 20),
                    rotateZ: layer.rotate
                  }}
                  className="absolute glass-premium p-4 md:p-6 rounded-2xl border-white/10 shadow-2xl min-w-[180px]"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`w-1.5 h-1.5 rounded-full bg-${layer.color}-500 animate-pulse`} />
                    <span className="text-[9px] font-mono text-slate-500 font-bold uppercase tracking-widest">{layer.title}</span>
                  </div>
                  <div className="text-xl md:text-2xl font-display font-black text-white tracking-tight">{layer.value}</div>
                </motion.div>
              ))}

              {/* Connecting Fiber Lines (Visual Decor) */}
              <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none">
                <motion.line 
                  x1="50%" y1="50%" x2="20%" y2="20%" 
                  stroke="currentColor" strokeWidth="1" 
                  className="text-blue-500"
                />
                <motion.line 
                  x1="50%" y1="50%" x2="80%" y2="30%" 
                  stroke="currentColor" strokeWidth="1" 
                   className="text-purple-500"
                />
                <motion.line 
                  x1="50%" y1="50%" x2="30%" y2="80%" 
                  stroke="currentColor" strokeWidth="1" 
                   className="text-emerald-500"
                />
              </svg>
            </motion.div>

            {/* Orbiting Ring system */}
            <div className="absolute inset-0 rounded-full border border-white/5 rotate-45 scale-110 pointer-events-none" />
            <div className="absolute inset-0 rounded-full border border-white/5 -rotate-45 scale-90 pointer-events-none" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
