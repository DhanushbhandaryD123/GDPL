import { motion } from 'motion/react';
import { Disc3, ListMusic, Sparkles, Music2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function Boom3DAudioPlayer() {
  const { t } = useTranslation();

  const playerFeatures = [
    {
      icon: Disc3,
      badge: 'Hi-Res Lossless',
      title: 'Studio-Grade Audio Fidelity',
      desc: 'Play uncompressed FLAC, ALAC, WAV, and high-bitrate MP3 files with bit-perfect decoding and pristine acoustic depth.',
      color: 'from-pink-500 to-rose-500',
      shadow: 'shadow-pink-500/20'
    },
    {
      icon: ListMusic,
      badge: 'Easy Organizing',
      title: 'Intelligent Playlist Management',
      desc: 'Create, sort, and curate personalized playlists from your locally stored audio collection with drag-and-drop simplicity.',
      color: 'from-indigo-500 to-blue-500',
      shadow: 'shadow-indigo-500/20'
    },
    {
      icon: Music2,
      badge: 'Boom 3D FX',
      title: 'Built-in Spatial Effects Engine',
      desc: 'Experience your offline tracks through Boom’s magical 3D Surround sound, 31-band EQ, and acoustic sound staging.',
      color: 'from-purple-500 to-violet-500',
      shadow: 'shadow-purple-500/20'
    }
  ];

  return (
    <section id="state-of-the-art-audio-player" className="relative py-20 lg:py-28 overflow-hidden bg-white text-gray-900 scroll-mt-20 md:scroll-mt-24 border-t border-gray-100">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 left-1/3 w-[700px] h-[350px] bg-gradient-to-b from-pink-50/50 via-purple-50/20 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[500px] h-[350px] bg-blue-50/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-[920px] mx-auto mb-14 md:mb-18 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-50 border border-pink-100 text-xs font-semibold text-pink-700 tracking-wide"
          >
            <Sparkles size={14} className="text-pink-600" />
            <span>{t('boom3d.key_features.player_title') || 'STATE-OF-THE-ART AUDIO PLAYER'}</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 leading-tight"
          >
            {t('boom3d.audio_player.title') || 'State of the Art Audio Player'}
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16 }}
            className="text-base md:text-lg text-gray-600 leading-relaxed max-w-[840px] mx-auto"
          >
            {t('boom3d.key_features.player_desc') || 'Play your locally stored songs with unbeatable Boom sound effects using our full-fledged Audio Player. Organize your tracks and create playlists to curate your personal music collections, just like your own music player app.'}
          </motion.p>
        </div>

        {/* Real Product Image Centerpiece */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative max-w-[1020px] mx-auto mb-16 md:mb-20"
        >
          <div className="relative rounded-2xl md:rounded-3xl p-3 md:p-6 bg-gradient-to-b from-gray-50/80 to-white border border-gray-200/80 shadow-[0_20px_60px_rgba(0,0,0,0.06)] overflow-hidden group">
            <img 
              src="/boom3D/s6.webp" 
              alt="Boom 3D Audio Player" 
              className="w-full h-auto object-contain rounded-xl md:rounded-2xl transition-transform duration-500 group-hover:scale-[1.01]" 
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* 3 Clean Standard Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-[1200px] mx-auto">
          {playerFeatures.map((feat, index) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative rounded-3xl p-8 bg-white border border-gray-100 shadow-[0_10px_35px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_45px_rgba(244,63,94,0.08)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center overflow-hidden"
              >
                {/* Top Accent Line */}
                <div className={`absolute top-0 inset-x-0 h-1 bg-gradient-to-r ${feat.color} opacity-80 group-hover:h-1.5 transition-all duration-300`} />
                
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${feat.color} text-white shadow-md ${feat.shadow} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={24} />
                </div>

                <span className="text-[11px] font-semibold text-pink-600 bg-pink-50 px-2.5 py-0.5 rounded-full mb-3">
                  {feat.badge}
                </span>

                <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-tight">
                  {feat.title}
                </h3>

                <p className="text-sm md:text-[15px] leading-relaxed text-gray-600">
                  {feat.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
