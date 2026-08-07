import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

type OSMode = 'mac' | 'windows';

const AppleIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className={className} fill="currentColor">
    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
  </svg>
);

const WindowsIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" className={className} fill="currentColor">
    <path d="M0 12.402l35.687-4.86v34.423H0zM39.691 6.467L87.714 0v41.966H39.691zM0 45.968h35.687v34.427L0 75.539zM39.691 45.968H87.714V88L39.691 81.536z"/>
  </svg>
);

export function Boom3DOSSelector() {
  const [os, setOS] = useState<OSMode>('mac');

  return (
    <section className="bg-white py-10 lg:py-12 flex flex-col items-center justify-center relative z-20 overflow-hidden">
      <div className="max-w-[900px] mx-auto px-6 w-full flex flex-col items-center">
        
        {/* Text Content */}
        <div className="text-center mb-6 flex flex-col items-center">
          <h2 className="text-4xl md:text-[3.5rem] font-bold tracking-tight text-[#111111] mb-5 leading-[1.15]">
            What sound, should<br />
            sound like.
          </h2>
          <p className="text-gray-500 text-lg md:text-[1.2rem] max-w-[550px] leading-relaxed font-medium">
            Everything you watch, listen to, or play,<br />
            comes to life with Boom 3D.
          </p>
        </div>

        {/* Toggle Section */}
        <div className="flex items-center gap-4 mb-6">
          <span className={`font-bold transition-opacity duration-300 ${os === 'mac' ? 'text-gray-900' : 'text-transparent hidden md:block'}`}>
            (macOS 11 or later)
          </span>

          <div 
            className="flex items-center bg-gray-100 rounded-[2rem] p-1 border border-gray-200 shadow-inner relative w-[130px] h-[56px] cursor-pointer" 
            onClick={() => setOS(os === 'mac' ? 'windows' : 'mac')}
          >
            <motion.div 
              className="absolute top-1 bottom-1 w-[60px] rounded-full shadow-md z-0 bg-white border border-gray-100"
              animate={{ left: os === 'mac' ? '4px' : '64px' }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />

            <div className="flex-1 flex items-center justify-center relative z-10 w-[60px]" onClick={(e) => { e.stopPropagation(); setOS('mac'); }}>
              <AppleIcon className={`w-6 h-6 transition-colors duration-300 ${os === 'mac' ? 'text-black' : 'text-gray-400'}`} />
            </div>

            <div className="flex-1 flex items-center justify-center relative z-10 w-[60px]" onClick={(e) => { e.stopPropagation(); setOS('windows'); }}>
              <WindowsIcon className={`w-[22px] h-[22px] transition-colors duration-300 ${os === 'windows' ? 'text-[#0099ff]' : 'text-gray-400'}`} />
            </div>
          </div>

          <span className={`font-bold transition-opacity duration-300 ${os === 'windows' ? 'text-gray-900' : 'text-transparent hidden md:block'}`}>
            Windows 10 & 11
          </span>
        </div>

        {/* Buttons & Pricing */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={os}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col sm:flex-row gap-6 w-full max-w-[700px] justify-center"
          >
            {/* Download Button Column */}
            <div className="flex-1 flex flex-col items-center max-w-[320px]">
              <button className="w-full bg-[#0099ff] hover:bg-[#0088ee] text-white font-bold py-5 px-6 rounded-xl flex items-center justify-center gap-3 transition-colors text-lg tracking-wide shadow-[0_4px_14px_rgba(0,153,255,0.3)]">
                {os === 'mac' ? <AppleIcon className="w-6 h-6" /> : <WindowsIcon className="w-6 h-6" />}
                {os === 'mac' ? 'DOWNLOAD TRIAL' : 'DOWNLOAD TRIAL (x64)'}
              </button>
              <p className="text-gray-500 mt-4 text-[15px] font-medium text-center">Try it free for 15 days</p>
              
              {os === 'mac' && (
                <a href="#" className="text-gray-400 hover:text-gray-700 underline underline-offset-4 mt-6 transition-colors text-sm font-medium text-center">
                  Using on older version of macOS?
                </a>
              )}
            </div>

            {/* Buy Button Column */}
            <div className="flex-1 flex flex-col items-center max-w-[320px]">
              <button className={`w-full font-bold py-5 px-6 rounded-xl flex items-center justify-center gap-3 transition-colors text-lg tracking-wide bg-white border-2 hover:bg-gray-50 ${os === 'mac' ? 'border-[#111111] text-[#111111]' : 'border-[#0099ff] text-[#0099ff]'}`}>
                {os === 'mac' ? <AppleIcon className="w-6 h-6" /> : <WindowsIcon className="w-6 h-6" />}
                BUY NOW
              </button>
              <div className="mt-4 flex flex-col items-center">
                <span className="text-[#111111] text-[15px] font-bold">INR 1850</span>
                <span className="text-gray-400 text-sm line-through font-medium">INR 3700</span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
