import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export interface AppItem {
  id: string;
  name: string;
  description: string;
  iconPath: string;
  priceOriginal?: string;
  priceDiscounted?: string;
  learnMoreUrl?: string;
}

interface AppCategoryDesktopProps {
  title: string;
  deviceImageAlt: string;
  deviceImagePath: string;
  imageClassName?: string;
  titleClassName?: string;
  apps: AppItem[];
  reverse?: boolean;
}

function AppCardDesktop({ app, index }: { app: AppItem, index: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group [perspective:1000px] w-full"
    >
      <Link to={app.learnMoreUrl || '#'} className="relative block w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] cursor-pointer group/link">
        
        {/* Front */}
        <div className="w-full [backface-visibility:hidden] bg-white rounded-3xl shadow-[0_4px_20px_rgb(0,0,0,0.08)] border border-gray-100 p-6 flex flex-col items-center transition-all h-full group-hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
          <div className="w-28 h-28 flex justify-center items-center rounded-3xl mb-2 transition-transform duration-300 group-hover:scale-105">
            <img 
              src={app.iconPath} 
              alt={app.name} 
              className="w-20 h-20 drop-shadow-md object-contain"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
                (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
              }}
            />
            {/* Fallback Placeholder */}
            <div className="hidden w-20 h-20 rounded-full shadow-lg flex items-center justify-center text-white bg-gradient-to-br from-gray-400 to-gray-600">
              <span className="text-xs text-center">{app.name} Icon</span>
            </div>
          </div>
          
          <h3 className="text-xl font-bold text-gray-900 transition-colors">{app.name}</h3>
          <p className="text-sm text-gray-500 mt-2 max-w-[200px] mx-auto leading-relaxed text-center transition-colors">
            {app.description}
          </p>
        </div>

        {/* Back */}
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 p-6 flex flex-col items-center justify-center">
          <div className="w-28 h-28 flex justify-center items-center rounded-3xl mb-2">
            <img src={app.iconPath} alt={app.name} className="w-20 h-20 drop-shadow-md object-contain" />
          </div>
          <h3 className="text-xl font-bold text-[#003057]">{app.name}</h3>
          
          <div className="mt-3 text-center flex flex-col items-center justify-center w-full">
            {app.priceOriginal && app.priceDiscounted ? (
              <>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-[#3b82f6] line-through font-bold text-[15px]">
                    {app.priceOriginal}
                  </span>
                  <span className="text-[#3b82f6] font-bold text-lg">
                    {app.priceDiscounted}
                  </span>
                </div>
                <span className="text-[#d95d39] text-base font-semibold group-hover/link:text-orange-700 transition-colors">
                  Learn More
                </span>
              </>
            ) : app.priceDiscounted ? (
              <>
                <div className="mb-1">
                  <span className="text-[#3b82f6] font-bold text-[14px]">
                    {app.priceDiscounted}
                  </span>
                </div>
                <span className="text-[#d95d39] text-base font-semibold group-hover/link:text-orange-700 transition-colors">
                  Learn More
                </span>
              </>
            ) : (
              <span className="mt-2 text-[#d95d39] text-base font-semibold group-hover/link:text-orange-700 transition-colors">
                Learn More
              </span>
            )}
          </div>
        </div>

      </Link>
    </motion.div>
  );
}

export function AppCategoryDesktop({ title, deviceImageAlt, deviceImagePath, imageClassName, titleClassName, apps, reverse = false }: AppCategoryDesktopProps) {
  return (
    <section className="py-8 w-full max-w-[1920px] mx-auto px-4">
      {/* Title */}
      <h2 className="text-3xl font-bold mb-4 text-gray-900 ml-12 hidden">{title}</h2>
      
      <div className={`flex flex-row items-center justify-center gap-16 px-12 ${reverse ? 'flex-row-reverse' : ''}`}>
        {/* Device Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="w-1/3 flex justify-center"
        >
          <div className="flex flex-col items-center justify-center relative">
            <img 
              src={deviceImagePath} 
              alt={deviceImageAlt} 
              className={`w-full object-contain drop-shadow-xl mx-auto ${imageClassName || 'max-w-[220px] max-h-[350px]'}`}
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
                (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
              }}
            />
            {/* Fallback Placeholder */}
            <div className="hidden w-64 h-48 bg-gray-100 rounded-xl border flex items-center justify-center text-gray-400 text-sm shadow-sm relative overflow-hidden">
              <span className="z-10">{deviceImageAlt} Placeholder</span>
              <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-gray-200 to-transparent"></div>
            </div>
            
            <h2 className={`text-3xl font-bold -mt-3 text-gray-800 text-center relative z-10 ${titleClassName || ''}`}>{title}</h2>
          </div>
        </motion.div>

        {/* Apps Grid */}
        <div className="w-2/3 grid grid-cols-2 lg:grid-cols-3 gap-8 text-center">
          {apps.map((app, index) => (
            <AppCardDesktop key={app.id} app={app} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
