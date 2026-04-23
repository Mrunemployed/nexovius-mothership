import { motion } from 'motion/react';
import { services } from '../constants/services';
import { ArrowUpRight, Globe, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  // Focus only on non-Web Development services for this "brief" section
  const secondaryServices = services.filter(s => s.id !== "web-dev");

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-bg">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-16"
        >
          <div className="text-slate-500 font-mono text-[10px] uppercase tracking-[0.4em] font-black mb-4">Everything Else You Need</div>
          <h2 className="text-3xl md:text-5xl font-display font-black text-white tracking-tighter uppercase leading-none">
            COMPLETE <span className="text-slate-600">SOLUTIONS.</span>
          </h2>
        </motion.div>

        <div className="columns-2 lg:columns-3 gap-4 sm:gap-8 space-y-4 sm:space-y-8">
          {secondaryServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Link
                to={`/services/${service.id}`}
                className="break-inside-avoid glass-premium rounded-2xl sm:rounded-[2.5rem] border-white/5 group hover:bg-white/5 transition-all duration-500 overflow-hidden flex flex-col hover:border-blue-500/30 shadow-2xl hover:shadow-blue-500/10 cursor-pointer"
              >
                {/* Context-aware card styling with pronounced aspect ratios */}
                <div className={`relative overflow-hidden ${
                  index % 4 === 0 ? 'aspect-[3/4]' : 
                  index % 4 === 1 ? 'aspect-square' : 
                  index % 4 === 2 ? 'aspect-[4/3]' : 'aspect-video'
                }`}>
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-30 group-hover:opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-transparent" />
                  <div className="absolute bottom-3 sm:bottom-8 left-3 sm:left-8 right-3 sm:right-8">
                    <div className="w-6 h-6 sm:w-12 sm:h-12 glass rounded-md sm:rounded-2xl flex items-center justify-center border-white/10 group-hover:bg-blue-600 transition-all mb-2 sm:mb-6">
                        <service.icon className="w-3 h-3 sm:w-5 sm:h-5 text-blue-400 group-hover:text-white" />
                    </div>
                    <h3 className="text-sm sm:text-lg font-display font-black text-white uppercase tracking-tighter group-hover:text-blue-400 transition-colors line-clamp-2">
                      {service.title}
                    </h3>
                  </div>
                </div>

                <div className="p-4 sm:p-10 pt-4 sm:pt-6">
                  <p className="text-[10px] sm:text-xs text-slate-500 leading-relaxed group-hover:text-slate-400 transition-colors mb-4 sm:mb-6 font-light line-clamp-3">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {service.tags.map(tag => (
                      <span key={tag} className="text-[6px] sm:text-[8px] font-black uppercase tracking-widest text-slate-600 px-1.5 sm:px-3 py-0.5 sm:py-1 glass rounded-md border-white/5 group-hover:text-blue-400">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
