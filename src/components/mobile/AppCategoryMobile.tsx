import { useState } from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group [perspective:1000px] w-[200px] sm:w-[240px] shrink-0 snap-center h-full"
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
        className={`relative block w-full h-[220px] sm:h-[240px] transition-transform duration-700 [transform-style:preserve-3d] cursor-pointer group/link ${isFlipped ? '[transform:rotateY(180deg)]' : 'hover:[transform:rotateY(180deg)]'}`}
      >
        
        {/* Front */}
        <div className="w-full h-full [backface-visibility:hidden] bg-white rounded-2xl shadow-[0_4px_16px_rgb(0,0,0,0.08)] border border-gray-100 p-4 flex flex-col items-center justify-start gap-3 transition-all group-hover:shadow-[0_8px_24px_rgb(0,0,0,0.12)] text-center">
          <div className="w-16 h-16 shrink-0 flex justify-center items-center rounded-2xl transition-transform duration-300 group-hover:scale-110 mt-2">
            <img 
              src={app.iconPath} 
              alt={app.name} 
              className="w-14 h-14 drop-shadow-md object-contain"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
                (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
              }}
            />
            {/* Fallback Placeholder */}
            <div className="hidden w-14 h-14 rounded-full shadow flex items-center justify-center text-white bg-gradient-to-br from-gray-400 to-gray-600">
              <span className="text-[10px] text-center">{app.name}</span>
            </div>
          </div>
          
          <div className="flex flex-col items-center w-full mt-2 gap-1.5">
            <h3 className="text-base font-bold text-gray-900 transition-colors leading-tight">{app.name}</h3>
            <p className="text-xs text-gray-500 leading-relaxed transition-colors line-clamp-3 px-2">
              {app.description}
            </p>
          </div>
        </div>

        {/* Back */}
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-white rounded-2xl shadow-[0_4px_16px_rgb(0,0,0,0.12)] border border-gray-100 p-4 flex flex-col items-center justify-center gap-2 text-center">
          <img src={app.iconPath} alt={app.name} className="w-12 h-12 drop-shadow-md object-contain mb-2" />
          
          <h3 className="text-sm font-bold text-[#003057] leading-tight">{app.name}</h3>
          
          <div className="mt-2 flex flex-col items-center justify-center gap-1">
            {app.priceOriginal && app.priceDiscounted ? (
              <div className="flex flex-col items-center gap-0.5">
                <span className="text-[#3b82f6] line-through font-medium text-xs opacity-80">
                  {app.priceOriginal}
                </span>
                <span className="text-[#3b82f6] font-bold text-sm">
                  {app.priceDiscounted}
                </span>
              </div>
            ) : app.priceDiscounted ? (
              <div className="mb-1">
                <span className="text-[#3b82f6] font-bold text-sm">
                  {app.priceDiscounted}
                </span>
              </div>
            ) : null}
            <span className="bg-[#003057] text-white px-4 py-2 rounded-full text-xs font-bold group-hover/link:bg-blue-600 transition-colors block mt-3 shadow-md">
              {t('home.categories.learn_more')} →
            </span>
          </div>
        </div>

      </a>
    </motion.div>
  );
}

export function AppCategoryMobile({ title, deviceImageAlt, deviceImagePath, titleClassName, apps }: AppCategoryMobileProps) {
  return (
    <section className="py-6 w-full px-2 overflow-hidden border-b border-gray-100 last:border-0">
      <div className="flex flex-col items-center justify-center gap-6 w-full">
        {/* Device Image (Top Center) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px" }}
          transition={{ duration: 0.6 }}
          className="w-full flex flex-col items-center justify-center pt-2"
        >
          <div className="flex flex-col items-center justify-center relative w-full">
            <img 
              src={deviceImagePath} 
              alt={deviceImageAlt} 
              className={`w-full object-contain drop-shadow-xl mx-auto transition-transform hover:scale-105 ${
                title.includes('iOS') 
                  ? 'max-w-[160px] max-h-[220px]' 
                  : title.includes('Android') 
                    ? 'max-w-[130px] max-h-[170px]' 
                    : 'max-w-[180px] max-h-[140px]'
              }`}
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
                (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
              }}
            />
            {/* Fallback Placeholder */}
            <div className="hidden w-24 h-24 bg-gray-100 rounded-lg border flex items-center justify-center text-gray-400 text-xs shadow-sm relative overflow-hidden">
              <span className="z-10">{deviceImageAlt}</span>
            </div>
            
            <h2 className={`text-lg font-bold mt-1 text-gray-900 text-center relative z-10 ${titleClassName || ''}`}>{title}</h2>
          </div>
        </motion.div>

        {/* Apps Grid (Bottom - Horizontally Scrolling) */}
        <div 
          className="w-full flex flex-row gap-4 overflow-x-auto pb-4 pt-2 px-4 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden items-center"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {apps.map((app, index) => (
            <AppCardMobile key={app.id} app={app} index={index} />
          ))}
          {/* Add a spacer at the end to allow the last card to scroll fully into view */}
          <div className="shrink-0 w-2 h-full"></div>
        </div>
      </div>
    </section>
  );
}
