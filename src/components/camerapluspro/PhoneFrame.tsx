import { ReactNode } from 'react';

interface PhoneFrameProps {
  children: ReactNode;
  className?: string;
}

export function PhoneFrame({ children, className = '' }: PhoneFrameProps) {
  return (
    <div className={`relative aspect-[9/19.5] w-full rounded-[2.5rem] bg-gray-900 shadow-2xl ${className}`}>
      {/* Outer Metallic Frame */}
      <div className="absolute inset-[-4px] rounded-[2.75rem] bg-gradient-to-br from-gray-100 via-gray-300 to-gray-400 shadow-[inset_0_0_4px_rgba(255,255,255,1)] -z-10" />
      
      {/* Hardware Buttons */}
      {/* Silent switch */}
      <div className="absolute -left-[6px] top-[15%] w-[4px] h-[30px] bg-gray-300 rounded-l-md border-r border-gray-400 shadow-[-1px_0_2px_rgba(0,0,0,0.1)]" />
      {/* Volume Up */}
      <div className="absolute -left-[6px] top-[22%] w-[4px] h-[50px] bg-gray-300 rounded-l-md border-r border-gray-400 shadow-[-1px_0_2px_rgba(0,0,0,0.1)]" />
      {/* Volume Down */}
      <div className="absolute -left-[6px] top-[30%] w-[4px] h-[50px] bg-gray-300 rounded-l-md border-r border-gray-400 shadow-[-1px_0_2px_rgba(0,0,0,0.1)]" />
      {/* Power Button */}
      <div className="absolute -right-[6px] top-[25%] w-[4px] h-[70px] bg-gray-300 rounded-r-md border-l border-gray-400 shadow-[1px_0_2px_rgba(0,0,0,0.1)]" />

      {/* Screen Bezel (Inner thin black border) */}
      <div className="absolute inset-0 rounded-[2.5rem] border-[10px] border-[#1a1a1a] bg-black overflow-hidden z-0">
        
        {/* The dynamic content (images) */}
        <div className="relative w-full h-full bg-gray-900 z-0 overflow-hidden rounded-[1.8rem]">
          {children}
        </div>
        
        {/* Notch Area (Dynamic Island) */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[35%] h-[28px] bg-black rounded-full z-20 flex items-center justify-between px-2">
           <div className="w-2 h-2 rounded-full bg-gray-800" />
           <div className="w-4 h-4 rounded-full bg-[#0a0a2a] flex items-center justify-center shadow-[inset_0_0_2px_rgba(0,0,0,1)]">
             <div className="w-1.5 h-1.5 rounded-full bg-blue-900/50" />
           </div>
        </div>

        {/* Realistic Screen Glare */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 pointer-events-none z-30 opacity-60 transform -skew-x-12 translate-x-[15%]" />
      </div>
    </div>
  );
}
