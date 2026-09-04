import { motion } from 'motion/react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { Play, Download, Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function StatsSection() {
  const { t } = useTranslation();

  const stats = [
    {
      id: 1,
      label: t('boom_mobile.songs_played'),
      value: 6,
      suffix: 'M+',
      icon: Play,
      accent: 'from-pink-500 to-purple-600'
    },
    {
      id: 2,
      label: t('boom_mobile.downloads'),
      value: 4,
      suffix: 'M+',
      icon: Download,
      accent: 'from-cyan-400 to-blue-600'
    },
    {
      id: 3,
      label: t('boom_mobile.rating'),
      value: 4.5,
      suffix: ' Stars',
      icon: Star,
      accent: 'from-yellow-400 to-orange-500'
    }
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="py-20 md:py-32 bg-[#ffffff] relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-100 blur-[140px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 md:px-10 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900 tracking-tight"
            dangerouslySetInnerHTML={{ __html: t('boom_mobile.stats_title') }}
          />
        </div>

        <div className="grid grid-cols-3 divide-x divide-y-0 divide-gray-100 max-w-5xl mx-auto border border-gray-100 rounded-2xl sm:rounded-3xl md:rounded-[2.5rem] overflow-hidden bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15, type: 'spring', bounce: 0.3 }}
              className="flex flex-col items-center text-center p-3 sm:p-6 md:p-14 relative group"
            >
              <div className={`p-2 sm:p-3 md:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-br ${stat.accent} mb-2 sm:mb-4 md:mb-6 shadow-md md:shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className="text-white w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8" />
              </div>

              <div className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-1 sm:mb-2 md:mb-4 tracking-tight">
                {inView ? (
                  <CountUp
                    end={stat.value}
                    decimals={stat.value % 1 !== 0 ? 1 : 0}
                    duration={2.5}
                    separator=","
                  />
                ) : '0'}
                <span className={`text-xs sm:text-lg md:text-3xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-r ${stat.accent}`}>{stat.suffix}</span>
              </div>
              <p className="text-[11px] sm:text-sm md:text-xl text-gray-500 font-bold leading-tight line-clamp-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
