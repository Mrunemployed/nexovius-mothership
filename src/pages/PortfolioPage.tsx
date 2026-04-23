import { motion } from 'motion/react';
import { portfolio } from '../constants/portfolio';
import { ExternalLink, ArrowUpRight, Globe } from 'lucide-react';
import { useEffect } from 'react';

export default function PortfolioPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-20 bg-bg overflow-x-hidden">
      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] aspect-square bg-blue-500/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] aspect-square bg-purple-500/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20 text-center lg:text-left"
        >
          <div className="text-blue-500 font-mono text-[10px] uppercase tracking-[0.4em] font-black mb-4">Case Studies</div>
          <h1 className="text-4xl md:text-7xl font-display font-black text-white tracking-tighter uppercase leading-[0.9] mb-8">
            PROVEN <br />
            <span className="text-gradient-primary">ARCHITECTURES.</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl leading-relaxed font-light">
            Explore our curated portfolio of high-performance digital platforms. From logistics to healthcare, we build tools that scale with your vision.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 auto-rows-[300px] md:auto-rows-[350px] gap-6 lg:gap-8">
          {portfolio.map((project, i) => {
            // Logic for Bento Grid Spans
            const isFeatured = i === 0; // First project is larger
            const isTall = i === 2; // Some are taller
            const isWide = i === 3; // Some are wider
            
            let gridClasses = "col-span-1 md:col-span-3 lg:col-span-4 row-span-1";
            if (isFeatured) gridClasses = "col-span-1 md:col-span-6 lg:col-span-8 row-span-2";
            if (isTall) gridClasses = "col-span-1 md:col-span-3 lg:col-span-4 row-span-2";
            if (isWide) gridClasses = "col-span-1 md:col-span-6 lg:col-span-8 row-span-1";

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                className={`group relative ${gridClasses}`}
              >
                <div className={`w-full h-full glass-premium rounded-[2.5rem] overflow-hidden border-white/5 bg-[#03040b]/40 shadow-2xl transition-all duration-700 flex flex-col ${
                  project.id === 'galaxy-packers' ? 'hover:border-orange-500/30' : 
                  project.id === 'photography-studio' ? 'hover:border-purple-500/30' :
                  project.id === 'atheria-real-estate' ? 'hover:border-emerald-500/30' :
                  project.id === 'luminia-bistro' ? 'hover:border-amber-500/30' :
                  project.id === 'kona-shopify' ? 'hover:border-yellow-500/30' :
                  project.id === 'lumina-salon' ? 'hover:border-pink-500/30' :
                  'hover:border-blue-500/30'
                }`}>
                  {/* Visual Layer */}
                  <div className="absolute inset-0 z-0">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-40 group-hover:opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#03040b] via-[#03040b]/40 to-transparent" />
                  </div>

                  {/* Content Layer */}
                  <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-8 h-8 glass rounded-xl flex items-center justify-center border-white/10 group-hover:border-white/30 transition-colors">
                           <project.icon className="w-4 h-4 text-blue-400 group-hover:text-white transition-colors" />
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">{project.category}</span>
                      </div>
                      
                      <h3 className={`font-display font-black text-white uppercase tracking-tighter leading-none mb-4 group-hover:text-blue-400 transition-colors ${isFeatured ? 'text-4xl md:text-6xl' : 'text-2xl md:text-3xl'}`}>
                        {project.title}
                      </h3>
                      
                      <p className={`text-slate-400 leading-relaxed font-light max-w-sm ${isFeatured ? 'text-lg opacity-80' : 'text-sm opacity-60'}`}>
                        {project.description}
                      </p>
                    </div>

                    <div className="flex items-end justify-between pt-6">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.slice(0, isFeatured ? 3 : 2).map(tag => (
                          <span key={tag} className="text-[8px] font-bold uppercase tracking-[0.1em] text-blue-400/70 px-3 py-1 glass rounded-lg border-white/5">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <a 
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 glass rounded-full flex items-center justify-center border-white/20 hover:bg-blue-600 hover:scale-110 transition-all group/btn"
                      >
                        <ArrowUpRight className="w-5 h-5 text-white" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}

          {/* Coming Soon / Interactive Filler */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="col-span-1 md:col-span-3 lg:col-span-4 glass rounded-[2.5rem] border-dashed border-white/10 flex flex-col items-center justify-center p-12 text-center group hover:border-blue-500/20 transition-all relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.05)_0,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="w-16 h-16 rounded-3xl bg-white/5 flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
               <Globe className="w-8 h-8 text-slate-500" />
            </div>
            <h3 className="text-xl font-display font-black text-slate-500 uppercase tracking-widest mb-2">Expanding <br/> The Network</h3>
            <p className="text-[10px] text-slate-600 uppercase tracking-widest font-black">Architecture Under Review</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
