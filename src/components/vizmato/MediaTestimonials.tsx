import { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'motion/react';

const mediaTestimonials = [
  // Slide 1
  { id: 1, text: "Media & Entertainment winner\n– 2016", logoImg: "/vizmato/media/mbillionth.png", logoAlt: "mBillionth Award" },
  { id: 2, text: "Like Instagram, but with a focus on smartphone videos. If you're looking to spice up short videos before sharing online, it gets the job done nicely.", logoImg: "/vizmato/media/macworld.png", logoAlt: "Macworld" },
  { id: 3, text: "EContent's Trendsetting Products of 2016", logoImg: "/vizmato/media/logo-econtent.png", logoAlt: "EContent" },
  
  // Slide 2
  { id: 4, text: "Vizmato is basically a dream combination of Snapchat and Instagram", logoImg: "/vizmato/media/teenvogue_logo_light.png", logoAlt: "teenVOGUE" },
  { id: 5, text: "Create and edit videos made easy.", logoImg: "/vizmato/media/nerdbench.png", logoAlt: "NERDBENCH" },
  { id: 6, text: "Create flashy videos on your iPad Pro with Vizmato", logoImg: "/vizmato/media/territorimac.png", logoAlt: "TERRITORIMAC" },

  // Slide 3
  { id: 7, text: "One of the best mobile video editors on the App Store. If you are looking for a simple video editor for mobile, then this is a must-have app for you.", logoImg: "/vizmato/media/apppicker.png", logoAlt: "appPicker" },
  { id: 8, text: "Vizmato – Create awesome videos on your phone", logoImg: "/vizmato/media/sstateoftech.png", logoAlt: "state of TECH" },
  { id: 9, text: "Vizmato introduces a suite of unparalleled new features for the iOS", logoImg: "/vizmato/media/logo-prn.png", logoAlt: "PR Newswire" },

  // Slide 4
  { id: 10, text: "The app enables you to edit videos quickly and easily, and has tools to tweak, re-theme and filter them live.", logoImg: "/vizmato/media/jpost.png", logoAlt: "THE JERUSALEM POST" },
  { id: 11, text: "The app had an impressive response rate to adding elements, quickly churning out minutes-long video into completed clips in under a minute.", logoImg: "/vizmato/media/geektime-logo.png", logoAlt: "Geektime" },
  { id: 12, text: "Now control your videos like a live game. Game Your Video changes the video world and makes it easy, quick, fun and addictive!", logoImg: "/vizmato/media/macworld.png", logoAlt: "Macworld" },

  // Slide 5
  { id: 13, text: "Game Your Video Aims To Make Mobile Video Editing As Simple As Possible!", logoImg: "/vizmato/media/cnet_page8.png", logoAlt: "c|net" },
  { id: 14, text: "Game Your Video is a fun app - - delivering numerous tools to edit, tweak, re-theme & filter your videos so they take on a life of their own.", logoImg: "/vizmato/media/tc_page8.png", logoAlt: "TC" },
];

const userTestimonials = [
  { id: 1, text: "Easy to use and has the features you want for easy editing, on the go!", logo: "" },
  { id: 2, text: "The best editing app in the PLAY STORE!! Thanks soo much. This helped me feel more creative :)", logo: "" },
  { id: 3, text: "This app is AMAZING! I will definitely use this often. If you are looking for a simple editing app that does slow motion, music & filters, this is for you.", logo: "" },
];

export function MediaTestimonials() {
  const [activeTab, setActiveTab] = useState<'MEDIA' | 'USERS'>('MEDIA');
  
  // Embla Carousel Setup
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: false, 
    align: 'start',
    slidesToScroll: 1, // On mobile it's 1, on desktop we can use CSS flex basis to show 3 and embla will scroll by 1 or configured
    breakpoints: {
      '(min-width: 768px)': { slidesToScroll: 3 }
    }
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    }
  }, [emblaApi, onSelect]);

  // Handle Tab Switch (reset carousel)
  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit();
      emblaApi.scrollTo(0);
    }
  }, [activeTab, emblaApi]);

  const currentData = activeTab === 'MEDIA' ? mediaTestimonials : userTestimonials;

  return (
    <section className="relative w-full py-16 md:py-24 bg-white overflow-hidden">
      
      {/* Network / Constellation Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '120px 120px'
        }}
      />
      
      {/* Decorative blurred background dots */}
      <div className="absolute top-1/4 left-10 w-2 h-2 bg-gray-300 rounded-full blur-[2px] z-0" />
      <div className="absolute bottom-1/4 right-20 w-3 h-3 bg-gray-300 rounded-full blur-[2px] z-0" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Top Tabs */}
        <div className="flex justify-center mb-12 md:mb-24">
          <div className="flex items-center bg-[#f0f0f0] rounded-full px-6 md:px-10 py-2 md:py-3 border border-gray-200">
            <button 
              onClick={() => setActiveTab('MEDIA')}
              className={`text-[16px] md:text-[20px] font-bold tracking-wide transition-colors ${
                activeTab === 'MEDIA' ? 'text-black' : 'text-gray-400'
              }`}
              style={{ fontFamily: 'Sora, sans-serif' }}
            >
              MEDIA
            </button>
            <div className="w-px h-5 md:h-6 bg-gray-300 mx-4 md:mx-8" />
            <button 
              onClick={() => setActiveTab('USERS')}
              className={`text-[16px] md:text-[20px] font-bold tracking-wide transition-colors ${
                activeTab === 'USERS' ? 'text-black' : 'text-gray-400'
              }`}
              style={{ fontFamily: 'Sora, sans-serif' }}
            >
              USERS
            </button>
          </div>
        </div>

        {/* Carousel Layout */}
        <div className="max-w-[1400px] mx-auto">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4">
              {currentData.map((item, index) => (
                <div 
                  key={item.id}
                  className="flex-[0_0_100%] md:flex-[0_0_33.333%] min-w-0 pl-4 relative"
                >
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: (index % 3) * 0.1, duration: 0.5 }}
                    className="flex flex-col items-center text-center relative h-full"
                  >
                    {/* Quote Wrapper to handle top-left and bottom-right quotes */}
                    <div className="relative w-full flex-grow flex items-center justify-center min-h-[160px] mb-8 px-12 md:px-8">
                      
                      {/* Left Quote */}
                      <div className="absolute top-0 left-0 text-[80px] font-serif text-[#111] leading-none -mt-4">
                        “
                      </div>
                      
                      {/* Text Content */}
                      <p className="text-[#444] text-[18px] md:text-[20px] leading-[1.6] font-normal z-10 px-4" style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>
                        {item.text}
                      </p>

                      {/* Right Quote */}
                      <div className="absolute bottom-0 right-0 text-[80px] font-serif text-[#111] leading-none translate-y-6">
                        ”
                      </div>
                    </div>

                    {/* Logo Area */}
                    <div className="mt-auto pt-6 flex items-center justify-center h-[100px] w-full">
                      {'logoImg' in item && item.logoImg ? (
                        <img src={item.logoImg} alt={item.logoAlt} className="max-h-full max-w-[180px] object-contain opacity-90" />
                      ) : null}
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center items-center gap-2 mt-16">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === selectedIndex ? 'bg-black' : 'bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
