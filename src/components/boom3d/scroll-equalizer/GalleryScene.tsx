import { useRef, useEffect, useState, useCallback } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import { GalleryPhoto } from './types';
import { ImagePlane } from './ImagePlane';

interface SceneContentProps {
  photos: GalleryPhoto[];
  isMobile: boolean;
  scrollProgressRef: React.MutableRefObject<number>;
  targetProgressRef: React.MutableRefObject<number>;
  lastInteractionRef: React.MutableRefObject<number>;
  onIndexChange: (index: number) => void;
  onAutoPlayChange: (active: boolean) => void;
}

function SceneContent({
  photos,
  isMobile,
  scrollProgressRef,
  targetProgressRef,
  lastInteractionRef,
  onIndexChange,
  onAutoPlayChange,
}: SceneContentProps) {
  const lastActiveIndex = useRef(-1);
  const wasAutoPlaying = useRef(false);

  useFrame((state, delta) => {
    const now = performance.now();
    const isIdle = now - lastInteractionRef.current > 3000;

    if (isIdle !== wasAutoPlaying.current) {
      wasAutoPlaying.current = isIdle;
      onAutoPlayChange(isIdle);
    }

    if (isIdle) {
      // Slowly auto-increment scrollProgress when idle
      targetProgressRef.current += delta * 0.3;
    }

    // Smooth damping for progress
    scrollProgressRef.current = THREE.MathUtils.damp(
      scrollProgressRef.current,
      targetProgressRef.current,
      5,
      delta
    );

    // Camera subtle floating response to mouse
    state.camera.position.x = THREE.MathUtils.damp(
      state.camera.position.x,
      state.pointer.x * 0.4,
      3,
      delta
    );
    state.camera.position.y = THREE.MathUtils.damp(
      state.camera.position.y,
      state.pointer.y * 0.3,
      3,
      delta
    );

    // Determine current active item index
    const count = photos.length;
    const rawProgress = scrollProgressRef.current;
    const roundedIndex = ((Math.round(rawProgress) % count) + count) % count;
    if (roundedIndex !== lastActiveIndex.current) {
      lastActiveIndex.current = roundedIndex;
      onIndexChange(roundedIndex);
    }
  });

  const handleSelectPlane = (index: number) => {
    lastInteractionRef.current = performance.now();
    const count = photos.length;
    const current = scrollProgressRef.current;
    const currentBase = Math.floor(current / count) * count;
    targetProgressRef.current = currentBase + index;
  };

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 4.2]} fov={isMobile ? 58 : 48} />
      <ambientLight intensity={1.8} />

      <group position={[0, 0, 0]}>
        {photos.map((photo, index) => (
          <ImagePlane
            key={photo.id}
            photo={photo}
            index={index}
            totalCount={photos.length}
            scrollProgressRef={scrollProgressRef}
            isMobile={isMobile}
            onSelect={handleSelectPlane}
          />
        ))}
      </group>
    </>
  );
}

interface GallerySceneProps {
  photos: GalleryPhoto[];
  onIndexChange: (index: number) => void;
  onAutoPlayChange: (active: boolean) => void;
}

export function GalleryScene({
  photos,
  onIndexChange,
  onAutoPlayChange,
}: GallerySceneProps) {
  const [isMobile, setIsMobile] = useState(false);
  const scrollProgressRef = useRef(0);
  const targetProgressRef = useRef(0);
  const lastInteractionRef = useRef(performance.now());
  const touchStartY = useRef(0);
  const isDragging = useRef(false);
  const dragStartY = useRef(0);

  // Check viewport width for responsive tuning
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const registerInteraction = useCallback(() => {
    lastInteractionRef.current = performance.now();
    onAutoPlayChange(false);
  }, [onAutoPlayChange]);

  // 1. Mouse Wheel Navigation
  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    registerInteraction();
    targetProgressRef.current += e.deltaY * 0.0028;
  };

  // 2. Keyboard Arrow Keys Navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['ArrowDown', 'ArrowRight'].includes(e.key)) {
        registerInteraction();
        targetProgressRef.current += 1;
      } else if (['ArrowUp', 'ArrowLeft'].includes(e.key)) {
        registerInteraction();
        targetProgressRef.current -= 1;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [registerInteraction]);

  // 3. Touch Swipe Navigation
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    registerInteraction();
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    registerInteraction();
    const currentY = e.touches[0].clientY;
    const deltaY = touchStartY.current - currentY;
    targetProgressRef.current += deltaY * 0.005;
    touchStartY.current = currentY;
  };

  // 4. Mouse Drag Navigation
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    isDragging.current = true;
    dragStartY.current = e.clientY;
    registerInteraction();
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging.current) return;
    registerInteraction();
    const deltaY = dragStartY.current - e.clientY;
    targetProgressRef.current += deltaY * 0.004;
    dragStartY.current = e.clientY;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  return (
    <div
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      className="w-full h-full cursor-grab active:cursor-grabbing select-none"
    >
      <Canvas
        gl={{ antialias: true, alpha: true }}
        className="w-full h-full pointer-events-auto"
      >
        <SceneContent
          photos={photos}
          isMobile={isMobile}
          scrollProgressRef={scrollProgressRef}
          targetProgressRef={targetProgressRef}
          lastInteractionRef={lastInteractionRef}
          onIndexChange={onIndexChange}
          onAutoPlayChange={onAutoPlayChange}
        />
      </Canvas>
    </div>
  );
}
