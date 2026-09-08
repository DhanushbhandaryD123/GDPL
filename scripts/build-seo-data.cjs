const fs = require('fs');
const path = require('path');

const domain = 'https://www.globaldelight.com';
const CLOUD_OG = '/images/external/img_e76f765673cb.jpg';

const BOOM_USER_HREFLANGS = [
  { hreflang: 'de', href: 'https://www.globaldelight.com/boom/de/' },
  { hreflang: 'it', href: 'https://www.globaldelight.com/boom/it/' },
  { hreflang: 'ja', href: 'https://www.globaldelight.com/boom/ja/' },
  { hreflang: 'fr', href: 'https://www.globaldelight.com/boom/fr/' },
  { hreflang: 'pt', href: 'https://www.globaldelight.com/boom/pt/' },
  { hreflang: 'es', href: 'https://www.globaldelight.com/boom/es/' },
  { hreflang: 'zh-cn', href: 'https://www.globaldelight.com/boom/zh-cn/' },
  { hreflang: 'zh-tw', href: 'https://www.globaldelight.com/boom/zh-tw/' },
];

function makeStandardHreflangs(basePath) {
  const p = basePath === '/' ? '' : basePath;
  return [
    { hreflang: 'x-default', href: `${domain}${p || '/'}` },
    { hreflang: 'en', href: `${domain}${p || '/'}` },
    { hreflang: 'de', href: `${domain}/de${p}` },
    { hreflang: 'it', href: `${domain}/it${p}` },
    { hreflang: 'ja', href: `${domain}/ja${p}` },
    { hreflang: 'fr', href: `${domain}/fr${p}` },
    { hreflang: 'pt', href: `${domain}/pt${p}` },
    { hreflang: 'es', href: `${domain}/es${p}` },
    { hreflang: 'zh', href: `${domain}/zh${p}` },
  ];
}

