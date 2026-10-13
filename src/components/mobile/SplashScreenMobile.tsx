import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface SplashScreenMobileProps {
  onComplete: () => void;
}

export function SplashScreenMobile({ onComplete }: SplashScreenMobileProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const isBot =
      Boolean(navigator.webdriver) ||
      navigator.userAgent === 'ReactSnap' ||
      /Headless|Puppeteer|Lighthouse|PageSpeed|Chrome-Lighthouse|PTST/i.test(navigator.userAgent) ||
      Boolean((window as any).__PRERENDER__) ||
      window.location.search.includes('no-splash');

    if (isBot) {
      onComplete();
      return;
    }

    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {isVisible && (
        <motion.div
          key="splash-screen-mobile"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          onClick={() => setIsVisible(false)}
          style={{ zIndex: 99999, backgroundColor: '#000000' }}
          className="fixed inset-0 flex items-center justify-center bg-black overflow-hidden select-none cursor-pointer"
        >
          {/* Animated Background Gradients */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute -top-[20%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-purple-500/20 blur-[120px]" 
            />
            <motion.div 
              animate={{ 
                scale: [1, 1.5, 1],
                rotate: [0, -90, 0],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute top-[20%] -right-[10%] w-[40vw] h-[40vw] rounded-full bg-blue-500/20 blur-[120px]" 
            />
            <motion.div 
              animate={{ 
                scale: [1, 1.3, 1],
                translateY: [0, -50, 0],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-[10%] left-[20%] w-[60vw] h-[40vw] rounded-full bg-pink-500/20 blur-[120px]" 
            />
          </div>
          
          <div className="relative z-10 flex flex-col items-center justify-center h-full w-full">
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative z-20 flex items-center justify-center"
            >
              {/* Mobile sizes strictly */}
              <div className="relative w-48 flex items-center justify-center">
                <motion.div
                  initial={{ clipPath: 'inset(0 100% 0 0)' }}
                  animate={{ clipPath: 'inset(0 0% 0 0)' }}
                  transition={{ delay: 0.2, duration: 1.2, ease: "easeInOut" }}
                  className="w-full h-full"
                >
                  <img 
                    src="/logos/globaldelight-logo.webp" 
                    alt="Global Delight" 
                    className="w-full h-full object-contain relative z-10 brightness-0 invert" width={1536} height={1024} loading="eager"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>

          <div className="absolute bottom-6 right-6 z-30">
            <span className="text-xs text-white/40 hover:text-white/80 transition-colors">
              Tap anywhere to skip
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
