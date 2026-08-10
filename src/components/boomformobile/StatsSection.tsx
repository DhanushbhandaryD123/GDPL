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
      color: 'text-pink-500',
      bg: 'bg-pink-50'
    },
    {
      id: 2,
      label: t('boom_mobile.downloads'),
      value: 4,
      suffix: 'M+',
      icon: Download,
      color: 'text-purple-600',
      bg: 'bg-purple-50'
    },
    {
      id: 3,
      label: t('boom_mobile.rating'),
      value: 4.5,
      suffix: ' Stars',
      icon: Star,
      color: 'text-yellow-500',
      bg: 'bg-yellow-50'
    }
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="py-20 md:py-32 bg-[#F8FAFC] relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900 tracking-tight"
            dangerouslySetInnerHTML={{ __html: t('boom_mobile.stats_title') }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15, type: 'spring', bounce: 0.3 }}
              className="flex flex-col items-center text-center p-10 rounded-[2.5rem] bg-white border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-300 relative group"
            >
              <div className={`p-4 rounded-2xl ${stat.bg} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className={stat.color} size={40} />
              </div>
              
              <div className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 tracking-tighter">
                {inView ? (
                  <CountUp
                    end={stat.value}
                    decimals={stat.value % 1 !== 0 ? 1 : 0}
                    duration={2.5}
                    separator=","
                  />
                ) : '0'}
                <span className={`text-3xl md:text-4xl ${stat.color}`}>{stat.suffix}</span>
              </div>
              <p className="text-xl text-gray-500 font-bold">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
