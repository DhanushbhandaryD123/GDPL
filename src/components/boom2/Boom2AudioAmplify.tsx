import { motion } from 'motion/react';

export function Boom2AudioAmplify() {
  return (
    <section className="py-12 md:py-20 px-4 max-w-[1400px] mx-auto">
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center flex-col-reverse lg:flex-row">
        
        {/* Left Video Embed (was Right) */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 relative w-full rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-200 bg-white"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto object-contain"
          >
            <source src="/boom2/AudioFileBoostBoom2.mp4" type="video/mp4" />
          </video>
        </motion.div>

        {/* Right Content (was Left) */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="lg:col-span-5 max-w-xl pr-4 lg:pr-0"
        >
          <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold mb-6 text-[#0a0a0f] tracking-tight leading-tight">
            Amplify individual audio files
          </h2>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed font-medium mb-4">
            Permanently boost the sound levels in any audio files on your Mac. Individually, or in batches.
            Whether it's a quiet voice memo, a low-volume podcast, or a poorly recorded song, Boom 2 lets you easily drop in audio files and amplify them to your desired volume. You can boost multiple files at once, saving you time and ensuring all your media is loud and clear for playback on any device.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
