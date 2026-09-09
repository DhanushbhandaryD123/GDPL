import { GalleryPhoto } from './types';

interface HeadlineOverlayProps {
  currentPhoto: GalleryPhoto;
  isAutoPlaying: boolean;
}

export function HeadlineOverlay({ currentPhoto, isAutoPlaying }: HeadlineOverlayProps) {
  return (
    <>
      {/* Top-Left Minimal Wordmark */}
      <div className="absolute top-8 left-8 z-20 pointer-events-none select-none flex items-center gap-2">
        <span className="text-xs font-mono tracking-widest text-gray-400 uppercase">Boom 3D</span>
        <span className="text-gray-300 font-light">/</span>
        <span className="text-xs font-mono tracking-wider text-gray-800 uppercase font-medium">
          Audio Gallery
        </span>
      </div>

      {/* Top-Right Current Preset Indicator (Name Only) */}
      <div className="absolute top-8 right-8 z-20 pointer-events-none select-none flex items-center gap-2.5">
        <span
          className={`inline-block w-2 h-2 rounded-full transition-colors duration-500 ${
            isAutoPlaying ? 'bg-blue-500 animate-pulse' : 'bg-emerald-500'
          }`}
        />
        <span className="text-xs font-mono tracking-wider text-gray-700 uppercase font-medium">
          {currentPhoto.name}
        </span>
      </div>
    </>
  );
}
