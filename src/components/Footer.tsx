import { Github, Twitter, Linkedin, ArrowUp, Mail, Phone, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-24 relative overflow-hidden border-t border-white/5 bg-bg">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 mb-24">
          <div className="lg:col-span-5">
            <Link to="/" className="flex items-center gap-3 mb-8 group cursor-pointer">
              <div className="relative">
                <img 
                  src="/assets/nexovius-logo.png" 
                  alt="Nexovius Logo" 
                  className="h-10 w-auto transition-transform group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                    (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <div className="hidden w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-xl shadow-blue-500/20">
                  <span className="text-white font-black text-xl">N</span>
                </div>
              </div>
              <span className="text-2xl font-display font-black tracking-tighter text-white uppercase">NEXOVIUS</span>
            </Link>
            <p className="text-slate-500 text-lg leading-relaxed font-light max-w-md mb-12">
              We help local businesses grow with professional websites and simple, smart digital tools. We make the web work for you.
            </p>
            <div className="flex gap-4">
              {[Twitter, Github, Linkedin].map((Icon, i) => (
                <motion.a 
                  key={i} 
                  href="#" 
                  whileHover={{ y: -4, backgroundColor: "rgba(255,255,255,0.1)" }}
                  className="w-12 h-12 glass rounded-2xl flex items-center justify-center border-white/5 transition-colors group"
                >
                  <Icon className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
                </motion.a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 grid md:grid-cols-3 gap-12">
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-white mb-8 border-l-2 border-blue-500 pl-4">Explore</h4>
              <ul className="space-y-4">
                {[
                  { name: 'Home', path: '/' },
                  { name: 'About Us', path: '/about' },
                  { name: 'Our Services', path: '/services' },
                  { name: 'Contact Us', path: '/contact' }
                ].map(link => (
                  <li key={link.name}>
                    <Link to={link.path} className="flex items-center gap-2 text-slate-500 hover:text-white transition-colors group text-sm font-medium">
                      <ChevronRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-blue-500" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-white mb-8 border-l-2 border-blue-500 pl-4">Services</h4>
              <ul className="space-y-4">
                {[
                  { name: 'Websites', path: '/services#web-dev' },
                  { name: 'SEO Tools', path: '/services#seo' },
                  { name: 'Smart AI', path: '/services#ai-tools' },
                  { name: 'IT Help', path: '/services#it-support' }
                ].map(link => (
                  <li key={link.name}>
                    <Link to={link.path} className="flex items-center gap-2 text-slate-500 hover:text-white transition-colors group text-sm font-medium">
                      <ChevronRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-blue-500" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-white mb-8 border-l-2 border-blue-500 pl-4">Connect</h4>
              <div className="space-y-6">
                <div>
                  <div className="text-[10px] uppercase font-black tracking-widest text-slate-600 mb-1">Office</div>
                  <div className="text-sm font-medium text-slate-400 leading-relaxed">
                    Hinjewadi Phase 3, <br />
                    Pune, MH 411057
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                   <div className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors cursor-pointer">
                     <Mail className="w-4 h-4 text-blue-500" />
                     <span className="text-sm">hr@nexovius.com</span>
                   </div>
                   <div className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors cursor-pointer">
                     <Phone className="w-4 h-4 text-blue-500" />
                     <span className="text-sm">+91 7020078086</span>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-white/5 gap-8">
          <div className="text-[10px] uppercase tracking-widest font-black text-slate-600 outline-none">
            © {currentYear} NEXOVIUS. ALL RIGHTS RESERVED.
          </div>
          
          <motion.button 
            onClick={scrollToTop}
            whileHover={{ y: -2 }}
            className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-white transition-colors group"
          >
            Back to Top
            <div className="w-8 h-8 rounded-lg glass border-white/5 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
              <ArrowUp className="w-4 h-4" />
            </div>
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
