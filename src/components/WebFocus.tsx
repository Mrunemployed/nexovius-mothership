import { motion, animate, useInView } from 'motion/react';
import { Monitor, Smartphone, Gauge, Layout, Zap, Cloud } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

function Counter({ to, duration = 2, decimals = 0 }: { to: number, duration?: number, decimals?: number }) {
  const [count, setCount] = useState(0);
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, to, {
        duration,
        onUpdate: (value) => setCount(value),
        ease: [0.33, 1, 0.68, 1], // easeOutQuart
      });
      return () => controls.stop();
    }
  }, [to, duration, isInView]);

  return <span ref={nodeRef}>{count.toFixed(decimals)}</span>;
}

const coreStats = [
  { label: 'Site Speed', value: 100, prefix: '< ', suffix: 'ms', icon: Gauge },
  { label: 'Mobile Score', value: 100, suffix: '/100', icon: Smartphone },
  { label: 'Uptime', value: 99.99, suffix: '%', decimals: 2, icon: Cloud }
];

const focusPoints = [
  {
    title: "BESPOKE ARCHITECTURE",
    desc: "We don't use templates. Every line of code is handwritten for maximum performance and security.",
    icon: Layout,
    color: "blue"
  },
  {
    title: "CONVERSION VELOCITY",
    desc: "UI/UX strategies designed to lower bounce rates and maximize user lifetime value.",
    icon: Zap,
    color: "purple"
  },
  {
    title: "SCALABLE SYSTEMS",
    desc: "Ready for global traffic with edge-computing deployments and serverless backends.",
    icon: Monitor,
    color: "emerald"
  }
];

export default function WebFocus() {
  return (
    <section className="py-24 relative overflow-hidden bg-bg">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Statistics Bar */}
        <div className="grid md:grid-cols-3 gap-8 mb-32 border-b border-white/5 pb-16">
          {coreStats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="flex items-center gap-5 group cursor-default"
            >
              <motion.div 
                whileHover={{ rotate: 10, scale: 1.1 }}
                className="w-14 h-14 glass rounded-2xl flex items-center justify-center border-white/10 group-hover:border-blue-500/50 group-hover:bg-blue-500/10 transition-all duration-300 shadow-lg group-hover:shadow-blue-500/20"
              >
                <stat.icon className="w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-colors" />
              </motion.div>
              <div className="overflow-hidden">
                <motion.div 
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.3, duration: 0.5 }}
                  className="text-3xl font-display font-black text-white group-hover:text-blue-400 transition-colors duration-300"
                >
                  {stat.prefix}
                  <Counter to={stat.value} decimals={stat.decimals} />
                  {stat.suffix}
                </motion.div>
                <motion.div 
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.4, duration: 0.5 }}
                  className="text-[10px] uppercase font-black tracking-widest text-slate-500 group-hover:text-slate-400 transition-colors duration-300"
                >
                  {stat.label}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-blue-500 font-mono text-[10px] uppercase tracking-[0.4em] font-black mb-4"
              >
                Our Expertise
              </motion.div>
              <h2 className="text-4xl md:text-6xl font-display font-black text-white tracking-tighter uppercase leading-tight mb-8">
                Helping You <br />
                <span className="text-gradient-primary">Grow Online.</span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed font-light mb-12 max-w-xl">
                We believe amazing websites shouldn't be complicated. We build simple, powerful digital homes for your business that work hard to get you noticed.
              </p>

              <div className="space-y-5">
                {['Custom Design (No Templates)', 'Lightning Fast Speed', 'Ready for more customers'].map((item, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + (i * 0.1) }}
                    className="flex items-center gap-3 group/item cursor-default"
                  >
                    <motion.div 
                      whileHover={{ width: 32 }}
                      className="w-4 h-px bg-blue-500 transition-all duration-300" 
                    />
                    <span className="text-xs font-black uppercase tracking-widest text-slate-300 group-hover/item:text-blue-400 transition-colors">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="flex-1 grid gap-8 w-full">
            {focusPoints.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                whileHover={{ y: -5, scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                className={`glass-premium p-8 rounded-4xl border-white/5 hover:border-blue-500/30 transition-all relative group overflow-hidden cursor-default shadow-2xl hover:shadow-blue-500/10 
                  ${i === 1 ? 'lg:translate-x-6' : i === 2 ? 'lg:-translate-x-3' : ''}`}
              >
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-blue-500/5 blur-3xl group-hover:bg-blue-500/20 transition-all duration-500" />
                <div className="flex gap-6 items-start relative z-10">
                  <motion.div 
                    whileHover={{ rotate: 15 }}
                    className="w-12 h-12 glass rounded-2xl flex items-center justify-center border-white/10 group-hover:border-blue-500/50 group-hover:bg-blue-500/20 transition-all shadow-lg"
                  >
                    <point.icon className="w-5 h-5 text-white group-hover:text-blue-400 transition-colors" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-display font-black text-white mb-2 tracking-tight group-hover:text-blue-400 transition-colors uppercase">{point.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed max-w-sm group-hover:text-slate-400 transition-colors font-light">{point.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
