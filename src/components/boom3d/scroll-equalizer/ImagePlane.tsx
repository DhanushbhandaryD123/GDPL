import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Image, Html } from '@react-three/drei';
import * as THREE from 'three';
import { GalleryPhoto } from './types';

interface ImagePlaneProps {
  photo: GalleryPhoto;
  index: number;
  totalCount: number;
  scrollProgressRef: React.MutableRefObject<number>;
  isMobile: boolean;
  onSelect: (index: number) => void;
}

export function ImagePlane({
  photo,
  index,
  totalCount,
  scrollProgressRef,
  isMobile,
  onSelect,
}: ImagePlaneProps) {
  const groupRef = useRef<THREE.Group>(null);
  const imageRef = useRef<any>(null);
  const currentOpacity = useRef(1);

  // Aspect ratio ~ 3:4 or 4:3 (Boom 3D screenshots are 16:10 / 3:2)
  const baseWidth = isMobile ? 1.7 : 2.6;
  const baseHeight = isMobile ? 1.15 : 1.75;

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    const progress = scrollProgressRef.current;
    const diff = index - progress;

    // Wrap diff around half the total count so images loop continuously
    let wrappedDiff = ((diff % totalCount) + totalCount) % totalCount;
    if (wrappedDiff > totalCount / 2) {
      wrappedDiff -= totalCount;
    }

    // Interactive pointer offset for parallax float
    const pointerX = state.pointer.x * 0.35;
    const pointerY = state.pointer.y * 0.25;

    let targetX = 0;
    let targetY = 0;
    let targetZ = 0;
    let targetScale = 1;
    let targetOpacity = 1;

    if (Math.abs(wrappedDiff) < 0.1) {
      // In primary focus
      targetX = photo.baseX * 0.15 + pointerX;
      targetY = photo.baseY * 0.15 + pointerY;
      targetZ = 0.5;
      targetScale = 1.05;
      targetOpacity = 1.0;
    } else if (wrappedDiff > 0) {
      // Deeper in the scene
      const depthFactor = wrappedDiff;
      targetX = photo.baseX * (1 + depthFactor * 0.22) + pointerX * 0.6;
      targetY = photo.baseY * (1 + depthFactor * 0.18) + pointerY * 0.6;
      targetZ = 0.5 - depthFactor * 2.2;
      targetScale = Math.max(0.45, 1 - depthFactor * 0.15);
      targetOpacity = Math.max(0.1, 1 - depthFactor * 0.22);
    } else {
      // Zooming forward past the camera
      const exitFactor = Math.abs(wrappedDiff);
      targetX = photo.baseX * (1 + exitFactor * 0.6);
      targetY = photo.baseY * (1 + exitFactor * 0.6);
      targetZ = 0.5 + exitFactor * 3.2;
      targetScale = 1 + exitFactor * 0.35;
      targetOpacity = Math.max(0, 1 - exitFactor * 1.4);
    }

    // Damped lerping with delta for ultra-smooth motion
    const dampingSpeed = 5.5;
    groupRef.current.position.x = THREE.MathUtils.damp(
      groupRef.current.position.x,
      targetX,
      dampingSpeed,
      delta
    );
    groupRef.current.position.y = THREE.MathUtils.damp(
      groupRef.current.position.y,
      targetY,
      dampingSpeed,
      delta
    );
    groupRef.current.position.z = THREE.MathUtils.damp(
      groupRef.current.position.z,
      targetZ,
      dampingSpeed,
      delta
    );

    const currentScale = groupRef.current.scale.x;
    const newScale = THREE.MathUtils.damp(
      currentScale,
      targetScale,
      dampingSpeed,
      delta
    );
    groupRef.current.scale.set(newScale, newScale, newScale);

    // Damped opacity
    currentOpacity.current = THREE.MathUtils.damp(
      currentOpacity.current,
      targetOpacity,
      dampingSpeed,
      delta
    );

    if (imageRef.current?.material) {
      imageRef.current.material.transparent = true;
      imageRef.current.material.opacity = currentOpacity.current;
    }
  });

  return (
    <group
      ref={groupRef}
      rotation={[0, 0, photo.rotationZ]}
      onClick={(e) => {
        e.stopPropagation();
        onSelect(index);
      }}
    >
      {/* Clean Textured Image Plane without any grey box */}
      <Image
        ref={imageRef}
        url={photo.image}
        scale={[baseWidth, baseHeight]}
        transparent
        radius={0.04}
      />

      {/* Stylish typography for Preset Name (Clean, pure text without box) */}
      <Html
        position={[0, -baseHeight / 2 - 0.16, 0]}
        center
        distanceFactor={6.5}
        className="pointer-events-none select-none transition-opacity duration-300"
      >
        <span
          className="text-sm sm:text-base font-normal tracking-widest uppercase text-gray-900 select-none drop-shadow-sm whitespace-nowrap"
          style={{
            fontFamily: "'Playfair Display', 'Sora', Georgia, serif",
            letterSpacing: '0.12em',
          }}
        >
          {photo.name}
        </span>
      </Html>
    </group>
  );
}
