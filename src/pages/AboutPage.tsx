import { motion } from 'motion/react';
import { Target, Users, Sparkles, Heart, Zap, Globe } from 'lucide-react';

const values = [
  {
    title: 'Customer First',
    desc: 'Everything we build starts with one question: "How does this help your business?"',
    icon: Users
  },
  {
    title: 'Simplicity',
    desc: 'We make technology easy to understand. You focus on your work; we handle the rest.',
    icon: Target
  },
  {
    title: 'Modern Tools',
    desc: 'We use the latest technology to give your local business a competitive edge.',
    icon: Sparkles
  },
  {
    title: 'Quality',
    desc: 'We never use generic templates. Every pixel is crafted for your specific needs.',
    icon: Heart
  }
];

export default function AboutPage() {
  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border-white/10 mb-6">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400">Our Mission</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-display font-black text-white leading-[0.9] mb-8 tracking-tighter uppercase">
            Built for <span className="text-gradient-primary">Growth.</span>
          </h1>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto font-light leading-relaxed">
            At Nexovius, we believe that small businesses are the heartbeat of the community. Our goal is to empower you with the same high-level technology used by global giants.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-5xl font-display font-black text-white uppercase tracking-tight">Our Philosophy</h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              We started Nexovius because we saw too many small business owners struggling with slow websites and complicated tools. We wanted to change that.
            </p>
            <p className="text-slate-400 text-lg leading-relaxed">
              Our process is simple: we listen to your goals, we build what you need, and we support you every step of the way. We are your technical partners, helping you navigate the digital landscape with confidence.
            </p>
            <div className="flex gap-10 pt-10">
               <div>
                 <div className="text-4xl font-display font-black text-white">Local</div>
                 <div className="text-[10px] uppercase text-slate-500 font-black tracking-widest mt-1">Focus</div>
               </div>
               <div className="w-px h-16 bg-white/5" />
               <div>
                 <div className="text-4xl font-display font-black text-white">Global</div>
                 <div className="text-[10px] uppercase text-slate-500 font-black tracking-widest mt-1">Quality</div>
               </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video glass-premium rounded-[2rem] overflow-hidden border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200" 
                alt="Our Team" 
                className="w-full h-full object-cover opacity-60"
              />
            </div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-600/20 blur-[80px] rounded-full" />
          </div>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-4 gap-8 space-y-8">
          {values.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
              className="break-inside-avoid glass p-10 rounded-[2.5rem] border-white/5 group transition-all duration-500"
            >
              <div className="w-12 h-12 glass rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-all">
                <v.icon className="w-5 h-5 text-blue-400 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-display font-black text-white mb-4 uppercase tracking-tight group-hover:text-blue-400 transition-colors">{v.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed font-light group-hover:text-slate-400 transition-colors">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
