import { motion } from 'motion/react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { Play, Download, Star } from 'lucide-react';

const stats = [
  {
    id: 1,
    label: 'Songs Played',
    value: 6,
    suffix: 'M+',
    icon: Play,
    color: 'text-pink-400'
  },
  {
    id: 2,
    label: 'Downloads',
    value: 4,
    suffix: 'M+',
    icon: Download,
    color: 'text-purple-400'
  },
  {
    id: 3,
    label: 'App Store Rating',
    value: 4.5,
    suffix: ' Stars',
    icon: Star,
    color: 'text-yellow-400'
  }
];

export function StatsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="py-16 md:py-24 bg-[#0a0a0f] relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-3xl md:text-5xl font-bold mb-6 text-white"
          >
            How Popular <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">We Are</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.2, type: 'spring' }}
              className="flex flex-col items-center text-center p-8 rounded-3xl bg-[#111118] border border-white/5 relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl pointer-events-none" />
              
              <stat.icon className={`${stat.color} mb-6`} size={40} />
              
              <div className="text-5xl md:text-6xl font-extrabold text-white mb-4 tracking-tighter">
                {inView ? (
                  <CountUp
                    end={stat.value}
                    decimals={stat.value % 1 !== 0 ? 1 : 0}
                    duration={2.5}
                    separator=","
                  />
                ) : '0'}
                <span className="text-3xl md:text-4xl text-purple-400">{stat.suffix}</span>
              </div>
              <p className="text-xl text-gray-400 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
