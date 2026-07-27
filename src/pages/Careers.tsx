import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Rocket, 
  Heart, 
  Star, 
  Gift, 
  Code, 
  Layers, 
  Megaphone, 
  Video,
  MapPin,
  Briefcase,
  ChevronDown,
  Send,
  Plus
} from 'lucide-react';

import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';

const perks = [
  {
    icon: Rocket,
    title: 'Grow Your Career',
    description: 'Continuous learning & development',
    color: 'text-purple-600',
    bgColor: 'bg-purple-100',
  },
  {
    icon: Heart,
    title: 'Inclusive Culture',
    description: 'Diverse, supportive & respectful team',
    color: 'text-red-500',
    bgColor: 'bg-red-100',
  },
  {
    icon: Star,
    title: 'Make an Impact',
    description: 'Work that creates real change',
    color: 'text-orange-500',
    bgColor: 'bg-orange-100',
  },
  {
    icon: Gift,
    title: 'Awesome Benefits',
    description: 'Health, flexibility & more for your well-being',
    color: 'text-green-500',
    bgColor: 'bg-green-100',
  },
];

const jobs = [
  {
    id: 1,
    title: 'Lead Web Developer',
    icon: Code,
    location: 'Udupi, Karnataka',
    type: 'Full-time',
    experience: '7+ Years',
    iconColor: 'text-indigo-600',
    iconBg: 'bg-indigo-100',
    description: 'Global Delight is on the lookout for a Frontend-End Web Developer with Backend Knowledge who can Lead the team and will play an independent role as well.',
    sections: [
      {
        title: 'Responsibilities',
        items: [
          '7+ years of experience in web programming.',
          'In depth knowledge of designing websites using HTML5, CSS3 and JavaScript.',
          'Experience In Angular.',
          'Experience in creating animations using HTML5 and CSS3',
          'Experience in building responsive websites.',
          'Experience in troubleshooting and optimizing website performance issues.',
          'Basic knowledge of search engine optimization',
          'Good programming skills',
          'Knowledge of designing back-end with Node.js, MongoDB / MySQL'
        ]
      },
      {
        title: 'Requirements (Must)',
        items: [
          'Graduate in B.E – Computer Science/ BCA',
          'Excellent/Good communication skills in English – both verbal and written.',
          'Good Knowledge of Technology',
          'Aggressive problem diagnosis and creative problem – solving skills.',
          'Strong organisational skills to juggle multiple tasks within the constraints of timelines and budget with business acumen.',
          'Ability to work and thrive in a fast – paced environment, learn rapidly and master diverse webtechnologies & techniques.'
        ]
      }
    ]
  },
  {
    id: 2,
    title: 'Senior Software Engineer',
    icon: Layers,
    location: 'Udupi, Karnataka',
    type: 'Full-time',
    experience: '4+ Years',
    iconColor: 'text-purple-600',
    iconBg: 'bg-purple-100',
    description: 'Global Delight is on the lookout for a Sr. Windows Developer for developing high performance media editing applications.',
    sections: [
      {
        title: 'Responsibilities',
        items: [
          'Responsible for developing audio/video effects and editing modules for Windows 10.',
          'Responsible for analyzing the performance and fine tuning the performance.',
          'Responsible for analyzing and solving issues reported by customers.'
        ]
      },
      {
        title: 'Key skills required',
        items: [
          '4+ Years of experience in developing Windows applications',
          'Should have excellent knowledge of C/C++',
          'Should be aware of different media technologies like Media Foundation, Core Audio, Direct X technologies on windows.',
          'Should be familiar with latest technologies in Media editing domain on Windows 10.',
          'Should have a good understanding of memory management, multi threading and COM concepts.',
          'Should be familiar with performance analysis tools in Windows.',
          'Should be familiar with C#, UWP and WPF app development.'
        ]
      },
      {
        title: 'Academics',
        items: [
          'BE /B Tech in Computers Science and Engineering or Information Technology'
        ]
      }
    ]
  },
  {
    id: 3,
    title: 'Marketing Executive',
    icon: Megaphone,
    location: 'Udupi, Karnataka',
    type: 'Full-time',
    experience: '1-3 Years',
    iconColor: 'text-orange-500',
    iconBg: 'bg-orange-100',
    description: '',
    sections: [
      {
        title: 'Responsibilities',
        items: [
          'Contacting and establishing partnership with Channel partners, app resellers and B2B2C partners around the world.',
          'Working on target-based projects with spend v/s ROI maximisation.',
          'Creating proposals for partners and negotiating with them for pricing and commission.',
          'Following up with the partners and working towards deal closure.',
          'Maintaining healthy business relationship with the existing partners.',
          'Contacting existing partners for any possible business opportunities (Email cross promotion, website promotion, serial keys procurement, etc).',
          'Will be working on PowerPoint presentations / Analytics, MIS and weekly updates.',
          'Preparing PowerPoint presentations on partner deals.',
          'Monitoring day to day partner/B2B2C leads and communicating the same to the supervisor with the information of the Lead.',
          'Implementation & awareness of the product in the market.'
        ]
      },
      {
        title: 'Key skills required',
        items: [
          '2-3 years of experience in affiliate or partner marketing.',
          'Should understand key aspects of affiliate marketing and channels marketing.',
          'Should have good negotiating skills.',
          'Excellent communication in English – both verbal and written.',
          'Proficiency in MS Excel and PowerPoint is a must.',
          'Should adopt techno driven approach for partner marketing.',
          'Generate actionable insights on the product and marketing performance, to tune/optimize campaigns towards better ROI.',
          'Should be creative in terms of campaign execution to drive better performance.',
          'Experience in Email marketing will be an added advantage.',
          'Experience in software marketing/website marketing will be an added advantage.'
        ]
      },
      {
        title: 'Academics',
        items: [
          'MBA with Marketing specialization.',
          'BBM candidates with affiliate partner marketing and channel marketing experience can also apply.'
        ]
      }
    ]
  },
  {
    id: 4,
    title: 'Senior Video Creator',
    icon: Video,
    location: 'Udupi / Remote Work',
    type: 'Full-time',
    experience: '5+ Years',
    iconColor: 'text-emerald-600',
    iconBg: 'bg-emerald-100',
    description: '',
    sections: [
      {
        title: 'Responsibilities',
        items: [
          'To translate key product offerings and intents into creative, catchy videos to effectively communicate the product USP to international audience.',
          'To translate key product offerings and intents into stunning graphic designs to effectively communicate the product USP to international Audience.',
          'Working in the creative marketing team to create rich marketing communication videos for Web/Mobile to promote mobile and desktop products.',
          'To translate marketing and brand strategies to eye catching videos for international audience.',
          'Understand the brief, visualize and execute design.',
          'Creating videos for Brand communication.',
          'To create promotional Videos for social media platforms to promote iOS & Mac Apps.',
          'You work closely with marketing directors, & content writers, and web developers.',
          'You will be responsible for the creative process at different stages.',
          'You will be responsible for Conceptualization, storyboarding, content, animating, and editing.'
        ]
      },
      {
        title: 'Requirements',
        items: [
          'Familiarity with Special Effects, 3D Animation, composing for Video creation.',
          'Should have a good taste in color and composition of creative.',
          'Ability to plan consistency in style throughout the various elements of the products.',
          'Ability to observe, learn nuances and taste (color, style, form) of a domain like the Apple or a general platform like the mobile.',
          'Should be independent in defining ideas and exploring alternatives.',
          'Experience in Mobile App industry would be added advantage.',
          'Experience in Responsive Web Design.',
          'Experience creating wireframes, sketches, UI and final visual design for desktop, mobile and tablet.',
          'Prior experience of working on GIF, Video Editing tools & HTML banners is a big plus.',
          'Excellent knowledge on mobile and web platform.',
          'Experience of working on Social Media platforms, Digital Ad banners, UI/UX.',
          'Design of business collaterals, such as presentations, Infographics.',
          'Should have excellent communication and writing skills.',
          'Proficiency of working with digital technology.'
        ]
      },
      {
        title: 'Academics',
        items: [
          'BA/BVA in Graphic Design, Digital Marketing, Advertising Design or related field.',
          'Proficiency in video editing software packages (e.g. Adobe Premiere Pro, Adobe Illustrator, Adobe After Effects, Adobe In Design, Final Cut, Photoshop and various video editing tools used in industry.'
        ]
      }
    ]
  }
];

