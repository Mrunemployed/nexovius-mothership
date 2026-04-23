import { motion } from 'motion/react';
import { services } from '../constants/services';
import { CheckCircle2, ArrowRight, Target, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border-white/10 mb-6">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400">Our Services</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-display font-black text-white leading-[0.9] mb-8 tracking-tighter uppercase">
            Built to <span className="text-gradient-primary">Excel.</span>
          </h1>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto font-light leading-relaxed">
            From your first website to advanced AI tools, we provide everything you need to dominate your local market.
          </p>
        </motion.div>

        <div className="columns-2 lg:columns-3 gap-4 sm:gap-10 space-y-4 sm:space-y-10">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -10 }}
            >
              <Link
                to={`/services/${service.id}`}
                className="break-inside-avoid glass-premium rounded-2xl sm:rounded-[2.5rem] border-white/5 overflow-hidden group hover:border-blue-500/30 transition-all duration-500 shadow-2xl hover:shadow-blue-500/10 cursor-pointer flex flex-col"
              >
                {/* Image Section with pronounced aspect ratios */}
                <div className={`relative overflow-hidden ${
                  i % 4 === 0 ? 'aspect-[3/4]' : 
                  i % 4 === 1 ? 'aspect-square' : 
                  i % 4 === 2 ? 'aspect-[4/3]' : 'aspect-video'
                }`}>
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-1000 group-hover:opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/20 to-transparent" />
                  <div className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6 right-3 sm:right-6">
                    <div className="w-7 h-7 sm:w-12 sm:h-12 glass rounded-md sm:rounded-2xl flex items-center justify-center border-white/10 mb-2 sm:mb-4 group-hover:bg-blue-600 transition-all duration-500">
                      <service.icon className="w-3.5 h-3.5 sm:w-6 sm:h-6 text-blue-400 group-hover:text-white" />
                    </div>
                    <h2 className="text-sm sm:text-2xl font-display font-black text-white uppercase tracking-tighter leading-none group-hover:text-blue-400 transition-colors line-clamp-1 sm:line-clamp-2">
                      {service.title}
                    </h2>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-4 sm:p-8">
                  <p className="text-slate-400 text-[10px] sm:text-sm leading-relaxed mb-4 sm:mb-8 font-light group-hover:text-slate-200 transition-colors line-clamp-3">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-4 sm:mb-8 text-slate-500 text-[8px] uppercase tracking-widest font-black">
                    Click to Read Insights
                  </div>
                  <div className="w-full py-3 sm:py-4 glass-premium group-hover:bg-blue-600 text-white font-black rounded-xl sm:rounded-2xl transition-all flex items-center justify-center gap-2 sm:gap-3 text-[7px] sm:text-[10px] uppercase tracking-widest border-white/10 group-hover:border-blue-500/50">
                    Read Case Study
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
