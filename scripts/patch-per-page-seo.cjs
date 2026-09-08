const fs = require('fs');
const path = require('path');

const distDir = path.resolve(__dirname, '..', 'dist');
const domain = 'https://www.globaldelight.com'; // from .env
const CLOUD_OG = '/images/external/img_e76f765673cb.jpg';

// Duplicate of src/data/seo.ts SEO_DATA (keep in sync)
const SEO_DATA = {
  '/': { title: 'Global Delight | Boom 3D, Capto, Vizmato & Camera Plus Pro Apps', description: 'Global Delight builds award-winning audio, video, and photography apps — Boom 3D volume booster & equalizer, Capto screen recorder, Vizmato video editor, and Camera Plus Pro for Mac, Windows, iOS & Android.', keywords: 'Global Delight, Boom 3D, volume booster, Mac equalizer, 3D surround sound, Capto, screen recorder, screenshot tool, Vizmato, video editor app, Camera Plus Pro, iPhone camera app, AuDimix, vocal remover, AudiOn, voice recorder app, bass booster, speaker booster, amplifier', ogImage: CLOUD_OG },
  '/about': { title: 'About Global Delight | Innovators in Audio, Video & Photography Software', description: 'Since 2007, Global Delight has created award-winning digital experiences. Discover our history of pioneering audio, video, and photography software for Mac, Windows, iOS, and Android, trusted by millions worldwide.', keywords: 'Global Delight, software company, audio enhancement, video editing, photography apps, Mac software, iOS apps, Windows software, award-winning apps, about Global Delight, app development company, Udupi software company, Boom Capto Vizmato maker', ogImage: CLOUD_OG },
  '/press-info': { title: 'Press Releases & Media Kits | Global Delight', description: 'Explore Global Delight\'s official press releases archive and download press kits, reviewer guides, and high-res brand media for Boom 3D, Capto, AudiOn, and AuDimix.', keywords: 'Global Delight press releases, Boom 3D press kit, Capto review guide, AudiOn press release, media inquiries, Global Delight news, media kit download', ogImage: CLOUD_OG },
  '/business': { title: 'Business Solutions | Global Delight B2B', description: 'Global Delight offers cutting-edge B2B solutions in audio, video, and photography technology. Partner with us for powerful OEM integrations, white-label apps, and enterprise software licensing.', keywords: 'Global Delight Business, B2B software solutions, OEM integration, audio technology licensing, video engine, business software, white label app development, SDK licensing, enterprise software partner, technology licensing', ogImage: CLOUD_OG },
  '/technology/audio': { title: 'Audio Technology & Engine | Global Delight B2B', description: 'Discover Global Delight\'s patented audio engine, featuring 3D Surround Sound and advanced equalizer tech available for OEM integration, white-label licensing, and B2B partnerships.', keywords: 'audio engine, 3D surround sound, OEM audio technology, equalizer SDK, Global Delight audio, sound enhancement, audio SDK licensing, volume booster SDK, white label audio app, patented audio engine', ogImage: '/business/AT/Audio-Hbanner.webp' },
  '/technology/video': { title: 'Video Technology Engine | Global Delight B2B', description: 'Leverage Global Delight\'s award-winning video engine. Fast, scalable SDK integration, custom branding, and white-label video editing solutions for businesses and app developers.', keywords: 'video engine, video SDK, OEM video editor, white label video app, Global Delight B2B, Vizmato engine, video editing SDK licensing, mobile video editor SDK, custom branded video app', ogImage: '/business/VT/VT-banner.webp' },
  '/technology/camera': { title: 'Camera Technology | Global Delight B2B OEM Solutions', description: 'Discover Global Delight\'s advanced camera technology. Integrate AirSnap, Live Filters, and One-Touch Image Editing SDKs into your photography apps through OEM licensing.', keywords: 'camera technology, photography SDK, AirSnap, live filters SDK, image editing SDK, Global Delight OEM, camera app SDK, photo editing SDK licensing, white label camera app', ogImage: '/business/CT/CT-banner.webp' },
  '/technology/screen-capture': { title: 'Screen Capture Technology | Global Delight B2B', description: 'Global Delight\'s customized Screen Capture and Screen Recording engine. High-performance recording and editing solutions for macOS and Windows applications, available for OEM licensing.', keywords: 'screen capture engine, screen recording SDK, video capture OEM, Global Delight screen recorder, screen recording SDK licensing, white label screen recorder, Capto engine', ogImage: '/business/ST/ST_banner.webp' },
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
  '/cameraplus': { title: 'Camera Plus | Pro Photography Camera for iPhone', description: 'Camera Plus gives you powerful tools, stunning filters, macro focus, AirSnap remote via Wi-Fi/Bluetooth, Apple Watch trigger, and advanced controls to take photography to the next level on iPhone.', keywords: 'Camera Plus, iPhone camera app, photography app iOS, AirSnap, macro mode, Camera Plus iPhone, Global Delight Camera Plus', ogImage: '/hero/cameraplus.webp' },
  '/camerapluspro': { title: 'Camera Plus Pro | DSLR-Like Photography for iPhone', description: 'Camera Plus Pro brings DSLR-like control to iPhone — manual focus, exposure white balance, RAW, AirSnap remote, and smart retouch AI tools to enhance every detail.', keywords: 'Camera Plus Pro, Camera Plus Pro iPhone, DSLR camera app, manual camera iOS, RAW photography, Global Delight Camera Plus Pro', ogImage: '/hero/cameraplus.webp' },
  '/audimix': { title: 'AuDimix | Music Separation & Vocal Remover for Windows', description: 'AuDimix for Windows splits any song into stems — remove vocals, create karaoke instrumentals, adjust pitch/tempo, and export stems as MP3/WAV in 3 simple steps.', keywords: 'AuDimix, vocal remover, stem splitter, karaoke maker, AuDimix Windows, music separation, remove vocals, Global Delight AuDimix', ogImage: '/apps/AuDimix-Window.jpeg' },
  '/boomformobile': { title: 'Boom for Mobile | 3D Surround Sound Music Player for iOS & Android', description: 'Boom for iOS & Android is the best music player with magical 3D Surround Sound on any headphones — 29 EQ presets, 20K+ radio & podcasts, Tidal streaming, and cloud library playback.', keywords: 'Boom mobile, Boom iOS, Boom Android, 3D surround music player, equalizer presets, radio podcasts, Tidal Boom, Global Delight Boom', ogImage: '/apps/Boom for iOS.jpeg' },
  '/whatsnew/boom': { title: "What's New in Boom 3D | Latest Updates & Features", description: "See what's new in Boom 3D — latest features, 3D Surround updates, equalizer presets, stability improvements, and changelog for Mac & Windows.", keywords: 'Boom 3D whats new, Boom 3D updates, Boom 3D changelog, Boom 3D latest version, Global Delight updates', ogImage: '/apps/Boom3D-mac.jpeg' },
  '/whatsnew/boom2': { title: "What's New in Boom 2 | Latest Updates & Features", description: "Changelog for Boom 2 on Mac — volume boost, equalizer, audio effects, remote control, file boost, and performance updates in the latest version.", keywords: 'Boom 2 whats new, Boom 2 updates, Boom 2 changelog, Boom 2 latest version', ogImage: '/apps/Boom2-mac.jpeg' },
  '/whatsnew/capto': { title: "What's New in Capto | Latest Updates & Features", description: "Capto changelog — screen capture, recording, video editing, annotations, sharing, and performance improvements for Mac & Windows in the latest release.", keywords: 'Capto whats new, Capto updates, Capto changelog, Capto latest version, screen recorder updates', ogImage: '/apps/Capto-mac.jpeg' },
  '/whatsnew/audion': { title: "What's New in AudiOn | Latest Updates & Features", description: "AudiOn updates — lossless recording, noise isolation, Skip Silence, reverb & EQ, timestamp markers, and transcription improvements for iOS & Android.", keywords: 'AudiOn whats new, AudiOn updates, AudiOn changelog, voice recorder updates', ogImage: '/apps/AudiOn-ios.jpeg' },
  '/whatsnew/audimix': { title: "What's New in AuDimix | Latest Updates & Features", description: "AuDimix changelog — stem splitting accuracy, vocal remover, pitch/tempo control, export quality, and Windows performance updates.", keywords: 'AuDimix whats new, AuDimix updates, AuDimix changelog, vocal remover updates', ogImage: '/apps/AuDimix-Window.jpeg' },
};

