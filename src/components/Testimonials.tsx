import { motion } from 'motion/react';
import { Quote, Star, User, ShieldCheck, Zap } from 'lucide-react';

const testimonials = [
  {
    name: "SARAH JENKINS",
    role: "CTO @ TECHFLOW",
    content: "Nexovius transformed our infrastructure. Their ITOM expertise reduced our downtime by 40% in single quarter. Truly enterprise-grade strike team.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200"
  },
  {
    name: "DAVID CHEN",
    role: "FOUNDER @ GREENLABS",
    content: "The web application architected for us is not only stunning but hyper-optimized. Our engagement metrics increased 300% post-deployment.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200"
  },
  {
    name: "ELENA RODRIGUEZ",
    role: "MARKETING DIR @ GLOBAL",
    content: "Their technical SEO auditing is surgical. We saw a 150% rise in organic visibility through their precision implementation strategies.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-blue-500 font-mono text-[10px] uppercase tracking-[0.4em] font-black mb-4">Verification Logs</div>
            <h2 className="text-4xl md:text-6xl font-display font-black text-white tracking-tighter uppercase">
              CLIENT <span className="text-gradient-primary">VALIDATION</span>
            </h2>
          </motion.div>
          <div className="flex items-center gap-4 py-2 px-6 glass rounded-full border-white/5">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-bg overflow-hidden grayscale bg-slate-800">
                  <User className="w-full h-full p-1 text-slate-500" />
                </div>
              ))}
            </div>
            <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">
              50+ Verified Partners
            </div>
          </div>
        </div>

        <div className="columns-2 lg:columns-3 gap-3 sm:gap-8 space-y-3 sm:space-y-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="break-inside-avoid glass-premium p-4 sm:p-10 rounded-xl sm:rounded-[2.5rem] relative flex flex-col hover:bg-white/5 transition-all duration-500 group overflow-hidden"
            >
              <div className="absolute -right-6 -top-6 w-32 h-32 bg-blue-500/5 blur-3xl group-hover:bg-blue-500/10 transition-all" />
              
              <Quote className="w-5 h-5 sm:w-10 sm:h-10 text-blue-500/20 mb-3 sm:mb-8" />

              <div className="flex gap-1 mb-3 sm:mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-2 h-2 sm:w-3 sm:h-3 fill-blue-500/40 text-blue-500/40" />
                ))}
              </div>

              <blockquote className="text-[10px] sm:text-lg text-slate-400 leading-relaxed font-light mb-4 sm:mb-12 italic group-hover:text-slate-200 transition-colors line-clamp-4 sm:line-clamp-none">
                "{testimonial.content}"
              </blockquote>

              <div className="flex items-center gap-2 sm:gap-4 mt-auto">
                <div className="relative">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-6 h-6 sm:w-12 sm:h-12 rounded-full grayscale group-hover:grayscale-0 transition-all duration-500 border border-white/10"
                    referrerPolicy="no-referrer"
                  />
                  <ShieldCheck className="absolute -bottom-1 -right-1 w-2 h-2 sm:w-4 sm:h-4 text-blue-500 bg-bg rounded-full border border-white/10" />
                </div>
                <div>
                  <div className="text-[8px] sm:text-sm font-display font-black text-white group-hover:text-blue-400 transition-colors line-clamp-1">{testimonial.name}</div>
                  <div className="text-[6px] sm:text-[10px] uppercase tracking-widest text-slate-500 font-bold line-clamp-1">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
