import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown, Layout, Search, Bot, Code2, Zap, Headset } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Portfolio', path: '/portfolio' },
];

const serviceLinks = [
  { id: 'web-dev', name: 'Website Building', path: '/services#web-dev', icon: Layout },
  { id: 'seo', name: 'Get Found on Google', path: '/services#seo', icon: Search },
  { id: 'ai-tools', name: 'Smart AI Tools', path: '/services#ai-tools', icon: Bot },
  { id: 'cloud-apps', name: 'Business Software', path: '/services#cloud-apps', icon: Code2 },
  { id: 'automation', name: 'Automation', path: '/services#automation', icon: Zap },
  { id: 'it-support', name: 'Friendly IT Support', path: '/services#it-support', icon: Headset },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenu(false);
    setServicesOpen(false);
  }, [location]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${scrolled ? 'pt-0' : 'pt-0'}`}>
      <div className="w-full">
        <div className={`border-b border-white/10 flex items-center justify-between transition-all duration-500 ${scrolled ? 'py-5 px-6 lg:px-12 bg-[#03040b]/95 backdrop-blur-2xl shadow-2xl' : 'py-8 px-8 lg:px-16 bg-transparent border-transparent'}`}>
          
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <img 
                src="/assets/nexovius-logo.png" 
                alt="Nexovius Logo" 
                className="h-8 sm:h-10 w-auto object-contain transition-transform group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                  (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                }}
              />
              <div className="hidden w-8 sm:w-10 h-8 sm:h-10 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/20">
                <span className="text-white font-black text-xl">N</span>
              </div>
            </div>
            <div className="hidden sm:block">
              <span className="text-xl font-display font-black text-white tracking-tighter uppercase whitespace-nowrap">Nexovius</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8 lg:gap-12">
            {navLinks.map(link => (
              <Link 
                key={link.name}
                to={link.path}
                className={`text-[11px] font-black uppercase tracking-[0.2em] transition-all hover:text-blue-400 ${location.pathname === link.path ? 'text-blue-500' : 'text-slate-400'}`}
              >
                {link.name}
              </Link>
            ))}

            {/* Services Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <Link 
                to="/services"
                className={`text-[11px] font-black uppercase tracking-[0.2em] transition-all hover:text-blue-400 flex items-center gap-2 ${location.pathname === '/services' ? 'text-blue-500' : 'text-slate-400'}`}
              >
                Services
                <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
              </Link>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute top-full right-0 lg:-left-20 pt-4"
                  >
                    <div className="glass-premium p-3 rounded-[2rem] border-white/10 w-[300px] sm:w-[480px] shadow-[0_20px_70px_rgba(37,99,235,0.15)] overflow-hidden bg-[#03040b]/80">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                        {serviceLinks.map(service => (
                          <Link
                            key={service.name}
                            to={service.path}
                            className="flex items-center gap-3 p-2.5 rounded-2xl hover:bg-white/5 transition-all group/item border border-transparent hover:border-white/5"
                          >
                            <div className="w-8 h-8 glass rounded-xl flex items-center justify-center border-white/5 group-hover/item:border-blue-500/50 flex-shrink-0 bg-white/5">
                              <service.icon className="w-4 h-4 text-blue-400 group-hover/item:text-white transition-colors" />
                            </div>
                            <div className="flex flex-col">
                              <span className="text-[9px] font-black uppercase tracking-widest text-slate-300 group-hover/item:text-white transition-colors leading-none">{service.name}</span>
                              <span className="text-[7px] text-slate-500 mt-1 line-clamp-1 group-hover/item:text-slate-400 transition-colors">Business growth solutions</span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="hidden md:block">
            <Link to="/contact" className="bg-white text-black text-[10px] sm:text-[11px] font-black uppercase tracking-[0.2em] px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl transition-all hover:bg-blue-500 hover:text-white shadow-xl hover:shadow-blue-500/20 active:scale-95 block">
              Contact Us
            </Link>
          </div>

          <button 
            className="md:hidden glass p-2 rounded-xl border-white/10"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            {mobileMenu ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenu && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden px-6 mt-4 pointer-events-auto"
          >
            <div className="glass-premium rounded-3xl border border-white/10 p-8 flex flex-col gap-8 shadow-2xl bg-[#03040b]/90">
              <Link to="/" className="text-sm font-black uppercase tracking-widest text-white border-b border-white/5 pb-4">Home</Link>
              <Link to="/about" className="text-sm font-black uppercase tracking-widest text-white border-b border-white/5 pb-4">About</Link>
              <Link to="/portfolio" className="text-sm font-black uppercase tracking-widest text-white border-b border-white/5 pb-4">Portfolio</Link>
              <div className="flex flex-col gap-4">
                 <Link to="/services" className="text-sm font-black uppercase tracking-widest text-blue-400">Services</Link>
                 <div className="grid grid-cols-1 gap-2 pl-4">
                    {serviceLinks.map(s => (
                      <Link key={s.name} to={s.path} className="text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-white py-1">{s.name}</Link>
                    ))}
                 </div>
              </div>
              <Link to="/contact" className="bg-white text-black text-xs font-black uppercase tracking-widest py-4 rounded-2xl text-center">Contact Us</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