export function Careers() {
  const [expandedJobId, setExpandedJobId] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white font-sans">
      <Helmet>
        <title>Careers | Global Delight</title>
        <meta name="description" content="Join Global Delight and help us build amazing products together." />
      </Helmet>
      
      <Navbar />
      
      <main className="bg-[#fbfcff]">
        {/* Full-width Hero Banner */}
        <section 
          className="relative w-full min-h-[300px] md:min-h-[400px] py-16 md:py-20 flex items-center bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/hero/career_banner.png')" }}
        >
          {/* Optional dark overlay if text needs contrast, though user didn't explicitly ask for it */}
          <div className="absolute inset-0 bg-white/30 md:bg-transparent pointer-events-none"></div>

          <div className="w-full max-w-[1200px] mx-auto px-6 md:px-12 flex justify-start relative z-10">
            {/* Left-aligned Content */}
            <div className="w-full md:w-[50%] lg:w-[45%] text-left">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1a202c] leading-[1.2] mb-3 md:mb-4 tracking-tight">
                Where Talent <br />
                Meets <span className="text-[#667eea]">Opportunity</span>
              </h1>
              
              <p className="text-[13px] md:text-[15px] text-gray-700 md:text-gray-500 max-w-xs md:max-w-sm leading-relaxed font-medium">
                Join a team that inspires, innovates, and creates impact every day.
              </p>
            </div>
          </div>
        </section>

        {/* Perks Section */}
        <section className="py-6 md:py-12">
          <div className="max-w-[1100px] mx-auto px-4 md:px-12">
            <div className="border border-gray-100 rounded-2xl shadow-[0_4px_30px_-5px_rgba(0,0,0,0.05)] p-6 md:p-10 bg-white">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 divide-none md:divide-x divide-gray-100">
                {perks.map((perk, idx) => (
                  <div key={idx} className="flex flex-col items-center text-center md:px-6 first:px-0 last:pr-0">
                    <div className={`w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center mb-4 md:mb-5 ${perk.bgColor} ${perk.color} bg-opacity-30`}>
                      <perk.icon className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <h3 className="font-bold text-gray-900 text-[12px] md:text-[14px] mb-2">{perk.title}</h3>
                    <p className="text-[10px] md:text-[12px] text-gray-500 leading-relaxed max-w-[200px]">{perk.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Current Openings Section */}
        <section className="py-10 md:py-16">
          <div className="max-w-[1100px] mx-auto px-4 md:px-12">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 gap-4">
              <div>
                <div className="text-[10px] md:text-xs font-bold text-[#667eea] uppercase tracking-wider mb-2 md:mb-3">
                  OPEN POSITIONS
                </div>
                <h2 className="text-2xl md:text-[32px] font-extrabold text-gray-900">Current Openings</h2>
              </div>
              
              <div className="relative w-full md:w-auto">
                <button className="flex items-center justify-between gap-4 w-full md:w-56 px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-[13px] md:text-sm text-gray-700 shadow-sm hover:border-gray-300 transition-colors">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-gray-400" />
                    <span className="font-medium">All Locations</span>
                  </div>
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </button>
              </div>
            </div>

            <div className="space-y-4 md:space-y-5">
              {jobs.map((job) => {
                const isExpanded = expandedJobId === job.id;
                
                return (
                  <motion.div 
                    key={job.id}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className={`bg-white border rounded-2xl overflow-hidden transition-all group ${
                      isExpanded ? 'border-indigo-300 shadow-md' : 'border-gray-100 shadow-[0_2px_15px_-5px_rgba(0,0,0,0.03)] hover:shadow-md hover:border-indigo-100'
                    }`}
                  >
                    {/* Header Row */}
                    <div 
                      className="p-5 md:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-6 cursor-pointer"
                      onClick={() => setExpandedJobId(isExpanded ? null : job.id)}
                    >
                      <div className="flex items-start md:items-center gap-4 md:gap-6">
                        <div className={`w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center shrink-0 ${job.iconBg} ${job.iconColor} bg-opacity-30`}>
                          <job.icon className="w-5 h-5 md:w-7 md:h-7" />
                        </div>
                        <div>
                          <h3 className="text-sm md:text-lg font-bold text-gray-900 group-hover:text-indigo-600 transition-colors mb-2">{job.title}</h3>
                          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] md:text-[13px] text-gray-500 font-medium">
                            <div className="flex items-center gap-1.5">
                              <MapPin className="w-3.5 h-3.5" />
                              <span>{job.location}</span>
                            </div>
                            <div className="w-1 h-1 rounded-full bg-gray-300 hidden sm:block"></div>
                            <div className="flex items-center gap-1.5">
                              <Briefcase className="w-3.5 h-3.5" />
                              <span>{job.type}</span>
                            </div>
                            <div className="w-1 h-1 rounded-full bg-gray-300 hidden sm:block"></div>
                            <div className={`${job.iconBg} ${job.iconColor} bg-opacity-30 px-2 md:px-3 py-0.5 md:py-1 rounded-md`}>
                              Experience: {job.experience}
                            </div>
                          </div>
                        </div>
                      </div>

                      <button className="w-full md:w-auto flex items-center justify-center md:justify-between gap-2 px-6 py-2.5 bg-white border border-[#e2e8f0] text-[#5a67d8] font-semibold rounded-lg hover:border-[#cbd5e1] hover:bg-indigo-50 transition-colors text-[12px] md:text-[13px]">
                        {isExpanded ? 'Hide Details' : 'View Details'}
                        <Plus className={`w-3.5 h-3.5 md:w-4 md:h-4 transition-transform duration-300 ${isExpanded ? 'rotate-45' : ''}`} />
                      </button>
                    </div>

                    {/* Expandable Content */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 md:px-6 pb-6 md:pb-8 pt-2 border-t border-gray-100 mt-2">
                            {job.description && (
                              <p className="text-gray-600 text-[12px] md:text-[15px] mb-4 md:mb-6 leading-relaxed">
                                {job.description}
                              </p>
                            )}

                            <div className="space-y-6 md:space-y-8">
                              {job.sections.map((section, idx) => (
                                <div key={idx}>
                                  <h4 className="text-[13px] md:text-base font-bold text-gray-900 mb-2 md:mb-4">{section.title}</h4>
                                  <ul className="space-y-2 md:space-y-2.5">
                                    {section.items.map((item, i) => (
                                      <li key={i} className="flex items-start gap-2 md:gap-3 text-[11px] md:text-[14px] text-gray-600">
                                        <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-[#667eea] shrink-0 mt-1.5 md:mt-2"></div>
                                        <span className="leading-relaxed">{item}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>

                            <div className="mt-6 md:mt-10 pt-4 md:pt-6 border-t border-gray-100">
                              <a href="mailto:jobs@globaldelight.com" className="inline-flex w-full md:w-auto justify-center items-center gap-2 px-8 py-3 bg-[#5a67d8] text-white font-medium rounded-lg hover:bg-[#4c51bf] transition-colors shadow-md shadow-indigo-500/20 text-[13px] md:text-sm">
                                Apply Now <Send className="w-3 h-3 md:w-4 md:h-4 ml-1 -rotate-45" />
                              </a>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
