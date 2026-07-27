import { useState } from 'react';
import { motion } from 'motion/react';

export interface AppItem {
  id: string;
  name: string;
  description: string;
  iconPath: string;
  priceOriginal?: string;
  priceDiscounted?: string;
  learnMoreUrl?: string;
}

interface AppCategoryMobileProps {
  title: string;
  deviceImageAlt: string;
  deviceImagePath: string;
  titleClassName?: string;
  apps: AppItem[];
  reverse?: boolean;
}

function AppCardMobile({ app, index }: { app: AppItem, index: number }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group [perspective:1000px] w-[120px] shrink-0 snap-center h-full"
      onClick={(e) => {
        if (!isFlipped) {
          e.preventDefault();
          setIsFlipped(true);
        }
      }}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <a 
        href={app.learnMoreUrl || '#'} 
        target="_blank" 
        rel="noopener noreferrer" 
        className={`relative block w-full h-[140px] transition-transform duration-700 [transform-style:preserve-3d] cursor-pointer group/link ${isFlipped ? '[transform:rotateY(180deg)]' : 'hover:[transform:rotateY(180deg)]'}`}
      >
        
        {/* Front */}
        <div className="w-full h-full [backface-visibility:hidden] bg-white rounded-xl shadow-[0_2px_8px_rgb(0,0,0,0.06)] border border-gray-50 p-2 flex flex-col items-center justify-start gap-1.5 transition-all group-hover:shadow-[0_4px_12px_rgb(0,0,0,0.1)] text-center">
          <div className="w-12 h-12 shrink-0 flex justify-center items-center rounded-xl transition-transform duration-300 group-hover:scale-105 mt-2">
            <img 
              src={app.iconPath} 
              alt={app.name} 
              className="w-10 h-10 drop-shadow-sm object-contain"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
                (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
              }}
            />
            {/* Fallback Placeholder */}
            <div className="hidden w-10 h-10 rounded-full shadow flex items-center justify-center text-white bg-gradient-to-br from-gray-400 to-gray-600">
              <span className="text-[7px] text-center">{app.name}</span>
            </div>
          </div>
          
          <div className="flex flex-col items-center w-full mt-1">
            <h3 className="text-[11px] font-bold text-gray-900 transition-colors leading-tight">{app.name}</h3>
            <p className="text-[8px] text-gray-500 mt-1 leading-snug transition-colors line-clamp-3 px-1">
              {app.description}
            </p>
          </div>
        </div>

        {/* Back */}
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-white rounded-xl shadow-[0_2px_8px_rgb(0,0,0,0.1)] border border-gray-50 p-2 flex flex-col items-center justify-center gap-1 text-center">
          <img src={app.iconPath} alt={app.name} className="w-8 h-8 drop-shadow-sm object-contain mb-1" />
          
          <h3 className="text-[11px] font-bold text-[#003057] leading-tight">{app.name}</h3>
          
          <div className="mt-0.5 flex flex-col items-center justify-center">
            {app.priceOriginal && app.priceDiscounted ? (
              <div className="flex flex-col items-center gap-0">
                <span className="text-[#3b82f6] line-through font-bold text-[8px]">
                  {app.priceOriginal}
                </span>
                <span className="text-[#3b82f6] font-bold text-[9px]">
                  {app.priceDiscounted}
                </span>
              </div>
            ) : app.priceDiscounted ? (
              <div className="mb-0.5">
                <span className="text-[#3b82f6] font-bold text-[9px]">
                  {app.priceDiscounted}
                </span>
              </div>
            ) : null}
            <span className="text-[#d95d39] text-[9px] font-bold group-hover/link:text-orange-700 transition-colors block mt-2">
              Learn More →
            </span>
          </div>
        </div>

      </a>
    </motion.div>
  );
}

export function AppCategoryMobile({ title, deviceImageAlt, deviceImagePath, titleClassName, apps }: AppCategoryMobileProps) {
  return (
    <section className="py-4 w-full px-1 overflow-hidden">
      <div className="flex flex-row items-center justify-start gap-1 w-full">
        {/* Device Image (Left Side) */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "0px" }}
          transition={{ duration: 0.6 }}
          className="w-[30%] shrink-0 flex flex-col items-center justify-center"
        >
          <div className="flex flex-col items-center justify-center relative w-full">
            <img 
              src={deviceImagePath} 
              alt={deviceImageAlt} 
              className={`w-full object-contain drop-shadow-lg mx-auto ${
                title.includes('iOS') 
                  ? 'max-w-[85px] max-h-[130px]' 
                  : title.includes('Android') 
                    ? 'max-w-[65px] max-h-[110px]' 
                    : 'max-w-[100px] max-h-[140px]'
              }`}
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
                (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
              }}
            />
            {/* Fallback Placeholder */}
            <div className="hidden w-20 h-20 bg-gray-100 rounded-lg border flex items-center justify-center text-gray-400 text-xs shadow-sm relative overflow-hidden">
              <span className="z-10">{deviceImageAlt}</span>
            </div>
            
            <h2 className={`text-[13px] font-bold mt-1 text-gray-800 text-center relative z-10 ${titleClassName || ''}`}>{title}</h2>
          </div>
        </motion.div>

        {/* Apps Grid (Right Side - Horizontally Scrolling) */}
        <div 
          className="w-[70%] flex flex-row gap-3 overflow-x-auto pb-2 pt-2 px-1 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {apps.map((app, index) => (
            <AppCardMobile key={app.id} app={app} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
