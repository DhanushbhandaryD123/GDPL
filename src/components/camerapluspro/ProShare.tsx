import { useState, useEffect } from 'react';
import { Instagram, Facebook, Twitter, Share2 } from 'lucide-react';
import { PhoneFrame } from './PhoneFrame';
import { motion, AnimatePresence } from 'motion/react';
import { useTranslation } from 'react-i18next';

const floatingIcons = [
  { icon: Instagram, pos: 'top-4 -left-6', color: 'text-[#E1306C]' },
  { icon: Twitter, pos: 'top-1/3 -right-6', color: 'text-[#1DA1F2]' },
  { icon: Facebook, pos: 'bottom-1/4 -left-8', color: 'text-[#1877F2]' },
  { icon: Share2, pos: 'bottom-6 -right-4', color: 'text-blue-600' },
];

const socialRow = [
  { label: 'Instagram', icon: Instagram, color: 'text-[#E1306C]', hoverBorder: 'hover:border-[#E1306C]', hoverText: 'group-hover:text-[#E1306C]' },
  { label: 'Facebook', icon: Facebook, color: 'text-[#1877F2]', hoverBorder: 'hover:border-[#1877F2]', hoverText: 'group-hover:text-[#1877F2]' },
  { label: 'Twitter', icon: Twitter, color: 'text-[#1DA1F2]', hoverBorder: 'hover:border-[#1DA1F2]', hoverText: 'group-hover:text-[#1DA1F2]' },
  { label: 'Tumblr', letter: 't', color: 'text-[#36465D]', hoverBorder: 'hover:border-[#36465D]', hoverText: 'group-hover:text-[#36465D]' },
 
];

const moments = [
  "https://images.unsplash.com/photo-1517511620798-cec17d428bc0?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1516961642265-531546e84af2?q=80&w=800&auto=format&fit=crop"
];

export function ProShare() {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % moments.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="reviews" className="bg-[#ffffff] py-16 md:py-24 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — phone with floating icons */}
          <div className="flex justify-center order-2 lg:order-1">
            <div className="relative w-[220px] sm:w-[260px]">
              <PhoneFrame className="shadow-[0_20px_60px_rgba(0,0,0,0.15)] relative overflow-hidden bg-black h-full">
                <AnimatePresence mode="popLayout">
                  <motion.img
                    key={currentIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    src={moments[currentIndex]}
                    alt="Moments of life"
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>
              </PhoneFrame>

              {floatingIcons.map(({ icon: Icon, pos, color }, idx) => (
                <div
                  key={idx}
                  className={`absolute ${pos} w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center border border-gray-100 ${color}`}
                >
                  <Icon className="w-5 h-5" strokeWidth={1.75} />
                </div>
              ))}
            </div>
          </div>

          {/* Right — copy */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('camera_plus_pro.share.title')}
            </h2>
            <p className="text-lg text-gray-500 mb-10 max-w-md leading-relaxed">
              {t('camera_plus_pro.share.subtitle')}
            </p>

            <div className="flex items-center gap-4 flex-wrap">
              {socialRow.map(({ label, icon: Icon, letter, hoverBorder, hoverText }) => (
                <div
                  key={label}
                  className={`group w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 transition-colors cursor-pointer ${hoverBorder}`}
                  aria-label={label}
                >
                  {Icon ? <Icon className={`w-5 h-5 transition-colors ${hoverText}`} strokeWidth={1.75} /> : <span className={`font-bold text-lg leading-none transition-colors ${hoverText}`}>{letter}</span>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
