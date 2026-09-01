/**
 * Per-page SEO metadata for prerender (Ctrl+U / View Source) crawlability.
 * SEOHead.tsx reads currentPath (without /:lang prefix) and looks up this map.
 * Home (/) already has rich tags via src/App.tsx Helmet – this map mirrors that
 * so every other route gets the same level of structured meta: title, description,
 * keywords, og:title/description/image/url, twitter:*, canonical, hreflang.
 * Text/content + URL + image are all taken from each page's actual content so
 * Google sees page-connected meta as in Home.
 */

export interface SeoEntry {
  title: string;
  description: string;
  keywords: string;
  subject?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage: string; // absolute or root-relative; SEOHead will prefix domain if needed
  ogType?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  canonicalPath?: string; // defaults to key
  // Product JSON-LD – added for all product pages like boom/boom3D/capto/subpage/cameraplus etc
  softwareApplication?: {
    name: string;
    operatingSystem: string;
    applicationCategory: string;
    price?: string;
    priceCurrency?: string;
    image: string; // root-relative
  };
}

const CLOUD_OG = 'https://d3jbf8nvvpx3fh.cloudfront.net/Boom3D-Web/OGImages/Global-Delight.jpg';

export const SEO_DATA: Record<string, SeoEntry> = {
  '/': {
    title: 'Global Delight | Boom 3D, Capto, Vizmato & Camera Plus Pro Apps',
    description: 'Global Delight builds award-winning audio, video, and photography apps — Boom 3D volume booster & equalizer, Capto screen recorder, Vizmato video editor, and Camera Plus Pro for Mac, Windows, iOS & Android.',
    keywords: 'Global Delight, Boom 3D, volume booster, Mac equalizer, 3D surround sound, Capto, screen recorder, screenshot tool, Vizmato, video editor app, Camera Plus Pro, iPhone camera app, AuDimix, vocal remover, AudiOn, voice recorder app, bass booster, speaker booster, amplifier',
    subject: 'Global Delight | Makers of Boom 3D, Capto, Vizmato & Camera Plus Pro',
    ogImage: CLOUD_OG,
    twitterImage: CLOUD_OG,
  },
  '/about': {
    title: 'About Global Delight | Innovators in Audio, Video & Photography Software',
    description: 'Since 2007, Global Delight has created award-winning digital experiences. Discover our history of pioneering audio, video, and photography software for Mac, Windows, iOS, and Android, trusted by millions worldwide.',
    keywords: 'Global Delight, software company, audio enhancement, video editing, photography apps, Mac software, iOS apps, Windows software, award-winning apps, about Global Delight, app development company, Udupi software company, Boom Capto Vizmato maker',
    ogImage: CLOUD_OG,
    twitterImage: CLOUD_OG,
  },
  '/business': {
    title: 'Business Solutions | Global Delight B2B',
    description: 'Global Delight offers cutting-edge B2B solutions in audio, video, and photography technology. Partner with us for powerful OEM integrations, white-label apps, and enterprise software licensing.',
    keywords: 'Global Delight Business, B2B software solutions, OEM integration, audio technology licensing, video engine, business software, white label app development, SDK licensing, enterprise software partner, technology licensing',
    ogImage: CLOUD_OG,
    twitterImage: CLOUD_OG,
  },
  '/press-info': {
    title: 'Press Releases & Media Kits | Global Delight',
    description: "Explore Global Delight's official press releases archive and download press kits, reviewer guides, and high-res brand media for Boom 3D, Capto, AudiOn, and AuDimix.",
    keywords: 'Global Delight press releases, Boom 3D press kit, Capto review guide, AudiOn press release, media inquiries, Global Delight news, media kit download',
    ogImage: CLOUD_OG,
    twitterImage: CLOUD_OG,
  },
  '/technology/audio': {
    title: 'Audio Technology & Engine | Global Delight B2B',
    description: 'Discover Global Delight\'s patented audio engine, featuring 3D Surround Sound and advanced equalizer tech available for OEM integration, white-label licensing, and B2B partnerships.',
    keywords: 'audio engine, 3D surround sound, OEM audio technology, equalizer SDK, Global Delight audio, sound enhancement, audio SDK licensing, volume booster SDK, white label audio app, patented audio engine',
    ogImage: '/business/AT/Audio-Hbanner.webp',
    twitterImage: '/business/AT/Audio-Hbanner.webp',
  },
  '/technology/video': {
    title: 'Video Technology Engine | Global Delight B2B',
    description: 'Leverage Global Delight\'s award-winning video engine. Fast, scalable SDK integration, custom branding, and white-label video editing solutions for businesses and app developers.',
    keywords: 'video engine, video SDK, OEM video editor, white label video app, Global Delight B2B, Vizmato engine, video editing SDK licensing, mobile video editor SDK, custom branded video app',
    ogImage: '/business/VT/VT-banner.webp',
    twitterImage: '/business/VT/VT-banner.webp',
  },
  '/technology/camera': {
    title: 'Camera Technology | Global Delight B2B OEM Solutions',
    description: 'Discover Global Delight\'s advanced camera technology. Integrate AirSnap, Live Filters, and One-Touch Image Editing SDKs into your photography apps through OEM licensing.',
    keywords: 'camera technology, photography SDK, AirSnap, live filters SDK, image editing SDK, Global Delight OEM, camera app SDK, photo editing SDK licensing, white label camera app',
    ogImage: '/business/CT/CT-banner.webp',
    twitterImage: '/business/CT/CT-banner.webp',
  },
  '/technology/screen-capture': {
    title: 'Screen Capture Technology | Global Delight B2B',
    description: 'Global Delight\'s customized Screen Capture and Screen Recording engine. High-performance recording and editing solutions for macOS and Windows applications, available for OEM licensing.',
    keywords: 'screen capture engine, screen recording SDK, video capture OEM, Global Delight screen recorder, screen recording SDK licensing, white label screen recorder, Capto engine',
    ogImage: '/business/ST/ST_banner.webp',
    twitterImage: '/business/ST/ST_banner.webp',
  },
  '/faq': {
    title: 'FAQs | Global Delight Help & Support',
    description: 'Find answers to frequently asked questions about Boom 3D, Boom 2, Capto, Vizmato, AudiOn, AuDimix, and Camera Plus – installation, licensing, features, troubleshooting, and support contact.',
    keywords: 'Global Delight FAQ, Boom 3D help, Capto support, Vizmato FAQ, AudiOn help, troubleshooting, licensing, installation, Global Delight support',
    ogImage: CLOUD_OG,
    twitterImage: CLOUD_OG,
  },
  '/faq/boom3dmac': {
    title: 'Boom 3D for Mac FAQ | Global Delight',
    description: 'Get answers about Boom 3D for Mac — system-wide volume boosting, 3D Surround Sound, equalizer presets, sound quality, compatibility, driver installation, and troubleshooting tips.',
    keywords: 'Boom 3D Mac FAQ, Boom 3D help, Mac volume booster questions, Boom 3D equalizer support, Boom 3D Mac troubleshooting',
    ogImage: '/faq/Boom3D.png',
    twitterImage: '/faq/Boom3D.png',
  },
  '/faq/boom3dmas': {
    title: 'Boom 3D for Mac App Store FAQ | Global Delight',
    description: 'Answers for Boom 3D downloaded from the Mac App Store — subscription, App Store billing, driver installation, registration, and Mac App Store-specific troubleshooting.',
    keywords: 'Boom 3D Mac App Store FAQ, Boom 3D MAS help, App Store subscription, Boom 3D driver Mac',
    ogImage: '/faq/Boom3D.png',
    twitterImage: '/faq/Boom3D.png',
  },
  '/faq/boom3dwin': {
    title: 'Boom 3D for Windows FAQ | Global Delight',
    description: 'FAQ for Boom 3D on Windows — installation, 3D Surround Sound on Windows 10/11, equalizer, volume booster, driver, activation, and troubleshooting for Windows.',
    keywords: 'Boom 3D Windows FAQ, Boom 3D Win help, Windows volume booster, Boom 3D Windows support',
    ogImage: '/faq/Boom3D.png',
    twitterImage: '/faq/Boom3D.png',
  },
  '/faq/audimixwin': {
    title: 'AuDimix for Windows FAQ | Global Delight',
    description: 'AuDimix FAQ — vocal isolation, stem splitting, karaoke instrumental creation, pitch/tempo control, export formats, and troubleshooting for AuDimix on Windows.',
    keywords: 'AuDimix FAQ, vocal remover help, stem splitter FAQ, AuDimix Windows support, karaoke maker help',
    ogImage: '/faq/AudimixFaqLogo.png',
    twitterImage: '/faq/AudimixFaqLogo.png',
  },
  '/faq/boom2': {
    title: 'Boom 2 FAQ | Global Delight',
    description: 'Get answers about Boom 2 for Mac — system-wide volume boosting, equalizer presets, sound quality, compatibility, and troubleshooting tips.',
    keywords: 'Boom 2 FAQ, Boom 2 help, Mac volume booster questions, Boom 2 equalizer support, Boom app troubleshooting, Boom 2 compatibility',
    ogImage: '/faq/Boom2LogoFaq.png',
    twitterImage: '/faq/Boom2LogoFaq.png',
  },
  '/faq/boomios': {
    title: 'Boom for iOS FAQ | Global Delight',
    description: 'Boom for iOS FAQ — 3D Surround Sound on iPhone/iPad, equalizer presets, Tidal/Spotify integration, radio & podcasts, gestures, and iOS troubleshooting.',
    keywords: 'Boom iOS FAQ, Boom mobile FAQ, iPhone audio help, Boom music player FAQ, iOS equalizer help',
    ogImage: '/faq/iBoom.png',
    twitterImage: '/faq/iBoom.png',
  },
  '/faq/vizmato': {
    title: 'Vizmato FAQ | Global Delight',
    description: 'Vizmato FAQ — HD recording, Instant FX, themes, music, slow motion, export, sharing, and troubleshooting for Vizmato on iOS & Android.',
    keywords: 'Vizmato FAQ, Vizmato help, mobile video editor FAQ, Vizmato support, video FX help',
    ogImage: '/faq/Vizmato.png',
    twitterImage: '/faq/Vizmato.png',
  },
  '/faq/captomac': {
    title: 'Capto for Mac FAQ | Global Delight',
    description: 'Capto for Mac FAQ — screenshots, screen & video recording, image/video editing, iOS recording, dual audio, file management, sharing, and troubleshooting for Mac.',
    keywords: 'Capto Mac FAQ, Capto help Mac, screen recorder Mac FAQ, screenshot tool help',
    ogImage: '/apps/Capto-mac.jpeg',
    twitterImage: '/apps/Capto-mac.jpeg',
  },
  '/faq/captowin': {
    title: 'Capto for Windows FAQ | Global Delight',
    description: 'Capto for Windows FAQ — screen capture, recording, webcam, OCR text capture, image/video editing, 4K recording, and export help for Windows 10/11.',
    keywords: 'Capto Windows FAQ, Capto Win help, screen recorder Windows FAQ, Capto Windows support',
    ogImage: '/apps/Capto-window.jpeg',
    twitterImage: '/apps/Capto-window.jpeg',
  },
  '/faq/audion': {
    title: 'AudiOn FAQ | Global Delight',
    description: 'AudiOn FAQ — lossless recording, noise removal, transcription, editing, teleprompter, and troubleshooting for AudiOn on iOS & Android.',
    keywords: 'AudiOn FAQ, AudiOn help, voice recorder FAQ, audio editor help, transcription help',
    ogImage: '/faq/AudionFaqLogo.png',
    twitterImage: '/faq/AudionFaqLogo.png',
  },
  '/contact': {
    title: 'Contact Global Delight | Support, Sales & Business Inquiries',
    description: 'Contact Global Delight — get help for Boom, Capto, Vizmato & Camera Plus, request sales/licensing info, or reach business partnership team. We respond within 24 hours.',
    keywords: 'Global Delight contact, Boom support contact, Capto help email, Vizmato support, Global Delight address, customer support, business inquiry, sales contact',
    ogImage: CLOUD_OG,
    twitterImage: CLOUD_OG,
  },
  '/careers': {
    title: 'Careers at Global Delight | Join Our Award-Winning Team',
    description: 'Join Global Delight — careers for engineers, designers, product managers, and marketers building award-winning apps like Boom, Capto, and Vizmato used by millions worldwide.',
    keywords: 'Global Delight careers, jobs at Global Delight, Boom team jobs, software engineer jobs Udupi, app developer careers, Global Delight hiring',
    ogImage: CLOUD_OG,
    twitterImage: CLOUD_OG,
  },
  '/boom': {
    title: 'Boom | Feel Your Music in 3D Surround Sound | Mac Audio Equalizer',
    description: 'Boom is Global Delight\'s award-winning audio family for Mac, Windows, iOS and Android — featuring 3D surround sound, advanced equalizers, and a powerful volume booster for movies, music and games.',
    keywords: 'Boom, volume booster, Mac audio equalizer, 3D surround sound, sound enhancer, bass booster, audio booster app, system-wide equalizer, Boom 2, Boom 3D, Boom for mobile, Global Delight Boom',
    ogImage: '/apps/Boom2-mac.jpeg',
    twitterImage: '/apps/Boom2-mac.jpeg',
    softwareApplication: { name: 'Boom', operatingSystem: 'Mac, Windows, iOS, Android', applicationCategory: 'MultimediaApplication', image: '/apps/Boom2-mac.jpeg' },
  },
  '/boom2': {
    title: 'Boom 2 | Powerful Audio Enhancement for Mac',
    description: 'Boom 2 is an award-winning pro audio enhancement app for macOS with 31-band equalizer, volume booster, audio effects, and Boom Remote — system-wide sound that fills every room.',
    keywords: 'Boom 2, Boom 2 Mac, 31 band equalizer, volume booster Mac, audio effects Mac, Boom Remote, Global Delight Boom 2',
    ogImage: '/apps/Boom2-mac.jpeg',
    twitterImage: '/apps/Boom2-mac.jpeg',
    softwareApplication: { name: 'Boom 2', operatingSystem: 'Mac', applicationCategory: 'MultimediaApplication', image: '/apps/Boom2-mac.jpeg' },
  },
  '/boom3D': {
    title: 'Boom 3D | Magical 3D Surround Sound for Mac & Windows',
    description: 'Boom 3D is a system-wide volume booster and equalizer for Mac and Windows that delivers immersive 3D Surround Sound without special headphones — 31-band EQ, presets, and per-app control.',
    keywords: 'Boom 3D, Boom 3D Mac, Boom 3D Windows, 3D surround sound, volume booster, 31 band equalizer, Mac Windows audio enhancer, Global Delight Boom 3D',
    ogImage: '/apps/Boom3D-mac.jpeg',
    twitterImage: '/apps/Boom3D-mac.jpeg',
    softwareApplication: { name: 'Boom 3D', operatingSystem: 'Mac, Windows', applicationCategory: 'MultimediaApplication', price: '925.37', priceCurrency: 'INR', image: '/apps/boom3d-window.webp' },
  },
  '/capto': {
    title: 'Capto | Screenshots, Screen Recording & Video Editing for Mac',
    description: 'Capto makes visual storytelling effortless on Mac — capture fullscreen or selected areas, record at 60 FPS with dual audio, edit images/video, and share to YouTube, Dropbox, Evernote in one click.',
    keywords: 'Capto, Capto Mac, screen recorder Mac, screenshot Mac, video editor Mac, screen capture Mac, Global Delight Capto, Mac screen recording',
    ogImage: '/apps/Capto-mac.jpeg',
    twitterImage: '/apps/Capto-mac.jpeg',
    softwareApplication: { name: 'Capto', operatingSystem: 'Mac', applicationCategory: 'MultimediaApplication', price: '749.50', priceCurrency: 'INR', image: '/apps/Capto-mac.jpeg' },
  },
  '/capto/windows': {
    title: 'Capto for Windows | All-in-One Screenshots & Screen Recording',
    description: 'Capto for Windows offers robust screenshots & screen recording on Windows 10/11 — 4K 60 FPS capture, webcam, OCR text capture, image/video editing, and direct sharing to YouTube/Drive.',
    keywords: 'Capto Windows, screen recorder Windows, screenshot Windows, Windows 10 screen capture, 4K screen recording, Capto for Windows 10 11',
    ogImage: '/apps/Capto-window.jpeg',
    twitterImage: '/apps/Capto-window.jpeg',
    softwareApplication: { name: 'Capto for Windows', operatingSystem: 'Windows', applicationCategory: 'MultimediaApplication', price: '749.50', priceCurrency: 'INR', image: '/apps/Capto-window.jpeg' },
  },
  '/capto/educators': {
    title: 'Capto for Educators | Tutorial Video Making App for Education',
    description: 'Capto helps teachers and institutions create engaging tutorials, power easy e-learning, and grade assignments faster — with screen recording and simple arrow, spotlight, and text annotations.',
    keywords: 'Capto for educators, tutorial video maker, e-learning screen recorder, education screen capture, annotate video for teaching, Capto education pricing, Global Delight Capto',
    ogImage: '/apps/Capto-mac.jpeg',
    twitterImage: '/apps/Capto-mac.jpeg',
    softwareApplication: { name: 'Capto for Educators', operatingSystem: 'Mac', applicationCategory: 'MultimediaApplication', image: '/apps/Capto-mac.jpeg' },
  },
  '/audion': {
    title: 'AudiOn | Advanced Voice Recorder & Audio Editor for Mobile',
    description: 'AudiOn is the cutting-edge voice recorder for iPhone & Android — studio-quality WAV, 200% mic boost, noise removal, teleprompter, timestamp markers, and speech-to-text transcription.',
    keywords: 'AudiOn, AudiOn app, voice recorder app, audio editor mobile, voice recorder iOS Android, transcription app, Global Delight AudiOn',
    ogImage: '/apps/AudiOn-ios.jpeg',
    twitterImage: '/apps/AudiOn-ios.jpeg',
    softwareApplication: { name: 'AudiOn', operatingSystem: 'iOS, Android', applicationCategory: 'MultimediaApplication', image: '/apps/AudiOn-ios.jpeg' },
  },
  '/vizmato': {
    title: 'Vizmato | HD Video Editor with Instant FX for iOS & Android',
    description: 'Vizmato is an award-winning moviemaker in your pocket — record in full HD with Live Instant FX, 50+ themes, music, slow motion, and one-tap sharing to social platforms.',
    keywords: 'Vizmato, Vizmato app, mobile video editor, HD video recorder, Instant FX, video themes, Vizmato iOS Android, Global Delight Vizmato',
    ogImage: '/apps/Vizmato-ios.jpeg',
    twitterImage: '/apps/Vizmato-ios.jpeg',
    softwareApplication: { name: 'Vizmato', operatingSystem: 'iOS, Android', applicationCategory: 'MultimediaApplication', image: '/apps/Vizmato-ios.jpeg' },
  },
  '/cameraplus': {
    title: 'Camera Plus | Pro Photography Camera for iPhone',
    description: 'Camera Plus gives you powerful tools, stunning filters, macro focus, AirSnap remote via Wi-Fi/Bluetooth, Apple Watch trigger, and advanced controls to take photography to the next level on iPhone.',
    keywords: 'Camera Plus, iPhone camera app, photography app iOS, AirSnap, macro mode, Camera Plus iPhone, Global Delight Camera Plus',
    ogImage: '/website/GlobalDelight/icons/CameraPlus_SubheaderLogo.png',
    twitterImage: '/website/GlobalDelight/icons/CameraPlus_SubheaderLogo.png',
    softwareApplication: { name: 'Camera Plus', operatingSystem: 'iOS', applicationCategory: 'PhotographyApplication', image: '/website/GlobalDelight/icons/CameraPlus_SubheaderLogo.png' },
  },
  '/camerapluspro': {
    title: 'Camera Plus Pro | DSLR-Like Photography for iPhone',
    description: 'Camera Plus Pro brings DSLR-like control to iPhone — manual focus, exposure white balance, RAW, AirSnap remote, and smart retouch AI tools to enhance every detail.',
    keywords: 'Camera Plus Pro, Camera Plus Pro iPhone, DSLR camera app, manual camera iOS, RAW photography, Global Delight Camera Plus Pro',
    ogImage: '/website/GlobalDelight/icons/CameraPlus_SubheaderLogo.png',
    twitterImage: '/website/GlobalDelight/icons/CameraPlus_SubheaderLogo.png',
    softwareApplication: { name: 'Camera Plus Pro', operatingSystem: 'iOS', applicationCategory: 'PhotographyApplication', image: '/website/GlobalDelight/icons/CameraPlus_SubheaderLogo.png' },
  },
  '/audimix': {
    title: 'AuDimix | Music Separation & Vocal Remover for Windows',
    description: 'AuDimix for Windows splits any song into stems — remove vocals, create karaoke instrumentals, adjust pitch/tempo, and export stems as MP3/WAV in 3 simple steps.',
    keywords: 'AuDimix, vocal remover, stem splitter, karaoke maker, AuDimix Windows, music separation, remove vocals, Global Delight AuDimix',
    ogImage: '/apps/AuDimix-Window.jpeg',
    twitterImage: '/apps/AuDimix-Window.jpeg',
    softwareApplication: { name: 'AuDimix', operatingSystem: 'Windows', applicationCategory: 'MultimediaApplication', image: '/apps/AuDimix-Window.jpeg' },
  },
  '/boomformobile': {
    title: 'Boom for Mobile | 3D Surround Sound Music Player for iOS & Android',
    description: 'Boom for iOS & Android is the best music player with magical 3D Surround Sound on any headphones — 29 EQ presets, 20K+ radio & podcasts, Tidal streaming, and cloud library playback.',
    keywords: 'Boom mobile, Boom iOS, Boom Android, 3D surround music player, equalizer presets, radio podcasts, Tidal Boom, Global Delight Boom',
    ogImage: '/apps/Boom for iOS.jpeg',
    twitterImage: '/apps/Boom for iOS.jpeg',
    softwareApplication: { name: 'Boom for Mobile', operatingSystem: 'iOS, Android', applicationCategory: 'MultimediaApplication', image: '/apps/Boom for iOS.jpeg' },
  },
  // WhatsNew – previously had only <title>, now full meta
  '/whatsnew/boom': {
    title: "What's New in Boom 3D | Latest Updates & Features",
    description: "See what's new in Boom 3D — latest features, 3D Surround updates, equalizer presets, stability improvements, and changelog for Mac & Windows.",
    keywords: 'Boom 3D whats new, Boom 3D updates, Boom 3D changelog, Boom 3D latest version, Global Delight updates',
    ogImage: '/apps/Boom3D-mac.jpeg',
    twitterImage: '/apps/Boom3D-mac.jpeg',
  },
  '/whatsnew/boom2': {
    title: "What's New in Boom 2 | Latest Updates & Features",
    description: "Changelog for Boom 2 on Mac — volume boost, equalizer, audio effects, remote control, file boost, and performance updates in the latest version.",
    keywords: 'Boom 2 whats new, Boom 2 updates, Boom 2 changelog, Boom 2 latest version',
    ogImage: '/apps/Boom2-mac.jpeg',
    twitterImage: '/apps/Boom2-mac.jpeg',
  },
  '/whatsnew/capto': {
    title: "What's New in Capto | Latest Updates & Features",
    description: "Capto changelog — screen capture, recording, video editing, annotations, sharing, and performance improvements for Mac & Windows in the latest release.",
    keywords: 'Capto whats new, Capto updates, Capto changelog, Capto latest version, screen recorder updates',
    ogImage: '/apps/Capto-mac.jpeg',
    twitterImage: '/apps/Capto-mac.jpeg',
  },
  '/whatsnew/audion': {
    title: "What's New in AudiOn | Latest Updates & Features",
    description: "AudiOn updates — lossless recording, noise isolation, Skip Silence, reverb & EQ, timestamp markers, and transcription improvements for iOS & Android.",
    keywords: 'AudiOn whats new, AudiOn updates, AudiOn changelog, voice recorder updates',
    ogImage: '/apps/AudiOn-ios.jpeg',
    twitterImage: '/apps/AudiOn-ios.jpeg',
  },
  '/whatsnew/audimix': {
    title: "What's New in AuDimix | Latest Updates & Features",
    description: "AuDimix changelog — stem splitting accuracy, vocal remover, pitch/tempo control, export quality, and Windows performance updates.",
    keywords: 'AuDimix whats new, AuDimix updates, AuDimix changelog, vocal remover updates',
    ogImage: '/apps/AuDimix-Window.jpeg',
    twitterImage: '/apps/AuDimix-Window.jpeg',
  },
  // Privacy – noindex, minimal meta (kept for completeness but robots will hide)
  '/privacy-policy': {
    title: 'Privacy Policy | Global Delight',
    description: 'Global Delight Privacy Policy — how we collect, use, and protect your data across Boom, Capto, Vizmato, and Camera Plus apps.',
    keywords: 'Global Delight privacy policy, Boom privacy, Capto privacy, Vizmato privacy',
    ogImage: CLOUD_OG,
    twitterImage: CLOUD_OG,
  },
  '/capto/privacy-policy': {
    title: 'Capto Privacy Policy | Global Delight',
    description: 'Privacy Policy for Capto screen recorder — data collection, usage, and your rights.',
    keywords: 'Capto privacy policy, Capto data protection, screen recorder privacy',
    ogImage: '/apps/Capto-mac.jpeg',
    twitterImage: '/apps/Capto-mac.jpeg',
  },
  '/boom/privacy-policy': {
    title: 'Boom Privacy Policy | Global Delight',
    description: 'Privacy Policy for Boom audio apps — how Boom handles your data and system audio.',
    keywords: 'Boom privacy policy, Boom audio privacy',
    ogImage: '/apps/Boom2-mac.jpeg',
    twitterImage: '/apps/Boom2-mac.jpeg',
  },
  '/boom2/privacy-policy': {
    title: 'Boom 2 Privacy Policy | Global Delight',
    description: 'Privacy Policy for Boom 2 on Mac — data handling and your rights.',
    keywords: 'Boom 2 privacy policy',
    ogImage: '/apps/Boom2-mac.jpeg',
    twitterImage: '/apps/Boom2-mac.jpeg',
  },
  '/boom3D/privacy-policy': {
    title: 'Boom 3D Privacy Policy | Global Delight',
    description: 'Privacy Policy for Boom 3D on Mac & Windows — data handling and your rights.',
    keywords: 'Boom 3D privacy policy',
    ogImage: '/apps/Boom3D-mac.jpeg',
    twitterImage: '/apps/Boom3D-mac.jpeg',
  },
};

export function getSeoForPath(path: string): SeoEntry | null {
  // Exact match first, then fallback to "/" for unknown.
  if (SEO_DATA[path]) return SEO_DATA[path];
  // For /:lang stripped paths already match; unknown paths return null to use generic defaults.
  return null;
}