// Master dictionary of translations per base route
const MASTER_SEO_TRANSLATIONS = {
  '/': {
    ogImage: CLOUD_OG,
    en: {
      title: 'Global Delight | Boom 3D, Capto, Vizmato & Camera Plus Pro Apps',
      description: 'Global Delight builds award-winning audio, video, and photography apps — Boom 3D volume booster & equalizer, Capto screen recorder, Vizmato video editor, and Camera Plus Pro for Mac, Windows, iOS & Android.',
      keywords: 'Global Delight, Boom 3D, volume booster, Mac equalizer, 3D surround sound, Capto, screen recorder, screenshot tool, Vizmato, video editor app, Camera Plus Pro, iPhone camera app, AuDimix, vocal remover, AudiOn, voice recorder app, bass booster, speaker booster, amplifier'
    },
    de: {
      title: 'Global Delight | Preisgekrönte Audio-, Video- & Foto-Apps für Mac & PC',
      description: 'Global Delight entwickelt preisgekrönte Apps für Mac, Windows, iOS & Android – Boom 3D Lautstärke-Booster, Capto Bildschirmrekorder, Vizmato Video-Editor und mehr.',
      keywords: 'Global Delight, Boom 3D, Lautstärkebooster, Mac Equalizer, 3D Surround Sound, Capto, Bildschirmrekorder, Vizmato, Audio-Apps'
    },
    it: {
      title: 'Global Delight | App premiate per audio, video e fotografia per Mac e PC',
      description: 'Global Delight crea app pluripremiate per Mac, Windows, iOS e Android: potenziatore audio Boom 3D, registratore schermo Capto, editor video Vizmato e altro.',
      keywords: 'Global Delight, Boom 3D, booster volume, equalizzatore Mac, suono surround 3D, Capto, registrazione schermo, Vizmato'
    },
    ja: {
      title: 'Global Delight | Mac・Windows・iOS対応の受賞歴あるオーディオ・動画・写真アプリ',
      description: 'Global Delightは世界中で数々の賞を受賞したアプリを開発しています。3D音響イコライザーBoom 3D、画面録画Capto、動画編集Vizmato、高機能カメラアプリなど。',
      keywords: 'Global Delight, Boom 3D, 音量ブースター, Mac イコライザー, 3Dサラウンド, Capto, 画面録画, Vizmato, 動画編集'
    },
    fr: {
      title: 'Global Delight | Applications primées d\'audio, vidéo et photo pour Mac et PC',
      description: 'Global Delight conçoit des applications primées pour Mac, Windows, iOS et Android : amplificateur Boom 3D, enregistreur Capto, éditeur vidéo Vizmato et plus.',
      keywords: 'Global Delight, Boom 3D, amplificateur de volume, égaliseur Mac, son surround 3D, Capto, enregistreur d\'écran, Vizmato'
    },
    pt: {
      title: 'Global Delight | Aplicativos premiados de áudio, vídeo e fotografia',
      description: 'A Global Delight desenvolve aplicativos premiados para Mac, Windows, iOS e Android: equalizador Boom 3D, gravador de tela Capto, editor de vídeo Vizmato e mais.',
      keywords: 'Global Delight, Boom 3D, aumento de volume, equalizador Mac, som surround 3D, Capto, gravador de tela, Vizmato'
    },
    es: {
      title: 'Global Delight | Aplicaciones galardonadas de audio, video y fotografía',
      description: 'Global Delight crea aplicaciones galardonadas para Mac, Windows, iOS e Android: amplificador de sonido Boom 3D, grabador de pantalla Capto, editor Vizmato y más.',
      keywords: 'Global Delight, Boom 3D, amplificador de volumen, ecualizador Mac, sonido envolvente 3D, Capto, grabador de pantalla, Vizmato'
    },
    zh: {
      title: 'Global Delight | 屡获殊荣的音频、视频与摄影应用',
      description: 'Global Delight 为 Mac、Windows、iOS 和 Android 开发屡获殊荣的应用程序——Boom 3D 音量增强器与均衡器、Capto 屏幕录制、Vizmato 视频编辑等。',
      keywords: 'Global Delight, Boom 3D, 音量增强器, Mac 均衡器, 3D 环绕声, Capto, 屏幕录制, 截图工具, Vizmato, 视频剪辑'
    }
  },

  '/boom2': {
    ogImage: '/apps/Boom2-mac.jpeg',
    en: {
      title: 'Boom 2 | Powerful Audio Enhancement for Mac',
      description: 'Boom 2 is an award-winning pro audio enhancement app for macOS with 31-band equalizer, volume booster, audio effects, and Boom Remote — system-wide sound that fills every room.',
      keywords: 'Boom 2, Boom 2 Mac, 31 band equalizer, volume booster Mac, audio effects Mac, Boom Remote, Global Delight Boom 2'
    },
    de: {
      title: 'Boom 2: Leistungsstarker Stereo-Sound-Verbesserer für Mac',
      description: 'Boom 2 ist ein Lautstärke-Booster und Equalizer für den Mac. Genieße Filme, Musik und Spiele systemweit mit bestem Stereo-Sound über jeden Kopfhörer.',
      canonicalUrl: 'https://www.globaldelight.com/boom/de/',
      keywords: 'Boom 2, Mac Stereo-Sound-Verbesserer, Lautstärke-Booster, Equalizer Mac'
    },
    it: {
      title: 'Boom 2: Potenziatore del suono stereo per Mac',
      description: "Boom 2 è un'app di equalizzazione e amplificazione audio di sistema per Mac. Goditi film, musica e giochi con il miglior suono stereo su QUALSIASI cuffia.",
      canonicalUrl: 'https://www.globaldelight.com/boom/it/',
      keywords: 'Boom 2, potenziatore suono stereo Mac, equalizzazione audio, amplificazione'
    },
    ja: {
      title: 'Boom 2：Macのサウンドを劇的に向上させるステレオ音質向上アプリ',
      description: 'Boom 2はMac全体で使える音量増幅・イコライザーアプリです。どんなヘッドホンでも最高のステレオサウンドで、映画や音楽、ゲームを楽しめます。',
      canonicalUrl: 'https://www.globaldelight.com/boom/ja/',
      keywords: 'Boom 2, Mac サウンド 音質向上, 音量増幅, イコライザーアプリ'
    },
    fr: {
      title: 'Boom 2 : Améliorateur de son stéréophonique pour Mac',
      description: "Boom 2 est un égaliseur et amplificateur de son global sur Mac. Profitez de vos films, musiques et jeux avec le meilleur son stéréo sur N'IMPORTE QUEL casque.",
      canonicalUrl: 'https://www.globaldelight.com/boom/fr/',
      keywords: 'Boom 2, améliorateur de son stéréophonique Mac, égaliseur, amplificateur'
    },
    pt: {
      title: 'Boom 2: Aprimorador de Som Estéreo para o seu Mac',
      description: 'O Boom 2 é um app de equalização e aumento de volume para todo o Mac. Aproveite filmes, músicas e jogos com o melhor som estéreo em QUALQUER fone de ouvido.',
      canonicalUrl: 'https://www.globaldelight.com/boom/pt/',
      keywords: 'Boom 2, aprimorador de som estéreo Mac, equalização, aumento de volume'
    },
    es: {
      title: 'Boom 2: Potenciador de sonido estéreo para tu Mac',
      description: 'Boom 2 es un ecualizador y amplificador de volumen para todo el sistema Mac. Disfruta películas, música y juegos con el mejor sonido estéreo en CUALQUIER auricular.',
      canonicalUrl: 'https://www.globaldelight.com/boom/es/',
      keywords: 'Boom 2, potenciador de sonido estéreo Mac, ecualizador, amplificador volumen'
    },
    zh: {
      title: 'Boom 2：适用于 Mac 的全系统立体声音效增强与音量放大工具',
      description: 'Boom 2 是一款适用于 Mac 全系统的音量增强与均衡器应用。无论使用何种耳机，您都能在观看电影、聆听音乐和游玩游戏时，体验到极为出色的立体声音效，全面提升您的音频听觉享受。',
      canonicalUrl: 'https://www.globaldelight.com/boom/zh-cn/',
      keywords: 'Boom 2, Mac 全系统立体声增强, 音量放大工具, 均衡器'
    }
  },

  '/boom3D': {
    ogImage: '/apps/Boom3D-mac.jpeg',
    en: {
      title: 'Boom 3D | Magical 3D Surround Sound for Mac & Windows',
      description: 'Boom 3D is a system-wide volume booster and equalizer for Mac and Windows that delivers immersive 3D Surround Sound without special headphones — 31-band EQ, presets, and per-app control.',
      keywords: 'Boom 3D, Boom 3D Mac, Boom 3D Windows, 3D surround sound, volume booster, 31 band equalizer, Mac Windows audio enhancer, Global Delight Boom 3D'
    },
    de: {
      title: 'Beste Lautstärke-Booster- und Equalizer-App für Mac & Windows',
      description: 'Steigern Sie Ihre Audioqualität mit Boom 3D, der leistungsstarken Lautstärkebooster- und Equalizer-App für Mac und Windows. Genießen Sie satten Klang.',
      canonicalUrl: 'https://www.globaldelight.com/boom/de/',
      keywords: 'Boom 3D, Lautstärkebooster- und Equalizer-App Mac Windows, Audioqualität'
    },
    it: {
      title: 'Migliore booster volume ed equalizzatore per Mac e Windows',
      description: 'Migliora l’audio con Boom 3D, la potente app per aumentare il volume e usare l’equalizzatore su Mac e Windows. Goditi un suono ricco e coinvolgente.',
      canonicalUrl: 'https://www.globaldelight.com/boom/it/',
      keywords: 'Boom 3D, booster volume equalizzatore Mac Windows, suono ricco coinvolgente'
    },
    ja: {
      title: 'MacとWindows対応のおすすめ音量ブースター＆イコライザーアプリで音質を向上',
      description: 'MacとWindows向けの強力な音量ブースター＆イコライザーアプリ、Boom 3Dでオーディオ品質をさらに高めましょう。音量を自在に調整し、豊かでクリア、臨場感あふれるサウンドをいつでも楽しめます。音楽、映画、ゲームなど、あらゆるコンテンツの音をよりパワフルに体験でき、毎日のリスニングがもっと楽しくなります。',
      canonicalUrl: 'https://www.globaldelight.com/boom/ja/',
      keywords: 'Boom 3D, Mac Windows 音量ブースター イコライザーアプリ 音質向上, サラウンド'
    },
    fr: {
      title: 'Meilleur booster de volume et égaliseur pour Mac et PC',
      description: 'Améliorez la qualité audio avec Boom 3D, l’app puissante d’amplification du volume et d’égalisation pour Mac et Windows. Profitez d’un son riche et immersif.',
      canonicalUrl: 'https://www.globaldelight.com/boom/fr/',
      keywords: 'Boom 3D, meilleur booster de volume et égaliseur Mac PC, son immersif'
    },
    pt: {
      title: 'Melhor booster de volume e equalizador para Mac e PC',
      description: 'Melhore sua qualidade de áudio com o Boom 3D, o potente app de aumento de volume e equalizador para Mac e Windows. Desfrute de um som rico e imersivo.',
      canonicalUrl: 'https://www.globaldelight.com/boom/pt/',
      keywords: 'Boom 3D, booster de volume equalizador Mac PC, som rico imersivo'
    },
    es: {
      title: 'La mejor app de aumento de volumen y ecualizador para Mac y Windows',
      description: 'Mejora la calidad de tu audio con Boom 3D, la potente app de amplificación de volumen y ecualizador para Mac y Windows. Disfruta un sonido rico e inmersivo.',
      canonicalUrl: 'https://www.globaldelight.com/boom/es/',
      keywords: 'Boom 3D, app aumento de volumen ecualizador Mac Windows, sonido rico e inmersivo'
    },
    zh: {
      title: '适用于 Mac 和 Windows 的最佳音量增强器和均衡器应用',
      description: '使用 Boom 3D 提升音频质量，这款强大的 Mac 和 Windows 音量增强器与均衡器应用，可让声音更丰富、更清晰、更具沉浸感，尽享震撼聆听体验。',
      canonicalUrl: 'https://www.globaldelight.com/boom/zh-cn/',
      keywords: 'Boom 3D, Mac Windows 最佳音量增强器 均衡器应用, 震撼聆听体验'
    }
  },

  '/boom': {
    ogImage: '/apps/Boom2-mac.jpeg',
    en: {
      title: 'Boom | Feel Your Music in 3D Surround Sound | Mac Audio Equalizer',
      description: 'Boom is Global Delight\'s award-winning audio family for Mac, Windows, iOS and Android — featuring 3D surround sound, advanced equalizers, and a powerful volume booster for movies, music and games.',
      keywords: 'Boom, volume booster, Mac audio equalizer, 3D surround sound, sound enhancer, bass booster, audio booster app, system-wide equalizer'
    },
    de: {
      title: 'Boom | 3D-Surround-Sound & Equalizer für Mac & PC',
      description: 'Erleben Sie Filme, Musik und Spiele in 3D-Surround-Sound mit der preisgekrönten Boom Audio-Serie für Mac, Windows, iOS und Android.',
      keywords: 'Boom, Mac Audio Equalizer, 3D Surround, Lautstärkebooster, Bass Booster'
    },
    it: {
      title: 'Boom | Audio surround 3D ed equalizzatore per Mac e PC',
      description: 'Vivi musica, film e giochi con il suono surround 3D immersivo della suite audio Boom per Mac, Windows, iOS e Android.',
      keywords: 'Boom, equalizzatore Mac, surround 3D, booster volume, bass booster'
    },
    ja: {
      title: 'Boom | 映画館のような3Dサラウンドサウンド＆Mac・PC向けイコライザー',
      description: 'Mac、Windows、iOS、Androidに対応したBoomシリーズ。迫力の3Dサラウンド音響、高性能イコライザー、音量ブーストで音楽や映画を最高品質に。',
      keywords: 'Boom, Mac 音質向上, 3Dサラウンド, イコライザー, 音量増幅, 重低音'
    },
    fr: {
      title: 'Boom | Son surround 3D et égaliseur audio pour Mac et PC',
      description: 'Profitez de vos films, musiques et jeux avec la technologie surround 3D de Boom pour Mac, Windows, iOS et Android.',
      keywords: 'Boom, égaliseur Mac, son surround 3D, booster de volume, basses puissantes'
    },
    pt: {
      title: 'Boom | Som surround 3D e equalizador de áudio para Mac e PC',
      description: 'Sinta sua música em som surround 3D imersivo com os aplicativos Boom para Mac, Windows, iOS e Android.',
      keywords: 'Boom, equalizador áudio Mac, som surround 3D, booster de volume'
    },
    es: {
      title: 'Boom | Sonido envolvente 3D y ecualizador para Mac y PC',
      description: 'Disfruta películas, música y juegos con el impresionante sonido surround 3D de Boom para Mac, Windows, iOS y Android.',
      keywords: 'Boom, ecualizador Mac, sonido envolvente 3D, amplificador volumen'
    },
    zh: {
      title: 'Boom | 在 3D 环绕声中畅享音乐与震撼视听',
      description: 'Boom 是 Global Delight 屡获殊荣的音频系列，适用于 Mac、Windows、iOS 和 Android，带来沉浸式 3D 环绕音效、专业级均衡器与全局音量放大。',
      keywords: 'Boom, Mac 音频均衡器, 3D 环绕声, 音量放大器, 低音增强, 环绕音效'
    }
  },

  '/capto': {
    ogImage: '/apps/Capto-mac.jpeg',
    en: {
      title: 'Capto | Screenshots, Screen Recording & Video Editing for Mac',
      description: 'Capto makes visual storytelling effortless on Mac — capture fullscreen or selected areas, record at 60 FPS with dual audio, edit images/video, and share to YouTube, Dropbox, Evernote in one click.',
      keywords: 'Capto, Capto Mac, screen recorder Mac, screenshot Mac, video editor Mac, screen capture Mac, Global Delight Capto, Mac screen recording'
    },
    de: {
      title: 'Capto | Screenshots, Bildschirmaufnahme & Videobearbeitung für Mac',
      description: 'Capto macht visuelles Storytelling auf dem Mac mühelos: Vollbild- oder Bereichsaufnahmen, 60 FPS Videoaufnahme mit Dual-Audio, Bild- und Videobearbeitung und 1-Klick-Export.',
      keywords: 'Capto, Capto Mac, Bildschirmaufnahme Mac, Screenshot Mac, Video-Editor Mac, Mac Bildschirmrekorder'
    },
    it: {
      title: 'Capto | Screenshot, registrazione schermo ed editing video per Mac',
      description: 'Capto semplifica lo storytelling visivo su Mac: cattura a schermo intero, registrazione a 60 FPS con doppio audio, modifica immagini e video e condivisione rapida.',
      keywords: 'Capto, Capto Mac, registratore schermo Mac, screenshot Mac, editor video Mac'
    },
    ja: {
      title: 'Capto | Mac向け画面キャプチャ・画面録画・動画編集ソフト',
      description: 'CaptoはMacでのビジュアルストーリーテリングを快適にします。全画面や指定範囲のキャプチャ、60FPS画面録画、デュアルオーディオ、画像・動画編集に対応。',
      keywords: 'Capto, Capto Mac, 画面キャプチャ, 画面録画 Mac, 動画編集 Mac, スクリーンレコーダー'
    },
    fr: {
      title: 'Capto | Captures d\'écran, enregistrement d\'écran et montage vidéo sur Mac',
      description: 'Capto facilite la communication visuelle sur Mac : capture d\'écran précise, enregistrement 60 IPS avec double audio, retouche d\'images et montage vidéo.',
      keywords: 'Capto, Capto Mac, enregistreur écran Mac, capture écran Mac, éditeur vidéo Mac'
    },
    pt: {
      title: 'Capto | Capturas de tela, gravação de tela e edição de vídeo para Mac',
      description: 'O Capto torna a narrativa visual intuitiva no Mac: capture a tela, grave em 60 FPS com áudio duplo, edite imagens e vídeos e compartilhe em um clique.',
      keywords: 'Capto, Capto Mac, gravador de tela Mac, captura de tela Mac, editor de vídeo Mac'
    },
    es: {
      title: 'Capto | Capturas de pantalla, grabación y edición de video para Mac',
      description: 'Capto simplifica la creación de contenidos en Mac: captura de pantalla completa o por zonas, grabación a 60 FPS con audio dual, edición de video y exportación.',
      keywords: 'Capto, Capto Mac, grabador de pantalla Mac, captura de pantalla Mac, editor video Mac'
    },
    zh: {
      title: 'Capto | 适用于 Mac 的高清屏幕截图、录屏与视频编辑工具',
      description: 'Capto 让 Mac 上的视觉创作轻松自如：全屏与选区高清截图、60 FPS 双音频流畅录屏、强大的图片与视频剪辑，以及一键分享至各类平台。',
      keywords: 'Capto, Capto Mac, Mac 录屏软件, Mac 截屏工具, 屏幕录制, 视频剪辑, 标注工具'
    }
  },

  '/capto/windows': {
    ogImage: '/apps/Capto-window.jpeg',
    en: {
      title: 'Capto for Windows | All-in-One Screenshots & Screen Recording',
      description: 'Capto for Windows offers robust screenshots & screen recording on Windows 10/11 — 4K 60 FPS capture, webcam, OCR text capture, image/video editing, and direct sharing to YouTube/Drive.',
      keywords: 'Capto Windows, screen recorder Windows, screenshot Windows, Windows 10 screen capture, 4K screen recording, Capto for Windows 10 11'
    },
    de: {
      title: 'Capto für Windows | 4K-Bildschirmaufnahme & Screenshot-Tool für PC',
      description: 'Capto für Windows 10/11 bietet 4K 60 FPS Bildschirmaufnahmen, Webcam-Integration, OCR-Texterkennung, Bild-/Videobearbeitung und direkten Export.',
      keywords: 'Capto Windows, Bildschirmaufnahme PC, Screenshot Windows, 4K Bildschirmaufnahme, OCR Texterkennung'
    },
    it: {
      title: 'Capto per Windows | Registratore dello schermo e screenshot per PC',
      description: 'Capto per Windows offre registrazione schermo in 4K a 60 FPS, webcam, OCR per estrazione testo, editing video e condivisione su Windows 10/11.',
      keywords: 'Capto Windows, registratore schermo Windows, screenshot PC, cattura 4K'
    },
    ja: {
      title: 'Capto for Windows | 4K画面録画・高機能スクリーンショットアプリ',
      description: 'Windows 10/11対応のCapto。4K 60FPS録画、Webカメラ合成、OCR文字認識、画像・動画編集、クラウド共有をこれ1本で。',
      keywords: 'Capto Windows, 画面録画 Windows, スクリーンショット PC, 4K 録画, OCR 文字起こし'
    },
    fr: {
      title: 'Capto pour Windows | Enregistrement d\'écran 4K et captures pour PC',
      description: 'Capto pour Windows 10/11 : capture d\'écran 4K à 60 IPS, webcam, extraction de texte OCR, retouche d\'images et montage vidéo tout-en-un.',
      keywords: 'Capto Windows, enregistreur écran Windows, capture écran PC, enregistrement 4K'
    },
    pt: {
      title: 'Capto para Windows | Gravação de tela 4K e capturas para PC',
      description: 'O Capto para Windows 10/11 oferece gravação 4K a 60 FPS, webcam, OCR de texto, edição de imagem e vídeo e compartilhamento para YouTube/Drive.',
      keywords: 'Capto Windows, gravador de tela Windows, captura tela PC, gravação 4K'
    },
    es: {
      title: 'Capto para Windows | Grabación de pantalla 4K y capturas para PC',
      description: 'Capto para Windows 10/11: captura 4K a 60 FPS, grabación de webcam, OCR de texto, edición de video e imágenes y exportación directa.',
      keywords: 'Capto Windows, grabador pantalla Windows, capturas PC, grabación 4K'
    },
    zh: {
      title: 'Capto for Windows | 适用于 PC 的 4K 屏幕录制与智能截图工具',
      description: '适用于 Windows 10/11 的 Capto：支持 4K 60 FPS 高清录屏、画中画摄像头录制、OCR 文字识别提取、音视频剪辑及一键快速导出。',
      keywords: 'Capto Windows, Windows 录屏软件, PC 截屏, 4K 录屏, OCR 文字提取, 录屏编辑'
    }
  },

  '/capto/educators': {
    ogImage: '/apps/Capto-mac.jpeg',
    en: {
      title: 'Capto for Educators | Tutorial Video Making App for Education',
      description: 'Capto helps teachers and institutions create engaging tutorials, power easy e-learning, and grade assignments faster — with screen recording and simple arrow, spotlight, and text annotations.',
      keywords: 'Capto for educators, tutorial video maker, e-learning screen recorder, education screen capture, annotate video for teaching, Capto education pricing'
    },
    de: {
      title: 'Capto für Lehrkräfte | Tutorial-Erstellung & E-Learning Tool',
      description: 'Capto unterstützt Lehrkräfte und Dozenten beim Erstellen interaktiver Tutorials und Lernvideos mit Bildschirmaufnahme und intuitiven Anmerkungen.',
      keywords: 'Capto für Lehrkräfte, Tutorial Erstellung, E-Learning Bildschirmaufnahme, Bildung Video-Editor'
    },
    it: {
      title: 'Capto per Educatori | Crea video tutorial per la didattica online',
      description: 'Capto aiuta docenti e formatori a creare video lezioni coinvolgenti con registrazione schermo, evidenziazioni e annotazioni intuitive.',
      keywords: 'Capto per educatori, didattica online, video tutorial, registrazione lezioni'
    },
    ja: {
      title: '教育関係者向けCapto | オンライン授業・解説動画作成ソフトウェア',
      description: '教師や教育機関向けに設計されたCapto。画面録画、スポットライト、矢印やテキスト注釈で分かりやすい授業動画やチュートリアルを作成。',
      keywords: 'Capto 教育, オンライン授業 録画, 解説動画 作成, 授業動画 編集, eラーニング'
    },
    fr: {
      title: 'Capto pour les Enseignants | Création de tutoriels et e-learning',
      description: 'Capto aide les enseignants à concevoir des tutoriels attrayants pour l\'apprentissage en ligne grâce à l\'enregistrement d\'écran et aux annotations.',
      keywords: 'Capto enseignants, tutoriel vidéo, e-learning enregistreur écran, cours en ligne'
    },
    pt: {
      title: 'Capto para Educadores | Criação de videoaulas e tutoriais para ensino',
      description: 'O Capto ajuda professores e escolas a criar videoaulas e tutoriais interativos com gravação de tela e anotações visuais.',
      keywords: 'Capto para educadores, gravação de videoaulas, tutoriais educativos, e-learning'
    },
    es: {
      title: 'Capto para Educadores | Creación de videos tutoriales para educación',
      description: 'Capto permite a profesores y centros educativos crear lecciones en video interactivas con grabación de pantalla y anotaciones pedagógicas.',
      keywords: 'Capto para educadores, tutoriales educativos, lecciones en video, e-learning'
    },
    zh: {
      title: 'Capto 教师专享版 | 专为教育工作者打造的教学微课与教程录制工具',
      description: 'Capto 帮助教育工作者轻松录制高品质教学课件、微课视频，提供聚光灯、箭头与标注工具，加速在线教学与课后反馈。',
      keywords: 'Capto 教育版, 微课录制, 教学视频录制, 网课屏幕录制, 教学标注, 在线教育软件'
    }
  },

  '/audion': {
    ogImage: '/apps/AudiOn-ios.jpeg',
    en: {
      title: 'AudiOn | Advanced Voice Recorder & Audio Editor for Mobile',
      description: 'AudiOn is the cutting-edge voice recorder for iPhone & Android — studio-quality WAV, 200% mic boost, noise removal, teleprompter, timestamp markers, and speech-to-text transcription.',
      keywords: 'AudiOn, AudiOn app, voice recorder app, audio editor mobile, voice recorder iOS Android, transcription app, Global Delight AudiOn'
    },
    de: {
      title: 'AudiOn | Sprachrekorder & Audio-Editor für iPhone und Android',
      description: 'AudiOn ist der hochmoderne Sprachrekorder für Profis und Kreative: Studioqualität in WAV, 200% Mikrofon-Verstärkung, Rauschunterdrückung und Transkription.',
      keywords: 'AudiOn, Sprachrekorder App, Audio Editor Mobil, Rauschunterdrückung, Sprachaufnahme'
    },
    it: {
      title: 'AudiOn | Registratore vocale ed editor audio per iPhone e Android',
      description: 'AudiOn è l\'app di registrazione vocale avanzata: audio studio WAV, amplificazione microfono al 200%, rimozione del rumore e trascrizione automatica.',
      keywords: 'AudiOn, registratore vocale, editor audio smartphone, trascrizione vocale, rimozione rumore'
    },
    ja: {
      title: 'AudiOn | iPhone・Android対応の高品質ボイスレコーダー＆音声編集アプリ',
      description: 'AudiOnはプロフェッショナルな音声レコーダーアプリです。スタジオ品質のWAV録音、マイク音量ブースト、ノイズ除去、タイムスタンプ、文字起こしを搭載。',
      keywords: 'AudiOn, ボイスレコーダー アプリ, 音声録音 iPhone, ノイズ除去 録音, 音声文字起こし'
    },
    fr: {
      title: 'AudiOn | Enregistreur vocal haute fidélité et éditeur audio mobile',
      description: 'AudiOn transforme votre smartphone en studio d\'enregistrement : format WAV haute qualité, boost micro 200%, suppression du bruit et transcription.',
      keywords: 'AudiOn, enregistreur vocal, éditeur audio mobile, suppression de bruit, transcription vocale'
    },
    pt: {
      title: 'AudiOn | Gravador de voz e editor de áudio para iPhone e Android',
      description: 'O AudiOn oferece gravação com qualidade de estúdio em WAV, aumento de microfone de 200%, redução de ruído, marcadores e transcrição inteligente.',
      keywords: 'AudiOn, gravador de voz, editor de áudio celular, transcrição de voz, remoção de ruído'
    },
    es: {
      title: 'AudiOn | Grabadora de voz avanzada y editor de audio para móvil',
      description: 'AudiOn es la grabadora de voz definitiva para iOS y Android: calidad de estudio WAV, amplificación de micro, eliminación de ruido y transcripción.',
      keywords: 'AudiOn, grabadora de voz, editor de audio móvil, transcripción de voz, cancelar ruido'
    },
    zh: {
      title: 'AudiOn | 适用于 iPhone 与 Android 的专业级语音录音与音频编辑应用',
      description: 'AudiOn 专为专业人士和创作者打造：支持录音室级无损 WAV 录制、200% 麦克风增益、AI 降噪、提词器与语音转文字转录。',
      keywords: 'AudiOn, 语音录音机, 手机录音软件, 音频编辑, 录音降噪, 语音转文字, 提词器录音'
    }
  },

  '/audimix': {
    ogImage: '/apps/AuDimix-Window.jpeg',
    en: {
      title: 'AuDimix | Music Separation & Vocal Remover for Windows',
      description: 'AuDimix for Windows splits any song into stems — remove vocals, create karaoke instrumentals, adjust pitch/tempo, and export stems as MP3/WAV in 3 simple steps.',
      keywords: 'AuDimix, vocal remover, stem splitter, karaoke maker, AuDimix Windows, music separation, remove vocals, Global Delight AuDimix'
    },
    de: {
      title: 'AuDimix | Musik-Trennung & Gesangsentferner für Windows',
      description: 'AuDimix trennt jeden Song in einzelne Spuren: Gesang entfernen, Instrumentalspuren erstellen, Tonhöhe/Tempo anpassen und Stems exportieren.',
      keywords: 'AuDimix, Gesangsentferner Windows, Musik Trennung, Karaoke erstellen, Audio Stems'
    },
    it: {
      title: 'AuDimix | Separazione musicale e rimozione vocale per Windows',
      description: 'AuDimix per Windows divide i brani in tracce separate: rimuovi la voce, crea basi karaoke, regola tonalità/tempo ed esporta in MP3/WAV.',
      keywords: 'AuDimix, rimozione voce, separazione tracce audio, basi karaoke Windows'
    },
    ja: {
      title: 'AuDimix | Windows向けAI楽曲分離＆ボーカル抽出・除去ソフト',
      description: 'AuDimix for Windowsはあらゆる楽曲をパートごとに高精度分離。ボーカル除去、カラオケ音源作成、ピッチ・テンポ調整、ステム別保存に対応。',
      keywords: 'AuDimix, ボーカル除去, 楽曲分離, カラオケ音源 作成, ステム分離 Windows, 音声抽出'
    },
    fr: {
      title: 'AuDimix | Séparation musicale et extracteur de voix pour Windows',
      description: 'AuDimix pour Windows sépare n\'importe quelle chanson en pistes : isolez les voix, créez des versions karaoké, ajustez le tempo et exportez les pistes.',
      keywords: 'AuDimix, extracteur de voix, séparation musicale, karaoké Windows, stems audio'
    },
    pt: {
      title: 'AuDimix | Separação de música e remoção de vocais para Windows',
      description: 'O AuDimix divide qualquer música em faixas: remova vocais, crie bases de karaokê, ajuste pitch/andamento e exporte stems com facilidade.',
      keywords: 'AuDimix, remover vocal, separador de música, criar karaokê Windows, áudio stems'
    },
    es: {
      title: 'AuDimix | Separador de música y extractor de voz para Windows',
      description: 'AuDimix para Windows separa canciones en pistas individuales: elimina voces, crea pistas de karaoke, modifica tono/tempo y exporta en MP3 o WAV.',
      keywords: 'AuDimix, extractor de voz, separar música, crear karaoke PC, separar pistas audio'
    },
    zh: {
      title: 'AuDimix | 适用于 Windows 的 AI 音乐分轨与伴奏人声提取工具',
      description: 'AuDimix for Windows 轻松将歌曲分离为独立音轨：一键消除人声制作伴奏、提取干声、调节音高与速度，导出高质量 MP3/WAV。',
      keywords: 'AuDimix, 人声消除, 伴奏提取, AI 音乐分轨, 提取干声, 卡拉OK伴奏制作, 音频分轨'
    }
  },

  '/vizmato': {
    ogImage: '/apps/Vizmato-ios.jpeg',
    en: {
      title: 'Vizmato | HD Video Editor with Instant FX for iOS & Android',
      description: 'Vizmato is an award-winning moviemaker in your pocket — record in full HD with Live Instant FX, 50+ themes, music, slow motion, and one-tap sharing to social platforms.',
      keywords: 'Vizmato, Vizmato app, mobile video editor, HD video recorder, Instant FX, video themes, Vizmato iOS Android, Global Delight Vizmato'
    },
    de: {
      title: 'Vizmato | HD-Video-Editor mit Live-Effekten für iOS und Android',
      description: 'Vizmato ist die mobile Filmwerkstatt: Full-HD-Aufnahme mit Live Instant FX, über 50 Themes, Hintergrundmusik, Zeitlupe und direkter Social-Media-Export.',
      keywords: 'Vizmato, Video-Editor App, HD Video Aufnahme, Live Video Effekte, Zeitlupe Video'
    },
    it: {
      title: 'Vizmato | Editor video HD con effetti in tempo reale per smartphone',
      description: 'Vizmato è il creatore di filmati per dispositivi mobili: registra in Full HD con Live FX, oltre 50 temi, tracce musicali, slow motion e condivisione social.',
      keywords: 'Vizmato, editor video smartphone, effetti video live, montaggio video HD'
    },
    ja: {
      title: 'Vizmato | リアルタイムFX搭載のスマートフォン向けHD動画編集アプリ',
      description: 'Vizmatoはポケットに入る高機能ムービーメーカー。ライブインスタントFXを使ったフルHD録画、50種以上のテーマ、音楽、スローモーションに対応。',
      keywords: 'Vizmato, 動画編集 アプリ, HD 動画撮影, ビデオエフェクト, スローモーション, スマホ動画作成'
    },
    fr: {
      title: 'Vizmato | Éditeur vidéo HD avec effets en direct pour iOS et Android',
      description: 'Vizmato est votre studio vidéo de poche : filmez en Full HD avec effets en direct, plus de 50 thèmes, musique, ralenti et partage instantané.',
      keywords: 'Vizmato, éditeur vidéo mobile, effets vidéo en direct, montage vidéo HD'
    },
    pt: {
      title: 'Vizmato | Editor de vídeo HD com efeitos ao vivo para celular',
      description: 'O Vizmato transforma seu celular em uma ilha de edição: grave em Full HD com efeitos em tempo real, mais de 50 temas, músicas e câmera lenta.',
      keywords: 'Vizmato, editor de vídeo celular, efeitos de vídeo ao vivo, gravação HD'
    },
    es: {
      title: 'Vizmato | Editor de video HD con efectos en vivo para iOS y Android',
      description: 'Vizmato es un estudio cinematográfico portátil: graba en Full HD con Live Instant FX, más de 50 temas, música, cámara lenta y publicación directa.',
      keywords: 'Vizmato, editor de video móvil, efectos de video en vivo, grabación Full HD'
    },
    zh: {
      title: 'Vizmato | 适用于 iOS 和 Android 的高清视频编辑与实时特效应用',
      description: 'Vizmato 让您随时随地创作精彩大片：支持全高清实时特效录制、50+ 电影质感主题、丰富配乐、慢动作与社交平台一键分享。',
      keywords: 'Vizmato, 手机视频剪辑, 实时滤镜特效, 高清视频录制, 慢动作特效, 短视频制作'
    }
  },

  '/cameraplus': {
    ogImage: '/hero/cameraplus.webp',
    en: {
      title: 'Camera Plus | Pro Photography Camera for iPhone',
      description: 'Camera Plus gives you powerful tools, stunning filters, macro focus, AirSnap remote via Wi-Fi/Bluetooth, Apple Watch trigger, and advanced controls to take photography to the next level on iPhone.',
      keywords: 'Camera Plus, iPhone camera app, photography app iOS, AirSnap, macro mode, Camera Plus iPhone, Global Delight Camera Plus'
    },
    de: {
      title: 'Camera Plus | Professionelle Kamera-App für iPhone',
      description: 'Camera Plus bringt fortschrittliche Fotowerkzeuge auf das iPhone: Makro-Fokus, AirSnap-Fernauslöser, Apple Watch-Unterstützung und kuratierte Filter.',
      keywords: 'Camera Plus, iPhone Kamera App, Makro Fokus, AirSnap Fernauslöser, Foto Filter'
    },
    it: {
      title: 'Camera Plus | Fotocamera professionale per iPhone',
      description: 'Camera Plus porta la fotografia su iPhone a nuovi livelli con macro focus, scatto remoto AirSnap via Wi-Fi/Bluetooth, supporto Apple Watch e filtri unici.',
      keywords: 'Camera Plus, fotocamera iPhone, macro focus, scatto remoto, filtri fotografici'
    },
    ja: {
      title: 'Camera Plus | iPhone向け本格写真撮影カメラアプリ',
      description: 'Camera PlusはiPhoneでの撮影を次のレベルへ。高精度マクロフォーカス、AirSnapリモートシャッター、Apple Watch連動、多彩なフィルターを搭載。',
      keywords: 'Camera Plus, iPhone カメラアプリ, マクロ撮影, リモートシャッター, 写真フィルター'
    },
    fr: {
      title: 'Camera Plus | Appareil photo professionnel pour iPhone',
      description: 'Camera Plus sublime vos photos sur iPhone : mise au point macro, déclencheur à distance AirSnap via Wi-Fi/Bluetooth, intégration Apple Watch et filtres pro.',
      keywords: 'Camera Plus, appareil photo iPhone, photo macro, déclencheur à distance, filtres photo'
    },
    pt: {
      title: 'Camera Plus | Câmera fotográfica profissional para iPhone',
      description: 'O Camera Plus oferece foco macro avançado, controle remoto AirSnap via Wi-Fi/Bluetooth, disparo pelo Apple Watch e filtros fotográficos impressionantes.',
      keywords: 'Camera Plus, câmera iPhone, foco macro, disparo remoto, filtros fotográficos'
    },
    es: {
      title: 'Camera Plus | Cámara de fotografía profesional para iPhone',
      description: 'Camera Plus lleva la fotografía en iPhone al siguiente nivel: enfoque macro, disparador remoto AirSnap por Wi-Fi/Bluetooth, soporte Apple Watch y filtros.',
      keywords: 'Camera Plus, cámara iPhone, modo macro, disparador remoto, filtros de fotos'
    },
    zh: {
      title: 'Camera Plus | 适用于 iPhone 的专业级摄影相机应用',
      description: 'Camera Plus 为 iPhone 摄影赋予无限可能：配备微距对焦、AirSnap 无线遥控快门、Apple Watch 联动拍摄与专业级调色滤镜。',
      keywords: 'Camera Plus, iPhone 相机应用, 微距拍摄, 遥控快门, Apple Watch 拍照, 摄影滤镜'
    }
  },

  '/camerapluspro': {
    ogImage: '/hero/cameraplus.webp',
    en: {
      title: 'Camera Plus Pro | DSLR-Like Photography for iPhone',
      description: 'Camera Plus Pro brings DSLR-like control to iPhone — manual focus, exposure white balance, RAW, AirSnap remote, and smart retouch AI tools to enhance every detail.',
      keywords: 'Camera Plus Pro, Camera Plus Pro iPhone, DSLR camera app, manual camera iOS, RAW photography, Global Delight Camera Plus Pro'
    },
    de: {
      title: 'Camera Plus Pro | DSLR-Kontrolle und RAW-Fotografie für iPhone',
      description: 'Camera Plus Pro bringt manuelle Spiegelreflex-Bedienung auf das iPhone: RAW-Aufnahme, manuelle Belichtung und Fokus sowie KI-Retusche-Werkzeuge.',
      keywords: 'Camera Plus Pro, DSLR Kamera iPhone, RAW Fotografie, manueller Fokus'
    },
    it: {
      title: 'Camera Plus Pro | Fotografia manuale simile a reflex per iPhone',
      description: 'Camera Plus Pro offre controlli manuali avanzati per iPhone: supporto RAW, messa a fuoco manuale, bilanciamento del bianco e fotoritocco intelligente.',
      keywords: 'Camera Plus Pro, fotocamera reflex iPhone, scatto RAW, controlli manuali fotocamera'
    },
    ja: {
      title: 'Camera Plus Pro | 一眼レフ感覚のマニュアル撮影＆RAW現像アプリ',
      description: 'Camera Plus ProはiPhoneで一眼レフカメラのような本格操作を実現。RAW撮影、マニュアルフォーカス、ホワイトバランス調整、高度なレタッチ機能を搭載。',
      keywords: 'Camera Plus Pro, 一眼レフ風 カメラアプリ, RAW 撮影 iPhone, マニュアル撮影, 写真レタッチ'
    },
    fr: {
      title: 'Camera Plus Pro | Contrôle manuel type reflex et RAW pour iPhone',
      description: 'Camera Plus Pro offre des réglages dignes d\'un reflex sur iPhone : format RAW, mise au point manuelle, balance des blancs et retouche assistée.',
      keywords: 'Camera Plus Pro, appareil reflex iPhone, photo RAW iOS, mise au point manuelle'
    },
    pt: {
      title: 'Camera Plus Pro | Fotografia manual tipo DSLR para iPhone',
      description: 'O Camera Plus Pro traz controles de câmera DSLR para o iPhone: captura em RAW, foco manual, balanço de branco e retoque inteligente de imagens.',
      keywords: 'Camera Plus Pro, câmera DSLR iPhone, fotos RAW, controle manual câmera'
    },
    es: {
      title: 'Camera Plus Pro | Fotografía manual profesional tipo réflex para iPhone',
      description: 'Camera Plus Pro pone el control de una DSLR en tu iPhone: captura en RAW, enfoque manual, balance de blancos y herramientas inteligentes de retoque.',
      keywords: 'Camera Plus Pro, cámara réflex iPhone, fotografía RAW iOS, enfoque manual'
    },
    zh: {
      title: 'Camera Plus Pro | 适用于 iPhone 的单反级手动摄影与 RAW 拍摄应用',
      description: 'Camera Plus Pro 为 iPhone 提供媲美专业单反的手动操控体验：支持 RAW 格式捕获、手动对焦、白平衡精调与智能画质修饰工具。',
      keywords: 'Camera Plus Pro, 单反相机应用, iPhone RAW 摄影, 手动对焦, 专业相机, 照片修图'
    }
  },

  '/boomformobile': {
    ogImage: '/apps/Boom for iOS.jpeg',
    en: {
      title: 'Boom for Mobile | 3D Surround Sound Music Player for iOS & Android',
      description: 'Boom for iOS & Android is the best music player with magical 3D Surround Sound on any headphones — 29 EQ presets, 20K+ radio & podcasts, Tidal streaming, and cloud library playback.',
      keywords: 'Boom mobile, Boom iOS, Boom Android, 3D surround music player, equalizer presets, radio podcasts, Tidal Boom, Global Delight Boom'
    },
    de: {
      title: 'Boom for Mobile | 3D-Surround-Sound Musikplayer für iOS & Android',
      description: 'Boom für Mobilgeräte verwandelt jeden Kopfhörer in ein Surround-System: 29 EQ-Presets, 20.000+ Radiosender & Podcasts, Tidal-Integration und Cloud-Streaming.',
      keywords: 'Boom Mobile, 3D Surround Musikplayer, Equalizer Presets, Radio Podcasts, Tidal Streaming'
    },
    it: {
      title: 'Boom for Mobile | Lettore musicale con audio surround 3D per iOS e Android',
      description: 'Boom per smartphone offre un\'esperienza surround 3D immersiva su qualsiasi cuffia, 29 preset di equalizzazione, oltre 20.000 stazioni radio e podcast.',
      keywords: 'Boom Mobile, lettore musicale 3D, equalizzatore cuffie, streaming radio podcast'
    },
    ja: {
      title: 'Boom for Mobile | スマートフォン向け3Dサラウンド音楽プレイヤーアプリ',
      description: 'どんなヘッドホンでも映画館のような3Dサラウンド音響を楽しめるモバイル音楽プレイヤー。29種類のイコライザー、ラジオ、Tidalストリーミング対応。',
      keywords: 'Boom for Mobile, 3Dサラウンド 音楽プレイヤー, スマホ イコライザー, ラジオ ポッドキャスト'
    },
    fr: {
      title: 'Boom for Mobile | Lecteur musical avec son surround 3D sur iOS et Android',
      description: 'Boom pour mobile apporte un son surround 3D magique sur n\'importe quel casque : 29 préréglages d\'égaliseur, 20 000+ radios, podcasts et streaming Tidal.',
      keywords: 'Boom Mobile, lecteur audio surround 3D, égaliseur musique casque, streaming Tidal'
    },
    pt: {
      title: 'Boom for Mobile | Player de música com som surround 3D para iOS e Android',
      description: 'O Boom para celular proporciona som surround 3D imersivo em qualquer fone de ouvido, 29 predefinições de equalizador, 20 mil rádios e integração Tidal.',
      keywords: 'Boom celular, player música 3D surround, equalizador fone de ouvido, rádios'
    },
    es: {
      title: 'Boom for Mobile | Reproductor de música con sonido envolvente 3D',
      description: 'Boom para iOS y Android ofrece sonido envolvente 3D en cualquier auricular, 29 ajustes de ecualizador, más de 20.000 radios, podcasts y Tidal.',
      keywords: 'Boom móvil, reproductor música 3D, sonido envolvente auriculares, ecualizador móvil'
    },
    zh: {
      title: 'Boom for Mobile | 适用于 iOS 和 Android 的 3D 环绕声音乐播放器',
      description: 'Boom 手机版让任何普通耳机都能呈现震撼的 3D 沉浸式环绕音效：内置 29 种专业均衡器预设、20,000+ 网络电台与播客及 Tidal 高保真串流。',
      keywords: 'Boom 手机版, 3D 环绕声音乐播放器, 耳机音效增强, 均衡器预设, 网络电台, 播客'
    }
  },

  '/about': {
    ogImage: CLOUD_OG,
    en: {
      title: 'About Global Delight | Innovators in Audio, Video & Photography Software',
      description: 'Since 2007, Global Delight has created award-winning digital experiences. Discover our history of pioneering audio, video, and photography software for Mac, Windows, iOS, and Android, trusted by millions worldwide.',
      keywords: 'Global Delight, software company, audio enhancement, video editing, photography apps, about Global Delight'
    },
    de: {
      title: 'Über Global Delight | Pioniere für Audio-, Video- und Fototechnologie',
      description: 'Seit 2007 entwickelt Global Delight preisgekrönte Software für Mac, Windows, iOS und Android – innovative Technologien, denen Millionen Nutzer weltweit vertrauen.',
      keywords: 'Über Global Delight, Softwareunternehmen, Audio-Innovation, Videobearbeitung'
    },
    it: {
      title: 'Chi Siamo | Global Delight, pionieri del software audio, video e fotografico',
      description: 'Dal 2007 Global Delight sviluppa software audio, video e fotografico per Mac, Windows, iOS e Android, utilizzato con entusiasmo da milioni di utenti.',
      keywords: 'Chi siamo Global Delight, azienda software, innovazione audio, fotografia'
    },
    ja: {
      title: 'Global Delightについて | 音声・映像・写真ソフトウェアのイノベーター',
      description: '2007年設立以来、Global Delightは世界中で数百万人に愛用されるMac、Windows、iOS、Android向けの革新的なオーディオ・ビデオ・写真アプリを提供しています。',
      keywords: 'Global Delight 会社情報, 企業情報, オーディオ 開発, アプリ 開発会社'
    },
    fr: {
      title: 'À Propos de Global Delight | Pionniers des logiciels audio, vidéo et photo',
      description: 'Depuis 2007, Global Delight innove dans les logiciels audio, vidéo et photo sur Mac, Windows, iOS et Android, plébiscités par des millions d\'utilisateurs.',
      keywords: 'À propos Global Delight, éditeur de logiciels, applications audio vidéo'
    },
    pt: {
      title: 'Sobre a Global Delight | Pioneiros em software de áudio, vídeo e fotografia',
      description: 'Desde 2007, a Global Delight cria experiências digitais premiadas para Mac, Windows, iOS e Android, com a confiança de milhões de usuários pelo mundo.',
      keywords: 'Sobre Global Delight, empresa de software, desenvolvimento de aplicativos'
    },
    es: {
      title: 'Acerca de Global Delight | Innovadores en software de audio, video y fotografía',
      description: 'Desde 2007, Global Delight diseña aplicaciones galardonadas para Mac, Windows, iOS e Android en las que confían millones de creadores en todo el mundo.',
      keywords: 'Acerca de Global Delight, empresa de software, innovación tecnológica'
    },
    zh: {
      title: '关于 Global Delight | 音频、视频与摄影软件创新领航者',
      description: '自 2007 年创立以来，Global Delight 始终致力于为 Mac、Windows、iOS 和 Android 打造卓越的数字视听体验，赢得全球数百万用户的信赖。',
      keywords: '关于 Global Delight, 软件开发公司, 创新音频科技, 移动应用开发团队'
    }
  },

  '/business': {
    ogImage: CLOUD_OG,
    en: {
      title: 'Business Solutions | Global Delight B2B',
      description: 'Global Delight offers cutting-edge B2B solutions in audio, video, and photography technology. Partner with us for powerful OEM integrations, white-label apps, and enterprise software licensing.',
      keywords: 'Global Delight Business, B2B software solutions, OEM integration, audio technology licensing, video engine'
    },
    de: {
      title: 'B2B-Unternehmenslösungen | Global Delight Business',
      description: 'Global Delight bietet führende B2B-Lösungen in Audio-, Video- und Kameratechnologie für OEM-Integrationen, White-Label-Apps und Unternehmenslizenzen.',
      keywords: 'Global Delight Business, B2B Software, OEM Integration, Audio SDK Lizenzierung'
    },
    it: {
      title: 'Soluzioni Aziendali e B2B | Global Delight Business',
      description: 'Global Delight offre soluzioni B2B all\'avanguardia per audio, video e fotocamera: integrazioni OEM, app white-label e licenze software enterprise.',
      keywords: 'Global Delight B2B, soluzioni enterprise, integrazioni OEM, licenze software'
    },
    ja: {
      title: '法人・ビジネス向けソリューション | Global Delight B2B',
      description: '音響・映像・カメラ技術の最先端B2Bソリューション。OEM統合、ホワイトレーベルアプリ開発、エンタープライズライセンスを提供。',
      keywords: 'Global Delight B2B, 法人向けソリューション, OEM 統合, オーディオ エンジン SDK'
    },
    fr: {
      title: 'Solutions Entreprises & B2B | Global Delight Business',
      description: 'Global Delight propose des technologies de pointe en audio, vidéo et photo pour vos intégrations OEM, applications en marque blanche et licences pro.',
      keywords: 'Global Delight B2B, solutions entreprises, intégration OEM, marque blanche'
    },
    pt: {
      title: 'Soluções Corporativas e B2B | Global Delight Business',
      description: 'A Global Delight oferece tecnologia de ponta para empresas em áudio, vídeo e captura: integrações OEM, aplicativos white-label e licenciamento corporativo.',
      keywords: 'Global Delight B2B, soluções corporativas, OEM, licenciamento de software'
    },
    es: {
      title: 'Soluciones Empresariales y B2B | Global Delight Business',
      description: 'Global Delight proporciona soluciones B2B punteras en audio, video y cámara: integraciones OEM, aplicaciones de marca blanca y licencias de software.',
      keywords: 'Global Delight B2B, soluciones empresariales, integración OEM, marca blanca'
    },
    zh: {
      title: '企业级商业解决方案 | Global Delight B2B',
      description: 'Global Delight 为全球企业提供顶尖的音频、视频与相机底层技术：支持 OEM 深度集成、白标应用定制与企业级软件技术授权。',
      keywords: 'Global Delight B2B, 企业级解决方案, OEM 技术集成, 白标定制, SDK 技术授权'
    }
  },

  '/technology/audio': {
    ogImage: '/business/AT/Audio-Hbanner.webp',
    en: {
      title: 'Audio Technology & Engine | Global Delight B2B',
      description: 'Discover Global Delight\'s patented audio engine, featuring 3D Surround Sound and advanced equalizer tech available for OEM integration, white-label licensing, and B2B partnerships.',
      keywords: 'audio engine, 3D surround sound, OEM audio technology, equalizer SDK, Global Delight audio'
    },
    de: {
      title: 'Audio-Technologie & Audio-Engine | Global Delight B2B',
      description: 'Entdecken Sie die patentierte Audio-Engine von Global Delight mit 3D-Surround und Equalizer für OEM-Integration und White-Label-Lizenzierung.',
      keywords: 'Audio Engine, 3D Surround SDK, Equalizer OEM, Global Delight Audio'
    },
    it: {
      title: 'Tecnologia e Motore Audio | Global Delight B2B',
      description: 'Scopri il motore audio brevettato di Global Delight con audio surround 3D ed equalizzatori avanzati disponibili per integrazioni OEM.',
      keywords: 'Motore audio, audio surround 3D, SDK equalizzatore, licenze audio OEM'
    },
    ja: {
      title: '音響技術＆オーディオエンジン | Global Delight B2B',
      description: '特許取得済みの3Dサラウンド音響と高精度イコライザーを搭載したGlobal Delightのオーディオエンジン。OEM統合やライセンスに対応。',
      keywords: 'オーディオエンジン, 3Dサラウンド SDK, 音響技術 OEM, イコライザー エンジン'
    },
    fr: {
      title: 'Technologie et Moteur Audio | Global Delight B2B',
      description: 'Découvrez le moteur audio breveté de Global Delight avec son surround 3D et égaliseur pour intégrations OEM et licences logicielles.',
      keywords: 'Moteur audio, SDK surround 3D, technologie audio OEM, égaliseur SDK'
    },
    pt: {
      title: 'Tecnologia e Motor de Áudio | Global Delight B2B',
      description: 'Conheça o motor de áudio patenteado da Global Delight com surround 3D e tecnologia de equalizador para integração OEM e parcerias B2B.',
      keywords: 'Motor de áudio, surround 3D SDK, tecnologia áudio OEM, equalizador B2B'
    },
    es: {
      title: 'Tecnología y Motor de Audio | Global Delight B2B',
      description: 'Descubra el motor de audio patentado de Global Delight con sonido envolvente 3D y ecualizadores avanzados para integración OEM.',
      keywords: 'Motor de audio, sonido envolvente 3D SDK, tecnología audio OEM'
    },
    zh: {
      title: '核心音频技术与音频引擎 | Global Delight B2B',
      description: '探索 Global Delight 获专利保护的专业音频引擎：内置 3D 沉浸式环绕声与先进均衡算法，支持 OEM 深度集成与商业授权。',
      keywords: '音频引擎, 3D 环绕声 SDK, OEM 音频技术, 均衡器算法引擎, 全局音效'
    }
  },

  '/technology/video': {
    ogImage: '/business/VT/VT-banner.webp',
    en: {
      title: 'Video Technology Engine | Global Delight B2B',
      description: 'Leverage Global Delight\'s award-winning video engine. Fast, scalable SDK integration, custom branding, and white-label video editing solutions for businesses and app developers.',
      keywords: 'video engine, video SDK, OEM video editor, white label video app, Global Delight B2B'
    },
    de: {
      title: 'Video-Technologie Engine | Global Delight B2B',
      description: 'Nutzen Sie die preisgekrönte Video-Engine von Global Delight: skalierbare SDK-Integration und White-Label-Videobearbeitung für Unternehmen.',
      keywords: 'Video Engine, Video SDK, OEM Video Editor, White Label Video App'
    },
    it: {
      title: 'Motore di Tecnologia Video | Global Delight B2B',
      description: 'Sfrutta il pluripremiato motore video di Global Delight: integrazione SDK scalabile, editing video e soluzioni personalizzate per aziende.',
      keywords: 'Motore video, SDK video, editor video OEM, app video white label'
    },
    ja: {
      title: '映像技術＆ビデオエンジン | Global Delight B2B',
      description: '受賞歴を誇るGlobal Delightの動画エンジン。高速でスケーラブルなビデオ編集SDK、ホワイトレーベル動画アプリ開発に対応。',
      keywords: 'ビデオエンジン, 動画編集 SDK, OEM 動画編集, ビデオ技術 ライセンス'
    },
    fr: {
      title: 'Moteur Technologique Vidéo | Global Delight B2B',
      description: 'Profitez du moteur vidéo primé de Global Delight : intégration SDK rapide et solutions de montage vidéo en marque blanche pour entreprises.',
      keywords: 'Moteur vidéo, SDK vidéo, éditeur vidéo OEM, marque blanche vidéo'
    },
    pt: {
      title: 'Motor de Tecnologia de Vídeo | Global Delight B2B',
      description: 'Aproveite o premiado motor de vídeo da Global Delight: integração rápida de SDK e soluções de edição de vídeo white-label.',
      keywords: 'Motor de vídeo, SDK de vídeo, editor de vídeo OEM, vídeo white-label'
    },
    es: {
      title: 'Motor de Tecnología de Video | Global Delight B2B',
      description: 'Aproveche el premiado motor de video de Global Delight: integración SDK rápida y soluciones de edición de video en marca blanca.',
      keywords: 'Motor de video, SDK de video, editor de video OEM, video marca blanca'
    },
    zh: {
      title: '核心视频技术与图像引擎 | Global Delight B2B',
      description: '借助 Global Delight 屡获殊荣的高性能视频渲染引擎：提供轻量易集成的视频编辑 SDK、特效算法库与定制白标解决方案。',
      keywords: '视频引擎, 视频编辑 SDK, OEM 视频剪辑, 白标视频应用, 实时视频渲染'
    }
  },

  '/technology/camera': {
    ogImage: '/business/CT/CT-banner.webp',
    en: {
      title: 'Camera Technology | Global Delight B2B OEM Solutions',
      description: 'Discover Global Delight\'s advanced camera technology. Integrate AirSnap, Live Filters, and One-Touch Image Editing SDKs into your photography apps through OEM licensing.',
      keywords: 'camera technology, photography SDK, AirSnap, live filters SDK, image editing SDK, Global Delight OEM'
    },
    de: {
      title: 'Kameratechnologie | Global Delight B2B OEM-Lösungen',
      description: 'Integrieren Sie AirSnap, Live-Filter und Bildbearbeitungs-SDKs von Global Delight über OEM-Lizenzen in Ihre Foto-Apps.',
      keywords: 'Kameratechnologie, Foto SDK, AirSnap, Live Filter SDK, Bildbearbeitung OEM'
    },
    it: {
      title: 'Tecnologia della Fotocamera | Soluzioni OEM Global Delight',
      description: 'Integra AirSnap, filtri in tempo reale e SDK di fotoritocco nelle tue app di fotografia grazie alle licenze OEM di Global Delight.',
      keywords: 'Tecnologia fotocamera, SDK fotografia, filtri live SDK, fotoritocco OEM'
    },
    ja: {
      title: 'カメラ撮影技術 | Global Delight B2B OEMソリューション',
      description: 'AirSnap、リアルタイムフィルター、ワンタッチ画像編集SDKを貴社アプリに統合。Global DelightのOEMカメラ技術。',
      keywords: 'カメラ技術, 撮影 SDK, AirSnap, リアルタイムフィルター, 画像編集 SDK'
    },
    fr: {
      title: 'Technologie Photo & Caméra | Solutions OEM Global Delight',
      description: 'Intégrez AirSnap, filtres en direct et SDK de retouche photo dans vos applications grâce aux licences OEM Global Delight.',
      keywords: 'Technologie caméra, SDK photo, AirSnap, filtres photo en direct'
    },
    pt: {
      title: 'Tecnologia de Câmera | Soluções OEM Global Delight',
      description: 'Integre AirSnap, filtros em tempo real e SDKs de edição de imagem em seus aplicativos através do licenciamento OEM da Global Delight.',
      keywords: 'Tecnologia de câmera, SDK de fotografia, AirSnap, edição de imagem OEM'
    },
    es: {
      title: 'Tecnología de Cámara | Soluciones OEM Global Delight',
      description: 'Integre AirSnap, filtros en tiempo real y SDKs de edición fotográfica en sus aplicaciones con las licencias OEM de Global Delight.',
      keywords: 'Tecnología de cámara, SDK fotografía, AirSnap, filtros en tiempo real'
    },
    zh: {
      title: '相机影像底层技术 | Global Delight B2B OEM 解决方案',
      description: '将 AirSnap 无线快门、实时调色滤镜与智能一键修图 SDK 深度赋能至您的摄影图像应用中，支持全方位商业授权。',
      keywords: '相机技术, 摄影 SDK, AirSnap, 实时滤镜算法, 图像处理 SDK, OEM 影像授权'
    }
  },

  '/technology/screen-capture': {
    ogImage: '/business/ST/ST_banner.webp',
    en: {
      title: 'Screen Capture Technology | Global Delight B2B',
      description: 'Global Delight\'s customized Screen Capture and Screen Recording engine. High-performance recording and editing solutions for macOS and Windows applications, available for OEM licensing.',
      keywords: 'screen capture engine, screen recording SDK, video capture OEM, Global Delight screen recorder'
    },
    de: {
      title: 'Bildschirmaufnahme-Technologie | Global Delight B2B',
      description: 'Leistungsstarke Bildschirmaufnahme- und Aufzeichnungs-Engine für macOS und Windows, verfügbar für OEM-Lizenzierung.',
      keywords: 'Bildschirmaufnahme Engine, Screen Recording SDK, Video Capture OEM'
    },
    it: {
      title: 'Tecnologia di Acquisizione Schermo | Global Delight B2B',
      description: 'Motore di registrazione e acquisizione dello schermo per macOS e Windows ad alte prestazioni per licenze OEM.',
      keywords: 'Motore acquisizione schermo, SDK registrazione schermo, video capture OEM'
    },
    ja: {
      title: '画面キャプチャ＆録画技術 | Global Delight B2B',
      description: 'macOSおよびWindows向けの高性能スクリーンキャプチャ・画面録画エンジン。OEMライセンス提供中。',
      keywords: '画面キャプチャ エンジン, 画面録画 SDK, スクリーンレコーダー OEM'
    },
    fr: {
      title: 'Technologie de Capture d\'Écran | Global Delight B2B',
      description: 'Moteur de capture et d\'enregistrement d\'écran haute performance pour macOS et Windows disponible sous licence OEM.',
      keywords: 'Moteur capture écran, SDK enregistrement écran, capture vidéo OEM'
    },
    pt: {
      title: 'Tecnologia de Captura de Tela | Global Delight B2B',
      description: 'Motor de gravação e captura de tela de alto desempenho para macOS e Windows, disponível para licenciamento OEM.',
      keywords: 'Motor de captura de tela, SDK gravação de tela, captura de vídeo OEM'
    },
    es: {
      title: 'Tecnología de Captura de Pantalla | Global Delight B2B',
      description: 'Motor de grabación y captura de pantalla de alto rendimiento para macOS y Windows disponible para licencias OEM.',
      keywords: 'Motor captura pantalla, SDK grabación pantalla, captura video OEM'
    },
    zh: {
      title: '屏幕捕获与录像引擎 | Global Delight B2B',
      description: '专为 macOS 和 Windows 打造的高性能屏幕截图、实时录像与图像标注底层技术引擎，现已开放 OEM 商业授权。',
      keywords: '屏幕捕获引擎, 录屏 SDK, 屏幕录制底层算法, OEM 屏幕捕获, 截图引擎'
    }
  },

  '/faq': {
    ogImage: CLOUD_OG,
    en: {
      title: 'FAQs | Global Delight Help & Support',
      description: 'Find answers to frequently asked questions about Boom 3D, Boom 2, Capto, Vizmato, AudiOn, AuDimix, and Camera Plus – installation, licensing, features, troubleshooting, and support contact.',
      keywords: 'Global Delight FAQ, Boom 3D help, Capto support, Vizmato FAQ, AudiOn help, troubleshooting, licensing, installation'
    },
    de: {
      title: 'Häufig gestellte Fragen (FAQ) | Global Delight Hilfe & Support',
      description: 'Antworten auf häufig gestellte Fragen zu Boom 3D, Boom 2, Capto, Vizmato, AudiOn und AuDimix – Installation, Lizenzen und Hilfe.',
      keywords: 'Global Delight FAQ, Boom 3D Hilfe, Capto Support, Vizmato Fragen, Fehlerbehebung'
    },
    it: {
      title: 'Domande Frequenti (FAQ) | Assistenza e Supporto Global Delight',
      description: 'Trova risposte alle domande più frequenti su Boom 3D, Boom 2, Capto, Vizmato e AudiOn: installazione, licenze e supporto.',
      keywords: 'FAQ Global Delight, supporto Boom 3D, assistenza Capto, risoluzione problemi'
    },
    ja: {
      title: 'よくある質問（FAQ） | Global Delight ヘルプ＆サポート',
      description: 'Boom 3D、Boom 2、Capto、Vizmato、AudiOn、AuDimixのインストール、ライセンス認証、機能、トラブルシューティングに関するよくある質問。',
      keywords: 'Global Delight FAQ, Boom 3D サポート, Capto 質問, よくある質問, トラブル解決'
    },
    fr: {
      title: 'Foire Aux Questions (FAQ) | Support et Assistance Global Delight',
      description: 'Consultez les réponses aux questions fréquentes sur Boom 3D, Boom 2, Capto, Vizmato et AudiOn : installation, licences et dépannage.',
      keywords: 'FAQ Global Delight, aide Boom 3D, support Capto, questions fréquentes'
    },
    pt: {
      title: 'Perguntas Frequentes (FAQ) | Ajuda e Suporte Global Delight',
      description: 'Encontre respostas para dúvidas sobre Boom 3D, Boom 2, Capto, Vizmato e AudiOn: instalação, licenciamento e suporte técnico.',
      keywords: 'FAQ Global Delight, ajuda Boom 3D, suporte Capto, dúvidas frequentes'
    },
    es: {
      title: 'Preguntas Frecuentes (FAQ) | Ayuda y Soporte de Global Delight',
      description: 'Encuentra soluciones a dudas habituales sobre Boom 3D, Boom 2, Capto, Vizmato y AudiOn: instalación, licencias y soporte.',
      keywords: 'FAQ Global Delight, soporte Boom 3D, ayuda Capto, preguntas frecuentes'
    },
    zh: {
      title: '常见问题解答 (FAQ) | Global Delight 客户技术支持与帮助中心',
      description: '查询关于 Boom 3D、Boom 2、Capto、Vizmato、AudiOn 与 AuDimix 的安装指导、激活授权、功能说明及常见疑难解答。',
      keywords: 'Global Delight FAQ, Boom 3D 帮助, Capto 技术支持, 激活码帮助, 常见问题, 故障排查'
    }
  },

  '/contact': {
    ogImage: CLOUD_OG,
    en: {
      title: 'Contact Global Delight | Support, Sales & Business Inquiries',
      description: 'Contact Global Delight — get help for Boom, Capto, Vizmato & Camera Plus, request sales/licensing info, or reach business partnership team. We respond within 24 hours.',
      keywords: 'Global Delight contact, Boom support contact, Capto help email, customer support, business inquiry'
    },
    de: {
      title: 'Kontakt | Global Delight Support & Vertriebsanfragen',
      description: 'Kontaktiere Global Delight für Kundensupport zu Boom, Capto und Vizmato, Lizenzierungsanfragen und Partnerschaften.',
      keywords: 'Global Delight Kontakt, Support Anfrage, Kundendienst, Vertrieb'
    },
    it: {
      title: 'Contatti | Global Delight Supporto e Informazioni Commerciali',
      description: 'Contatta il team di Global Delight per assistenza tecnica su Boom, Capto o Vizmato, informazioni sulle licenze o partnership B2B.',
      keywords: 'Contatti Global Delight, assistenza clienti, supporto tecnico, partnership'
    },
    ja: {
      title: 'お問い合わせ | Global Delight カスタマーサポート＆法人窓口',
      description: 'Boom、Capto、Vizmatoなどの製品サポート、ライセンス購入、ビジネス提携に関するお問い合わせ。24時間以内に回答いたします。',
      keywords: 'Global Delight 問い合わせ, サポート窓口, 法人提携, ライセンス購入'
    },
    fr: {
      title: 'Contactez-nous | Support et Ventes Global Delight',
      description: 'Contactez l\'équipe Global Delight pour l\'assistance sur Boom, Capto ou Vizmato, les demandes de devis et les partenariats.',
      keywords: 'Contact Global Delight, support client, assistance technique, devis'
    },
    pt: {
      title: 'Fale Conosco | Suporte e Vendas Global Delight',
      description: 'Entre em contato com a Global Delight para suporte técnico em Boom, Capto ou Vizmato, informações comerciais e parcerias.',
      keywords: 'Contato Global Delight, suporte ao cliente, vendas corporativas'
    },
    es: {
      title: 'Contacto | Soporte y Ventas de Global Delight',
      description: 'Ponte en contacto con Global Delight para ayuda sobre Boom, Capto y Vizmato, consultas comerciales o alianzas empresariales.',
      keywords: 'Contacto Global Delight, atención al cliente, soporte técnico, ventas'
    },
    zh: {
      title: '联系我们 | Global Delight 客户服务与商业合作咨询',
      description: '联系 Global Delight 团队——获取 Boom、Capto、Vizmato 的售后支持、购买咨询或洽谈商务合作，我们将在 24 小时内回复。',
      keywords: '联系 Global Delight, 客户服务支持, 商务合作洽谈, 售后咨询, 软件授权购买'
    }
  },

  '/careers': {
    ogImage: CLOUD_OG,
    en: {
      title: 'Careers at Global Delight | Join Our Award-Winning Team',
      description: 'Join Global Delight — careers for engineers, designers, product managers, and marketers building award-winning apps like Boom, Capto, and Vizmato used by millions worldwide.',
      keywords: 'Global Delight careers, jobs at Global Delight, software engineer jobs, app developer careers, Global Delight hiring'
    },
    de: {
      title: 'Karriere bei Global Delight | Werde Teil unseres Teams',
      description: 'Entdecke Karrieremöglichkeiten für Software-Entwickler, Designer und Produktmanager bei Global Delight.',
      keywords: 'Global Delight Karriere, Jobs Softwareentwicklung, Designer Stellen'
    },
    it: {
      title: 'Lavora con Noi | Opportunità di Carriera in Global Delight',
      description: 'Unisciti al team di Global Delight: posizioni aperte per sviluppatori software, designer e creatori di tecnologia.',
      keywords: 'Lavora con noi Global Delight, carriere software, posizioni aperte'
    },
    ja: {
      title: '採用情報 | Global Delightで世界中の人々をワクワクさせよう',
      description: '世界中の数百万人が利用するBoomやCaptoを開発するエンジニア、デザイナー、プロダクトマネージャーを募集しています。',
      keywords: 'Global Delight 採用, 求人情報, ソフトウェア開発者 採用, アプリ開発 転職'
    },
    fr: {
      title: 'Carrières chez Global Delight | Rejoignez notre équipe',
      description: 'Découvrez les opportunités d\'emploi chez Global Delight pour les développeurs, concepteurs et chefs de produit.',
      keywords: 'Carrières Global Delight, recrutement développeur, offres d\'emploi tech'
    },
    pt: {
      title: 'Carreiras na Global Delight | Junte-se ao Nosso Time',
      description: 'Construa produtos inovadores como Boom e Capto com a equipe Global Delight. Vagas abertas para desenvolvedores e designers.',
      keywords: 'Carreiras Global Delight, vagas tecnologia, desenvolvedor software'
    },
    es: {
      title: 'Carreras en Global Delight | Únete a Nuestro Equipo Innovador',
      description: 'Descubre vacantes y oportunidades laborales para desarrolladores, diseñadores y gestores de producto en Global Delight.',
      keywords: 'Carreras Global Delight, empleo desarrollador, ofertas de trabajo tech'
    },
    zh: {
      title: '招贤纳士 | 加入 Global Delight 创造世界级产品',
      description: '加入 Global Delight——与富有远见的工程师、产品经理和设计师携手，打造触达全球数百万用户的标杆级视听应用。',
      keywords: 'Global Delight 招聘, 人才招聘, 软件工程师招聘, 移动端开发岗位, UI设计岗位'
    }
  },

  '/privacy-policy': {
    ogImage: CLOUD_OG,
    robots: 'noindex, follow',
    en: {
      title: 'Privacy Policy | Global Delight',
      description: 'Global Delight Privacy Policy — how we collect, use, and protect your data across Boom, Capto, Vizmato, and Camera Plus apps.',
      keywords: 'Global Delight privacy policy, Boom privacy, Capto privacy'
    },
    de: {
      title: 'Datenschutzerklärung | Global Delight',
      description: 'Datenschutzerklärung von Global Delight: Erfahren Sie, wie wir Ihre Daten in Boom, Capto, Vizmato und unseren Diensten schützen.',
      keywords: 'Datenschutzerklärung Global Delight, Datenschutz'
    },
    it: {
      title: 'Informativa sulla Privacy | Global Delight',
      description: 'Informativa sulla privacy di Global Delight: protezione e trattamento responsabile dei dati personali degli utenti.',
      keywords: 'Privacy policy Global Delight, protezione dati'
    },
    ja: {
      title: 'プライバシーポリシー | Global Delight',
      description: 'Global Delightのプライバシーポリシー。Boom、Capto、Vizmatoにおける個人情報の安全な取り扱い方針について。',
      keywords: 'プライバシーポリシー Global Delight, 個人情報保護方針'
    },
    fr: {
      title: 'Politique de Confidentialité | Global Delight',
      description: 'Politique de confidentialité de Global Delight : protection et traitement de vos données sur Boom, Capto et Vizmato.',
      keywords: 'Politique de confidentialité Global Delight, données personnelles'
    },
    pt: {
      title: 'Política de Privacidade | Global Delight',
      description: 'Política de privacidade da Global Delight: como tratamos e protegemos seus dados com total segurança e respeito.',
      keywords: 'Política de privacidade Global Delight, proteção de dados'
    },
    es: {
      title: 'Política de Privacidad | Global Delight',
      description: 'Política de privacidad de Global Delight: compromiso con la protección y seguridad de los datos de todos los usuarios.',
      keywords: 'Política de privacidad Global Delight, seguridad de datos'
    },
    zh: {
      title: '隐私政策声明 | Global Delight',
      description: 'Global Delight 隐私政策——详细说明我们如何严格保护、安全收集与妥善管理用户的个人数据与隐私信息。',
      keywords: 'Global Delight 隐私政策, 用户隐私保护, 数据安全规范'
    }
  }
};