// =======================================================
// EXACT USER-SPECIFIED LOCALIZED SEO, CANONICALS & HREFLANG
// =======================================================
const BOOM2_HREFLANGS = [
  { hreflang: 'de', href: 'https://www.globaldelight.com/boom/de/' },
  { hreflang: 'it', href: 'https://www.globaldelight.com/boom/it/' },
  { hreflang: 'ja', href: 'https://www.globaldelight.com/boom/ja/' },
  { hreflang: 'fr', href: 'https://www.globaldelight.com/boom/fr/' },
  { hreflang: 'pt', href: 'https://www.globaldelight.com/boom/pt/' },
  { hreflang: 'es', href: 'https://www.globaldelight.com/boom/es/' },
  { hreflang: 'zh-cn', href: 'https://www.globaldelight.com/boom/zh-cn/' },
  { hreflang: 'zh-tw', href: 'https://www.globaldelight.com/boom/zh-tw/' },
];

const BOOM3D_HREFLANGS = [
  { hreflang: 'de', href: 'https://www.globaldelight.com/boom/de/' },
  { hreflang: 'it', href: 'https://www.globaldelight.com/boom/it/' },
  { hreflang: 'ja', href: 'https://www.globaldelight.com/boom/ja/' },
  { hreflang: 'fr', href: 'https://www.globaldelight.com/boom/fr/' },
  { hreflang: 'pt', href: 'https://www.globaldelight.com/boom/pt/' },
  { hreflang: 'es', href: 'https://www.globaldelight.com/boom/es/' },
  { hreflang: 'zh-cn', href: 'https://www.globaldelight.com/boom/zh-cn/' },
  { hreflang: 'zh-tw', href: 'https://www.globaldelight.com/boom/zh-tw/' },
];

