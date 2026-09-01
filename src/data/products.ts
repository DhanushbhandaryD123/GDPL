/**
 * Single source of truth for product identity: name, per-platform routes,
 * per-platform icons, and pricing. Previously this data was copied
 * independently into App.tsx (Home), Boom3DOSSelector.tsx, Navbar.tsx, and
 * Footer.tsx, which let the same product (e.g. Boom 3D) drift to different
 * prices in different places. Consumers should read from here instead of
 * re-declaring these values.
 *
 * Translated copy (descriptions, marketing text) stays in src/locales/*.json
 * via i18next — this file only holds locale-independent facts.
 */

export type Platform = 'mac' | 'windows' | 'ios' | 'android';

export interface ProductPricing {
  currency: string;
  /** Pre-discount list price, as it appears (no currency prefix). */
  original?: string;
  /** Current selling price, as it appears (no currency prefix). */
  discounted?: string;
}

export interface ProductPlatformVariant {
  icon: string;
  route: string;
}

export interface Product {
  id: string;
  name: string;
  /** Present when the product has a single, real price (not "Free"). */
  pricing?: ProductPricing;
  variants: Partial<Record<Platform, ProductPlatformVariant>>;
}

export const PRODUCTS = {
  boom3d: {
    id: 'boom3d',
    name: 'Boom 3D',
    pricing: { currency: 'INR', original: '3700', discounted: '925.37' },
    variants: {
      mac: { icon: '/apps/Boom3D-mac.jpeg', route: '/boom3D' },
      windows: { icon: '/apps/boom3d-window.webp', route: '/boom3D' },
    },
  },
  boom2: {
    id: 'boom2',
    name: 'Boom 2',
    variants: {
      mac: { icon: '/apps/Boom2-mac.jpeg', route: '/boom2' },
    },
  },
  capto: {
    id: 'capto',
    name: 'Capto',
    pricing: { currency: 'INR', original: '1499', discounted: '749.5' },
    variants: {
      mac: { icon: '/apps/Capto-mac.jpeg', route: '/capto' },
      windows: { icon: '/apps/Capto-window.jpeg', route: '/capto/windows' },
    },
  },
  audimix: {
    id: 'audimix',
    name: 'AuDimix',
    variants: {
      windows: { icon: '/apps/AuDimix-Window.jpeg', route: '/audimix' },
    },
  },
  boomMobile: {
    id: 'boomMobile',
    name: 'Boom for Mobile',
    variants: {
      ios: { icon: '/apps/Boom for iOS.jpeg', route: '/boomformobile' },
      android: { icon: '/apps/Boom for Android.jpeg', route: '/boomformobile' },
    },
  },
  vizmato: {
    id: 'vizmato',
    name: 'Vizmato',
    variants: {
      ios: { icon: '/apps/Vizmato-ios.jpeg', route: '/vizmato' },
      android: { icon: '/apps/Vizmato-android.png', route: '/vizmato' },
    },
  },
  audion: {
    id: 'audion',
    name: 'AudiOn',
    variants: {
      ios: { icon: '/apps/AudiOn-ios.jpeg', route: '/audion' },
      android: { icon: '/apps/AudiON-android.png', route: '/audion' },
    },
  },
  cameraplus: {
    id: 'cameraplus',
    name: 'Camera Plus',
    variants: {
      ios: { icon: '', route: '/cameraplus' },
    },
  },
  camerapluspro: {
    id: 'camerapluspro',
    name: 'Camera Plus Pro',
    variants: {
      ios: { icon: '', route: '/camerapluspro' },
    },
  },
} satisfies Record<string, Product>;

/** Looks up a product's platform variant, throwing if it doesn't exist rather than silently returning undefined. */
export function getVariant(product: Product, platform: Platform): ProductPlatformVariant {
  const variant = product.variants[platform];
  if (!variant) {
    throw new Error(`Product "${product.id}" has no "${platform}" variant`);
  }
  return variant;
}

/** Formats a product's original or discounted price as it's displayed on-page, e.g. "INR 925.37". Returns undefined for free/priceless products. */
export function formatPrice(pricing: ProductPricing | undefined, key: 'original' | 'discounted'): string | undefined {
  const value = pricing?.[key];
  return value ? `${pricing!.currency} ${value}` : undefined;
}
