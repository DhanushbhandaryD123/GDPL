import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'motion/react';

interface PhotoItem {
  id: string;
  name: string;
  src: string;
}

// All 6 images from the boom3D folder
const PHOTOS: PhotoItem[] = [
  { id: 's1', name: 'Bass', src: '/boom3D/s1.webp' },
  { id: 's3', name: 'Acoustic', src: '/boom3D/s3.webp' },
  { id: 'pop', name: 'Pop', src: '/boom3D/s4.webp' },
  { id: 'electronic', name: 'Electronic', src: '/boom3D/s5.webp' },
  { id: 'classical', name: 'Classical', src: '/boom3D/s6.webp' },
  { id: 'vocals', name: 'Vocals', src: '/boom3D/s7.webp' },
];

interface SlotTransform {
  x: string;
  y: string;
  scale: number;
  opacity: number;
  zIndex: number;
  rotateY: number;
}

export function InteractiveAudioSection() {
  const [step, setStep] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const lastInteractionRef = useRef<number>(Date.now());
  const touchStartX = useRef<number>(0);
  const touchStartY = useRef<number>(0);
  const isNavigatingRef = useRef<boolean>(false);

  // --------------------------------------------------------------------------
  // 1. Responsive Screen Detection (<640px)
  // --------------------------------------------------------------------------
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile, { passive: true });
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // --------------------------------------------------------------------------
  // 2. Navigation Triggers (Optimized with debounce to eliminate stutter)
  // --------------------------------------------------------------------------
  const navigate = useCallback((direction: 'next' | 'prev') => {
    const now = Date.now();
    if (now - lastInteractionRef.current < 250) return; // Prevent rapid queue pile-up
    lastInteractionRef.current = now;
    isNavigatingRef.current = true;

    setStep((prev) => (direction === 'next' ? prev + 1 : prev - 1));

    setTimeout(() => {
      isNavigatingRef.current = false;
    }, isMobile ? 450 : 550);
  }, [isMobile]);

  // --------------------------------------------------------------------------
  // 3. Auto-play: 3s idle cycles next image every 3.2s
  // --------------------------------------------------------------------------
  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      if (now - lastInteractionRef.current > 3000) {
        navigate('next');
      }
    }, 3200);

    return () => clearInterval(interval);
  }, [navigate]);

  // --------------------------------------------------------------------------
  // 4. Mouse Wheel Navigation
  // --------------------------------------------------------------------------
  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    if (Math.abs(e.deltaY) > 20 && !isNavigatingRef.current) {
      if (e.deltaY > 0) {
        navigate('next');
      } else {
        navigate('prev');
      }
    }
  };

  // --------------------------------------------------------------------------
  // 5. Arrow Keys Navigation
  // --------------------------------------------------------------------------
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isNavigatingRef.current) return;
      if (['ArrowDown', 'ArrowRight'].includes(e.key)) {
        navigate('next');
      } else if (['ArrowUp', 'ArrowLeft'].includes(e.key)) {
        navigate('prev');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [navigate]);

  // --------------------------------------------------------------------------
  // 6. Touch Swipe Navigation (Supports both Horizontal & Vertical swipe)
  // --------------------------------------------------------------------------
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const dy = e.changedTouches[0].clientY - touchStartY.current;

    // Detect primary swipe direction
    if (Math.abs(dx) > Math.abs(dy)) {
      if (Math.abs(dx) > 25 && !isNavigatingRef.current) {
        if (dx < 0) {
          navigate('next');
        } else {
          navigate('prev');
        }
      }
    } else {
      if (Math.abs(dy) > 25 && !isNavigatingRef.current) {
        if (dy < 0) {
          navigate('next');
        } else {
          navigate('prev');
        }
      }
    }
  };

  // --------------------------------------------------------------------------
  // 7. Pure GPU Transform Slots (Exact Same Spatial Layout Across Desktop & Mobile)
  // --------------------------------------------------------------------------
  const getSlotTransform = (slotIndex: number): SlotTransform => {
    if (isMobile) {
      // Mobile: Exact same spatial workflow & positions as desktop, scaled cleanly to prevent collision
      switch (slotIndex) {
        case 0: // FOCUS (Center-left)
          return {
            x: '-10vw',
            y: '0vh',
            scale: 1.0,
            opacity: 1.0,
            zIndex: 40,
            rotateY: -2,
          };
        case 1: // Orbit 1 (Bottom Left)
          return {
            x: '-30vw',
            y: '22vh',
            scale: 0.48,
            opacity: 0.95,
            zIndex: 25,
            rotateY: 5,
          };
        case 2: // Orbit 2 (Bottom Center-Right)
          return {
            x: '16vw',
            y: '22vh',
            scale: 0.48,
            opacity: 0.95,
            zIndex: 25,
            rotateY: -4,
          };
        case 3: // Orbit 3 (Mid-Right)
          return {
            x: '32vw',
            y: '0vh',
            scale: 0.44,
            opacity: 0.88,
            zIndex: 20,
            rotateY: -6,
          };
        case 4: // Orbit 4 (Top-Right)
          return {
            x: '18vw',
            y: '-22vh',
            scale: 0.4,
            opacity: 0.8,
            zIndex: 15,
            rotateY: -3,
          };
        case 5: // Orbit 5 (Top-Left)
        default:
          return {
            x: '-30vw',
            y: '-22vh',
            scale: 0.4,
            opacity: 0.8,
            zIndex: 15,
            rotateY: 3,
          };
      }
    }

    // Desktop Layout (1440x800 reference)
    switch (slotIndex) {
      case 0: // FOCUS (Center-left)
        return {
          x: '-12vw',
          y: '0vh',
          scale: 1.0,
          opacity: 1.0,
          zIndex: 40,
          rotateY: -2,
        };
      case 1: // Orbit 1 (Bottom Left)
        return {
          x: '-34vw',
          y: '25vh',
          scale: 0.48,
          opacity: 0.95,
          zIndex: 25,
          rotateY: 5,
        };
      case 2: // Orbit 2 (Bottom Center-Right)
        return {
          x: '14vw',
          y: '25vh',
          scale: 0.48,
          opacity: 0.95,
          zIndex: 25,
          rotateY: -4,
        };
      case 3: // Orbit 3 (Mid-Right)
        return {
          x: '34vw',
          y: '0vh',
          scale: 0.42,
          opacity: 0.88,
          zIndex: 20,
          rotateY: -6,
        };
      case 4: // Orbit 4 (Top-Right)
        return {
          x: '20vw',
          y: '-25vh',
          scale: 0.38,
          opacity: 0.8,
          zIndex: 15,
          rotateY: -3,
        };
      case 5: // Orbit 5 (Top-Left)
      default:
        return {
          x: '-32vw',
          y: '-25vh',
          scale: 0.38,
          opacity: 0.8,
          zIndex: 15,
          rotateY: 3,
        };
    }
  };

  return (
    <section
      id="3d-carousel-gallery"
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="relative w-full h-[460px] sm:h-[520px] lg:h-[580px] overflow-hidden select-none my-2 sm:my-4 flex items-center justify-center"
      style={{
        perspective: '1200px',
        touchAction: 'pan-y', // Smooth native scrolling with touch gestures
      }}
    >
      {/* Background Soft Ambient Light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[460px] bg-gradient-to-tr from-blue-50/40 via-purple-50/20 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Render all 6 photos: placed at center (left: 50%, top: 50%) and translated via GPU transforms */}
      {PHOTOS.map((photo, index) => {
        const count = PHOTOS.length;
        const slotIndex = ((index - (step % count)) % count + count) % count;
        const transform = getSlotTransform(slotIndex);
        const isFocus = slotIndex === 0;

        return (
          <motion.div
            key={photo.id}
            initial={false}
            animate={{
              x: transform.x,
              y: transform.y,
              scale: transform.scale,
              opacity: transform.opacity,
              zIndex: transform.zIndex,
              rotateY: transform.rotateY,
            }}
            transition={{
              duration: isMobile ? 0.48 : 0.62,
              ease: [0.25, 1, 0.5, 1], // Smooth cubic deceleration
            }}
            style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              transformStyle: 'preserve-3d',
              willChange: 'transform, opacity',
            }}
            className="cursor-pointer -translate-x-1/2 -translate-y-1/2 flex items-center"
            onClick={() => {
              lastInteractionRef.current = Date.now();
              if (!isFocus) {
                setStep((prev) => prev + slotIndex);
              }
            }}
          >
            {/* Image display container: 16:10 ratio, clean borderless */}
            <div
              className={`relative overflow-hidden transition-shadow duration-300 ${
                isMobile
                  ? 'w-[44vw] max-w-[220px] aspect-[16/10]'
                  : 'w-[32vw] max-w-[460px] aspect-[16/10]'
              }`}
            >
              <img
                src={photo.src}
                alt={`Boom 3D ${photo.name}`}
                className="w-full h-full object-contain pointer-events-none select-none"
                loading="eager"
                draggable={false}
              />
            </div>

            {/* Stylish Name Text on the Right Side of the Image */}
            <div
              className={`pl-1.5 sm:pl-3 pointer-events-none select-none transition-opacity duration-300 ${
                isFocus ? 'opacity-100' : 'opacity-70'
              }`}
            >
              <span
                className="block whitespace-nowrap text-gray-900 font-light uppercase"
                style={{
                  fontFamily: "'Playfair Display', 'Sora', Georgia, serif",
                  fontSize: isFocus
                    ? isMobile
                      ? '0.95rem'
                      : 'clamp(1rem, 1.6vw, 1.8rem)'
                    : isMobile
                      ? '0.6rem'
                      : 'clamp(0.7rem, 0.9vw, 0.9rem)',
                  letterSpacing: '0.14em',
                }}
              >
                {photo.name}
              </span>
            </div>
          </motion.div>
        );
      })}
    </section>
  );
}
