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
  ChevronRight,
  Send
} from 'lucide-react';

import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';

const perks = [
  {
    icon: Rocket,
    title: 'Grow Your Career',
    description: 'Continuous learning & growth',
    color: 'text-purple-600',
    bgColor: 'bg-purple-100',
  },
  {
    icon: Heart,
    title: 'Inclusive Culture',
    description: 'Diverse, supportive & open',
    color: 'text-red-500',
    bgColor: 'bg-red-100',
  },
  {
    icon: Star,
    title: 'Make an Impact',
    description: 'Work that matters',
    color: 'text-orange-500',
    bgColor: 'bg-orange-100',
  },
  {
    icon: Gift,
    title: 'Awesome Benefits',
    description: 'Health, flexibility & more',
    color: 'text-green-600',
    bgColor: 'bg-green-100',
  }
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
      
      <main>
        {/* Hero Section */}
        <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#f8fbff] to-[#f0ebff] pt-24 pb-20 md:pt-32 md:pb-28 border-b border-gray-100">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center relative z-10">
            {/* Left Content */}
            <div className="w-full md:w-1/2 mb-12 md:mb-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-sm font-bold text-indigo-500 tracking-wider uppercase mb-4">
                  Careers
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.1] mb-6">
                  Let's Build Something <br className="hidden md:block" />
                  Amazing <span className="text-indigo-500">Together</span>
                </h1>
                
                {/* Decorative underline */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="h-1 w-12 bg-indigo-500 rounded-full"></div>
                  <div className="h-1 w-2 bg-indigo-500 rounded-full"></div>
                </div>

                <p className="text-lg text-gray-600 mb-8 max-w-lg">
                  We're always looking for talented, passionate and curious people to join our team.
                </p>
                <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium px-8 py-3.5 rounded-lg flex items-center gap-2 transition-colors shadow-lg shadow-indigo-500/30">
                  <Send className="w-5 h-5 -rotate-45" />
                  Explore Opportunities
                </button>
              </motion.div>
            </div>

            {/* Right Content / Illustration Area */}
            <div className="w-full md:w-1/2 relative flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="relative w-full max-w-lg aspect-square bg-gradient-to-tr from-indigo-100/50 to-purple-50/50 rounded-full flex items-center justify-center"
              >
                {/* We'll use a placeholder structure for the chair/plant illustration since we don't have the exact image */}
                <div className="absolute right-4 bottom-12 w-64 h-64 bg-white rounded-3xl shadow-xl border border-gray-100 flex items-center justify-center flex-col p-6 z-10">
                  <div className="w-full h-full bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200 flex items-center justify-center text-gray-400 text-sm text-center p-4">
                    <span>(Illustration Placeholder) <br/> Chair & Plant image goes here</span>
                  </div>
                </div>
                
                {/* Floating Badge */}
                <div className="absolute left-0 top-1/3 bg-white px-5 py-3 rounded-xl shadow-lg border border-gray-50 flex items-center gap-3 animate-[bounce_4s_infinite] z-20">
                  <div className="bg-indigo-100 p-2 rounded-lg">
                    <Heart className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-gray-900">Great Place</div>
                    <div className="text-[10px] text-gray-500">to Work</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Perks Section */}
        <section className="py-12 border-b border-gray-100 bg-white">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
              {perks.map((perk, idx) => (
                <div key={idx} className="flex items-center gap-4 pt-6 sm:pt-0 sm:px-6 first:px-0">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${perk.bgColor} ${perk.color}`}>
                    <perk.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-[15px]">{perk.title}</h3>
                    <p className="text-xs text-gray-500 mt-0.5">{perk.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Current Openings Section */}
        <section className="py-20 bg-[#fafcff]">
          <div className="max-w-[1000px] mx-auto px-6 md:px-12">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
              <div>
                <div className="flex items-center gap-4 mb-2">
                  <div className="h-[2px] w-8 bg-indigo-500"></div>
                  <span className="text-xs font-bold text-indigo-500 uppercase tracking-wider">Open Positions</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Current Openings</h2>
              </div>
              
              <div className="relative">
                <button className="flex items-center justify-between gap-3 w-48 px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 shadow-sm hover:border-gray-300 transition-colors">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-gray-400" />
                    <span>All Locations</span>
                  </div>
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </button>
              </div>
            </div>

            <div className="space-y-4">
              {jobs.map((job) => {
                const isExpanded = expandedJobId === job.id;
                
                return (
                  <motion.div 
                    key={job.id}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className={`bg-white border rounded-xl overflow-hidden transition-all group ${
                      isExpanded ? 'border-indigo-300 shadow-md' : 'border-gray-200 hover:shadow-md hover:border-indigo-100'
                    }`}
                  >
                    {/* Header Row */}
                    <div 
                      className="p-5 md:p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 cursor-pointer"
                      onClick={() => setExpandedJobId(isExpanded ? null : job.id)}
                    >
                      <div className="flex items-center gap-5">
                        <div className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 ${job.iconBg} ${job.iconColor}`}>
                          <job.icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 group-hover:text-indigo-600 transition-colors mb-2">{job.title}</h3>
                          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-gray-500">
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
                            <div className="bg-indigo-50 text-indigo-600 px-2.5 py-1 rounded-md font-medium">
                              Experience: {job.experience}
                            </div>
                          </div>
                        </div>
                      </div>

                      <button className="w-full md:w-auto flex items-center justify-center md:justify-between gap-2 px-6 py-2.5 bg-white border border-gray-200 text-indigo-600 font-medium rounded-lg hover:border-indigo-600 hover:bg-indigo-50 transition-colors text-sm">
                        {isExpanded ? 'Hide Details' : 'View Details'}
                        <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-90' : ''}`} />
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
                          <div className="px-6 pb-8 pt-2 border-t border-gray-100">
                            {job.description && (
                              <p className="text-gray-600 text-[15px] mb-6 leading-relaxed">
                                {job.description}
                              </p>
                            )}

                            <div className="space-y-8">
                              {job.sections.map((section, idx) => (
                                <div key={idx}>
                                  <h4 className="text-base font-bold text-gray-900 mb-4">{section.title}</h4>
                                  <ul className="space-y-2.5">
                                    {section.items.map((item, i) => (
                                      <li key={i} className="flex items-start gap-3 text-[14px] text-gray-600">
                                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0 mt-2"></div>
                                        <span className="leading-relaxed">{item}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>

                            <div className="mt-10 pt-6 border-t border-gray-100">
                              <a href="mailto:jobs@globaldelight.com" className="inline-flex items-center gap-2 px-8 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors shadow-md shadow-indigo-500/20">
                                Apply Now <Send className="w-4 h-4 ml-1 -rotate-45" />
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