// Aliases for FAQ subpages and special routes
const FAQ_SUBPAGES = [
  'boom3dmac', 'boom3dmas', 'boom3dwin', 'audimixwin', 'boom2',
  'boomios', 'vizmato', 'captomac', 'captowin', 'audion'
];

FAQ_SUBPAGES.forEach(sub => {
  MASTER_SEO_TRANSLATIONS[`/faq/${sub}`] = {
    ogImage: CLOUD_OG,
    en: {
      title: `${sub.toUpperCase()} FAQ | Global Delight Help & Support`,
      description: `Frequently asked questions, troubleshooting, setup, and licensing details for ${sub.toUpperCase()}.`,
      keywords: `${sub} FAQ, ${sub} troubleshooting, Global Delight help`
    },
    de: {
      title: `${sub.toUpperCase()} FAQ | Global Delight Hilfe`,
      description: `Häufig gestellte Fragen, Einrichtung und Fehlerbehebung für ${sub.toUpperCase()}.`,
      keywords: `${sub} FAQ, ${sub} Hilfe, Fehlerbehebung`
    },
    it: {
      title: `FAQ ${sub.toUpperCase()} | Assistenza Global Delight`,
      description: `Domande frequenti, guida all'installazione e risoluzione problemi per ${sub.toUpperCase()}.`,
      keywords: `FAQ ${sub}, assistenza ${sub}, supporto`
    },
    ja: {
      title: `${sub.toUpperCase()} よくある質問 | Global Delight サポート`,
      description: `${sub.toUpperCase()}のインストール方法、機能設定、トラブルシューティングに関するFAQ。`,
      keywords: `${sub} FAQ, ${sub} サポート, トラブルシューティング`
    },
    fr: {
      title: `FAQ ${sub.toUpperCase()} | Assistance Global Delight`,
      description: `Questions fréquemment posées, configuration et résolution de problèmes pour ${sub.toUpperCase()}.`,
      keywords: `FAQ ${sub}, support ${sub}, aide`
    },
    pt: {
      title: `FAQ ${sub.toUpperCase()} | Suporte Global Delight`,
      description: `Perguntas frequentes, configuração e resolução de problemas para ${sub.toUpperCase()}.`,
      keywords: `FAQ ${sub}, suporte ${sub}, ajuda`
    },
    es: {
      title: `FAQ ${sub.toUpperCase()} | Soporte Global Delight`,
      description: `Preguntas frecuentes, instalación y resolución de problemas para ${sub.toUpperCase()}.`,
      keywords: `FAQ ${sub}, soporte ${sub}, ayuda`
    },
    zh: {
      title: `${sub.toUpperCase()} 常见问题与技术支持 | Global Delight`,
      description: `关于 ${sub.toUpperCase()} 的常见问题解答、安装激活指南与疑难解答。`,
      keywords: `${sub} FAQ, ${sub} 技术支持, 常见问题`
    }
  };
});

