import { motion } from 'motion/react';
import { Flower2, Camera, Video, ChevronRight } from 'lucide-react';

const tools = [
  {
    title: 'Macro',
    description: 'Explore the tiny world\nin every detail.',
    icon: Flower2,
    image: 'https://images.unsplash.com/photo-1518895949257-7621bf273758?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: 'AirSnap\n(Remote Photography)',
    description: 'Click perfect shots\nremotely.',
    icon: Camera,
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800&auto=format&fit=crop' // placeholder for woman
  },
  {
    title: 'Video Recording',
    description: 'Record smooth videos\nin high quality.',
    icon: Video,
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=800&auto=format&fit=crop' // placeholder for city traffic
  }
];

export function EnhancementTools() {
  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Header Area */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-[#111827] mb-2">
              Professional Tools
            </h2>
            <p className="text-gray-500 text-[15px]">
              Everything you need to create like a pro.
            </p>
          </div>
          <a href="#" className="hidden md:flex items-center gap-1 text-[#00B4B4] font-medium hover:text-[#009b9b] transition-colors mt-4 md:mt-0">
            View All
            <ChevronRight className="w-4 h-4" strokeWidth={2.5} />
          </a>
        </div>

        {/* 3 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col"
            >
              {/* Image Container */}
              <div className="h-[220px] overflow-hidden relative">
                <img 
                  src={tool.image} 
                  alt={tool.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              
              {/* Text Container */}
              <div className="p-6 flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#00B4B4] rounded-xl flex items-center justify-center shadow-md shadow-[#00B4B4]/20 mt-1">
                  <tool.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex flex-col pt-1">
                  <h3 className="text-[15px] font-bold text-[#111827] mb-1 whitespace-pre-line leading-tight">
                    {tool.title}
                  </h3>
                  <p className="text-gray-500 text-[13px] leading-snug whitespace-pre-line">
                    {tool.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile View All Link */}
        <div className="mt-8 flex justify-center md:hidden">
          <a href="#" className="flex items-center gap-1 text-[#00B4B4] font-medium hover:text-[#009b9b] transition-colors">
            View All
            <ChevronRight className="w-4 h-4" strokeWidth={2.5} />
          </a>
        </div>

      </div>
    </section>
  );
}
