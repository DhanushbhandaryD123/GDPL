export interface ProductNavbarItem {
  id: string;
  name: string;
  routes: string[];
  logo: string;
  logoAlt: string;
  showNameWithLogo?: boolean;
  ctaTextKey: string;
  ctaDefaultText: string;
  ctaType: 'scroll' | 'link' | 'download';
  ctaTarget: string;
  accentColor?: string;
}

export const PRODUCT_NAVBAR_CONFIG: ProductNavbarItem[] = [
  {
    id: 'boom3d',
    name: 'Boom 3D',
    routes: ['/boom3d', '/boom3D'],
    logo: '/boom3D/boomLogo3D-dark.png',
    logoAlt: 'Boom 3D Logo',
    showNameWithLogo: false,
    ctaTextKey: 'boom3d.hero.get_trial',
    ctaDefaultText: 'Get Trial',
    ctaType: 'scroll',
    ctaTarget: '#os-selector',
    accentColor: '#0099ff',
  },
  {
    id: 'boom',
    name: 'Boom',
    routes: ['/boom'],
    logo: '/apps/Boom3D-mac.jpeg',
    logoAlt: 'Boom Logo',
    showNameWithLogo: true,
    ctaTextKey: 'boom.hero.get_trial',
    ctaDefaultText: 'Explore Boom 3D',
    ctaType: 'link',
    ctaTarget: '/boom3D',
    accentColor: '#0099ff',
  },
  {
    id: 'boom2',
    name: 'Boom 2',
    routes: ['/boom2'],
    logo: '/apps/Boom2-mac.jpeg',
    logoAlt: 'Boom 2 Logo',
    showNameWithLogo: true,
    ctaTextKey: 'boom2.hero.download_trial',
    ctaDefaultText: 'Download Trial',
    ctaType: 'link',
    ctaTarget: '/boom2/thankyou/download',
    accentColor: '#1390FB',
  },
  {
    id: 'capto',
    name: 'Capto',
    routes: ['/capto', '/capto/windows'],
    logo: '/apps/Capto-mac.jpeg',
    logoAlt: 'Capto Logo',
    showNameWithLogo: true,
    ctaTextKey: 'capto.hero.get_trial',
    ctaDefaultText: 'Get Trial',
    ctaType: 'link',
    ctaTarget: 'https://www.globaldelight.com/capto/buy/',
    accentColor: '#2563EB',
  },
  {
    id: 'audimix',
    name: 'AuDimix',
    routes: ['/audimix'],
    logo: '/apps/AuDimix-Window.jpeg',
    logoAlt: 'AuDimix Logo',
    showNameWithLogo: true,
    ctaTextKey: 'audimix.hero.get_trial',
    ctaDefaultText: 'Get Trial',
    ctaType: 'link',
    ctaTarget: 'https://apps.microsoft.com/detail/9p815617w58r',
    accentColor: '#8B5CF6',
  },
  {
    id: 'audion',
    name: 'AudiOn',
    routes: ['/audion'],
    logo: '/apps/AudiOn-ios.jpeg',
    logoAlt: 'AudiOn Logo',
    showNameWithLogo: true,
    ctaTextKey: 'audion.hero.get_app',
    ctaDefaultText: 'Get App',
    ctaType: 'link',
    ctaTarget: 'https://apps.apple.com/app/audion-voice-recorder/id1612053912',
    accentColor: '#EF4444',
  },
  {
    id: 'vizmato',
    name: 'Vizmato',
    routes: ['/vizmato'],
    logo: '/apps/Vizmato-ios.jpeg',
    logoAlt: 'Vizmato Logo',
    showNameWithLogo: true,
    ctaTextKey: 'vizmato.hero.get_app',
    ctaDefaultText: 'Get App',
    ctaType: 'link',
    ctaTarget: 'https://apps.apple.com/app/vizmato-video-editor-maker/id959441113',
    accentColor: '#EC4899',
  },
  {
    id: 'boomMobile',
    name: 'Boom for Mobile',
    routes: ['/boomformobile'],
    logo: '/apps/Boom for iOS.jpeg',
    logoAlt: 'Boom for Mobile Logo',
    showNameWithLogo: true,
    ctaTextKey: 'boomMobile.hero.get_app',
    ctaDefaultText: 'Get App',
    ctaType: 'link',
    ctaTarget: 'https://apps.apple.com/app/boom-bass-booster-equalizer/id1065510427',
    accentColor: '#06B6D4',
  },
  {
    id: 'cameraplus',
    name: 'Camera Plus',
    routes: ['/cameraplus'],
    logo: '/cameraplus/camera-plus-icon.png',
    logoAlt: 'Camera Plus Logo',
    showNameWithLogo: true,
    ctaTextKey: 'cameraplus.hero.get_app',
    ctaDefaultText: 'Get App',
    ctaType: 'link',
    ctaTarget: 'https://apps.apple.com/app/camera-plus-capture-moments/id330803072',
    accentColor: '#10B981',
  },
  {
    id: 'camerapluspro',
    name: 'Camera Plus Pro',
    routes: ['/camerapluspro'],
    logo: '/cameraplus/cpp-icon@2x.png',
    logoAlt: 'Camera Plus Pro Logo',
    showNameWithLogo: true,
    ctaTextKey: 'camerapluspro.hero.get_app',
    ctaDefaultText: 'Get App',
    ctaType: 'link',
    ctaTarget: 'https://apps.apple.com/app/camera-plus-pro/id345752934',
    accentColor: '#F59E0B',
  },
];

export function getProductNavbarConfig(pathname: string, supportedLangs: string[]): ProductNavbarItem | null {
  const parts = pathname.split('/').filter(Boolean);
  if (parts.length > 0 && supportedLangs.includes(parts[0].toLowerCase())) {
    parts.shift();
  }
  const normalizedPath = '/' + parts.join('/');
  const lowerPath = normalizedPath.toLowerCase();

  return (
    PRODUCT_NAVBAR_CONFIG.find((item) =>
      item.routes.some((r) => r.toLowerCase() === lowerPath)
    ) || null
  );
}