// Compile everything into a single flat map keyed by absolute route path
const compiled = {};

const langs = ['en', 'de', 'it', 'ja', 'fr', 'pt', 'es', 'zh'];

Object.keys(MASTER_SEO_TRANSLATIONS).forEach(basePath => {
  const pageDef = MASTER_SEO_TRANSLATIONS[basePath];
  const isBoomProduct = basePath === '/boom' || basePath === '/boom2' || basePath === '/boom3D';

  langs.forEach(lang => {
    let route;
    if (lang === 'en') {
      route = basePath;
    } else {
      route = basePath === '/' ? `/${lang}` : `/${lang}${basePath}`;
    }

    const t = pageDef[lang] || pageDef.en;
    const hreflangs = isBoomProduct ? BOOM_USER_HREFLANGS : makeStandardHreflangs(basePath);

    let canonicalUrl = t.canonicalUrl;
    if (!canonicalUrl) {
      canonicalUrl = lang === 'en' ? `${domain}${basePath}` : `${domain}/${lang}${basePath === '/' ? '' : basePath}`;
    }

    compiled[route] = {
      title: t.title,
      description: t.description,
      keywords: t.keywords || '',
      canonicalUrl: canonicalUrl,
      robots: pageDef.robots || 'index, follow',
      ogImage: pageDef.ogImage || CLOUD_OG,
      hreflangs: hreflangs,
      lang: lang,
      basePath: basePath
    };
  });
});

// Write to src/data/localizedSeoData.json
const outputPath = path.resolve(__dirname, '../src/data/localizedSeoData.json');
fs.writeFileSync(outputPath, JSON.stringify(compiled, null, 2), 'utf8');
console.log(`✅ Successfully compiled ${Object.keys(compiled).length} localized SEO routes into ${outputPath}`);
