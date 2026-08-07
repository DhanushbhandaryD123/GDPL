import { motion } from 'motion/react';
import { FileAudio, Share2 } from 'lucide-react';
import ReactPlayer from 'react-player/lazy';

export function FormatSupport() {
  return (
    <section className="py-24 bg-[#050507] overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div className="relative rounded-2xl md:rounded-[2rem] overflow-hidden border border-white/10 bg-white/5 p-2 shadow-2xl shadow-blue-900/20">
              <div className="rounded-xl overflow-hidden bg-black aspect-video relative flex items-center justify-center">
                 <ReactPlayer 
                  url="https://www.globaldelight.com/AuDimix/assets/export-demo.mp4" 
                  playing 
                  loop 
                  muted 
                  playsinline
                  width="100%" 
                  height="100%"
                  className="absolute top-0 left-0 object-cover"
                  fallback={
                    <img src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2000&auto=format&fit=crop" alt="Export Demo" className="w-full h-full object-cover opacity-50" />
                  }
                />
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 flex flex-col"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Export in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">High Quality</span>
            </h2>
            <p className="text-lg text-gray-400 mb-10 leading-relaxed max-w-lg">
              Whether you need lossless audio for professional production or compressed files for easy sharing, AuDimix has you covered.
            </p>

            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4 p-6 rounded-2xl bg-[#111118] border border-white/5">
                <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400">
                  <FileAudio size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Universal Formats</h4>
                  <p className="text-gray-400">Export your stems or mixed tracks in standard MP3 or high-fidelity lossless WAV formats.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 rounded-2xl bg-[#111118] border border-white/5">
                <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400">
                  <Share2 size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Easy Sharing</h4>
                  <p className="text-gray-400">Instantly save your creations locally or share them directly from the export menu to your favorite platforms.</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
