const fs = require('fs');
const path = require('path');

const distDir = path.resolve(__dirname, '..', 'dist');
const domain = 'https://gdpl-six.vercel.app'; // from .env
const CLOUD_OG = 'https://d3jbf8nvvpx3fh.cloudfront.net/Boom3D-Web/OGImages/Global-Delight.jpg';

// Duplicate of src/data/seo.ts SEO_DATA (keep in sync)
const SEO_DATA = {
  '/': { title: 'Global Delight | Boom 3D, Capto, Vizmato & Camera Plus Pro Apps', description: 'Global Delight builds award-winning audio, video, and photography apps — Boom 3D volume booster & equalizer, Capto screen recorder, Vizmato video editor, and Camera Plus Pro for Mac, Windows, iOS & Android.', keywords: 'Global Delight, Boom 3D, volume booster, Mac equalizer, 3D surround sound, Capto, screen recorder, screenshot tool, Vizmato, video editor app, Camera Plus Pro, iPhone camera app, AuDimix, vocal remover, AudiOn, voice recorder app, bass booster, speaker booster, amplifier', ogImage: CLOUD_OG },
  '/about': { title: 'About Global Delight | Innovators in Audio, Video & Photography Software', description: 'Since 2007, Global Delight has created award-winning digital experiences. Discover our history of pioneering audio, video, and photography software for Mac, Windows, iOS, and Android, trusted by millions worldwide.', keywords: 'Global Delight, software company, audio enhancement, video editing, photography apps, Mac software, iOS apps, Windows software, award-winning apps, about Global Delight, app development company, Udupi software company, Boom Capto Vizmato maker', ogImage: CLOUD_OG },
  '/business': { title: 'Business Solutions | Global Delight B2B', description: 'Global Delight offers cutting-edge B2B solutions in audio, video, and photography technology. Partner with us for powerful OEM integrations, white-label apps, and enterprise software licensing.', keywords: 'Global Delight Business, B2B software solutions, OEM integration, audio technology licensing, video engine, business software, white label app development, SDK licensing, enterprise software partner, technology licensing', ogImage: CLOUD_OG },
  '/technology/audio': { title: 'Audio Technology & Engine | Global Delight B2B', description: 'Discover Global Delight\'s patented audio engine, featuring 3D Surround Sound and advanced equalizer tech available for OEM integration, white-label licensing, and B2B partnerships.', keywords: 'audio engine, 3D surround sound, OEM audio technology, equalizer SDK, Global Delight audio, sound enhancement, audio SDK licensing, volume booster SDK, white label audio app, patented audio engine', ogImage: '/business/AT/Audio-Hbanner.png' },
  '/technology/video': { title: 'Video Technology Engine | Global Delight B2B', description: 'Leverage Global Delight\'s award-winning video engine. Fast, scalable SDK integration, custom branding, and white-label video editing solutions for businesses and app developers.', keywords: 'video engine, video SDK, OEM video editor, white label video app, Global Delight B2B, Vizmato engine, video editing SDK licensing, mobile video editor SDK, custom branded video app', ogImage: '/business/VT/VT-banner.png' },
  '/technology/camera': { title: 'Camera Technology | Global Delight B2B OEM Solutions', description: 'Discover Global Delight\'s advanced camera technology. Integrate AirSnap, Live Filters, and One-Touch Image Editing SDKs into your photography apps through OEM licensing.', keywords: 'camera technology, photography SDK, AirSnap, live filters SDK, image editing SDK, Global Delight OEM, camera app SDK, photo editing SDK licensing, white label camera app', ogImage: '/business/CT/CT-banner.png' },
  '/technology/screen-capture': { title: 'Screen Capture Technology | Global Delight B2B', description: 'Global Delight\'s customized Screen Capture and Screen Recording engine. High-performance recording and editing solutions for macOS and Windows applications, available for OEM licensing.', keywords: 'screen capture engine, screen recording SDK, video capture OEM, Global Delight screen recorder, screen recording SDK licensing, white label screen recorder, Capto engine', ogImage: '/business/ST/ST_banner.png' },
  '/faq': { title: 'FAQs | Global Delight Help & Support', description: 'Find answers to frequently asked questions about Boom 3D, Boom 2, Capto, Vizmato, AudiOn, AuDimix, and Camera Plus – installation, licensing, features, troubleshooting, and support contact.', keywords: 'Global Delight FAQ, Boom 3D help, Capto support, Vizmato FAQ, AudiOn help, troubleshooting, licensing, installation, Global Delight support', ogImage: CLOUD_OG },
  '/faq/boom3dmac': { title: 'Boom 3D for Mac FAQ | Global Delight', description: 'Get answers about Boom 3D for Mac — system-wide volume boosting, 3D Surround Sound, equalizer presets, sound quality, compatibility, driver installation, and troubleshooting tips.', keywords: 'Boom 3D Mac FAQ, Boom 3D help, Mac volume booster questions, Boom 3D equalizer support, Boom 3D Mac troubleshooting', ogImage: '/faq/Boom3D.png' },
  '/faq/boom3dmas': { title: 'Boom 3D for Mac App Store FAQ | Global Delight', description: 'Answers for Boom 3D downloaded from the Mac App Store — subscription, App Store billing, driver installation, registration, and Mac App Store-specific troubleshooting.', keywords: 'Boom 3D Mac App Store FAQ, Boom 3D MAS help, App Store subscription, Boom 3D driver Mac', ogImage: '/faq/Boom3D.png' },
  '/faq/boom3dwin': { title: 'Boom 3D for Windows FAQ | Global Delight', description: 'FAQ for Boom 3D on Windows — installation, 3D Surround Sound on Windows 10/11, equalizer, volume booster, driver, activation, and troubleshooting for Windows.', keywords: 'Boom 3D Windows FAQ, Boom 3D Win help, Windows volume booster, Boom 3D Windows support', ogImage: '/faq/Boom3D.png' },
  '/faq/audimixwin': { title: 'AuDimix for Windows FAQ | Global Delight', description: 'AuDimix FAQ — vocal isolation, stem splitting, karaoke instrumental creation, pitch/tempo control, export formats, and troubleshooting for AuDimix on Windows.', keywords: 'AuDimix FAQ, vocal remover help, stem splitter FAQ, AuDimix Windows support, karaoke maker help', ogImage: '/faq/AudimixFaqLogo.png' },
  '/faq/boom2': { title: 'Boom 2 FAQ | Global Delight', description: 'Get answers about Boom 2 for Mac — system-wide volume boosting, equalizer presets, sound quality, compatibility, and troubleshooting tips.', keywords: 'Boom 2 FAQ, Boom 2 help, Mac volume booster questions, Boom 2 equalizer support, Boom app troubleshooting, Boom 2 compatibility', ogImage: '/faq/Boom2LogoFaq.png' },
  '/faq/boomios': { title: 'Boom for iOS FAQ | Global Delight', description: 'Boom for iOS FAQ — 3D Surround Sound on iPhone/iPad, equalizer presets, Tidal/Spotify integration, radio & podcasts, gestures, and iOS troubleshooting.', keywords: 'Boom iOS FAQ, Boom mobile FAQ, iPhone audio help, Boom music player FAQ, iOS equalizer help', ogImage: '/faq/iBoom.png' },
  '/faq/vizmato': { title: 'Vizmato FAQ | Global Delight', description: 'Vizmato FAQ — HD recording, Instant FX, themes, music, slow motion, export, sharing, and troubleshooting for Vizmato on iOS & Android.', keywords: 'Vizmato FAQ, Vizmato help, mobile video editor FAQ, Vizmato support, video FX help', ogImage: '/faq/Vizmato.png' },
  '/faq/captomac': { title: 'Capto for Mac FAQ | Global Delight', description: 'Capto for Mac FAQ — screenshots, screen & video recording, image/video editing, iOS recording, dual audio, file management, sharing, and troubleshooting for Mac.', keywords: 'Capto Mac FAQ, Capto help Mac, screen recorder Mac FAQ, screenshot tool help', ogImage: '/apps/Capto-mac.jpeg' },
  '/faq/captowin': { title: 'Capto for Windows FAQ | Global Delight', description: 'Capto for Windows FAQ — screen capture, recording, webcam, OCR text capture, image/video editing, 4K recording, and export help for Windows 10/11.', keywords: 'Capto Windows FAQ, Capto Win help, screen recorder Windows FAQ, Capto Windows support', ogImage: '/apps/Capto-window.jpeg' },
  '/faq/audion': { title: 'AudiOn FAQ | Global Delight', description: 'AudiOn FAQ — lossless recording, noise removal, transcription, editing, teleprompter, and troubleshooting for AudiOn on iOS & Android.', keywords: 'AudiOn FAQ, AudiOn help, voice recorder FAQ, audio editor help, transcription help', ogImage: '/faq/AudionFaqLogo.png' },
  '/contact': { title: 'Contact Global Delight | Support, Sales & Business Inquiries', description: 'Contact Global Delight — get help for Boom, Capto, Vizmato & Camera Plus, request sales/licensing info, or reach business partnership team. We respond within 24 hours.', keywords: 'Global Delight contact, Boom support contact, Capto help email, Vizmato support, Global Delight address, customer support, business inquiry, sales contact', ogImage: CLOUD_OG },
  '/careers': { title: 'Careers at Global Delight | Join Our Award-Winning Team', description: 'Join Global Delight — careers for engineers, designers, product managers, and marketers building award-winning apps like Boom, Capto, and Vizmato used by millions worldwide.', keywords: 'Global Delight careers, jobs at Global Delight, Boom team jobs, software engineer jobs Udupi, app developer careers, Global Delight hiring', ogImage: CLOUD_OG },
  '/boom': { title: 'Boom | Feel Your Music in 3D Surround Sound | Mac Audio Equalizer', description: 'Boom is Global Delight\'s award-winning audio family for Mac, Windows, iOS and Android — featuring 3D surround sound, advanced equalizers, and a powerful volume booster for movies, music and games.', keywords: 'Boom, volume booster, Mac audio equalizer, 3D surround sound, sound enhancer, bass booster, audio booster app, system-wide equalizer, Boom 2, Boom 3D, Boom for mobile, Global Delight Boom', ogImage: '/apps/Boom2-mac.jpeg' },
  '/boom2': { title: 'Boom 2 | Powerful Audio Enhancement for Mac', description: 'Boom 2 is an award-winning pro audio enhancement app for macOS with 31-band equalizer, volume booster, audio effects, and Boom Remote — system-wide sound that fills every room.', keywords: 'Boom 2, Boom 2 Mac, 31 band equalizer, volume booster Mac, audio effects Mac, Boom Remote, Global Delight Boom 2', ogImage: '/apps/Boom2-mac.jpeg' },
  '/boom3D': { title: 'Boom 3D | Magical 3D Surround Sound for Mac & Windows', description: 'Boom 3D is a system-wide volume booster and equalizer for Mac and Windows that delivers immersive 3D Surround Sound without special headphones — 31-band EQ, presets, and per-app control.', keywords: 'Boom 3D, Boom 3D Mac, Boom 3D Windows, 3D surround sound, volume booster, 31 band equalizer, Mac Windows audio enhancer, Global Delight Boom 3D', ogImage: '/apps/Boom3D-mac.jpeg' },
  '/capto': { title: 'Capto | Screenshots, Screen Recording & Video Editing for Mac', description: 'Capto makes visual storytelling effortless on Mac — capture fullscreen or selected areas, record at 60 FPS with dual audio, edit images/video, and share to YouTube, Dropbox, Evernote in one click.', keywords: 'Capto, Capto Mac, screen recorder Mac, screenshot Mac, video editor Mac, screen capture Mac, Global Delight Capto, Mac screen recording', ogImage: '/apps/Capto-mac.jpeg' },
  '/capto/windows': { title: 'Capto for Windows | All-in-One Screenshots & Screen Recording', description: 'Capto for Windows offers robust screenshots & screen recording on Windows 10/11 — 4K 60 FPS capture, webcam, OCR text capture, image/video editing, and direct sharing to YouTube/Drive.', keywords: 'Capto Windows, screen recorder Windows, screenshot Windows, Windows 10 screen capture, 4K screen recording, Capto for Windows 10 11', ogImage: '/apps/Capto-window.jpeg' },
  '/audion': { title: 'AudiOn | Advanced Voice Recorder & Audio Editor for Mobile', description: 'AudiOn is the cutting-edge voice recorder for iPhone & Android — studio-quality WAV, 200% mic boost, noise removal, teleprompter, timestamp markers, and speech-to-text transcription.', keywords: 'AudiOn, AudiOn app, voice recorder app, audio editor mobile, voice recorder iOS Android, transcription app, Global Delight AudiOn', ogImage: '/apps/AudiOn-ios.jpeg' },
  '/vizmato': { title: 'Vizmato | HD Video Editor with Instant FX for iOS & Android', description: 'Vizmato is an award-winning moviemaker in your pocket — record in full HD with Live Instant FX, 50+ themes, music, slow motion, and one-tap sharing to social platforms.', keywords: 'Vizmato, Vizmato app, mobile video editor, HD video recorder, Instant FX, video themes, Vizmato iOS Android, Global Delight Vizmato', ogImage: '/apps/Vizmato-ios.jpeg' },
  '/cameraplus': { title: 'Camera Plus | Pro Photography Camera for iPhone', description: 'Camera Plus gives you powerful tools, stunning filters, macro focus, AirSnap remote via Wi-Fi/Bluetooth, Apple Watch trigger, and advanced controls to take photography to the next level on iPhone.', keywords: 'Camera Plus, iPhone camera app, photography app iOS, AirSnap, macro mode, Camera Plus iPhone, Global Delight Camera Plus', ogImage: '/website/GlobalDelight/icons/CameraPlus_SubheaderLogo.png' },
  '/camerapluspro': { title: 'Camera Plus Pro | DSLR-Like Photography for iPhone', description: 'Camera Plus Pro brings DSLR-like control to iPhone — manual focus, exposure white balance, RAW, AirSnap remote, and smart retouch AI tools to enhance every detail.', keywords: 'Camera Plus Pro, Camera Plus Pro iPhone, DSLR camera app, manual camera iOS, RAW photography, Global Delight Camera Plus Pro', ogImage: '/website/GlobalDelight/icons/CameraPlus_SubheaderLogo.png' },
  '/audimix': { title: 'AuDimix | Music Separation & Vocal Remover for Windows', description: 'AuDimix for Windows splits any song into stems — remove vocals, create karaoke instrumentals, adjust pitch/tempo, and export stems as MP3/WAV in 3 simple steps.', keywords: 'AuDimix, vocal remover, stem splitter, karaoke maker, AuDimix Windows, music separation, remove vocals, Global Delight AuDimix', ogImage: '/apps/AuDimix-Window.jpeg' },
  '/boomformobile': { title: 'Boom for Mobile | 3D Surround Sound Music Player for iOS & Android', description: 'Boom for iOS & Android is the best music player with magical 3D Surround Sound on any headphones — 29 EQ presets, 20K+ radio & podcasts, Tidal streaming, and cloud library playback.', keywords: 'Boom mobile, Boom iOS, Boom Android, 3D surround music player, equalizer presets, radio podcasts, Tidal Boom, Global Delight Boom', ogImage: '/apps/Boom for iOS.jpeg' },
  '/whatsnew/boom': { title: "What's New in Boom 3D | Latest Updates & Features", description: "See what's new in Boom 3D — latest features, 3D Surround updates, equalizer presets, stability improvements, and changelog for Mac & Windows.", keywords: 'Boom 3D whats new, Boom 3D updates, Boom 3D changelog, Boom 3D latest version, Global Delight updates', ogImage: '/apps/Boom3D-mac.jpeg' },
  '/whatsnew/boom2': { title: "What's New in Boom 2 | Latest Updates & Features", description: "Changelog for Boom 2 on Mac — volume boost, equalizer, audio effects, remote control, file boost, and performance updates in the latest version.", keywords: 'Boom 2 whats new, Boom 2 updates, Boom 2 changelog, Boom 2 latest version', ogImage: '/apps/Boom2-mac.jpeg' },
  '/whatsnew/capto': { title: "What's New in Capto | Latest Updates & Features", description: "Capto changelog — screen capture, recording, video editing, annotations, sharing, and performance improvements for Mac & Windows in the latest release.", keywords: 'Capto whats new, Capto updates, Capto changelog, Capto latest version, screen recorder updates', ogImage: '/apps/Capto-mac.jpeg' },
  '/whatsnew/audion': { title: "What's New in AudiOn | Latest Updates & Features", description: "AudiOn updates — lossless recording, noise isolation, Skip Silence, reverb & EQ, timestamp markers, and transcription improvements for iOS & Android.", keywords: 'AudiOn whats new, AudiOn updates, AudiOn changelog, voice recorder updates', ogImage: '/apps/AudiOn-ios.jpeg' },
  '/whatsnew/audimix': { title: "What's New in AuDimix | Latest Updates & Features", description: "AuDimix changelog — stem splitting accuracy, vocal remover, pitch/tempo control, export quality, and Windows performance updates.", keywords: 'AuDimix whats new, AuDimix updates, AuDimix changelog, vocal remover updates', ogImage: '/apps/AuDimix-Window.jpeg' },
};

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (entry.name.endsWith('.html')) patchFile(full);
  }
}

