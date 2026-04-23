import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageSquare, Terminal } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12 text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border-white/10 mb-6">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400">Get In Touch</span>
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-display font-black text-white leading-[0.9] mb-8 tracking-tighter uppercase whitespace-normal">
                 LET'S GET <br />
                 <span className="text-gradient-primary">STARTED</span>
              </h2>
              <p className="text-slate-400 text-base sm:text-lg leading-relaxed font-light max-w-md mx-auto lg:mx-0">
                Ready to take your business to the next level? Our team is here to help you build exactly what you need to succeed.
              </p>
            </motion.div>
            
            <div className="space-y-8 sm:space-y-12 flex flex-col items-center lg:items-start">
               <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 sm:gap-6 group text-center lg:text-left">
                  <div className="flex-shrink-0 w-12 h-12 glass border-white/10 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-all duration-500">
                    <Mail className="w-5 h-5 text-blue-400 group-hover:text-white" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-slate-500 font-black mb-1">Email Us</div>
                    <div className="text-lg sm:text-xl font-display font-black text-white group-hover:text-blue-400 transition-colors">hr@nexovius.com</div>
                  </div>
               </div>
               
               <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 sm:gap-6 group text-center lg:text-left">
                  <div className="flex-shrink-0 w-12 h-12 glass border-white/10 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-all duration-500">
                    <Phone className="w-5 h-5 text-blue-400 group-hover:text-white" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-slate-500 font-black mb-1">Call Us Anywhere</div>
                    <div className="text-lg sm:text-xl font-display font-black text-white group-hover:text-blue-400 transition-colors">+91 7020078086</div>
                  </div>
               </div>

               <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 sm:gap-6 group text-center lg:text-left">
                  <div className="flex-shrink-0 w-12 h-12 glass border-white/10 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-all duration-500">
                    <MapPin className="w-5 h-5 text-blue-400 group-hover:text-white" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-slate-500 font-black mb-1">Our Location</div>
                    <div className="text-lg sm:text-xl font-display font-black text-white group-hover:text-blue-400 transition-colors">Hinjewadi P3, Pune</div>
                  </div>
               </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-premium p-6 sm:p-10 lg:p-14 rounded-[2rem] sm:rounded-[3rem] border-white/20 shadow-2xl relative overflow-hidden w-full"
          >
            {/* Visual Header for Form */}
            <div className="flex items-center justify-between mb-10 pb-6 border-b border-white/5">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-mono text-slate-500 uppercase font-black">Ready for input</span>
              </div>
              <Terminal className="w-4 h-4 text-slate-500" />
            </div>

            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-black ml-1">Identity Name</label>
                  <input 
                    type="text" 
                    placeholder="E.G. JOHN DOE"
                    className="w-full bg-white/5 border border-white/5 rounded-2xl px-6 py-4 text-white font-display font-bold placeholder:text-slate-700 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all uppercase text-sm"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-black ml-1">Digital Mail</label>
                  <input 
                    type="email" 
                    placeholder="USER@DOMAIN.COM"
                    className="w-full bg-white/5 border border-white/5 rounded-2xl px-6 py-4 text-white font-display font-bold placeholder:text-slate-700 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all uppercase text-sm"
                  />
                </div>
              </div>
              
              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-black ml-1">System Profile</label>
                <div className="relative">
                  <select className="w-full bg-white/5 border border-white/5 rounded-2xl px-6 py-4 text-white font-display font-bold focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all appearance-none cursor-pointer uppercase text-sm">
                    <option className="bg-bg">Web Building</option>
                    <option className="bg-bg">Google Search (SEO)</option>
                    <option className="bg-bg">Smart AI Tools</option>
                    <option className="bg-bg">Other Services</option>
                  </select>
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
                    <MessageSquare className="w-4 h-4 text-slate-600" />
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-black ml-1">Requirement Payload</label>
                <textarea 
                  rows={4}
                  placeholder="DESCRIBE YOUR SYSTEMATIC CHALLENGES..."
                  className="w-full bg-white/5 border border-white/5 rounded-2xl px-6 py-4 text-white font-display font-bold placeholder:text-slate-700 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all resize-none uppercase text-sm"
                ></textarea>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-white text-black font-black py-5 rounded-2xl transition-all shadow-2xl hover:shadow-white/10 flex items-center justify-center gap-3 text-sm uppercase tracking-[0.2em]"
              >
                Transmit Request
                <Send className="w-4 h-4" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
