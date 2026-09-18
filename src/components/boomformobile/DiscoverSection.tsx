import { useState } from 'react';
import { motion } from 'motion/react';
import { Cloud, Radio, Music, FolderOpen, Headphones } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function DiscoverSection() {
  const { t } = useTranslation();
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const integrations = [
    {
      title: t('boom_mobile.dropbox_title'),
      description: t('boom_mobile.dropbox_desc'),
      icon: Cloud,
      glow: 'shadow-[0_0_40px_-10px_rgba(59,130,246,0.35)]',
      color: 'text-blue-500',
      bg: 'bg-blue-50',
      ring: 'group-hover:border-blue-200',
      activeBg: 'bg-gradient-to-br from-blue-600 to-indigo-600',
      activeBorder: 'border-blue-500',
      activeShadow: 'shadow-[0_20px_45px_-10px_rgba(37,99,235,0.45)]',
      activeDesc: 'text-blue-100',
    },
    {
      title: t('boom_mobile.radio_title'),
      description: t('boom_mobile.radio_desc'),
      icon: Radio,
      glow: 'shadow-[0_0_40px_-10px_rgba(34,197,94,0.35)]',
      color: 'text-green-500',
      bg: 'bg-green-50',
      ring: 'group-hover:border-green-200',
      activeBg: 'bg-gradient-to-br from-emerald-500 to-green-600',
      activeBorder: 'border-emerald-500',
      activeShadow: 'shadow-[0_20px_45px_-10px_rgba(22,163,74,0.45)]',
      activeDesc: 'text-emerald-100',
    },
    {
      title: t('boom_mobile.podcasts_title'),
      description: t('boom_mobile.podcasts_desc'),
      icon: Headphones,
      glow: 'shadow-[0_0_40px_-10px_rgba(249,115,22,0.35)]',
      color: 'text-orange-500',
      bg: 'bg-orange-50',
      ring: 'group-hover:border-orange-200',
      activeBg: 'bg-gradient-to-br from-amber-500 to-orange-600',
      activeBorder: 'border-orange-500',
      activeShadow: 'shadow-[0_20px_45px_-10px_rgba(234,88,12,0.45)]',
      activeDesc: 'text-orange-100',
    },
    {
      title: t('boom_mobile.tidal_title'),
      description: t('boom_mobile.tidal_desc'),
      icon: Music,
      glow: 'shadow-[0_0_40px_-10px_rgba(34,211,238,0.35)]',
      color: 'text-cyan-500',
      bg: 'bg-cyan-50',
      ring: 'group-hover:border-cyan-200',
      activeBg: 'bg-gradient-to-br from-cyan-500 to-blue-600',
      activeBorder: 'border-cyan-500',
      activeShadow: 'shadow-[0_20px_45px_-10px_rgba(8,145,178,0.45)]',
      activeDesc: 'text-cyan-100',
    },
    {
      title: t('boom_mobile.local_title'),
      description: t('boom_mobile.local_desc'),
      icon: FolderOpen,
      glow: 'shadow-[0_0_40px_-10px_rgba(236,72,153,0.35)]',
      color: 'text-pink-500',
      bg: 'bg-pink-50',
      ring: 'group-hover:border-pink-200',
      activeBg: 'bg-gradient-to-br from-pink-500 to-rose-600',
      activeBorder: 'border-pink-500',
      activeShadow: 'shadow-[0_20px_45px_-10px_rgba(225,29,72,0.45)]',
      activeDesc: 'text-pink-100',
    }
  ];

  const handleCardToggle = (index: number) => {
    setActiveCard((prev) => (prev === index ? null : index));
  };

  const isCardActive = (index: number) => {
    if (activeCard !== null) {
      return activeCard === index;
    }
    return hoveredCard === index;
  };

  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-gradient-to-r from-blue-50 to-purple-50 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 md:px-10 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900 tracking-tight"
            dangerouslySetInnerHTML={{ __html: t('boom_mobile.discover_title') }}
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-gray-500 font-medium"
          >
            {t('boom_mobile.discover_desc')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {integrations.map((item, index) => {
            const isActive = isCardActive(index);
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5, ease: 'easeOut' }}
                onClick={() => handleCardToggle(index)}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleCardToggle(index);
                  }
                }}
                className={`relative overflow-hidden rounded-[2rem] p-8 transition-all duration-300 cursor-pointer select-none group border ${
                  isActive
                    ? `${item.activeBg} ${item.activeBorder} ${item.activeShadow} -translate-y-2`
                    : 'bg-white border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)]'
                }`}
              >
                {/* Subtle glass reflection effect when active */}
                {isActive && (
                  <div className="absolute -right-8 -bottom-8 w-36 h-36 rounded-full bg-white/10 blur-2xl pointer-events-none" />
                )}

                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${
                    isActive
                      ? 'bg-white/20 text-white backdrop-blur-md border border-white/25 scale-110 shadow-lg'
                      : `${item.bg} border border-transparent ${item.glow} ${item.ring} group-hover:scale-110`
                  }`}
                >
                  <item.icon className={`transition-colors duration-300 ${isActive ? 'text-white' : item.color}`} size={30} />
                </div>
                <h3 className={`text-xl font-bold mb-3 tracking-tight transition-colors duration-300 ${isActive ? 'text-white' : 'text-gray-900'}`}>
                  {item.title}
                </h3>
                <p className={`leading-relaxed font-medium transition-colors duration-300 ${isActive ? item.activeDesc : 'text-gray-500'}`}>
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
