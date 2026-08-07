import { ReactNode } from 'react';

interface PhoneFrameProps {
  children: ReactNode;
  className?: string;
}

export function PhoneFrame({ children, className = '' }: PhoneFrameProps) {
  return (
    <div className={`relative aspect-[9/19.5] w-full rounded-[2.5rem] border-[6px] border-black bg-black shadow-2xl overflow-hidden ${className}`}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-b-2xl z-20" />
      <div className="absolute inset-0 rounded-[2rem] overflow-hidden">
        {children}
      </div>
    </div>
  );
}
