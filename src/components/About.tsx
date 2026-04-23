import { motion } from 'motion/react';
import { Lightbulb, Shield, Eye, Target, Sparkles, Building2, Terminal, Cpu } from 'lucide-react';

const values = [
  {
    title: 'Precision Tech',
    description: 'We don\'t just build; we engineer with surgical precision using the most efficient modern stacks.',
    icon: Terminal
  },
  {
    title: 'Enterprise Safety',
    description: 'Security is not an afterthought. Every line of code and infrastructure node is hardened by design.',
    icon: Shield
  },
  {
    title: 'Hyper-Efficiency',
    description: 'Automating the mundane and optimizing the core. We drive massive performance gains across the board.',
    icon: Cpu
  }
];

export default function About() {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.05),transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24 lg:mb-32">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border-white/10 mb-8">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400">Our Story</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-display font-black text-white leading-[0.9] mb-8 tracking-tighter uppercase focus-ring">
              Helping Your Business <br />
              <span className="text-blue-500 italic">Get Results</span>
            </h2>
            <div className="space-y-6 text-slate-400 text-base sm:text-lg font-light leading-relaxed max-w-xl mx-auto lg:mx-0">
              <p>
                Nexovius started with a simple idea: that every local business deserves a world-class online presence. We don't just build sites; we build <span className="text-white font-medium">customer engines</span> that work while you sleep.
              </p>
              <p>
                We take the stress out of technology. From professional web design to modern AI tools, we provide everything you need to grow your business in the modern world.
              </p>
            </div>
            
            <div className="mt-12 flex justify-center lg:justify-start gap-12">
              <div>
                <div className="text-3xl sm:text-4xl font-display font-black text-white mb-1">Founding</div>
                <div className="text-[9px] uppercase tracking-[0.2em] font-black text-slate-500">2025</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-display font-black text-white mb-1">Success</div>
                <div className="text-[9px] uppercase tracking-[0.2em] font-black text-slate-500">100% Commitment</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="aspect-square glass-premium rounded-[3rem] border-white/10 p-2 flex items-center justify-center relative overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200" 
                alt="System Integration" 
                className="w-full h-full object-cover rounded-[2.8rem] opacity-40 group-hover:scale-105 transition-transform duration-[5s]"
                referrerPolicy="no-referrer"
              />
              {/* Overlay elements */}
              <div className="absolute inset-0 bg-gradient-to-t from-bg to-transparent opacity-60" />
              
              <div className="absolute bottom-12 left-12 right-12">
                 <div className="flex items-center gap-4 border-l-2 border-blue-500 pl-6 py-2 glass-premium backdrop-blur-xl">
                   <div>
                     <div className="text-white font-bold leading-tight">SYSTEMS_ACTIVE</div>
                     <div className="text-[10px] text-slate-400 font-mono">Infrastructure health optimal</div>
                   </div>
                   <div className="ml-auto w-2 h-2 rounded-full bg-blue-500 animate-ping" />
                 </div>
              </div>
            </div>
            
            {/* Geometric accents */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-[80px]" />
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-purple-500/10 rounded-full blur-[100px]" />
          </motion.div>
        </div>

        {/* Value Core */}
        <div className="grid md:grid-cols-3 gap-12">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 glass border-white/10 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-all duration-500">
                  <value.icon className="w-5 h-5 text-blue-400 group-hover:text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-display font-black text-white mb-3 tracking-tight group-hover:text-blue-400 transition-colors">
                    {value.title}
                  </h4>
                  <p className="text-slate-500 leading-relaxed font-light group-hover:text-slate-400 transition-colors">
                    {value.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

