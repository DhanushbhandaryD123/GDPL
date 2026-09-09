export interface GalleryPhoto {
  id: string;
  name: string;
  image: string;
  baseX: number;
  baseY: number;
  baseZ: number;
  rotationZ: number;
}

export const DEFAULT_PHOTOS: GalleryPhoto[] = [
  {
    id: 'bass',
    name: 'Bass',
    image: '/boom3D/s1.webp',
    baseX: -2.3,
    baseY: 0.9,
    baseZ: -1.2,
    rotationZ: -0.04,
  },
  {
    id: 'acoustic',
    name: 'Acoustic',
    image: '/boom3D/s3.webp',
    baseX: 2.4,
    baseY: 1.1,
    baseZ: -3.2,
    rotationZ: 0.05,
  },
  {
    id: 'pop',
    name: 'Pop',
    image: '/boom3D/s4.webp',
    baseX: -2.7,
    baseY: -0.8,
    baseZ: -5.2,
    rotationZ: 0.03,
  },
  {
    id: 'electronic',
    name: 'Electronic',
    image: '/boom3D/s5.webp',
    baseX: 2.8,
    baseY: -0.7,
    baseZ: -7.2,
    rotationZ: -0.05,
  },
  {
    id: 'classical',
    name: 'Classical',
    image: '/boom3D/s6.webp',
    baseX: -2.1,
    baseY: 0.6,
    baseZ: -9.2,
    rotationZ: 0.04,
  },
  {
    id: 'vocals',
    name: 'Vocals',
    image: '/boom3D/s7.webp',
    baseX: 2.2,
    baseY: 0.5,
    baseZ: -11.2,
    rotationZ: -0.03,
  },
];
