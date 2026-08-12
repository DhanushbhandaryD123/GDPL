import { useState, useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { RotateCcw } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useIsMobile } from '../../hooks/useIsMobile';

const cardsData = [
  {
    name: 'Boom 3D',
    category: 'Audio · Mac / Win',
    bgColor: '#9b66ff',
    logo: '/hero/Boom3d.png',
    descriptionKey: 'home.featured_work.products.boom3d',
    link: '/boom3D'
  },
  {
    name: 'Capto',
    category: 'Screen Record',
    bgColor: '#1de9b6',
    logo: '/hero/capto2.png',
    descriptionKey: 'home.featured_work.products.capto',
    link: '/capto'
  },
  {
    name: 'Vizmato',
    category: 'Video Editing',
    bgColor: '#ff7043',
    logo: '/hero/vizmat3.png',
    descriptionKey: 'home.featured_work.products.vizmato',
    link: '/vizmato'
  },
  {
    name: 'Camera Plus',
    category: 'Photography',
    bgColor: '#ffd740',
    logo: '/hero/cameraplus.png',
    descriptionKey: 'home.featured_work.products.cameraplus',
    link: '/cameraplus'
  },
  {
    name: 'AuDimix',
    category: 'Vocal Split - Win',
    bgColor: '#ff4b8b',
    logo: '/hero/Audiomix.png',
    descriptionKey: 'home.featured_work.products.audimix',
    link: '/audimix'
  },
  {
    name: 'AudiOn',
    category: 'Voice Record',
    bgColor: '#69f0ae',
    logo: '/hero/audioon.png',
    descriptionKey: 'home.featured_work.products.audion',
    link: '/audion'
  },
];

const getInitialPositions = (isMobile: boolean) => cardsData.map((_, i) => {
  const offset = i - 2.5;
  const spacing = isMobile ? 40 : 100; // Increased spacing to spread cards out
  const yOffset = isMobile ? 12 : 20; // Slightly larger arc for wider spread
  return {
    x: offset * spacing, // wider spacing for larger cards
    y: Math.abs(offset) * yOffset,
    rotate: offset * 8, // More rotation for a wider fan
    zIndex: 10 + i,
  };
});

const getStackedPositions = (isMobile: boolean) => cardsData.map((_, i) => {
  const offset = i - 2.5;
  const spacing = isMobile ? 120 : 250;
  return {
    x: offset * spacing, // Far outside horizontally
    y: 800, // Deep below the section
    rotate: offset * 45, // Dramatic rotation before entrance
    zIndex: 10 + i,
  };
});

