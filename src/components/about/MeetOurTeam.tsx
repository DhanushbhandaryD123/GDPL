import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users } from 'lucide-react';

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
];

export function MeetOurTeam() {
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

        {/* Team Members Grid (New Style) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12 w-full mb-12">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + (idx * 0.05) }}
              className="flex flex-col items-center text-center group cursor-pointer"
            >
              <div className="w-full relative h-[320px] mb-5 transition-transform duration-300 group-hover:-translate-y-2">
                
                {/* The speech bubble tail for the card itself */}
                <div className="absolute -bottom-2 left-[20%] w-8 h-8 bg-[#0a122c] transform rotate-45 rounded-sm z-0"></div>

                {/* Card Inner Container */}
                <div className="absolute inset-0 rounded-[32px] bg-[#0a122c] overflow-hidden z-10 shadow-lg border border-blue-900/30">
                  
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 h-full w-[115%] object-contain object-bottom grayscale group-hover:grayscale-0 transition-all duration-500 z-10"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=0a122c&color=ffffff&size=256`;
                    }}
                  />

                  {member.quote && (
                    <div className="absolute top-[40%] left-[-5px] z-20 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[13px] font-medium py-2 px-4 rounded-xl shadow-lg transform -rotate-6 transition-all duration-300 group-hover:rotate-0 group-hover:scale-105 whitespace-pre-line text-left leading-tight">
                      {member.quote}
                      {/* Small tail on the right side of the floating bubble pointing to the person */}
                      <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-3 h-3 bg-white/10 backdrop-blur-md border-t border-r border-white/20 transform rotate-45"></div>
                    </div>
                  )}
                </div>
              </div>
              
              <h4 className="text-[17px] font-bold text-gray-900 mb-1 leading-tight transition-colors group-hover:text-blue-600">{member.name}</h4>
              <p className="text-blue-500 text-[14px] leading-tight whitespace-pre-line">{member.role}</p>
            </motion.div>
          ))}
          
          {/* Join Us Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + (teamMembers.length * 0.05) }}
            className="flex flex-col items-center justify-center text-center group cursor-pointer h-[320px] rounded-[32px] bg-white border-2 border-dashed border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-all duration-300"
          >
            <div className="w-16 h-16 rounded-full mb-4 bg-blue-100 flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform duration-300">
              <Users className="w-8 h-8" />
            </div>
            <h4 className="text-[17px] font-bold text-gray-900 mb-2 leading-tight">This could be you!</h4>
            <Link to="/careers" className="text-blue-500 text-[14px] font-medium flex items-center gap-1 hover:text-blue-700 transition-colors">
              Send us your resume <ArrowRight className="w-3 h-3" />
            </Link>
          </motion.div>
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
