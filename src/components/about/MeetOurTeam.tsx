import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import { useState, useCallback, useEffect } from 'react';

const leaders = [
  {
    name: 'Rohith Bhat',
    role: 'Founder',
    image: '/team/R_B.png',
    description: "'Dream big, achieve big' is Rohith Bhat's mantra. He founded Global Delight and is responsible for where it is today. Fond of movies, emerging technologies and gadgets, Rohith also loves traveling and exploring new places.",
  },
  {
    name: 'M. Ramachandra Acharya',
    role: 'CEO',
    image: '/team/MRA-1.png',
    description: 'An ex-professor, patent holder in browser technologies, violin maestro, and a coder at heart - Ram Acharya is all this and more. As the Chief Technological Officer, he provides immense technical direction and guidance.',
  },
  {
    name: 'Purushotham Bhat',
    role: 'Director',
    image: '/team/PRB.png',
    description: 'An experienced industry veteran with exposure to diverse fields of Engineering, manufacturing, software development and administration. An engineering graduate from KREC Surathkal.',
  },
  {
    name: 'Pradeep Kumar Udupi',
    role: 'Senior Vice President - Engineering',
    image: '/team/Pradeep_Udupi_200X200.png',
    description: 'Astronomy, Physics, Philosophy, Ontology and Technology are just some of the passions of this cerebral engineer. A graduate in engineering, He has extensive experience in Apple technology with nearly 20 years on the Mac and 10+ years of iOS. He has worked on one of the biggest open source project, the Netscape Navigator. He brings this extensive experience to the team along with some hands-on stealth to the engineering of our products.',
  }
];

const teamMembers = [
  { name: 'Bifin Manohara', role: 'Systems Engineer', image: '/team/Bifin_Manohara.png', quote: 'Growing future\nleaders' },
  { name: 'Deepa Pai', role: 'Principal Architect', image: '/team/deepa.png', quote: 'Reigniting\nthe passion' },
  { name: 'Kishan V Murthi', role: 'Junior Executive -\nAdministration', image: '/team/kishan.png', quote: 'Improving\nthe culture' },
  { name: 'Madhusudan N V', role: 'UI Designer', image: '/team/madhusudan.png', quote: 'Bridging the divide' },
  { name: 'Pradeep R', role: 'Senior Test Lead', image: '/team/pradeep_r.png' },
  { name: 'Prathap Poojary', role: 'Web Developer', image: '/team/prathap.png' },
  { name: 'Prashantha Ballal', role: 'Accounts Executive', image: '/team/prashantha.png' },
  { name: 'Shikshan Chandrashekar', role: 'Software Engineer', image: '/team/shikshan.png' },
  { name: 'Vipin Kumar Mishra', role: 'Marketing Manager', image: '/team/vipin.png' },
  { name: 'Vignesh Shenoy', role: 'Senior Accounts Executive', image: '/team/vignesh.png' },
];

export function MeetOurTeam() {
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
    <section className="w-full bg-[#f8fafc] py-20 px-6 lg:px-12" style={{ fontFamily: "'SF UI Text', 'SF Pro Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}>
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-bold tracking-[0.1em] text-blue-500 uppercase mb-4 block">
            Meet Our Team
          </span>
          <h2 className="text-4xl md:text-[44px] font-bold text-[#0f172a] leading-tight mb-4">
            The people behind our success
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            A passionate team of innovators, creators, and problem solvers working together to create delight and deliver impact.
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
                <h4 className="text-xl font-bold text-gray-900 mb-2 leading-tight">This could be you!</h4>
                <Link to="/careers" className="text-blue-500 text-sm font-medium flex items-center gap-1 hover:text-blue-700 transition-colors">
                  Join us <ArrowRight className="w-4 h-4" />
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
            View All Careers <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
