import { motion } from 'motion/react';
import { Link } from '@/components/layout/LocalizedLink';
import { ArrowRight, Users } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import { useState, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export function MeetOurTeam() {
  const { t } = useTranslation();

  const leaders = [
    { name: 'Rohith Bhat', role: t('about.team.leader1_role'), image: '/team/R_B.png', description: t('about.team.leader1_desc') },
    { name: 'M. Ramachandra Acharya', role: t('about.team.leader2_role'), image: '/team/MRA-1.png', description: t('about.team.leader2_desc') },
    { name: 'Purushotham Bhat', role: t('about.team.leader3_role'), image: '/team/PRB.png', description: t('about.team.leader3_desc') },
    { name: 'Pradeep Kumar Udupi', role: t('about.team.leader4_role'), image: '/team/Pradeep_Udupi_200X200.png', description: t('about.team.leader4_desc') }
  ];

  const teamMembers = [
    { name: 'Bifin Manohara', role: t('about.team.m1_role'), image: '/team/Bifin_Manohara.webp', quote: t('about.team.m1_quote') },
    { name: 'Deepa Pai', role: t('about.team.m2_role'), image: '/team/deepa.png', quote: t('about.team.m2_quote') },
    { name: 'Kishan V Murthi', role: t('about.team.m3_role'), image: '/team/kishan.png', quote: t('about.team.m3_quote') },
    { name: 'Madhusudan N V', role: t('about.team.m4_role'), image: '/team/madhusudan.png', quote: t('about.team.m4_quote') },
    { name: 'Pradeep R', role: t('about.team.m5_role'), image: '/team/pradeep_r.png' },
    { name: 'Prathap Poojary', role: t('about.team.m6_role'), image: '/team/prathap.png' },
    { name: 'Prashantha Ballal', role: t('about.team.m7_role'), image: '/team/prashantha.png' },
    { name: 'Shikshan Chandrashekar', role: t('about.team.m8_role'), image: '/team/shikshan.png' },
    { name: 'Vipin Kumar Mishra', role: t('about.team.m9_role'), image: '/team/vipin.png' },
    { name: 'Vignesh Shenoy', role: t('about.team.m10_role'), image: '/team/vignesh.png' },
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center', containScroll: false });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="w-full bg-[#ffffff] py-20 px-6 lg:px-12" style={{ fontFamily: "'SF UI Text', 'SF Pro Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}>
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-bold tracking-[0.1em] text-blue-500 uppercase mb-4 block">
            {t('about.team.badge')}
          </span>
          <h2 className="text-4xl md:text-[44px] font-bold text-[#0f172a] leading-tight mb-4">
            {t('about.team.title')}
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            {t('about.team.subtitle')}
          </p>
        </motion.div>

        {/* Leaders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full mb-16">
          {leaders.map((leader, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-3xl p-8 flex flex-col items-center text-center shadow-[0_0_20px_rgba(0,0,0,0.15)] hover:shadow-[0_0_30px_rgba(0,0,0,0.2)] border border-gray-200 transition-all duration-300"
            >
              <div className="w-32 h-32 rounded-full overflow-hidden mb-6 bg-gray-100 flex items-center justify-center shadow-inner">
                <img 
                  src={leader.image} 
                  alt={leader.name} 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(leader.name)}&background=f3f4f6&color=9ca3af&size=128`;
                  }}
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">{leader.name}</h3>
              <p className="text-blue-600 font-medium text-sm mb-4">{leader.role}</p>
              <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
                {leader.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Team Members Carousel */}
        <div className="w-full max-w-full overflow-hidden mb-16 -mx-6 lg:-mx-12 px-6 lg:px-12" ref={emblaRef}>
          <div className="flex -ml-4 touch-pan-y items-center">
            {teamMembers.map((member, idx) => {
              const isActive = idx === selectedIndex;
              return (
                <div 
                  key={idx} 
                  className="flex-[0_0_75%] sm:flex-[0_0_40%] md:flex-[0_0_35%] lg:flex-[0_0_22%] min-w-0 pl-4 relative"
                  onClick={() => emblaApi?.scrollTo(idx)}
                >
                  <div className={`w-full relative h-[380px] md:h-[480px] rounded-[24px] overflow-hidden cursor-pointer transition-all duration-700 ease-out shadow-lg ${isActive ? 'opacity-100 scale-100 grayscale-0' : 'opacity-40 scale-[0.92] grayscale hover:opacity-70'}`}>
                    
                    {/* Background image */}
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className={`absolute inset-0 w-full h-full transition-transform duration-700 ease-out object-cover object-top ${isActive ? 'scale-100' : 'scale-105'}`}
                      style={{ backgroundColor: '#0a122c' }}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=0a122c&color=ffffff&size=256`;
                      }}
                    />

                    {/* Gradient Overlay for text readability */}
                    <div 
                      className="absolute inset-0 bg-gradient-to-t from-[#0a122c]/90 via-[#0a122c]/30 to-transparent transition-opacity duration-700" 
                      style={{ opacity: isActive ? 1 : 0 }} 
                    />

                    {/* Content */}
                    <div className={`absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end text-left transition-all duration-700 ease-out transform ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0 pointer-events-none'}`}>
                      <h4 className="text-[11px] md:text-xs font-bold tracking-[0.2em] text-white/80 uppercase mb-2">
                        {member.name}
                      </h4>
                      {member.quote ? (
                        <p className="text-white text-xl md:text-2xl font-bold leading-tight">
                          "{member.quote.replace('\n', ' ')}"
                        </p>
                      ) : (
                        <p className="text-white text-base md:text-lg font-medium leading-tight">
                          {member.role}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
            
            {/* Join Us Card in Carousel */}
            <div 
              className="flex-[0_0_75%] sm:flex-[0_0_40%] md:flex-[0_0_35%] lg:flex-[0_0_22%] min-w-0 pl-4 relative"
              onClick={() => emblaApi?.scrollTo(teamMembers.length)}
            >
              <div className={`w-full flex flex-col items-center justify-center text-center cursor-pointer h-[380px] md:h-[480px] rounded-[24px] bg-white border-2 border-dashed border-gray-300 transition-all duration-700 ease-out shadow-sm ${teamMembers.length === selectedIndex ? 'opacity-100 scale-100 border-blue-500 bg-blue-50/50' : 'opacity-40 scale-[0.92] hover:opacity-70'}`}>
                <div className="w-16 h-16 rounded-full mb-4 bg-blue-100 flex items-center justify-center text-blue-500">
                  <Users className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2 leading-tight">{t('about.team.could_be_you')}</h4>
                <Link to="/careers" className="text-blue-500 text-sm font-medium flex items-center gap-1 hover:text-blue-700 transition-colors">
                  {t('about.team.join_us')} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* View All Careers Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <Link to="/careers" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-blue-100 text-blue-600 font-semibold hover:bg-blue-50 transition-colors duration-300">
            {t('about.team.view_all')} <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