export function FeaturedWork() {
  const { t } = useTranslation();
  const isMobile = useIsMobile();
  const [positions, setPositions] = useState(() => getStackedPositions(false));
  const [draggingIdx, setDraggingIdx] = useState<number | null>(null);
  const [hoverIdx, setHoverIdx] = useState<number | null>(null);
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  
  const maxZIndex = useRef(30);
  const dragInfo = useRef({ startX: 0, startY: 0, initialCardX: 0, initialCardY: 0 });
  const hasDragged = useRef(false);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2, // Trigger when 20% of section is visible
  });

  useEffect(() => {
    if (inView) {
      // Stagger fly-in for a dramatic entrance from outside
      const finalPositions = getInitialPositions(isMobile);
      const timers: NodeJS.Timeout[] = [];
      cardsData.forEach((_, i) => {
        const timer = setTimeout(() => {
          setPositions(prev => {
            const next = [...prev];
            next[i] = finalPositions[i];
            return next;
          });
        }, i * 120); // 120ms delay between each card
        timers.push(timer);
      });
      return () => timers.forEach(t => clearTimeout(t));
    }
  }, [inView, isMobile]);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>, i: number) => {
    // Only handle primary button (left click or touch)
    if (e.button !== 0 && e.pointerType === 'mouse') return;
    
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    hasDragged.current = false;
    setDraggingIdx(i);
    
    // Close open detail state if we click on a different card, or even the same card
    if (openIdx !== i) {
      setOpenIdx(null);
    }

    maxZIndex.current += 1;
    
    dragInfo.current = {
      startX: e.clientX,
      startY: e.clientY,
      initialCardX: positions[i].x,
      initialCardY: positions[i].y,
    };

    setPositions(prev => {
      const next = [...prev];
      next[i] = { ...next[i], zIndex: maxZIndex.current, rotate: 0 };
      return next;
    });
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>, i: number) => {
    if (draggingIdx !== i) return;
    
    const dx = e.clientX - dragInfo.current.startX;
    const dy = e.clientY - dragInfo.current.startY;
    
    // Threshold to distinguish drag from tap (~6px)
    if (!hasDragged.current && (Math.abs(dx) > 6 || Math.abs(dy) > 6)) {
      hasDragged.current = true;
      setOpenIdx(null); // Ensure detail is closed if we start dragging
    }
    
    if (hasDragged.current) {
      setPositions(prev => {
        const next = [...prev];
        next[i] = {
          ...next[i],
          x: dragInfo.current.initialCardX + dx,
          y: dragInfo.current.initialCardY + dy,
        };
        return next;
      });
    }
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>, i: number) => {
    if (draggingIdx !== i) return;
    (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    setDraggingIdx(null);
    
    if (!hasDragged.current) {
      // It was a tap!
      setOpenIdx(openIdx === i ? null : i);
    }
  };

  const resetLayout = () => {
    setPositions(getInitialPositions(isMobile));
    setOpenIdx(null);
  };

  return (
    <section ref={ref} className="bg-white pt-12 md:pt-16 pb-20 md:pb-24 overflow-hidden relative min-h-[550px] md:min-h-[650px] flex flex-col font-sans">
      {/* Radial gradient glow near the top - lightened for white background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-400/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 flex-1 flex flex-col">
        <div className="text-center mb-6 md:mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 tracking-tight">
           {t('home.featured_work.title')}
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-[600px] mx-auto leading-relaxed">
            {t('home.featured_work.subtitle')}
          </p>
        </div>

        {/* Canvas Area */}
        <div className="relative h-[420px] md:h-[550px] w-full max-w-5xl mx-auto flex justify-center items-center flex-1 touch-none">
          {cardsData.map((card, index) => {
            const pos = positions[index];
            const isDragging = draggingIdx === index;
            const isHovered = hoverIdx === index;
            const isOpen = openIdx === index;
            
            const scale = isDragging ? 1.05 : (isHovered && !isOpen ? 1.02 : 1);
            const extraY = (!isDragging && isHovered && !isOpen) ? -12 : 0;

            return (
              <div
                key={index}
                onPointerDown={(e) => handlePointerDown(e, index)}
                onPointerMove={(e) => handlePointerMove(e, index)}
                onPointerUp={(e) => handlePointerUp(e, index)}
                onPointerCancel={(e) => handlePointerUp(e, index)}
                onMouseEnter={() => setHoverIdx(index)}
                onMouseLeave={() => setHoverIdx(null)}
                className={`absolute w-[130px] md:w-[220px] h-[190px] md:h-[320px] rounded-[16px] md:rounded-[22px] select-none touch-none ${
                  isDragging ? 'cursor-grabbing shadow-[0_25px_50px_rgba(0,0,0,0.5)]' : 'cursor-grab shadow-[0_10px_35px_rgba(0,0,0,0.15)]'
                }`}
                style={{
                  backgroundColor: 'transparent',
                  top: '50%',
                  left: '50%',
                  transform: `translate(-50%, -50%) translateX(${pos.x}px) translateY(${pos.y + extraY}px) rotate(${pos.rotate}deg) scale(${scale})`,
                  transformOrigin: 'center center',
                  zIndex: pos.zIndex,
                  willChange: 'transform',
                  WebkitBackfaceVisibility: 'hidden',
                  backfaceVisibility: 'hidden',
                  transition: isDragging 
                    ? 'box-shadow 0.2s ease' // Instant transform while dragging
                    : 'transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.2s ease', // Smooth return/hover
                }}
              >
                {/* Front of card */}
                <div className="absolute inset-0 w-full h-full bg-[#090c14] rounded-[16px] md:rounded-[22px] overflow-hidden">
                  <img 
                    src={card.logo} 
                    alt={card.name} 
                    className="w-full h-full object-cover pointer-events-none" 
                    style={{ imageRendering: 'high-quality' as any }}
                  />
                </div>

                {/* Detail Overlay */}
                <div
                  className={`absolute inset-0 rounded-[16px] md:rounded-[22px] p-4 md:p-5 flex flex-col items-start justify-center text-left transition-all duration-300 backdrop-blur-md ${
                    isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
                  }`}
                  style={{ 
                    zIndex: 50,
                    background: `linear-gradient(145deg, ${card.bgColor}B3 0%, #090c14E6 100%)`,
                    boxShadow: isOpen ? `inset 0 0 0 1px rgba(255,255,255,0.1)` : 'none'
                  }}
                >
                  <h4 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3 tracking-tight drop-shadow-md">{card.name}</h4>
                  <p className="text-white/90 text-[11px] md:text-[13px] leading-relaxed mb-4 drop-shadow-sm font-medium">
                    {t(card.descriptionKey)}
                  </p>
                  <div className="mt-auto self-stretch flex flex-col gap-2">
                    <Link
                      to={card.link}
                      className="w-full text-center py-2 bg-white hover:bg-gray-100 text-gray-900 text-[11px] md:text-xs font-bold rounded-full transition-all cursor-pointer pointer-events-auto shadow-[0_4px_10px_rgba(0,0,0,0.15)] hover:scale-105 active:scale-95"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {t('home.featured_work.learn_more')}
                    </Link>
                    <button
                      onClick={(e) => {
                        e.stopPropagation(); // prevent triggering a card drag/tap
                        setOpenIdx(null);
                      }}
                      className="w-full py-2 bg-black/20 hover:bg-black/40 text-white text-[11px] md:text-xs font-semibold rounded-full border border-white/20 transition-all cursor-pointer pointer-events-auto backdrop-blur-sm hover:scale-105 active:scale-95"
                    >
                      {t('home.featured_work.close')}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {/* Reset Button */}
        <button
          onClick={resetLayout}
          className="absolute bottom-2 right-16 md:bottom-0 md:right-0 flex items-center justify-center w-4 h-4 md:w-10 md:h-10 bg-gray-100 hover:bg-gray-200 border border-gray-300 text-gray-700 transition-colors z-20 shadow-md rounded-full"
          title={t('home.featured_work.reset_layout')}
        >
          <RotateCcw className="w-3.5 h-3.5 md:w-4 md:h-4" />
        </button>
      </div>
    </section>
  );
}
