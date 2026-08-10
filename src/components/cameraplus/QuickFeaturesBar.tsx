import { motion } from 'motion/react';
import { Camera, Wand2, SlidersHorizontal, Image, Monitor } from 'lucide-react';

export function QuickFeaturesBar() {
  const features = [
    {
      icon: <Camera className="w-5 h-5 sm:w-6 sm:h-6 text-[#00B4B4]" strokeWidth={2} />,
      title: "Professional\nTools",
      description: "All-in-one editing"
    },
    {
      icon: <Wand2 className="w-5 h-5 sm:w-6 sm:h-6 text-[#00B4B4]" strokeWidth={2} />,
      title: "Stunning\nFilters",
      description: "Unique for every mood"
    },
    {
      icon: <SlidersHorizontal className="w-5 h-5 sm:w-6 sm:h-6 text-[#00B4B4]" strokeWidth={2} />,
      title: "Advanced\nControls",
      description: "Manual settings"
    },
    {
      icon: <Image className="w-5 h-5 sm:w-6 sm:h-6 text-[#00B4B4]" strokeWidth={2} />,
      title: "RAW\nSupport",
      description: "High quality photos"
    },
    {
      icon: <Monitor className="w-5 h-5 sm:w-6 sm:h-6 text-[#00B4B4]" strokeWidth={2} />,
      title: "Ultra HD\nQuality",
      description: "Capture every detail"
    }
  ];

  return (
    <section className="relative z-30 -mt-12 sm:-mt-16 pb-12 w-full px-4 md:px-6 pointer-events-none">
      <div className="container mx-auto max-w-[1200px] pointer-events-auto">
        
        {/* Mobile: Horizontally scrollable container. Desktop: Flex row */}
        <div className="w-full overflow-x-auto pb-6 sm:pb-0 hide-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
          
          <div className="flex flex-row items-center sm:justify-between gap-4 sm:gap-6 bg-white/80 backdrop-blur-xl rounded-[2rem] shadow-[0_20px_40px_rgba(0,0,0,0.06)] border border-white/60 p-4 md:p-6 lg:p-8 min-w-[max-content] sm:min-w-0">
            
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-row lg:flex-row items-center gap-3 sm:gap-4 w-auto sm:flex-1 group relative cursor-pointer pr-4 sm:pr-0"
              >
                {/* Icon Container */}
                <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-[1.25rem] bg-gradient-to-br from-[#00B4B4]/10 to-[#009b9b]/5 border border-[#00B4B4]/20 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#00B4B4]/20 group-hover:bg-[#00B4B4]/20">
                  {feature.icon}
                </div>
                
                {/* Text */}
                <div className="flex flex-col min-w-[100px] sm:min-w-0">
                  <h3 className="text-gray-900 font-bold text-[13px] sm:text-[15px] leading-[1.2] mb-1 whitespace-pre-line group-hover:text-[#00B4B4] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-500 text-[11px] sm:text-xs leading-tight whitespace-nowrap sm:whitespace-pre-line">
                    {feature.description}
                  </p>
                </div>

                {/* Separator (except for last item) */}
                {index < features.length - 1 && (
                  <div className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-10 bg-gradient-to-b from-transparent via-gray-200 to-transparent" />
                )}
              </motion.div>
            ))}
            
          </div>
        </div>
      </div>
    </section>
  );
}
