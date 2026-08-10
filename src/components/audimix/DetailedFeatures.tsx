import { motion } from 'motion/react';
import { MicOff, Music4, AudioWaveform, Clock, Play, Drum, Mic, Piano, Music2, Guitar } from 'lucide-react';

const features = [
  {
    title: 'Create Your Own Mix',
    description: 'Adjust the volume of individual stems like drums, bass, and vocals to create a custom mix of any song.',
    icon: AudioWaveform,
  },
  {
    title: 'Vocal Remover',
    description: 'Instantly strip away vocals to create high-quality instrumental backing tracks for karaoke or practice.',
    icon: MicOff,
  },
  {
    title: 'Change your Pitch',
    description: 'Shift the key of the song up or down without affecting the tempo to match your vocal range perfectly.',
    icon: Music4,
  },
  {
    title: 'Adjust your Tempo',
    description: 'Speed up or slow down the track without changing its pitch, perfect for practicing difficult sections.',
    icon: Clock,
  },
];

const stems = [
  { label: 'Drums', icon: Drum, pct: 40, color: 'text-purple-400', track: 'from-purple-400 to-purple-500' },
  { label: 'Vocals', icon: Mic, pct: 72, color: 'text-green-400', track: 'from-green-400 to-green-500' },
  { label: 'Piano', icon: Piano, pct: 52, color: 'text-pink-400', track: 'from-pink-400 to-pink-500' },
  { label: 'Bass', icon: Music2, pct: 20, color: 'text-blue-400', track: 'from-blue-400 to-blue-500' },
  { label: 'Instruments', icon: Guitar, pct: 88, color: 'text-orange-400', track: 'from-orange-400 to-orange-500' },
];

function StemMixerMockup() {
  return (
    <div className="w-full h-full rounded-xl bg-[#0d0a14] flex flex-col">
      {/* Title bar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/5">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="w-7 h-7 rounded-md bg-white/10 flex items-center justify-center shrink-0">
            <Play className="w-3 h-3 text-white fill-white" />
          </div>
          <div className="min-w-0">
            <p className="text-[11px] text-white/80 font-medium truncate">Chasing-Waterfalls.mp3</p>
            <p className="text-[9px] text-white/40">4.32 MB, MP3</p>
          </div>
        </div>
        <span className="text-[9px] text-white/40 shrink-0">00:19 / 03:03</span>
      </div>

      {/* Stem rows */}
      <div className="flex-1 flex flex-col justify-center gap-3.5 px-4 py-4">
        {stems.map((stem) => (
          <div key={stem.label} className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
              <stem.icon className={`w-3.5 h-3.5 ${stem.color}`} strokeWidth={1.75} />
            </div>
            <span className="text-[10px] text-white/60 w-14 shrink-0">{stem.label}</span>
            <div className="flex-1 h-1 rounded-full bg-white/10 overflow-hidden">
              <div className={`h-full rounded-full bg-gradient-to-r ${stem.track}`} style={{ width: `${stem.pct}%` }} />
            </div>
            <span className="text-[9px] text-white/40 w-7 text-right shrink-0">{stem.pct}%</span>
          </div>
        ))}
      </div>

      {/* Export footer */}
      <div className="flex items-center justify-between px-4 py-3 border-t border-white/5">
        <span className="text-[9px] text-white/40">Save stems separately</span>
        <span className="text-[9px] font-semibold text-white bg-gradient-to-r from-purple-500 to-blue-500 rounded-full px-3 py-1">
          Export
        </span>
      </div>
    </div>
  );
}

export function DetailedFeatures() {
  return (
    <section className="py-16 md:py-24 bg-white border-t border-gray-100 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Powerful tools for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">total control</span>
          </motion.h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Features List Left */}
          <div className="w-full lg:w-1/3 flex flex-col gap-8">
            {features.slice(0, 2).map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:border-purple-300 transition-colors group"
              >
                <feature.icon className="text-purple-500 mb-4 group-hover:scale-110 transition-transform" size={32} />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-500 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Central app mockup — stem mixer */}
          <div className="w-full lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-[2rem] overflow-hidden border border-gray-100 bg-gradient-to-br from-purple-500 via-[#1a1330] to-blue-700 p-2 shadow-2xl shadow-purple-200/60"
            >
              <div className="aspect-[4/5] md:h-[600px] md:aspect-auto">
                <StemMixerMockup />
              </div>
            </motion.div>
          </div>

          {/* Features List Right */}
          <div className="w-full lg:w-1/3 flex flex-col gap-8">
            {features.slice(2, 4).map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:border-blue-300 transition-colors group"
              >
                <feature.icon className="text-blue-500 mb-4 group-hover:scale-110 transition-transform" size={32} />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-500 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
