import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface SplashScreenDesktopProps {
  onComplete: () => void;
}

export function SplashScreenDesktop({ onComplete }: SplashScreenDesktopProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {isVisible && (
        <motion.div
          key="splash-screen-desktop"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-background overflow-hidden"
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
                duration: 1, 
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative z-20 flex items-center justify-center"
            >
              {/* Desktop sizes strictly */}
              <div className="relative w-64 lg:w-80">
                <img 
                  src="/logos/globaldelight-logo.png" 
                  alt="Global Delight" 
                  className="w-full h-full object-contain relative z-10 invert dark:invert-0"
                />
                
                <motion.div 
                  initial={{ x: "-100%" }}
                  animate={{ x: "200%" }}
                  transition={{ delay: 0.5, duration: 1.5, ease: "easeInOut" }}
                  className="absolute inset-0 z-20 bg-gradient-to-r from-transparent via-white/80 dark:via-white/20 to-transparent skew-x-12"
                  style={{
                    WebkitMaskImage: `url('/logos/globaldelight-logo.png')`,
                    WebkitMaskSize: 'contain',
                    WebkitMaskPosition: 'center',
                    WebkitMaskRepeat: 'no-repeat',
                    maskImage: `url('/logos/globaldelight-logo.png')`,
                    maskSize: 'contain',
                    maskPosition: 'center',
                    maskRepeat: 'no-repeat',
                  }}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
