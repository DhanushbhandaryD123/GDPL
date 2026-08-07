import { motion } from 'motion/react';
import { Camera, Wand2, SlidersHorizontal, Image, Monitor } from 'lucide-react';

export function QuickFeaturesBar() {
  const features = [
    {
      icon: <Camera className="w-6 h-6 text-[#00B4B4]" strokeWidth={1.5} />,
      title: "Professional\nTools",
      description: "All-in-one editing\nand shooting tools"
    },
    {
      icon: <Wand2 className="w-6 h-6 text-[#00B4B4]" strokeWidth={1.5} />,
      title: "Stunning\nFilters",
      description: "Unique filters for\nevery mood"
    },
    {
      icon: <SlidersHorizontal className="w-6 h-6 text-[#00B4B4]" strokeWidth={1.5} />,
      title: "Advanced\nControls",
      description: "Manual settings for\nperfect shots"
    },
    {
      icon: <Image className="w-6 h-6 text-[#00B4B4]" strokeWidth={1.5} />,
      title: "RAW\nSupport",
      description: "High quality RAW\nphoto support"
    },
    {
      icon: <Monitor className="w-6 h-6 text-[#00B4B4]" strokeWidth={1.5} />,
      title: "Ultra HD\nQuality",
      description: "Capture every detail\nin high resolution"
    }
  ];

  return (
    <section className="relative z-20 -mt-8 pb-12 bg-white">
      <div className="container mx-auto px-6 max-w-[1400px]">
        {/* We use a flex container that can scroll horizontally on mobile if needed */}
        <div className="flex flex-col md:flex-row items-center md:items-stretch justify-between gap-4 lg:gap-6 bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 p-6 lg:p-8">
          
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="flex flex-row md:flex-col lg:flex-row items-center md:items-start lg:items-center gap-4 lg:gap-5 w-full md:w-1/5 group"
            >
              {/* Icon Container */}
              <div className="flex-shrink-0 w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-[#F0FDFD] border border-[#E0F6F6] flex items-center justify-center transition-transform group-hover:scale-110">
                {feature.icon}
              </div>
              
              {/* Text */}
              <div className="flex flex-col">
                <h3 className="text-gray-900 font-bold text-sm lg:text-[15px] leading-tight mb-1 whitespace-pre-line">
                  {feature.title}
                </h3>
                <p className="text-gray-500 text-[11px] lg:text-xs leading-tight whitespace-pre-line">
                  {feature.description}
                </p>
              </div>

              {/* Separator (except for last item) */}
              {index < features.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-gray-100" />
              )}
            </motion.div>
          ))}
          
        </div>
      </div>
    </section>
  );
}
