import { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { Cloud, Radio, Music, FolderOpen, Headphones } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function DiscoverSection() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const integrations = [
    {
      title: t('boom_mobile.dropbox_title'),
      description: t('boom_mobile.dropbox_desc'),
      icon: Cloud,
      glow: 'shadow-[0_0_40px_-10px_rgba(59,130,246,0.35)]',
      color: 'text-blue-500',
      bg: 'bg-blue-50',
      activeGradient: 'bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600',
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
      activeGradient: 'bg-gradient-to-br from-emerald-500 via-green-500 to-teal-600',
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
      activeGradient: 'bg-gradient-to-br from-amber-500 via-orange-500 to-red-500',
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
      activeGradient: 'bg-gradient-to-br from-cyan-500 via-sky-500 to-blue-600',
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
      activeGradient: 'bg-gradient-to-br from-pink-500 via-rose-500 to-fuchsia-600',
      activeBorder: 'border-pink-500',
      activeShadow: 'shadow-[0_20px_45px_-10px_rgba(225,29,72,0.45)]',
      activeDesc: 'text-pink-100',
    }
  ];

  // Touch outside to close color back to normal
  useEffect(() => {
    const handleGlobalTouch = (e: TouchEvent) => {
      if (sectionRef.current && !sectionRef.current.contains(e.target as Node)) {
        setActiveCard(null);
      }
    };
    window.addEventListener('touchstart', handleGlobalTouch, { passive: true });
    return () => window.removeEventListener('touchstart', handleGlobalTouch);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    if (!touch) return;
    const el = document.elementFromPoint(touch.clientX, touch.clientY);
    const cardEl = el?.closest('[data-card-index]');
    if (cardEl) {
      const idx = Number(cardEl.getAttribute('data-card-index'));
      if (!isNaN(idx) && idx !== activeCard) {
        setActiveCard(idx);
      }
    }
  };

  return (
    <section ref={sectionRef} className="py-20 md:py-32 bg-white relative overflow-hidden">
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

        <div
          onTouchMove={handleTouchMove}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto"
        >
          {integrations.map((item, index) => {
            const isActive = activeCard === index;
            return (
              <motion.div
                key={index}
                data-card-index={index}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5, ease: 'easeOut' }}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
                onTouchStart={() => setActiveCard(index)}
                className={`relative overflow-hidden rounded-[2rem] p-8 transition-all duration-300 cursor-pointer select-none border ${
                  isActive
                    ? `${item.activeBorder} ${item.activeShadow} -translate-y-2`
                    : 'bg-white border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)]'
                }`}
              >
                {/* Expanding color burst radiating out from the icon */}
                <motion.div
                  initial={false}
                  animate={{
                    scale: isActive ? 36 : 0,
                    opacity: isActive ? 1 : 0,
                  }}
                  transition={{
                    duration: 0.45,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={`absolute rounded-full pointer-events-none ${item.activeGradient}`}
                  style={{
                    top: 64,
                    left: 64,
                    width: 32,
                    height: 32,
                    marginLeft: -16,
                    marginTop: -16,
                    transformOrigin: 'center center',
                  }}
                />

                {/* Ambient glass reflection accent */}
                {isActive && (
                  <div className="absolute -right-8 -bottom-8 w-36 h-36 rounded-full bg-white/10 blur-2xl pointer-events-none" />
                )}

                {/* Content placed above the spreading background */}
                <div className="relative z-10 pointer-events-none">
                  {/* Animated Icon Badge: lifts slightly and shifts to frosted glass */}
                  <motion.div
                    animate={isActive ? { y: -4, scale: 1.08 } : { y: 0, scale: 1 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${
                      isActive
                        ? 'bg-white/20 text-white backdrop-blur-md border border-white/30 shadow-lg'
                        : `${item.bg} border border-transparent ${item.glow}`
                    }`}
                  >
                    <item.icon
                      className={`transition-colors duration-300 ${isActive ? 'text-white' : item.color}`}
                      size={30}
                    />
                  </motion.div>

                  {/* Title */}
                  <h3
                    className={`text-xl font-bold mb-3 tracking-tight transition-colors duration-300 ${
                      isActive ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p
                    className={`leading-relaxed font-medium transition-colors duration-300 ${
                      isActive ? item.activeDesc : 'text-gray-500'
                    }`}
                  >
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
