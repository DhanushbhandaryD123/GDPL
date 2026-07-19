import { motion } from 'motion/react';
import { Linkedin, Twitter, ArrowRight, Users } from 'lucide-react';

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
  { name: 'Bifin Manohara', role: 'Systems Engineer', image: '/team/bifin.png' },
  { name: 'Deepa Pai', role: 'Principal Architect', image: '/team/deepa.png' },
  { name: 'Kishan V Murthi', role: 'Junior Executive -\nAdministration', image: '/team/kishan.png' },
  { name: 'Madhusudan N V', role: 'UI Designer', image: '/team/madhusudan.png' },
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full mb-8">
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

        {/* Team Members Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4 w-full mb-12">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + (idx * 0.05) }}
              className="bg-white rounded-2xl p-6 flex flex-col items-center text-center shadow-[0_0_15px_rgba(0,0,0,0.15)] hover:shadow-[0_0_25px_rgba(0,0,0,0.2)] border border-gray-200 transition-all duration-300"
            >
              <div className="w-20 h-20 rounded-full overflow-hidden mb-4 bg-gray-100 flex items-center justify-center">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=f3f4f6&color=9ca3af&size=128`;
                  }}
                />
              </div>
              <h4 className="text-[15px] font-bold text-gray-900 mb-1 leading-tight">{member.name}</h4>
              <p className="text-blue-500 text-[13px] leading-tight whitespace-pre-line">{member.role}</p>
            </motion.div>
          ))}
          
          {/* Join Us Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + (teamMembers.length * 0.05) }}
            className="bg-white rounded-2xl p-6 flex flex-col items-center text-center shadow-[0_0_15px_rgba(0,0,0,0.15)] hover:shadow-[0_0_25px_rgba(0,0,0,0.2)] border border-gray-200 transition-all duration-300 justify-center"
          >
            <div className="w-20 h-20 rounded-full mb-4 bg-blue-50 flex items-center justify-center text-blue-500">
              <Users className="w-8 h-8" />
            </div>
            <h4 className="text-[15px] font-bold text-gray-900 mb-2 leading-tight">This could be you!</h4>
            <a href="#" className="text-blue-500 text-[13px] font-medium flex items-center gap-1 hover:text-blue-600 transition-colors">
              Send us your resume <ArrowRight className="w-3 h-3" />
            </a>
          </motion.div>
        </div>

        {/* View All Careers Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <a href="#" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-blue-100 text-blue-600 font-semibold hover:bg-blue-50 transition-colors duration-300">
            View All Careers <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
