import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { FloatingSocials } from '../components/layout/FloatingSocials';
import { BarChart3, Laptop, Volume2, SlidersHorizontal, Activity, Box, Headphones, Gauge, Target, Wifi, Star } from "lucide-react";

const SoundWave = () => (
  <div className="flex items-center justify-center gap-[3px] h-6">
    {[40, 80, 100, 60, 90].map((h, i) => (
      <div 
        key={i} 
        className="w-[3px] bg-[#e61c24] rounded-full"
        style={{ 
          height: `${h}%`,
          animation: `soundWave 1.2s ease-in-out infinite`,
          animationDelay: `${i * 0.15}s`,
          transformOrigin: 'center'
        }} 
      />
    ))}
  </div>
);

const boomFeatures = [
  {
    id: 1,
    title: <React.Fragment>The Best Volume Booster<br/>& Equaliser For Mac</React.Fragment>,
    icon: BarChart3,
    description: "Boom 2 comes with a system-wide volume booster and equalizer so that every audio, video, music & movie on OS X sounds just the way it was meant to!",
    image: "/business/AT/E1.png"
  },
  {
    id: 2,
    title: <React.Fragment>Crafted exclusively for<br/>OS X Yosemite & later</React.Fragment>,
    icon: Laptop,
    description: "Boom 2 comes with everything you need for incredible Mac audio.",
    image: "/business/AT/E2.png"
  },
  {
    id: 3,
    title: <React.Fragment>System-Wide<br/>Audio Boost</React.Fragment>,
    icon: Volume2,
    description: "Boom 2 acts as a volume booster for Mac that takes audio levels up a couple of notches. This works system-wide, so that your entire OS X machine produces excellent volume all the time!",
    image: "/business/AT/E3.png"
  },
  {
    id: 4,
    title: <React.Fragment>Preset & Advanced<br/>Mac Equalizers</React.Fragment>,
    icon: SlidersHorizontal,
    description: "Boom 2 comes with Presets, 10-band and advanced equalizers for tricked out audio. Whether it is a favourite song or a movie with drowned out dialogues, you’re covered!",
    image: "/business/AT/E4.png"
  },
  {
    id: 5,
    title: <React.Fragment>Enhanced Mac Sound<br/>with Audio Effects</React.Fragment>,
    icon: Activity,
    description: <React.Fragment>In addition to being a volume booster and equalizer app for Mac, Boom 2 also has cool effects for an immersive audio experience. Enable ‘Fidelity’, ‘Spatial’, etc. and get transported to a different world!<br/><br/></React.Fragment>,
    image: "/business/AT/E5.png"
  }
];

const iosFeatures = [
  {
    id: 1,
    title: "Magical 3D Surround Sound",
    subtitle: "3D immersive audio experience",
    icon: Box,
    description: "Boom comes with a unique 3D Sound feature that offers a virtual Surround experience. It uses a patent-pending algorithm and you get to enjoy this feature on ANY pair of headphones!",
    image: "/business/AT/E6.png"
  },
  {
    id: 2,
    title: "16-Band Equalizers",
    subtitle: "Advanced equalizer presets",
    icon: SlidersHorizontal,
    description: "Customized audio tuning with 16-band equalizers.",
    image: "/business/AT/E7.png"
  },
  {
    id: 3,
    title: "Audio Intensity Slider",
    subtitle: "Control the intensity of your sound",
    icon: Gauge,
    description: "Boom has a slider that allows you to control exactly how you want your song to sound. Move it left or right and listen to all the subtle notes come alive in your favorite tracks!",
    image: "/business/AT/E8.png"
  },
  {
    id: 4,
    title: "Enhances All Headphones",
    subtitle: "Works with every headphone",
    icon: Headphones,
    description: "Boom is built to work on all kinds of headphones. Be it in-ear or over-ear, the app will make sure your favorite tracks sound amazing so that you are Happily Boomin!",
    image: "/business/AT/E9.png"
  }
];