let compiledSeo = {};
try {
  compiledSeo = require('../src/data/localizedSeoData.json');
} catch (e) {}

const LOCALIZED_SEO_DATA = {
  ...compiledSeo,
  // Boom 2 Localized
  '/de/boom2': {
    title: 'Boom 2: Leistungsstarker Stereo-Sound-Verbesserer für Mac',
    description: 'Boom 2 ist ein Lautstärke-Booster und Equalizer für den Mac. Genieße Filme, Musik und Spiele systemweit mit bestem Stereo-Sound über jeden Kopfhörer.',
    canonicalUrl: 'https://www.globaldelight.com/boom/de/',
    robots: 'index, follow',
    keywords: 'Boom 2, Mac Stereo-Sound-Verbesserer, Lautstärke-Booster, Equalizer Mac',
    ogImage: '/apps/Boom2-mac.jpeg',
    hreflangs: BOOM2_HREFLANGS,
  },
  '/it/boom2': {
    title: 'Boom 2: Potenziatore del suono stereo per Mac',
    description: "Boom 2 è un'app di equalizzazione e amplificazione audio di sistema per Mac. Goditi film, musica e giochi con il miglior suono stereo su QUALSIASI cuffia.",
    canonicalUrl: 'https://www.globaldelight.com/boom/it/',
    robots: 'index, follow',
    keywords: 'Boom 2, potenziatore suono stereo Mac, equalizzazione audio, amplificazione',
    ogImage: '/apps/Boom2-mac.jpeg',
    hreflangs: BOOM2_HREFLANGS,
  },
  '/ja/boom2': {
    title: 'Boom 2：Macのサウンドを劇的に向上させるステレオ音質向上アプリ',
    description: 'Boom 2はMac全体で使える音量増幅・イコライザーアプリです。どんなヘッドホンでも最高のステレオサウンドで、映画や音楽、ゲームを楽しめます。',
    canonicalUrl: 'https://www.globaldelight.com/boom/ja/',
    robots: 'index, follow',
    keywords: 'Boom 2, Mac サウンド 音質向上, 音量増幅, イコライザーアプリ',
    ogImage: '/apps/Boom2-mac.jpeg',
    hreflangs: BOOM2_HREFLANGS,
  },
  '/fr/boom2': {
    title: 'Boom 2 : Améliorateur de son stéréophonique pour Mac',
    description: "Boom 2 est un égaliseur et amplificateur de son global sur Mac. Profitez de vos films, musiques et jeux avec le meilleur son stéréo sur N'IMPORTE QUEL casque.",
    canonicalUrl: 'https://www.globaldelight.com/boom/fr/',
    robots: 'index, follow',
    keywords: 'Boom 2, améliorateur de son stéréophonique Mac, égaliseur, amplificateur',
    ogImage: '/apps/Boom2-mac.jpeg',
    hreflangs: BOOM2_HREFLANGS,
  },
  '/pt/boom2': {
    title: 'Boom 2: Aprimorador de Som Estéreo para o seu Mac',
    description: 'O Boom 2 é um app de equalização e aumento de volume para todo o Mac. Aproveite filmes, músicas e jogos com o melhor som estéreo em QUALQUER fone de ouvido.',
    canonicalUrl: 'https://www.globaldelight.com/boom/pt/',
    robots: 'index, follow',
    keywords: 'Boom 2, aprimorador de som estéreo Mac, equalização, aumento de volume',
    ogImage: '/apps/Boom2-mac.jpeg',
    hreflangs: BOOM2_HREFLANGS,
  },
  '/es/boom2': {
    title: 'Boom 2: Potenciador de sonido estéreo para tu Mac',
    description: 'Boom 2 es un ecualizador y amplificador de volumen para todo el sistema Mac. Disfruta películas, música y juegos con el mejor sonido estéreo en CUALQUIER auricular.',
    canonicalUrl: 'https://www.globaldelight.com/boom/es/',
    robots: 'index, follow',
    keywords: 'Boom 2, potenciador de sonido estéreo Mac, ecualizador, amplificador volumen',
    ogImage: '/apps/Boom2-mac.jpeg',
    hreflangs: BOOM2_HREFLANGS,
  },
  '/zh/boom2': {
    title: 'Boom 2：适用于 Mac 的全系统立体声音效增强与音量放大工具',
    description: 'Boom 2 是一款适用于 Mac 全系统的音量增强与均衡器应用。无论使用何种耳机，您都能在观看电影、聆听音乐和游玩游戏时，体验到极为出色的立体声音效，全面提升您的音频听觉享受。',
    canonicalUrl: 'https://www.globaldelight.com/boom/zh-cn/',
    robots: 'index, follow',
    keywords: 'Boom 2, Mac 全系统立体声增强, 音量放大工具, 均衡器',
    ogImage: '/apps/Boom2-mac.jpeg',
    hreflangs: BOOM2_HREFLANGS,
  },

  // Boom 3D Localized
  '/de/boom3D': {
    title: 'Beste Lautstärke-Booster- und Equalizer-App für Mac & Windows',
    description: 'Steigern Sie Ihre Audioqualität mit Boom 3D, der leistungsstarken Lautstärkebooster- und Equalizer-App für Mac und Windows. Genießen Sie satten Klang.',
    canonicalUrl: 'https://www.globaldelight.com/boom/de/',
    robots: 'index, follow',
    keywords: 'Boom 3D, Lautstärkebooster- und Equalizer-App Mac Windows, Audioqualität',
    ogImage: '/apps/Boom3D-mac.jpeg',
    hreflangs: BOOM3D_HREFLANGS,
  },
  '/it/boom3D': {
    title: 'Migliore booster volume ed equalizzatore per Mac e Windows',
    description: 'Migliora l’audio con Boom 3D, la potente app per aumentare il volume e usare l’equalizzatore su Mac e Windows. Goditi un suono ricco e coinvolgente.',
    canonicalUrl: 'https://www.globaldelight.com/boom/it/',
    robots: 'index, follow',
    keywords: 'Boom 3D, booster volume equalizzatore Mac Windows, suono ricco coinvolgente',
    ogImage: '/apps/Boom3D-mac.jpeg',
    hreflangs: BOOM3D_HREFLANGS,
  },
  '/ja/boom3D': {
    title: 'MacとWindows対応のおすすめ音量ブースター＆イコライザーアプリで音質を向上',
    description: 'MacとWindows向けの強力な音量ブースター＆イコライザーアプリ、Boom 3Dでオーディオ品質をさらに高めましょう。音量を自在に調整し、豊かでクリア、臨場感あふれるサウンドをいつでも楽しめます。音楽、映画、ゲームなど、あらゆるコンテンツの音をよりパワフルに体験でき、毎日のリスニングがもっと楽しくなります。',
    canonicalUrl: 'https://www.globaldelight.com/boom/ja/',
    robots: 'index, follow',
    keywords: 'Boom 3D, Mac Windows 音量ブースター イコライザーアプリ 音質向上, サラウンド',
    ogImage: '/apps/Boom3D-mac.jpeg',
    hreflangs: BOOM3D_HREFLANGS,
  },
  '/fr/boom3D': {
    title: 'Meilleur booster de volume et égaliseur pour Mac et PC',
    description: 'Améliorez la qualité audio avec Boom 3D, l’app puissante d’amplification du volume et d’égalisation pour Mac et Windows. Profitez d’un son riche et immersif.',
    canonicalUrl: 'https://www.globaldelight.com/boom/fr/',
    robots: 'index, follow',
    keywords: 'Boom 3D, meilleur booster de volume et égaliseur Mac PC, son immersif',
    ogImage: '/apps/Boom3D-mac.jpeg',
    hreflangs: BOOM3D_HREFLANGS,
  },
  '/pt/boom3D': {
    title: 'Melhor booster de volume e equalizador para Mac e PC',
    description: 'Melhore sua qualidade de áudio com o Boom 3D, o potente app de aumento de volume e equalizador para Mac e Windows. Desfrute de um som rico e imersivo.',
    canonicalUrl: 'https://www.globaldelight.com/boom/pt/',
    robots: 'index, follow',
    keywords: 'Boom 3D, booster de volume equalizador Mac PC, som rico imersivo',
    ogImage: '/apps/Boom3D-mac.jpeg',
    hreflangs: BOOM3D_HREFLANGS,
  },
  '/es/boom3D': {
    title: 'La mejor app de aumento de volume y ecualizador para Mac y Windows',
    description: 'Mejora la calidad de tu audio con Boom 3D, la potente app de amplificación de volumen y ecualizador para Mac y Windows. Disfruta un sonido rico e inmersivo.',
    canonicalUrl: 'https://www.globaldelight.com/boom/es/',
    robots: 'index, follow',
    keywords: 'Boom 3D, app aumento de volumen ecualizador Mac Windows, sonido rico e inmersivo',
    ogImage: '/apps/Boom3D-mac.jpeg',
    hreflangs: BOOM3D_HREFLANGS,
  },
  '/zh/boom3D': {
    title: '适用于 Mac 和 Windows 的最佳音量增强器和均衡器应用',
    description: '使用 Boom 3D 提升音频质量，这款强大的 Mac 和 Windows 音量增强器与均衡器应用，可让声音更丰富、更清晰、更具沉浸感，尽享震撼聆听体验。',
    canonicalUrl: 'https://www.globaldelight.com/boom/zh-cn/',
    robots: 'index, follow',
    keywords: 'Boom 3D, Mac Windows 最佳音量增强器 均衡器应用, 震撼聆听体验',
    ogImage: '/apps/Boom3D-mac.jpeg',
    hreflangs: BOOM3D_HREFLANGS,
  },
};