function patchFile(filePath) {
  let html = fs.readFileSync(filePath, 'utf8');
  // Derive route from file path: dist/index.html -> "/", dist/about/index.html -> "/about", dist/capto/windows/index.html -> "/capto/windows"
  let rel = path.relative(distDir, filePath).replace(/\\/g, '/'); // e.g. "about/index.html" or "index.html"
  let route;
  if (rel === 'index.html' || rel === '200.html' || rel === '404.html') route = '/';
  else if (rel.endsWith('/index.html')) route = '/' + rel.slice(0, -'/index.html'.length);
  else route = '/' + rel.replace(/\.html$/, '');
  // For localized files like dist/de/about/index.html -> route = "/de/about" -> strip lang for lookup
  const langs = ['de','it','ja','fr','pt','es','zh'];
  let lookup = route;
  const parts = route.split('/').filter(Boolean);
  if (parts.length && langs.includes(parts[0])) {
    lookup = '/' + parts.slice(1).join('/');
    if (lookup === '/') lookup = '/';
  }
  // Handle 404/200 special
  if (rel === '404.html' || rel === '404/index.html' || route === '/404') return;
  const seo = SEO_DATA[lookup];
  if (!seo) return;
  const original = html;
  // Helper to replace meta content
  const esc = (s) => s.replace(/"/g, '&quot;');
  // Title
  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(seo.title)}</title>`);
  // Description
  html = html.replace(/<meta[^>]*name="description"[^>]*>/, `<meta name="description" content="${esc(seo.description)}" data-rh="true">`);
  // Keywords
  html = html.replace(/<meta[^>]*name="keywords"[^>]*>/, `<meta name="keywords" content="${esc(seo.keywords)}" data-rh="true">`);
  // og:title
  html = html.replace(/<meta[^>]*property="og:title"[^>]*>/, `<meta property="og:title" content="${esc(seo.title)}" data-rh="true">`);
  // og:description
  html = html.replace(/<meta[^>]*property="og:description"[^>]*>/, `<meta property="og:description" content="${esc(seo.description)}" data-rh="true">`);
  // og:image
  const imgUrl = seo.ogImage.startsWith('http') ? seo.ogImage : domain + seo.ogImage;
  html = html.replace(/<meta[^>]*property="og:image"[^>]*>/, `<meta property="og:image" content="${imgUrl}" data-rh="true">`);
  // og:url (canonical route)
  const canonicalUrl = domain + route;
  html = html.replace(/<meta[^>]*property="og:url"[^>]*>/, `<meta property="og:url" content="${canonicalUrl}" data-rh="true">`);
  // thumbnail
  html = html.replace(/<meta[^>]*name="thumbnail"[^>]*>/, `<meta name="thumbnail" content="${imgUrl}" data-rh="true">`);
  // twitter:title/description/image/url
  html = html.replace(/<meta[^>]*name="twitter:title"[^>]*>/, `<meta name="twitter:title" content="${esc(seo.title)}" data-rh="true">`);
  html = html.replace(/<meta[^>]*name="twitter:description"[^>]*>/, `<meta name="twitter:description" content="${esc(seo.description)}" data-rh="true">`);
  html = html.replace(/<meta[^>]*name="twitter:image"[^>]*>/, `<meta name="twitter:image" content="${imgUrl}" data-rh="true">`);
  html = html.replace(/<meta[^>]*name="twitter:url"[^>]*>/, `<meta name="twitter:url" content="${canonicalUrl}" data-rh="true">`);
  // canonical
  html = html.replace(/<link[^>]*rel="canonical"[^>]*>/, `<link rel="canonical" href="${canonicalUrl}" data-rh="true">`);
  // subject
  if (seo.title) {
    if (html.includes('name="subject"')) {
      html = html.replace(/<meta[^>]*name="subject"[^>]*>/, `<meta name="subject" content="${esc(seo.title)}" data-rh="true">`);
    } else {
      html = html.replace('</title>', `</title>\n    <meta name="subject" content="${esc(seo.title)}" data-rh="true">`);
    }
  }
  if (html !== original) {
    fs.writeFileSync(filePath, html, 'utf8');
    return true;
  }
  return false;
}

let count = 0;
function walkCount(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walkCount(full);
    else if (entry.name.endsWith('.html')) {
      let html = fs.readFileSync(full, 'utf8');
      const rel = path.relative(distDir, full).replace(/\\/g, '/');
      let route = rel === 'index.html' ? '/' : rel.endsWith('/index.html') ? '/' + rel.slice(0, -'/index.html'.length) : '/' + rel.replace(/\.html$/, '');
      const langs = ['de','it','ja','fr','pt','es','zh'];
      let lookup = route;
      const parts = route.split('/').filter(Boolean);
      if (parts.length && langs.includes(parts[0])) lookup = '/' + parts.slice(1).join('/') || '/';
      if (SEO_DATA[lookup]) count++;
    }
  }
}
walk(distDir);
walkCount(distDir);
console.log(`✅ Patched per-page SEO for ${count} HTML files (view source now page-connected).`);