export function AudioTechnology() {
  const [activeTab, setActiveTab] = useState<'mac' | 'ios'>('mac');
  const [activeMacId, setActiveMacId] = useState(1);
  const [activeIosId, setActiveIosId] = useState(1);

  const activeFeature = activeTab === 'mac' 
    ? (boomFeatures.find(f => f.id === activeMacId) || boomFeatures[0])
    : (iosFeatures.find(f => f.id === activeIosId) || iosFeatures[0]);

  return (
    <div className="min-h-screen bg-[#fff] text-gray-900 font-sans">
      <Helmet>
        <title>Audio Technology | Global Delight</title>
        <meta name="description" content="Discover Global Delight's industry-leading audio technology solutions." />
        <style>{`
          @keyframes soundWave {
            0%, 100% { transform: scaleY(0.4); }
            50% { transform: scaleY(1); }
          }
        `}</style>
      </Helmet>
      
      <Navbar logoUrl="/logos/GDL_B2B_Logo.png" />
      <FloatingSocials />
      
      <main>
        {/* Audio Technology Hero Banner */}
        <section className="relative w-full overflow-hidden bg-black font-sans h-[65vh] min-h-[850px] md:min-h-[550px] -mt-[79px] pt-[9px]">
          <div className="absolute inset-0 z-0">
            <img 
              src="/business/AT/Audio-Hbanner.png" 
              alt="Audio Technology Background" 
              className="w-full h-full object-cover object-top"
            />
            {/* Gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent pointer-events-none" />
          </div>

          <div className="absolute inset-0 z-10 container mx-auto px-6 lg:px-12 flex items-center">
            {/* Text Container */}
            <div className="w-full max-w-2xl flex flex-col items-start text-white">
              <div className="flex flex-col items-start">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-normal leading-[1.2] mb-4 text-white drop-shadow-sm">
                  Advanced Audio Technology
                </h1>
                <p className="text-xl md:text-2xl text-gray-200 mb-6 max-w-lg leading-relaxed drop-shadow-sm">
                  3D Virtual Surround and System-Wide Volume Boosting Sound Solutions
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Intro Text */}
        <section className="w-full py-16 bg-[#fafbfc]">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <p className="text-gray-500 max-w-2xl mx-auto">
             Global Delight has the depth & scale of experience to build outstanding digital products with leading edge
solutions for your audio, photo and video needs.
            </p>
          </div>
        </section>

        {/* Licensing Opportunities Section */}
        <section className="relative w-full py-6 bg-black font-sans text-white overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img 
              src="/business/AT/Audio-technlogy-banner.png" 
              alt="Studio Mixing Board" 
              className="w-full h-full object-cover object-center"
            />
            {/* Gradient overlay to ensure text readability and blend edges */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80 pointer-events-none" />
          </div>

          <div className="relative z-10 container mx-auto px-4 lg:px-8">
            {/* Header */}
            <div className="text-center mb-4 flex flex-col items-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-3 text-white tracking-wide drop-shadow-md">
                Licensing Opportunities
              </h2>
              <div className="w-12 h-[3px] bg-red-600 rounded-full"></div>
            </div>

            {/* Equations Section */}
            <div className="flex flex-col md:flex-row items-stretch justify-center gap-10 md:gap-0 mb-6 max-w-6xl mx-auto drop-shadow-md">
              
              {/* Left Column */}
              <div className="flex-1 flex flex-col items-center md:border-r border-gray-400/30 md:pr-10 relative">
                <div className="flex items-center justify-center gap-3 sm:gap-6 mb-2 w-full">
                  {/* Boom */}
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center p-1 sm:p-[6px] mb-2 shadow-xl">
                      <div className="w-full h-full bg-black rounded-full flex items-center justify-center p-2 sm:p-3">
                        <img src="/business/AT/Boom_normal.png" alt="Boom" className="w-full h-full object-contain" />
                      </div>
                    </div>
                    <span className="text-xs sm:text-[13px] font-medium text-gray-200 drop-shadow-md">Boom</span>
                  </div>

                  <span className="text-xl sm:text-2xl font-light text-white mb-4 drop-shadow-md">+</span>

                  {/* Your Application */}
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-xl sm:rounded-[1.5rem] flex items-center justify-center p-3 sm:p-4 mb-2 shadow-xl">
                      <img src="/business/AT/s1.png" alt="Your Application" className="w-full h-full object-contain" />
                    </div>
                    <span className="text-xs sm:text-[13px] font-medium text-gray-200 drop-shadow-md">Your Application</span>
                  </div>

                  <span className="text-xl sm:text-2xl font-light text-white mb-4 drop-shadow-md">=</span>

                  {/* Wave */}
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mb-2">
                      <div className="h-10 sm:h-12 flex items-center justify-center gap-1 sm:gap-1.5">
                        {[40, 60, 100, 70, 90, 50, 80, 40].map((h, i) => (
                          <div key={i} className="w-1 sm:w-1.5 bg-[#ff4a5a] rounded-full shadow-[0_0_10px_rgba(255,74,90,0.8)]" style={{ height: `${h}%` }}></div>
                        ))}
                      </div>
                    </div>
                    <span className="text-[11px] sm:text-xs font-medium text-gray-200 text-center max-w-[100px] leading-snug drop-shadow-md">
                      Immersive<br/>3D Surround<br/>Sound
                    </span>
                  </div>
                </div>

                {/* Separator Line with text */}
                <div className="flex items-center justify-center w-full mt-3">
                  <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-red-500/80 to-red-500/80"></div>
                  <span className="px-3 text-[11px] sm:text-[12px] font-medium text-white text-center whitespace-nowrap drop-shadow-lg">
                    Boom Engine Enriching Streaming Music
                  </span>
                  <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-red-500/80 to-red-500/80"></div>
                </div>
              </div>

              {/* Right Column */}
              <div className="flex-1 flex flex-col items-center md:pl-10 relative">
                <div className="flex items-center justify-center gap-3 sm:gap-6 mb-2 w-full">
                  {/* Boom */}
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center p-1 sm:p-[6px] mb-2 shadow-xl">
                      <div className="w-full h-full bg-black rounded-full flex items-center justify-center p-2 sm:p-3">
                        <img src="/business/AT/Boom_normal.png" alt="Boom" className="w-full h-full object-contain" />
                      </div>
                    </div>
                    <span className="text-xs sm:text-[13px] font-medium text-gray-200 drop-shadow-md">Boom</span>
                  </div>

                  <span className="text-xl sm:text-2xl font-light text-white mb-4 drop-shadow-md">+</span>

                  {/* Your Application */}
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-xl sm:rounded-[1.5rem] flex items-center justify-center p-3 sm:p-4 mb-2 shadow-xl">
                      <img src="/business/AT/s1.png" alt="Your Application" className="w-full h-full object-contain" />
                    </div>
                    <span className="text-xs sm:text-[13px] font-medium text-gray-200 drop-shadow-md">Your Application</span>
                  </div>

                  <span className="text-xl sm:text-2xl font-light text-white mb-4 drop-shadow-md">=</span>

                  {/* Wave */}
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mb-2">
                      <div className="h-10 sm:h-12 flex items-center justify-center gap-1 sm:gap-1.5">
                        {[40, 60, 100, 70, 90, 50, 80, 40].map((h, i) => (
                          <div key={i} className="w-1 sm:w-1.5 bg-[#ff4a5a] rounded-full shadow-[0_0_10px_rgba(255,74,90,0.8)]" style={{ height: `${h}%` }}></div>
                        ))}
                      </div>
                    </div>
                    <span className="text-[11px] sm:text-xs font-medium text-gray-200 text-center max-w-[100px] leading-snug drop-shadow-md">
                      Immersive<br/>3D Surround<br/>Sound
                    </span>
                  </div>
                </div>

                {/* Separator Line with text */}
                <div className="flex items-center justify-center w-full mt-3">
                  <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-red-500/80 to-red-500/80"></div>
                  <span className="px-3 text-[11px] sm:text-[12px] font-medium text-white text-center whitespace-nowrap drop-shadow-lg">
                    Your Application integrated with Boom Engine
                  </span>
                  <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-red-500/80 to-red-500/80"></div>
                </div>
              </div>

            </div>

            {/* Cards Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Card 1 */}
              <div className="flex justify-center hover:-translate-y-2 transition-transform duration-300 drop-shadow-2xl">
                <img src="/business/AT/s2.png" alt="Pre-loaded Boom Engine in Hardware Devices" className="w-[90%] max-w-[360px] h-[100px] sm:h-[120px] object-cover object-center rounded-[24px]" />
              </div>

              {/* Card 2 */}
              <div className="flex justify-center hover:-translate-y-2 transition-transform duration-300 drop-shadow-2xl">
                <img src="/business/AT/s3.png" alt="White Labeling Solutions with Boom Engine" className="w-[90%] max-w-[360px] h-[100px] sm:h-[120px] object-cover object-center rounded-[24px]" />
              </div>
            </div>
          </div>
        </section>

        {/* Boom Engine Section */}
        <section className="w-full py-8 bg-white font-sans text-black">
          <div className="container mx-auto px-4 lg:px-8 max-w-[1100px]">
            {/* Title */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <SoundWave />
              <h2 className="text-3xl md:text-[40px] font-bold tracking-wide text-[#0f172a]">Boom Engine</h2>
              <SoundWave />
            </div>

            {/* Tabs */}
            <div className="flex justify-center mb-6">
              <div className="flex border border-gray-300 rounded-lg overflow-hidden shadow-sm bg-white">
                <button 
                  onClick={() => setActiveTab('mac')}
                  className={`px-10 sm:px-16 py-3 font-semibold text-sm sm:text-base min-w-[150px] sm:min-w-[240px] transition-colors ${
                    activeTab === 'mac' ? 'bg-gradient-to-r from-[#ff355d] to-[#d90066] text-white' : 'bg-transparent text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  Boom For Mac
                </button>
                <button 
                  onClick={() => setActiveTab('ios')}
                  className={`px-10 sm:px-16 py-3 font-semibold text-sm sm:text-base min-w-[150px] sm:min-w-[240px] transition-colors ${
                    activeTab === 'ios' ? 'bg-gradient-to-r from-[#ff355d] to-[#d90066] text-white' : 'bg-transparent text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  Boom For iOS
                </button>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex flex-col items-center justify-center gap-4 lg:gap-6 w-full relative">
              {/* Top Side (Features List) */}
              <div className="w-full max-w-5xl flex flex-col md:flex-row border border-gray-200 rounded-md overflow-hidden shadow-[0_2px_10px_rgba(0,0,0,0.02)] bg-white">
                {activeTab === 'mac' ? (
                  <>
                    {boomFeatures.map((feature) => {
                      const isActive = feature.id === activeMacId;
                      const Icon = feature.icon;
                      return (
                        <button 
                          key={feature.id}
                          onClick={() => setActiveMacId(feature.id)}
                          className={`flex-1 flex flex-col items-center justify-center gap-1.5 py-3 px-2 md:px-3 text-center transition-all duration-300 border-b md:border-b-0 md:border-r border-gray-200 last:border-b-0 last:border-r-0 ${
                            isActive ? 'bg-[#ff355d] text-white' : 'bg-white text-gray-700 hover:bg-gray-50'
                          }`}
                        >
                          <Icon className="w-5 h-5 shrink-0" strokeWidth={isActive ? 2 : 1.5} />
                          <span className="text-[11px] md:text-[12px] font-semibold leading-tight">{feature.title}</span>
                        </button>
                      );
                    })}
                  </>
                ) : (
                  <>
                    {iosFeatures.map((feature) => {
                      const isActive = feature.id === activeIosId;
                      const Icon = feature.icon;
                      return (
                        <button 
                          key={feature.id}
                          onClick={() => setActiveIosId(feature.id)}
                          className={`flex-1 flex flex-col items-center justify-center gap-1.5 py-3 px-2 md:px-3 text-center transition-all duration-300 border-b md:border-b-0 md:border-r border-gray-200 last:border-b-0 last:border-r-0 ${
                            isActive ? 'bg-[#ff355d] text-white' : 'bg-white text-gray-700 hover:bg-gray-50'
                          }`}
                        >
                          <Icon className="w-5 h-5 shrink-0" strokeWidth={isActive ? 2 : 1.5} />
                          <span className="text-[11px] md:text-[12px] font-semibold leading-tight">{feature.title}</span>
                        </button>
                      );
                    })}
                  </>
                )}
              </div>

              {/* Content Area (Description + Image) */}
              {/* Content Area (Description + Image) */}
              <div className="w-full max-w-5xl flex flex-col md:flex-row items-start justify-between gap-10 md:gap-16 mt-2">
                
                {/* Text Area */}
                <div className={`flex flex-col items-center md:items-start w-full md:w-1/2 min-h-[120px] z-20`}>
                  {activeTab === 'ios' && (
                    <div className="w-full flex flex-col items-center lg:items-start text-center lg:text-left mb-6">
                      <h3 className="text-xl sm:text-[22px] font-bold text-[#0f172a] mb-3">
                        {activeFeature.title}
                      </h3>
                      <div className="w-8 h-[3px] bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4"></div>
                    </div>
                  )}
                  
                  <div className={`text-gray-500 text-[14px] sm:text-[15px] text-center lg:text-left leading-relaxed font-medium ${activeTab === 'mac' ? 'min-h-[70px] max-w-[90%]' : 'mb-6 w-full'}`}>
                    {activeTab === 'ios' ? (
                      activeFeature.id === 1 ? (
                        <div className="space-y-4 text-gray-500">
                          <p>Boom comes with a unique 3D Sound feature that offers a virtual Surround experience.</p>
                          <p>It uses a patent-pending algorithm and you get to enjoy this feature on ANY pair of headphones!</p>
                        </div>
                      ) : activeFeature.id === 2 ? (
                        <div className="space-y-4 text-gray-500">
                          <p>Choose from 21 handcrafted EQ presets like Dubstep, Pop, Bass Booster etc.</p>
                          <p>To make things easier, you can also let Boom intelligently apply an Equalizer to any song.</p>
                        </div>
                      ) : (
                        <p>{activeFeature.description}</p>
                      )
                    ) : (
                      activeFeature.description
                    )}
                  </div>

                  {activeTab === 'ios' && activeFeature.id === 1 && (
                    <div className="grid grid-cols-3 gap-4 w-full max-w-sm mb-8">
                      <div className="flex flex-col items-center lg:items-start">
                        <div className="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center mb-2">
                          <Box className="w-5 h-5 text-pink-500" />
                        </div>
                        <span className="font-bold text-gray-800 text-[13px]">Immersive</span>
                        <span className="text-gray-500 text-[11px] text-center lg:text-left leading-tight mt-1">360° Surround</span>
                      </div>
                      <div className="flex flex-col items-center lg:items-start">
                        <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mb-2">
                          <Target className="w-5 h-5 text-blue-500" />
                        </div>
                        <span className="font-bold text-gray-800 text-[13px]">Spatial</span>
                        <span className="text-gray-500 text-[11px] text-center lg:text-left leading-tight mt-1">Precise Audio<br/>Placement</span>
                      </div>
                      <div className="flex flex-col items-center lg:items-start">
                        <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center mb-2">
                          <Wifi className="w-5 h-5 text-green-500" />
                        </div>
                        <span className="font-bold text-gray-800 text-[13px]">Realistic</span>
                        <span className="text-gray-500 text-[11px] text-center lg:text-left leading-tight mt-1">True-to-Life<br/>Experience</span>
                      </div>
                    </div>
                  )}

                  {activeTab === 'ios' && activeFeature.id === 2 && (
                    <div className="w-full flex flex-col gap-6 mt-2 mb-8 max-w-md">
                      {/* Toggles */}
                      <div className="flex gap-4">
                        {/* 3D Surround Card */}
                        <div className="flex-1 flex flex-col items-center justify-center py-4 px-2 rounded-2xl border border-gray-100 shadow-sm bg-white gap-3">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full flex items-center justify-center bg-red-50">
                              <Box className="w-4 h-4 text-red-500" />
                            </div>
                            <div className="flex flex-col">
                              <span className="font-semibold text-[11px] text-gray-800 leading-tight">3D Surround</span>
                              <span className="font-bold text-[11px] text-red-500 text-center leading-tight">ON</span>
                            </div>
                          </div>
                          {/* Toggle switch */}
                          <div className="w-10 h-5 bg-red-500 rounded-full p-1 cursor-pointer flex items-center">
                            <div className="w-3 h-3 bg-white rounded-full shadow-sm transform translate-x-5"></div>
                          </div>
                        </div>
                  
                        {/* Equalizer Card */}
                        <div className="flex-1 flex flex-col items-center justify-center py-4 px-2 rounded-2xl border border-gray-100 shadow-sm bg-white gap-3">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full flex items-center justify-center bg-purple-50">
                              <SlidersHorizontal className="w-4 h-4 text-purple-500" />
                            </div>
                            <div className="flex flex-col">
                              <span className="font-semibold text-[11px] text-gray-800 leading-tight">Equalizer</span>
                              <span className="font-bold text-[11px] text-red-500 text-center leading-tight">ON</span>
                            </div>
                          </div>
                          {/* Toggle switch */}
                          <div className="w-10 h-5 bg-red-500 rounded-full p-1 cursor-pointer flex items-center">
                            <div className="w-3 h-3 bg-white rounded-full shadow-sm transform translate-x-5"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'ios' && activeFeature.id === 3 && (
                    <div className="w-full flex flex-col gap-3 mt-1 mb-4 max-w-[340px]">
                      {/* Toggles */}
                      <div className="flex justify-between items-center border border-gray-100 shadow-sm rounded-2xl py-4 px-4 bg-white">
                        {/* 3D Surround */}
                        <div className="flex flex-col items-center gap-1.5">
                          <div className="w-9 h-9 rounded-full flex items-center justify-center border border-red-100 bg-white text-red-500">
                            <Box className="w-4 h-4" />
                          </div>
                          <span className="font-bold text-[10px] text-gray-800 text-center leading-tight">3D<br/>Surround</span>
                          <span className="font-bold text-[9px] text-red-500">OFF</span>
                          <div className="w-7 h-3.5 bg-gray-200 rounded-full p-[2px] cursor-pointer flex items-center">
                            <div className="w-2.5 h-2.5 bg-white rounded-full shadow-sm"></div>
                          </div>
                        </div>
                        {/* Equalizer */}
                        <div className="flex flex-col items-center gap-1.5">
                          <div className="w-9 h-9 rounded-full flex items-center justify-center border border-purple-100 bg-white text-purple-500">
                            <SlidersHorizontal className="w-4 h-4" />
                          </div>
                          <span className="font-bold text-[10px] text-gray-800 text-center leading-tight">Equalizer<br/>&nbsp;</span>
                          <span className="font-bold text-[9px] text-red-500">OFF</span>
                          <div className="w-7 h-3.5 bg-gray-200 rounded-full p-[2px] cursor-pointer flex items-center">
                            <div className="w-2.5 h-2.5 bg-white rounded-full shadow-sm"></div>
                          </div>
                        </div>
                        {/* Enhancer */}
                        <div className="flex flex-col items-center gap-1.5">
                          <div className="w-9 h-9 rounded-full flex items-center justify-center border border-green-100 bg-white text-green-500">
                            <Headphones className="w-4 h-4" />
                          </div>
                          <span className="font-bold text-[10px] text-gray-800 text-center leading-tight">Enhancer<br/>&nbsp;</span>
                          <span className="font-bold text-[9px] text-red-500">OFF</span>
                          <div className="w-7 h-3.5 bg-gray-200 rounded-full p-[2px] cursor-pointer flex items-center">
                            <div className="w-2.5 h-2.5 bg-white rounded-full shadow-sm"></div>
                          </div>
                        </div>
                        {/* Intensity */}
                        <div className="flex flex-col items-center gap-1.5">
                          <div className="w-9 h-9 rounded-full flex items-center justify-center border border-blue-100 bg-white text-blue-500">
                            <Gauge className="w-4 h-4" />
                          </div>
                          <span className="font-bold text-[10px] text-gray-800 text-center leading-tight">Intensity<br/>&nbsp;</span>
                          <span className="font-bold text-[9px] text-green-500">ON</span>
                          <div className="w-7 h-3.5 bg-red-500 rounded-full p-[2px] cursor-pointer flex items-center">
                            <div className="w-2.5 h-2.5 bg-white rounded-full shadow-sm transform translate-x-3"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'ios' && activeFeature.id === 4 && (
                    <div className="w-full flex flex-col gap-6 mt-2 mb-8 max-w-md">
                      {/* Banner */}
                      <div className="flex items-center gap-4 bg-[#fff0f3] border border-[#ffe0e6] rounded-2xl p-4">
                        <div className="w-8 h-8 rounded-full bg-[#ff7a98] flex items-center justify-center shrink-0">
                          <Star className="w-4 h-4 text-white" fill="currentColor" />
                        </div>
                        <p className="text-[12.5px] font-semibold text-gray-800 leading-[1.4]">
                          Boom enhances the audio quality on any headphone and delivers a rich, immersive listening experience.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Image Area */}
                <div className="w-full md:w-1/2 flex justify-center items-center relative z-10">
                  {/* Subtle glow behind the computer */}
                  <div className="absolute inset-0 bg-gray-100/50 rounded-full blur-[80px]"></div>
                  
                  {activeTab === 'mac' ? (
                     <img 
                       key={activeFeature.image}
                       src={activeFeature.image} 
                       alt="Boom Engine Feature" 
                       className="relative z-10 w-full h-auto object-contain transition-opacity duration-300" 
                     />
                  ) : (
                     <img 
                       key={activeFeature.image}
                       src={activeFeature.image} 
                       alt="Boom iOS Feature" 
                       className="relative z-10 w-[90%] sm:w-[80%] xl:w-full max-w-[420px] xl:-ml-8 h-auto object-contain transition-opacity duration-300 drop-shadow-2xl" 
                       onError={(e) => {
                         (e.target as HTMLImageElement).style.display = 'none';
                       }}
                     />
                  )}
                </div>
              </div>

            </div>


          </div>
        </section>
      </main>

      <Footer logoUrl="/logos/GDL_B2B_Logo.png" />
    </div>
  );
}