// Aliases for /boom/de, /boom/it etc.
LOCALIZED_SEO_DATA['/boom/de'] = LOCALIZED_SEO_DATA['/de/boom2'];
LOCALIZED_SEO_DATA['/boom/it'] = LOCALIZED_SEO_DATA['/it/boom2'];
LOCALIZED_SEO_DATA['/boom/ja'] = LOCALIZED_SEO_DATA['/ja/boom2'];
LOCALIZED_SEO_DATA['/boom/fr'] = LOCALIZED_SEO_DATA['/fr/boom2'];
LOCALIZED_SEO_DATA['/boom/pt'] = LOCALIZED_SEO_DATA['/pt/boom2'];
LOCALIZED_SEO_DATA['/boom/es'] = LOCALIZED_SEO_DATA['/es/boom2'];
LOCALIZED_SEO_DATA['/boom/zh-cn'] = LOCALIZED_SEO_DATA['/zh/boom2'];
LOCALIZED_SEO_DATA['/boom/zh-tw'] = {
  ...LOCALIZED_SEO_DATA['/zh/boom2'],
  title: 'Boom 2：適用於 Mac 的全系統立體聲音效增強與音量放大工具',
  description: 'Boom 2 是一款適用於 Mac 全系統的音量增強與等化器應用程式。無論使用何種耳機，您都能在觀看電影、聆聽音樂和遊玩遊戲時，體驗到極為出色的立體聲音效，全面提升您的音訊聽覺享受。',
  canonicalUrl: 'https://www.globaldelight.com/boom/zh-tw/',
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

  // Exact localized match first, otherwise fallback to base English lookup
  const seo = LOCALIZED_SEO_DATA[route] || SEO_DATA[lookup];
  if (!seo) return;

  const original = html;
  const esc = (s) => (s ? s.replace(/"/g, '&quot;') : '');
  const canonicalUrl = seo.canonicalUrl || (domain + route);
  const imgUrl = seo.ogImage ? (seo.ogImage.startsWith('http') ? seo.ogImage : domain + seo.ogImage) : CLOUD_OG;

  // Title
  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(seo.title)}</title>`);

  // Meta Description
  if (html.includes('name="description"')) {
    html = html.replace(/<meta[^>]*name="description"[^>]*>/, `<meta name="description" content="${esc(seo.description)}" data-rh="true">`);
  } else {
    html = html.replace('</title>', `</title>\n    <meta name="description" content="${esc(seo.description)}" data-rh="true">`);
  }

  // Robots
  const robotsMeta = `<meta content="${seo.robots || 'index, follow'}" name="robots">`;
  if (html.includes('name="robots"')) {
    html = html.replace(/<meta[^>]*name="robots"[^>]*>/, robotsMeta);
  } else {
    html = html.replace('</title>', `</title>\n    ${robotsMeta}`);
  }

  // Canonical
  const canonicalTag = `<link rel="canonical" href="${canonicalUrl}" data-rh="true">`;
  if (html.includes('rel="canonical"')) {
    html = html.replace(/<link[^>]*rel="canonical"[^>]*>/, canonicalTag);
  } else {
    html = html.replace('</title>', `</title>\n    ${canonicalTag}`);
  }

  // Hreflang Tags (Alternate language links)
  if (seo.hreflangs && seo.hreflangs.length > 0) {
    // Remove existing hreflang tags if any to prevent duplicates
    html = html.replace(/<link[^>]*rel="alternate"[^>]*hreflang=[^>]*>\s*/gi, '');
    const hreflangBlock = seo.hreflangs
      .map((h) => `<link rel="alternate" href="${h.href}" hreflang="${h.hreflang}">`)
      .join('\n    ');
    html = html.replace('</title>', `</title>\n    ${hreflangBlock}`);
  }

  // Keywords
  if (seo.keywords) {
    if (html.includes('name="keywords"')) {
      html = html.replace(/<meta[^>]*name="keywords"[^>]*>/, `<meta name="keywords" content="${esc(seo.keywords)}" data-rh="true">`);
    } else {
      html = html.replace('</title>', `</title>\n    <meta name="keywords" content="${esc(seo.keywords)}" data-rh="true">`);
    }
  }

  // og:title
  if (html.includes('property="og:title"')) {
    html = html.replace(/<meta[^>]*property="og:title"[^>]*>/, `<meta property="og:title" content="${esc(seo.title)}" data-rh="true">`);
  } else {
    html = html.replace('</title>', `</title>\n    <meta property="og:title" content="${esc(seo.title)}" data-rh="true">`);
  }

  // og:description
  if (html.includes('property="og:description"')) {
    html = html.replace(/<meta[^>]*property="og:description"[^>]*>/, `<meta property="og:description" content="${esc(seo.description)}" data-rh="true">`);
  } else {
    html = html.replace('</title>', `</title>\n    <meta property="og:description" content="${esc(seo.description)}" data-rh="true">`);
  }

  // og:image
  if (html.includes('property="og:image"')) {
    html = html.replace(/<meta[^>]*property="og:image"[^>]*>/, `<meta property="og:image" content="${imgUrl}" data-rh="true">`);
  } else {
    html = html.replace('</title>', `</title>\n    <meta property="og:image" content="${imgUrl}" data-rh="true">`);
  }

  // og:url
  if (html.includes('property="og:url"')) {
    html = html.replace(/<meta[^>]*property="og:url"[^>]*>/, `<meta property="og:url" content="${canonicalUrl}" data-rh="true">`);
  } else {
    html = html.replace('</title>', `</title>\n    <meta property="og:url" content="${canonicalUrl}" data-rh="true">`);
  }

  // thumbnail
  html = html.replace(/<meta[^>]*name="thumbnail"[^>]*>/, `<meta name="thumbnail" content="${imgUrl}" data-rh="true">`);

  // twitter:title/description/image/url
  html = html.replace(/<meta[^>]*name="twitter:title"[^>]*>/, `<meta name="twitter:title" content="${esc(seo.title)}" data-rh="true">`);
  html = html.replace(/<meta[^>]*name="twitter:description"[^>]*>/, `<meta name="twitter:description" content="${esc(seo.description)}" data-rh="true">`);
  html = html.replace(/<meta[^>]*name="twitter:image"[^>]*>/, `<meta name="twitter:image" content="${imgUrl}" data-rh="true">`);
  html = html.replace(/<meta[^>]*name="twitter:url"[^>]*>/, `<meta name="twitter:url" content="${canonicalUrl}" data-rh="true">`);

  // subject
  if (seo.title) {
    if (html.includes('name="subject"')) {
      html = html.replace(/<meta[^>]*name="subject"[^>]*>/, `<meta name="subject" content="${esc(seo.title)}" data-rh="true">`);
    } else {
      html = html.replace('</title>', `</title>\n    <meta name="subject" content="${esc(seo.title)}" data-rh="true">`);
    }
  }
  // 1. Purge any staging domain
  if (html.includes('gdpl-six.vercel.app')) {
    html = html.replaceAll('https://gdpl-six.vercel.app/', 'https://www.globaldelight.com/');
    html = html.replaceAll('https://gdpl-six.vercel.app', 'https://www.globaldelight.com');
    html = html.replaceAll('gdpl-six.vercel.app', 'www.globaldelight.com');
  }
  // 2. Replace CloudFront logo/images
  if (html.includes('https://d3jbf8nvvpx3fh.cloudfront.net/home/_resource/_img/website/2015/GDTPL_logo_.png')) {
    html = html.replaceAll('https://d3jbf8nvvpx3fh.cloudfront.net/home/_resource/_img/website/2015/GDTPL_logo_.png', '/images/external/img_54825efe2640.png');
  }
  if (html.includes('https://d3jbf8nvvpx3fh.cloudfront.net/Boom3D-Web/OGImages/Global-Delight.jpg')) {
    html = html.replaceAll('https://d3jbf8nvvpx3fh.cloudfront.net/Boom3D-Web/OGImages/Global-Delight.jpg', '/images/external/img_e76f765673cb.jpg');
  }
  // 3. Inject H1 on homepages
  const isHomepage = rel === 'index.html' || /^(de|it|ja|fr|pt|es|zh)\/index\.html$/.test(rel);
  if (isHomepage && !html.includes('<h1')) {
    html = html.replace(
      /(<main[^>]*>)/i,
      `$1<h1 class="sr-only">Global Delight — Award-Winning Audio, Video & Photography Apps</h1>`
    );
  }
  // 4. Consolidate @graph schema on homepages
  if (isHomepage && html.includes('"@type": "Organization"') && !html.includes('"@graph"')) {
    const graphSchema = `<script type="application/ld+json" data-rh="true">{"@context":"https://schema.org","@graph":[{"@type":"Organization","@id":"https://www.globaldelight.com/#organization","name":"Global Delight","url":"https://www.globaldelight.com","logo":"https://www.globaldelight.com/images/external/img_54825efe2640.png","contactPoint":{"@type":"ContactPoint","contactType":"customer service","availableLanguage":["English"]},"sameAs":["https://www.facebook.com/GlobalDelight","https://twitter.com/GlobalDelight","https://www.linkedin.com/company/global-delight/","https://www.youtube.com/channel/UCLjiPwteYQLEmIzDs4xmyTw","https://www.instagram.com/globaldelight"]},{"@type":"WebSite","@id":"https://www.globaldelight.com/#website","name":"Global Delight","url":"https://www.globaldelight.com","publisher":{"@id":"https://www.globaldelight.com/#organization"}},{"@type":"WebPage","@id":"https://www.globaldelight.com/#webpage","url":"https://www.globaldelight.com/","name":"Global Delight | Boom 3D, Capto, Vizmato & Camera Plus Pro Apps","description":"Global Delight builds award-winning audio, video, and photography apps — Boom 3D volume booster & equalizer, Capto screen recorder, Vizmato video editor, and Camera Plus Pro for Mac, Windows, iOS & Android.","inLanguage":"en","isPartOf":{"@id":"https://www.globaldelight.com/#website"},"about":{"@id":"https://www.globaldelight.com/#organization"}}]}</script>`;
    html = html.replace(/<script type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>\s*<script type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>\s*<script type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>/i, graphSchema);
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

// Sync sitemap and robots into dist
const pubSitemap = path.resolve(__dirname, '../public/sitemap.xml');
const distSitemap = path.resolve(distDir, 'sitemap.xml');
const pubRobots = path.resolve(__dirname, '../public/robots.txt');
const distRobots = path.resolve(distDir, 'robots.txt');
if (fs.existsSync(pubSitemap)) fs.copyFileSync(pubSitemap, distSitemap);
if (fs.existsSync(pubRobots)) fs.copyFileSync(pubRobots, distRobots);

console.log(`✅ Patched per-page SEO for ${count} HTML files (view source now page-connected).`);
console.log(`✅ Synchronized sitemap.xml and robots.txt to dist/`);
