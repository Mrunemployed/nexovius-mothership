import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { services } from '../constants/services';
import { ArrowLeft, Target, Globe } from 'lucide-react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { useEffect } from 'react';
import 'katex/dist/katex.min.css';

export default function ServiceDetailPage() {
  const { id } = useParams();
  const service = services.find(s => s.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!service) {
    return (
      <div className="min-h-screen pt-32 flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-4xl font-display font-black mb-4 uppercase">Intel Not Found</h1>
          <Link to="/services" className="text-blue-500 hover:underline">Return to Workspace</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-20 bg-bg selection:bg-blue-500/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link 
            to="/services" 
            className="inline-flex items-center gap-2 group text-slate-500 hover:text-white transition-colors"
          >
            <div className="w-8 h-8 rounded-full glass flex items-center justify-center border-white/10 group-hover:bg-blue-600 transition-all">
              <ArrowLeft className="w-4 h-4" />
            </div>
            <span className="text-xs font-black uppercase tracking-widest">Back to Library</span>
          </Link>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_400px] gap-8 md:gap-12 items-start min-w-0 w-full overflow-hidden">
          {/* Main Content Area */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8 md:space-y-12 min-w-0 w-full overflow-hidden"
          >
            {/* Hero Image Section */}
            <div className="relative h-[30vh] sm:h-[40vh] md:h-[60vh] rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[3rem] overflow-hidden group shadow-2xl">
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/20 to-transparent" />
              <div className="absolute bottom-10 left-10 right-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center border-blue-500/40">
                    <service.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <span className="text-[10px] md:text-sm font-black uppercase tracking-[0.4em] text-blue-400">Nexovius Intel Report</span>
                </div>
                <h1 className="text-3xl md:text-7xl font-display font-black text-white uppercase tracking-tighter leading-[0.9]">
                  {service.title}
                </h1>
              </div>
            </div>

            {/* Article Content */}
            <div className="glass-premium rounded-[1.5rem] sm:rounded-[2.5rem] p-6 sm:p-12 md:p-16 border-white/5 bg-[#03040b]/40 overflow-hidden min-w-0 w-full">
              <div className="markdown-body prose prose-invert !max-w-full prose-h1:text-white prose-h1:font-display prose-h1:font-black prose-h1:uppercase prose-h1:tracking-tighter prose-h1:text-2xl sm:prose-h1:text-4xl prose-p:text-slate-300 prose-p:leading-relaxed prose-p:text-sm sm:prose-p:text-lg prose-strong:text-blue-400 break-words min-w-0 w-full overflow-x-hidden">
                <Markdown 
                  remarkPlugins={[remarkGfm, remarkMath]} 
                  rehypePlugins={[rehypeKatex]}
                >
                  {service.article}
                </Markdown>
              </div>
            </div>
          </motion.div>

          {/* Sticky Sidebar */}
          <motion.aside
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:sticky lg:top-32 space-y-8 min-w-0 w-full"
          >
            {/* Metrics Panel */}
            <div className="glass-premium rounded-[2rem] p-8 md:p-10 border-white/5 space-y-10 shadow-2xl relative overflow-hidden">
               {/* Accent decoration */}
               <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/10 rounded-full blur-[60px]" />
               
               <div>
                 <div className="flex items-center gap-3 mb-8 text-blue-400 font-black">
                   <Target className="w-5 h-5" />
                   <span className="text-xs uppercase tracking-[0.3em]">Analytical KPIs</span>
                 </div>
                 
                 <div className="space-y-6">
                   {service.tags.map(tag => (
                     <div key={tag} className="group">
                        <div className="flex justify-between items-center mb-2">
                           <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest group-hover:text-slate-300 transition-colors">{tag}</span>
                           <span className="text-[10px] font-black text-blue-500">100%</span>
                        </div>
                        <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                           <motion.div 
                             initial={{ width: 0 }}
                             whileInView={{ width: '100%' }}
                             transition={{ duration: 1.5, ease: "easeOut" }}
                             className="h-full bg-gradient-to-r from-blue-600 to-blue-400 shadow-[0_0_10px_rgba(37,99,235,0.5)]"
                           />
                        </div>
                     </div>
                   ))}
                 </div>
               </div>

               <div className="pt-8 border-t border-white/5">
                 <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                   <Globe className="w-6 h-6 text-blue-500 mb-4" />
                   <div className="text-xs font-black text-white mb-2 uppercase tracking-widest">Enterprise Validation</div>
                   <p className="text-xs text-slate-500 leading-relaxed font-light">
                     Data derived from multi-region edge implementations with 99.99% architecture reliability patterns.
                   </p>
                 </div>
               </div>

               <Link 
                 to="/contact"
                 className="block w-full py-5 bg-white text-black text-xs font-black uppercase tracking-[0.2em] rounded-2xl text-center hover:bg-blue-600 hover:text-white transition-all shadow-2xl active:scale-[0.98]"
               >
                 Schedule Consultation
               </Link>
            </div>

            {/* Quick Context Card */}
            <div className="glass rounded-[2rem] p-8 border-white/5 bg-blue-500/5">
               <h4 className="text-white font-black uppercase tracking-widest text-[10px] mb-4">Architecture Brief</h4>
               <p className="text-[11px] text-slate-400 leading-relaxed italic">
                 "This report provides proprietary technical benchmarks for {service.title}. Implementations are handled strictly via our automated CI/CD pipeline."
               </p>
            </div>
          </motion.aside>
        </div>
      </div>
    </div>
  );
}
