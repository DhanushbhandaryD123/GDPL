import { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { FloatingSocials } from '../components/layout/FloatingSocials';
import { Search, Download, ExternalLink, Calendar, Newspaper, FolderArchive, Mail, Sparkles, Filter } from 'lucide-react';
import { motion } from 'motion/react';

interface PressRelease {
  id: string;
  year: number;
  date: string;
  title: string;
  url: string;
  category: 'Boom' | 'Capto' | 'AudiOn' | 'AuDimix' | 'Camera Plus' | 'Vizmato' | 'Company' | 'Voila' | 'Other';
}

const PRESS_RELEASES: PressRelease[] = [
  // 2025
  {
    id: 'pr-2025-1',
    year: 2025,
    date: '26/06/2025',
    title: 'Global Delight Introduces Headphone EQ for Boom 2',
    url: 'https://www.globaldelight.com/press-pages/2025/Global-Delight-Introduces-Headphone-EQ-for-Boom2.php',
    category: 'Boom',
  },
  {
    id: 'pr-2025-2',
    year: 2025,
    date: '06/02/2025',
    title: 'Boom 3D for Windows Has Introduced Two New Features: Find Your Perfect Sound',
    url: 'https://www.globaldelight.com/press-pages/2025/Boom3D-for-Windows-Has-Introduced-Two-New-Features.php',
    category: 'Boom',
  },

  // 2024
  {
    id: 'pr-2024-1',
    year: 2024,
    date: '25/09/2024',
    title: 'Capto is Now on Windows: The Ultimate Screen Capture & Recorder App',
    url: 'https://www.globaldelight.com/press-pages/2024/GlobalDelight-Screen-Capture-and-Recording-for-Windows-Capto.php',
    category: 'Capto',
  },
  {
    id: 'pr-2024-2',
    year: 2024,
    date: '08/07/2024',
    title: 'Global Delight brings Automatic Headphone EQ to Boom 3D',
    url: 'https://www.globaldelight.com/press-pages/2024/GlobalDelight-Automatic-Headphone-EQ-to-Boom3D.php',
    category: 'Boom',
  },
  {
    id: 'pr-2024-3',
    year: 2024,
    date: '05/07/2024',
    title: 'Global Delight Unveils Headphone EQ for Boom iOS',
    url: 'https://www.globaldelight.com/press-pages/2024/GlobalDelight-Unveils-Headphone-EQ-for-Boom-iOS.php',
    category: 'Boom',
  },
  {
    id: 'pr-2024-4',
    year: 2024,
    date: '06/06/2024',
    title: 'AudiOn Introduces Audio Transcription feature on Android',
    url: 'https://www.globaldelight.com/press-pages/2024/AudiOn-Introduces-Audio-Transcription-Feature-On-Android.php',
    category: 'AudiOn',
  },
  {
    id: 'pr-2024-5',
    year: 2024,
    date: '12/01/2024',
    title: 'Global Delight introduces AudiOn for Android: Transforming voice recordings',
    url: 'https://www.globaldelight.com/press-pages/2024/GlobalDelight-Introduces-AudiOn-For-Androi-Transforming-VoiceRecordings.php',
    category: 'AudiOn',
  },

  // 2023
  {
    id: 'pr-2023-1',
    year: 2023,
    date: '01/08/2023',
    title: 'Revolutionising Voice and Audio Recording: Introducing AudiOn - Your Ultimate Recording Companion on iOS by Global Delight',
    url: 'https://www.globaldelight.com/press-pages/2023/Revolutionising-Voice-And-Audio-Recording-Introducing-AudiOn.php',
    category: 'AudiOn',
  },
  {
    id: 'pr-2023-2',
    year: 2023,
    date: '24/04/2023',
    title: 'Makers of Boom, Global Delight have unveiled AuDimix, an Innovative Music Track Splitter App for Windows.',
    url: 'https://www.globaldelight.com/press-pages/2023/AuDimix-an-innovative-music-track-splitter-app-for-windows.php',
    category: 'AuDimix',
  },
  {
    id: 'pr-2023-3',
    year: 2023,
    date: '06/04/2023',
    title: 'Global Delight Introduces their 5.1 Audio Browser Extension For Netflix: A New Way to Enjoy Cinematic Sound on macOS',
    url: 'https://www.globaldelight.com/press-pages/2023/A-New-Way-toEnjoy-CinematicSound-on-macOS.php',
    category: 'Boom',
  },

  // 2022
  {
    id: 'pr-2022-1',
    year: 2022,
    date: '09/12/2022',
    title: 'Global Delight Unveils 5.1 support in Boom 3D Mac; The ultimate audio experience with 5.1 surround sound for Mac',
    url: 'https://www.globaldelight.com/press-pages/2022/The-ultimate-audio-experience-with-5-1-surround-sound-for-Mac.php',
    category: 'Boom',
  },
  {
    id: 'pr-2022-2',
    year: 2022,
    date: '01/07/2022',
    title: 'Boom for Android Adds Pitch Shift and Tempo Adjustment Features',
    url: 'https://www.globaldelight.com/press-pages/2022/Boom-for-Android-Adds-Pitch-Shift-and-Tempo-Adjustment-Features.php',
    category: 'Boom',
  },

  // 2021
  {
    id: 'pr-2021-1',
    year: 2021,
    date: '24/05/2021',
    title: "Boom 2's latest version offers unmatched audio control on macOS; Raises the bar on stereo output",
    url: 'https://www.globaldelight.com/press-pages/2021/boom2-latest-version-unmatched-audio-control.php',
    category: 'Boom',
  },
  {
    id: 'pr-2021-2',
    year: 2021,
    date: '27/04/2021',
    title: "Boom's latest update makes the App compatible with Apple CarPlay",
    url: 'https://www.globaldelight.com/press-pages/2021/TheAppCompatibleWithAppleCarPlay.php',
    category: 'Boom',
  },

  // 2018
  {
    id: 'pr-2018-1',
    year: 2018,
    date: '06/09/2018',
    title: 'Boom Brings Spotify and Tidal Streaming Services',
    url: 'https://www.globaldelight.com/press-pages/2018/boom-brings-spotify-tidal.php',
    category: 'Boom',
  },

  // 2017
  {
    id: 'pr-2017-1',
    year: 2017,
    date: '07/06/2017',
    title: 'Global Delight releases Boom 3D, powered by 3D Surround Sound, Redefining the Mac audio experience',
    url: 'https://www.globaldelight.com/press-pages/2017/globaldelight-releases-boom3d.php',
    category: 'Boom',
  },
  {
    id: 'pr-2017-2',
    year: 2017,
    date: '15/02/2017',
    title: 'Boom 2 Updated with new MacBook Pro Touch Bar Support and Audio Engine Refinements',
    url: 'https://www.globaldelight.com/press-pages/2017/boom2-support-new-macbook-touchbar.php',
    category: 'Boom',
  },

  // 2016
  {
    id: 'pr-2016-1',
    year: 2016,
    date: '22/11/2016',
    title: "New Update of Boom for iOS gives 'Power of Choice' to Music Lovers",
    url: 'https://www.globaldelight.com/press-pages/2016/boomforios-gives-power-of-choice-to-music-lovers.php',
    category: 'Boom',
  },
  {
    id: 'pr-2016-2',
    year: 2016,
    date: '21/09/2016',
    title: 'Capto - Tutorial Video Recording Highlights Capto Update',
    url: 'https://www.globaldelight.com/press-pages/2016/tutorial-video-recording-highlights-capto-update',
    category: 'Capto',
  },
  {
    id: 'pr-2016-3',
    year: 2016,
    date: '12/08/2016',
    title: 'Boom- The Audio Enhancing App for iOS Now At 60% off',
    url: 'https://www.globaldelight.com/press-pages/2016/boom-the-audio-enhancing-app-for-iOS-now-at-60-off',
    category: 'Boom',
  },
  {
    id: 'pr-2016-4',
    year: 2016,
    date: '09/05/2016',
    title: 'Introducing Boom for iOS – A Music Player That Transforms Audio Over Headphones',
    url: 'https://www.globaldelight.com/press-pages/2016/introducing-boom-for-ios',
    category: 'Boom',
  },
  {
    id: 'pr-2016-5',
    year: 2016,
    date: '06/05/2016',
    title: "Camera Plus 4.5 Update, Tumblr Share Button and FreePrints Offer and Compatibility-Apple's Free App of the Week!",
    url: 'https://www.globaldelight.com/press-pages/2016/camera-plus-apples-free-app-of-the-week',
    category: 'Camera Plus',
  },
  {
    id: 'pr-2016-6',
    year: 2016,
    date: '27/04/2016',
    title: "'Capto' – A New Screen Capture App That Combines Powerful Video Recording and Editing",
    url: 'https://www.globaldelight.com/press-pages/2016/capto-a-new-screen-capture-app-that-combines-powerful-video-recording-and-editing',
    category: 'Capto',
  },
  {
    id: 'pr-2016-7',
    year: 2016,
    date: '06/01/2016',
    title: 'Global Delight Re-brands Acclaimed Mobile Movie Editor App "Game Your Video" as "Vizmato"',
    url: 'https://www.globaldelight.com/press-pages/2016/global-delight-re-brands-acclaimed-mobile-movie-editor-app-game-your-video-as-vizmato',
    category: 'Vizmato',
  },

  // 2015
  {
    id: 'pr-2015-1',
    year: 2015,
    date: '14/09/2015',
    title: 'Boom 2 (v1.3) Brings Three New Audio Effects & Full VoiceOver Assistance',
    url: 'https://www.globaldelight.com/press-pages/2015/boom-2-v1_3-brings-three-new-audio-effects-full-VoiceOver-assistance',
    category: 'Boom',
  },
  {
    id: 'pr-2015-2',
    year: 2015,
    date: '02/09/2015',
    title: 'Global Delight opens a USA outlet and appoints VP and CTO for further growth.',
    url: 'https://www.globaldelight.com/press-pages/2015/global-delight-opens-office-in-us',
    category: 'Company',
  },

  // 2014
  {
    id: 'pr-2014-1',
    year: 2014,
    date: '14/07/2014',
    title: 'Admissions Open For Rad School – Contests, Discounts and Giveaways Galore!',
    url: 'https://www.globaldelight.com/press-pages/2014/the-2014-rad-school-offer',
    category: 'Company',
  },
  {
    id: 'pr-2014-2',
    year: 2014,
    date: '25/05/2014',
    title: 'Camera Plus 3.6 Update: AirSnap Gets Live Preview Function',
    url: 'https://www.globaldelight.com/press-pages/2014/global-delight-releases-camera-plus-with-live-preview-for-airsnap',
    category: 'Camera Plus',
  },
  {
    id: 'pr-2014-3',
    year: 2014,
    date: '20/03/2014',
    title: 'Camera Plus with AirSnap – Remote Second Screen Captures With Apple® iOS Devices',
    url: 'https://www.globaldelight.com/press-pages/2014/global-delight-releases-camera-plus-with-airsnap',
    category: 'Camera Plus',
  },
  {
    id: 'pr-2014-4',
    year: 2014,
    date: '13/03/2014',
    title: 'Camera Plus Pro 5.0 – All New Looks For The Pro Photographer In You',
    url: 'https://www.globaldelight.com/press-pages/2014/global-delight-releases-camera-plus-pro-v5',
    category: 'Camera Plus',
  },
  {
    id: 'pr-2014-5',
    year: 2014,
    date: '06/02/2014',
    title: 'Global Delight releases Voila 3.7 screen recording tool with HD video recording',
    url: 'https://www.globaldelight.com/press-pages/2014/global-delight-releases-voila-3-7',
    category: 'Voila',
  },

  // 2013
  {
    id: 'pr-2013-1',
    year: 2013,
    date: '12/12/2013',
    title: 'Camera Plus 3.1 – Transform Pictures With Filters And Captions',
    url: 'https://www.globaldelight.com/press-pages/2013/global-delight-releases-camera-plus-3-1',
    category: 'Camera Plus',
  },
  {
    id: 'pr-2013-2',
    year: 2013,
    date: '18/10/2013',
    title: 'Camera Plus 3.0 – The Best iPhone Camera App Just Got Better!',
    url: 'https://www.globaldelight.com/press-pages/2013/global-delight-releases-camera-plus-3-0',
    category: 'Camera Plus',
  },
  {
    id: 'pr-2013-3',
    year: 2013,
    date: '14/08/2013',
    title: 'Global Delight releases Voila v3.5 Mac screen capture tool',
    url: 'https://www.globaldelight.com/press-pages/2013/voila-sharing-enhancements',
    category: 'Voila',
  },
  {
    id: 'pr-2013-4',
    year: 2013,
    date: '08/05/2013',
    title: 'Global Delight announces "Back to School": upto 50% off on Boom & Voila',
    url: 'https://www.globaldelight.com/press-pages/2013/global-delight-announces-back-to-school-half-off-sale',
    category: 'Company',
  },
  {
    id: 'pr-2013-5',
    year: 2013,
    date: '15/05/2013',
    title: 'Camera Plus Pro brings sharing on Instagram and Tumblr',
    url: 'https://www.globaldelight.com/press-pages/2013/camera-plus-pro-update-allows-you-to-share-on-instagram-and-tumblr',
    category: 'Camera Plus',
  },
  {
    id: 'pr-2013-6',
    year: 2013,
    date: '17/04/2013',
    title: 'Game Your Video v2.1 takes personalized video storytelling to the next level by adding beautiful typography to videos.',
    url: 'https://www.globaldelight.com/press-pages/2013/game-your-video-text-feature-release',
    category: 'Vizmato',
  },
  {
    id: 'pr-2013-7',
    year: 2013,
    date: '12/03/2013',
    title: 'Global Delight Releases New Version of Voila for Mac',
    url: 'https://www.globaldelight.com/press-pages/2013/updates-for-voila-and-boom',
    category: 'Voila',
  },
  {
    id: 'pr-2013-8',
    year: 2013,
    date: '25/01/2013',
    title: 'Global Delight releases Game Your Video 2.0, iPhone video app gets new video flavors, UI and goes free forever',
    url: 'https://www.globaldelight.com/press-pages/2013/game-your-video-v2-release',
    category: 'Vizmato',
  },

  // 2012
  {
    id: 'pr-2012-1',
    year: 2012,
    date: '18/12/2012',
    title: "'Appy Christmas: Global Delight's all apps on sale for Holidays and a chance to win an iPad mini.",
    url: 'https://www.globaldelight.com/press-pages/2012/holiday-offer-and-christmas-sale',
    category: 'Company',
  },
  {
    id: 'pr-2012-2',
    year: 2012,
    date: '27/11/2012',
    title: 'Camera Plus Pro v4.5 is now iPhone 5 and iOS 6-ready with new focus lock integration and low-light support',
    url: 'https://www.globaldelight.com/press-pages/2012/camera-plus-pro-iphone-ready',
    category: 'Camera Plus',
  },
  {
    id: 'pr-2012-3',
    year: 2012,
    date: '15/11/2012',
    title: 'Boom gets a Retina-Boost, brings videos to life for MacBook Pro lovers',
    url: 'https://www.globaldelight.com/press-pages/2012/boom-gets-retina-boost',
    category: 'Boom',
  },
  {
    id: 'pr-2012-4',
    year: 2012,
    date: '26/10/2012',
    title: 'This Halloween make Spooktacular videos on your iPhone',
    url: 'https://www.globaldelight.com/press-pages/2012/gameyourvideo-halloween-contest',
    category: 'Vizmato',
  },
  {
    id: 'pr-2012-5',
    year: 2012,
    date: '15/08/2012',
    title: 'Photo Delight v2.0 for iPad gets a revamp, a gorgeous UI and Retina support',
    url: 'https://www.globaldelight.com/press-pages/2012/photodelight-version2-for-ipad',
    category: 'Other',
  },
  {
    id: 'pr-2012-6',
    year: 2012,
    date: '14/08/2012',
    title: 'Mac Lovers Make Mountain Lion Go Boom',
    url: 'https://www.globaldelight.com/press-pages/2012/boom-mas-compatible-with-mountain-lion',
    category: 'Boom',
  },
  {
    id: 'pr-2012-7',
    year: 2012,
    date: '25/07/2012',
    title: 'Boom, Voila Mac apps are Mountain Lion ready and on sale',
    url: 'https://www.globaldelight.com/press-pages/2012/boom-voila-compatible-with-mountain-lion',
    category: 'Boom',
  },
  {
    id: 'pr-2012-8',
    year: 2012,
    date: '26/01/2012',
    title: 'Global Delight releases Game your Video - Stop Editing Videos, Start Gaming',
    url: 'https://www.globaldelight.com/press-pages/2012/gameyourvideo-stop-editing-start-gaming',
    category: 'Vizmato',
  },

  // 2011
  {
    id: 'pr-2011-1',
    year: 2011,
    date: '19/12/2011',
    title: 'Camera Plus Pro Turns 2: Celebrating it with Live Flash for iPod touch and iPhone 3GS',
    url: 'https://www.globaldelight.com/press-pages/2011/camerapluspro-turns-two',
    category: 'Camera Plus',
  },
  {
    id: 'pr-2011-2',
    year: 2011,
    date: '18/11/2011',
    title: 'Global Delight Releases an Updated Version of Voila Screen Capture Software and Boom Volume Booster and Announces a Special Holiday Offer!',
    url: 'https://www.globaldelight.com/press-pages/2011/Global-Delight-Holiday-Offer',
    category: 'Company',
  },
  {
    id: 'pr-2011-3',
    year: 2011,
    date: '30/09/2011',
    title: 'Camera Plus Pro v4.0 revolutionizes iPhoneography with Live Filters for Photos and Videos.',
    url: 'https://www.globaldelight.com/press-pages/2011/camerapluspro-with-live-photo-and-video-filters',
    category: 'Camera Plus',
  },
  {
    id: 'pr-2011-4',
    year: 2011,
    date: '20/07/2011',
    title: 'Global Delight Releases the Updated Version of Voila Screen Capture Software compatible with Mac OS 10.7 aka Lion.',
    url: 'https://www.globaldelight.com/press-pages/2011/Voila-For-LionOS',
    category: 'Voila',
  },
  {
    id: 'pr-2011-5',
    year: 2011,
    date: '17/06/2011',
    title: 'Boom One-Click Volume Booster for Mac now Available on the Mac App Store',
    url: 'https://www.globaldelight.com/press-pages/2011/Boom-Mac-App-Store',
    category: 'Boom',
  },
  {
    id: 'pr-2011-6',
    year: 2011,
    date: '12/05/2011',
    title: 'Camera Plus Pro Upgraded With 21 New Photo Filters And 9 Distortion Effects; And Announces Metamorphosis, An iPhoneography Contest With An iPad 2 To Win!',
    url: 'https://www.globaldelight.com/press-pages/2011/camerapluspro-effects-update',
    category: 'Camera Plus',
  },
  {
    id: 'pr-2011-7',
    year: 2011,
    date: '31/03/2011',
    title: 'Boom Volume Booster App gets a Boost with the Video Boosting feature, other Major Improvements and a fun Application for Facebook.',
    url: 'https://www.globaldelight.com/press-pages/2011/Boom-version-update',
    category: 'Boom',
  },
  {
    id: 'pr-2011-8',
    year: 2011,
    date: '04/03/2011',
    title: 'Camera Plus Pro updated with 9 attractive photo borders, 18 new photo effects for iPhone 3G and gesture support for better Editing experience.',
    url: 'https://www.globaldelight.com/press-pages/2011/Camera-Plus-Pro-updated-with-9-attractive-photo-borders',
    category: 'Camera Plus',
  },
  {
    id: 'pr-2011-9',
    year: 2011,
    date: '27/01/2011',
    title: 'Boom – Volume booster for your Mac and Music',
    url: 'https://www.globaldelight.com/press-pages/2011/Boom%E2%80%93Volume-booster-for-your-Mac-and-Music',
    category: 'Boom',
  },
  {
    id: 'pr-2011-10',
    year: 2011,
    date: '10/01/2011',
    title: 'Camera Plus Pro for iPhone Adds 27 Photo Effects and Exposure Control',
    url: 'https://www.globaldelight.com/press-pages/2011/Camera-Plus-Pro-Adds-27-Photo-Effects-and-Exposure-Control',
    category: 'Camera Plus',
  },
  {
    id: 'pr-2011-11',
    year: 2011,
    date: '06/01/2011',
    title: 'Global Delight Announces Voila Screen Capture And Video Recording Software For Mac App Store',
    url: 'https://www.globaldelight.com/press-pages/2011/Voila-For-Mac-App-Store',
    category: 'Voila',
  },

  // 2010
  {
    id: 'pr-2010-1',
    year: 2010,
    date: '21/12/2010',
    title: 'Camera Plus Pro – A Perfect Gift For Your iPhone Camera',
    url: 'https://www.globaldelight.com/press-pages/2010/Camera-Plus-Pro-A-Perfect-Gift-For-Your-iPhone-Camera',
    category: 'Camera Plus',
  },
  {
    id: 'pr-2010-2',
    year: 2010,
    date: '18/12/2010',
    title: "Photo Delight for iPad – Don't worry about crossing lines",
    url: 'https://www.globaldelight.com/press-pages/2010/Photo-Delight-for-iPad-Dont-worry-about-crossing-lines',
    category: 'Other',
  },
  {
    id: 'pr-2010-3',
    year: 2010,
    date: '15/11/2010',
    title: 'Photo Delight for iPad - Color splashing on the Facebook photos and AirPrint features',
    url: 'https://www.globaldelight.com/press-pages/2010/photo-delight-for-ipad',
    category: 'Other',
  },
  {
    id: 'pr-2010-4',
    year: 2010,
    date: '27/10/2010',
    title: 'Global Delight releases Camera Plus Pro v2.6 with iPod touch compatibility and announces a Halloween Contest',
    url: 'https://www.globaldelight.com/press-pages/2010/Camera-Plus-Prov2pt6-and-Halloween-Contest',
    category: 'Camera Plus',
  },
  {
    id: 'pr-2010-5',
    year: 2010,
    date: '08/04/2010',
    title: 'Camera Plus now supports Video Recording on 2G, 3G and 3GS through In App purchase',
    url: 'https://www.globaldelight.com/press-pages/2010/Camera-Plus-supports-Video-Recording-through-In-App-purchase',
    category: 'Camera Plus',
  },
  {
    id: 'pr-2010-6',
    year: 2010,
    date: '31/03/2010',
    title: 'Voila v3.0, the most advanced Mac Screen Capture Software, with more than 40 new features released',
    url: 'https://www.globaldelight.com/press-pages/2010/voila-v3pt0-released',
    category: 'Voila',
  },
  {
    id: 'pr-2010-7',
    year: 2010,
    date: '26/02/2010',
    title: 'Camera Plus Pro, an all-in-one Camera App, released with Video Recording Capabilities for iPhone 2G, 3G and 3GS',
    url: 'https://www.globaldelight.com/press-pages/2010/camera-plus-pro-ver-2pt0-released',
    category: 'Camera Plus',
  },
  {
    id: 'pr-2010-8',
    year: 2010,
    date: '12/02/2010',
    title: 'Global Delight announces the release of Voila v3.0, the most advanced Mac Screen Capture tool',
    url: 'https://www.globaldelight.com/press-pages/2010/voila-v3pt0-released',
    category: 'Voila',
  },
  {
    id: 'pr-2010-9',
    year: 2010,
    date: '12/02/2010',
    title: 'Global Delight confirms Video-Recording feature in the next version of Camera Plus Pro',
    url: 'https://www.globaldelight.com/press-pages/2010/camera-plus-pro-video-recording',
    category: 'Camera Plus',
  },

  // 2009
  {
    id: 'pr-2009-1',
    year: 2009,
    date: '18/12/2009',
    title: 'Global Delight releases Camera Plus Pro, a feature-rich Camera app for the iPhone',
    url: 'https://www.globaldelight.com/press-pages/2009/CameraPlusPro-a-feature-rich-Camera-app-for-the-iPhone',
    category: 'Camera Plus',
  },
  {
    id: 'pr-2009-2',
    year: 2009,
    date: '18/11/2009',
    title: 'Global Delight releases Voila screen-capture version 2.5',
    url: 'https://www.globaldelight.com/press-pages/2009/voila-2pt5-released',
    category: 'Voila',
  },
  {
    id: 'pr-2009-3',
    year: 2009,
    date: '05/11/2009',
    title: 'Global Delight releases Charm, an interesting mind-reader application for the iPhone/iPod touch',
    url: 'https://www.globaldelight.com/press-pages/2009/Charm-an-interesting-mind-reader-app',
    category: 'Other',
  },
  {
    id: 'pr-2009-4',
    year: 2009,
    date: '28/08/2009',
    title: 'Global Delight releases Wisen Up, a fun app with personality quizzes, funny facts and more',
    url: 'https://www.globaldelight.com/press-pages/2009/WisenUp',
    category: 'Other',
  },
  {
    id: 'pr-2009-5',
    year: 2009,
    date: '30/06/2009',
    title: 'Global Delight product is featured at the TheMacBundles promotion',
    url: 'https://www.globaldelight.com/press-pages/2009/themacbundles-promotion-of-voila',
    category: 'Company',
  },
  {
    id: 'pr-2009-6',
    year: 2009,
    date: '12/06/2009',
    title: 'Voila from Global Delight makes into the 2009 Macworld Awards finals',
    url: 'https://www.globaldelight.com/press-pages/2009/voila-macworld-award-finalists',
    category: 'Voila',
  },
  {
    id: 'pr-2009-7',
    year: 2009,
    date: '04/05/2009',
    title: 'Voila upgraded with webpage and webcam captures, image organizer and additional annotations',
    url: 'https://www.globaldelight.com/press-pages/2009/voila-ver-2pt0-released',
    category: 'Voila',
  },
  {
    id: 'pr-2009-8',
    year: 2009,
    date: '18/03/2009',
    title: 'Global Delight Releases WordDigest English Dictionary, Thesaurus and Spell Checker for iPhone™',
    url: 'https://www.globaldelight.com/press-pages/2009/worddigest-released',
    category: 'Other',
  },
  {
    id: 'pr-2009-9',
    year: 2009,
    date: '04/03/2009',
    title: 'Voila screen capture v1.1 is released with new features',
    url: 'https://www.globaldelight.com/press-pages/2009/voila-screen-capture-1pt1-released',
    category: 'Voila',
  },
  {
    id: 'pr-2009-10',
    year: 2009,
    date: '05/01/2009',
    title: 'Global Delight Announces the Release of Voila at Macworld Conference and Expo 2009',
    url: 'https://www.globaldelight.com/press-pages/2009/voila-at-macworld',
    category: 'Voila',
  },

  // 2008
  {
    id: 'pr-2008-1',
    year: 2008,
    date: '13/12/2008',
    title: 'Global Delight announces Public Beta of its image capture and annotating tool-Voila',
    url: 'https://www.globaldelight.com/press-pages/2008/voila-public-beta-released',
    category: 'Voila',
  },
  {
    id: 'pr-2008-2',
    year: 2008,
    date: '02/12/2008',
    title: "Global Delight Exhibiting at Macworld Expo '09",
    url: 'https://www.globaldelight.com/press-pages/2008/gd-at-macworld-expo-09',
    category: 'Company',
  },
  {
    id: 'pr-2008-3',
    year: 2008,
    date: '02/09/2008',
    title: 'Web2 Delight 1.5 released with 25 New features',
    url: 'https://www.globaldelight.com/press-pages/2008/w2d-1pt5-released',
    category: 'Other',
  },
  {
    id: 'pr-2008-4',
    year: 2008,
    date: '12/05/2008',
    title: 'Web2 Delight 1.1 Released',
    url: 'https://www.globaldelight.com/press-pages/2008/w2d-1pt1-released',
    category: 'Other',
  },
  {
    id: 'pr-2008-5',
    year: 2008,
    date: '31/03/2008',
    title: 'Web2 Delight 1.0 Released',
    url: 'https://www.globaldelight.com/press-pages/2008/w2d-1pt0-released',
    category: 'Other',
  },
  {
    id: 'pr-2008-6',
    year: 2008,
    date: '11/03/2008',
    title: 'Public Beta 2 of Web2 Delight Announced',
    url: 'https://www.globaldelight.com/press-pages/2008/public-beta2-of-w2d',
    category: 'Other',
  },
];

interface PressKitItem {
  platform: 'Mac' | 'Windows' | 'iOS' | 'Android';
  appName: string;
  url: string;
  type: 'pdf' | 'zip' | 'link';
  desc: string;
}

const PRESS_KITS: PressKitItem[] = [
  // Mac Apps
  {
    platform: 'Mac',
    appName: 'Boom 3D',
    url: 'https://www.globaldelight.com/press/Boom3DPressKit.pdf',
    type: 'pdf',
    desc: 'Complete press kit, high-res screenshots, features guide, and brand guidelines for Boom 3D Mac.',
  },
  {
    platform: 'Mac',
    appName: 'Boom 2',
    url: 'https://www.globaldelight.com/press/Boom2_Press_Guide.pdf',
    type: 'pdf',
    desc: 'Boom 2 Mac audio enhancement press guide, technical overview, and assets.',
  },
  {
    platform: 'Mac',
    appName: 'Capto',
    url: 'https://www.globaldelight.com/press/Capto_PressKit.zip',
    type: 'zip',
    desc: 'Capto Mac screen recorder press kit, product imagery, and reviewer documentation.',
  },

  // Windows Apps
  {
    platform: 'Windows',
    appName: 'Boom 3D',
    url: 'https://www.globaldelight.com/press/Boom3DPressKit.pdf',
    type: 'pdf',
    desc: 'Boom 3D Windows press kit with system sound boosting features and 3D audio assets.',
  },
  {
    platform: 'Windows',
    appName: 'AuDimix',
    url: 'https://www.globaldelight.com/press/AuDimixPresskit.pdf',
    type: 'pdf',
    desc: 'AuDimix AI stem splitter & vocal remover press guide and product mockups for Windows.',
  },
  {
    platform: 'Windows',
    appName: 'Capto for Windows',
    url: 'https://www.globaldelight.com/press/Capto_Windows_PressKit.pdf',
    type: 'pdf',
    desc: 'Capto Windows 4K screen capture & recording press kit with screenshots and guide.',
  },

  // iOS Apps
  {
    platform: 'iOS',
    appName: 'Boom for iOS',
    url: 'https://www.globaldelight.com/press/Boom_iOS_Press_Kit.zip',
    type: 'zip',
    desc: 'Boom mobile 3D surround sound music player press assets and app screenshots.',
  },
  {
    platform: 'iOS',
    appName: 'Vizmato',
    url: 'https://www.vizmato.com/website/',
    type: 'link',
    desc: 'Official Vizmato mobile video editor press resources and product website.',
  },
  {
    platform: 'iOS',
    appName: 'AudiOn',
    url: 'https://www.globaldelight.com/press/AudiOn-Press-Guide.pdf',
    type: 'pdf',
    desc: 'AudiOn iOS studio-quality voice recorder & audio editor review guide.',
  },
  {
    platform: 'iOS',
    appName: 'Camera Plus',
    url: 'https://www.globaldelight.com/press/Camera_Plus_4_Review_Guide.pdf',
    type: 'pdf',
    desc: 'Camera Plus review guide with AirSnap wireless capture details and product photos.',
  },
  {
    platform: 'iOS',
    appName: 'Camera Plus Pro',
    url: 'https://www.globaldelight.com/press/Camera_Plus_Pro_5_Review_Guide.pdf',
    type: 'pdf',
    desc: 'Camera Plus Pro DSLR camera app reviewer guide and RAW capture assets.',
  },

  // Android Apps
  {
    platform: 'Android',
    appName: 'Boom for Android',
    url: 'https://www.globaldelight.com/press/Boom_Android_PressKit_June2020.zip',
    type: 'zip',
    desc: 'Boom Android music player press kit with screenshots and technical overview.',
  },
  {
    platform: 'Android',
    appName: 'Vizmato',
    url: 'https://www.vizmato.com/website/',
    type: 'link',
    desc: 'Vizmato Android video editor press portal and media resources.',
  },
  {
    platform: 'Android',
    appName: 'AudiOn for Android',
    url: 'https://www.globaldelight.com/press/AudiOn-Press-Guide.pdf',
    type: 'pdf',
    desc: 'AudiOn Android transcription and audio recording press documentation.',
  },
];

export function PressInfo() {
  const [activeTab, setActiveTab] = useState<'releases' | 'kits'>('releases');
  const [selectedYear, setSelectedYear] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPlatform, setSelectedPlatform] = useState<string>('All');

  const years = ['All', '2025', '2024', '2023', '2022', '2021', '2018', '2017', '2016', '2015', '2014', '2013', '2012', '2011', '2010', '2009', '2008'];

  // Filter press releases
  const filteredReleases = useMemo(() => {
    return PRESS_RELEASES.filter((pr) => {
      const matchYear = selectedYear === 'All' || pr.year.toString() === selectedYear;
      const matchSearch =
        searchQuery.trim() === '' ||
        pr.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pr.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pr.date.includes(searchQuery);
      return matchYear && matchSearch;
    });
  }, [selectedYear, searchQuery]);

  // Group by year
  const groupedReleases = useMemo(() => {
    const map = new Map<number, PressRelease[]>();
    for (const pr of filteredReleases) {
      if (!map.has(pr.year)) map.set(pr.year, []);
      map.get(pr.year)!.push(pr);
    }
    // Sort years descending
    return Array.from(map.entries()).sort((a, b) => b[0] - a[0]);
  }, [filteredReleases]);

  // Filter press kits
  const filteredKits = useMemo(() => {
    return PRESS_KITS.filter((kit) => {
      return selectedPlatform === 'All' || kit.platform === selectedPlatform;
    });
  }, [selectedPlatform]);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans flex flex-col selection:bg-[#4F46E5] selection:text-white">
      <Helmet>
        <title>Press Releases & Media Kits | Global Delight</title>
        <meta
          name="description"
          content="Explore Global Delight's official press releases archive and download press kits, reviewer guides, and high-res brand media for Boom 3D, Capto, AudiOn, and AuDimix."
        />
        <meta
          name="keywords"
          content="Global Delight press releases, Boom 3D press kit, Capto review guide, AudiOn press release, media inquiries, Global Delight news"
        />
        <link rel="canonical" href="https://gdpl-six.vercel.app/press-info" />
      </Helmet>

      <Navbar />
      <FloatingSocials />

      <main className="flex-grow">
        {/* =========================================
            HERO SECTION
            ========================================= */}
        <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-[#0c0c14] text-white overflow-hidden">
          {/* Ambient Glows */}
          <div className="absolute top-0 left-1/4 w-[600px] h-[450px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-[600px] h-[450px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />

          {/* Grid Background Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

          <div className="max-w-[1240px] mx-auto px-6 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md mb-6"
            >
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-medium text-purple-200">Global Delight Media Center</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6"
            >
              Press Releases & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-pink-400">Media Kits</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-10 font-normal"
            >
              Welcome to the official press room of Global Delight. Discover our milestone product launches, feature updates, and download high-resolution press kits.
            </motion.p>

            {/* Quick Tab Switcher */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="inline-flex items-center p-1.5 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-md"
            >
              <button
                onClick={() => setActiveTab('releases')}
                className={`flex items-center gap-2.5 px-6 py-3 rounded-xl font-semibold text-sm transition-all ${
                  activeTab === 'releases'
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                <Newspaper className="w-4 h-4" />
                Press Releases ({PRESS_RELEASES.length})
              </button>
              <button
                id="press-kits-tab"
                onClick={() => setActiveTab('kits')}
                className={`flex items-center gap-2.5 px-6 py-3 rounded-xl font-semibold text-sm transition-all ${
                  activeTab === 'kits'
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                <FolderArchive className="w-4 h-4" />
                Press Kits & Media Assets ({PRESS_KITS.length})
              </button>
            </motion.div>
          </div>
        </section>

        {/* =========================================
            PRESS RELEASES TAB
            ========================================= */}
        {activeTab === 'releases' && (
          <section className="py-16 md:py-24 bg-gray-50/50">
            <div className="max-w-[1240px] mx-auto px-6">
              {/* Search & Filter Bar */}
              <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 mb-12 flex flex-col lg:flex-row items-center justify-between gap-6">
                {/* Search Bar */}
                <div className="relative w-full lg:w-96">
                  <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search press releases or products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-11 pr-4 py-3 bg-gray-50 rounded-2xl border border-gray-200/80 text-sm focus:outline-none focus:border-indigo-500 focus:bg-white transition-all"
                  />
                </div>

                {/* Year Filter Pills */}
                <div className="flex items-center gap-2 overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0 scrollbar-none">
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider flex items-center gap-1 shrink-0 mr-1">
                    <Filter className="w-3.5 h-3.5" /> Year:
                  </span>
                  {years.map((year) => (
                    <button
                      key={year}
                      onClick={() => setSelectedYear(year)}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 ${
                        selectedYear === year
                          ? 'bg-gray-900 text-white shadow-sm'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {year}
                    </button>
                  ))}
                </div>
              </div>

              {/* Releases Grouped by Year */}
              {groupedReleases.length === 0 ? (
                <div className="text-center py-16 bg-white rounded-3xl border border-gray-100 p-8">
                  <p className="text-lg text-gray-500 font-medium">No press releases found matching your search.</p>
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedYear('All');
                    }}
                    className="mt-4 px-5 py-2 rounded-xl bg-gray-900 text-white text-sm font-semibold hover:bg-black"
                  >
                    Clear Filters
                  </button>
                </div>
              ) : (
                <div className="space-y-14">
                  {groupedReleases.map(([year, releases]) => (
                    <div key={year} className="relative">
                      {/* Year Section Header */}
                      <div className="flex items-center gap-4 mb-6">
                        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight flex items-center gap-3">
                          <span className="w-3 h-8 rounded-full bg-gradient-to-b from-blue-600 to-indigo-600" />
                          Year {year}
                        </h2>
                        <div className="flex-grow h-px bg-gray-200" />
                        <span className="text-xs font-bold text-gray-400 bg-white px-3 py-1 rounded-full border border-gray-200">
                          {releases.length} {releases.length === 1 ? 'Release' : 'Releases'}
                        </span>
                      </div>

                      {/* Release Cards Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {releases.map((pr) => (
                          <motion.a
                            key={pr.id}
                            href={pr.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3 }}
                            className="group relative rounded-2xl p-6 bg-white border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_35px_rgba(59,130,246,0.1)] hover:border-indigo-200 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                          >
                            <div>
                              <div className="flex items-center justify-between gap-3 mb-3.5">
                                <div className="flex items-center gap-2 text-xs font-semibold text-gray-500">
                                  <Calendar className="w-3.5 h-3.5 text-indigo-500" />
                                  <span>{pr.date}</span>
                                </div>
                                <span className="text-[11px] font-bold px-2.5 py-1 rounded-lg bg-indigo-50 text-indigo-600 border border-indigo-100">
                                  {pr.category}
                                </span>
                              </div>

                              <h3 className="text-base md:text-lg font-bold text-gray-900 group-hover:text-indigo-600 transition-colors leading-snug">
                                {pr.title}
                              </h3>
                            </div>

                            <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-gray-500 group-hover:text-indigo-600">
                              <span>Read full press release</span>
                              <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </div>
                          </motion.a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        )}

        {/* =========================================
            PRESS KITS TAB
            ========================================= */}
        {activeTab === 'kits' && (
          <section className="py-16 md:py-24 bg-gray-50/50">
            <div className="max-w-[1240px] mx-auto px-6">
              {/* Platform Filter */}
              <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 mb-12 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Download Official Media Kits</h2>
                  <p className="text-sm text-gray-500">High-resolution logos, product screenshots, and official reviewer guides.</p>
                </div>
                <div className="flex items-center gap-2">
                  {['All', 'Mac', 'Windows', 'iOS', 'Android'].map((platform) => (
                    <button
                      key={platform}
                      onClick={() => setSelectedPlatform(platform)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                        selectedPlatform === platform
                          ? 'bg-gray-900 text-white shadow-sm'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {platform}
                    </button>
                  ))}
                </div>
              </div>

              {/* Press Kits Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                {filteredKits.map((kit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="group rounded-3xl p-7 bg-white border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <span
                          className={`text-xs font-bold px-3 py-1 rounded-full ${
                            kit.platform === 'Mac'
                              ? 'bg-gray-100 text-gray-800'
                              : kit.platform === 'Windows'
                              ? 'bg-blue-50 text-blue-700'
                              : kit.platform === 'iOS'
                              ? 'bg-purple-50 text-purple-700'
                              : 'bg-emerald-50 text-emerald-700'
                          }`}
                        >
                          {kit.platform} Apps
                        </span>
                        <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                          {kit.type.toUpperCase()}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-2">{kit.appName}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed font-normal mb-6">{kit.desc}</p>
                    </div>

                    <a
                      href={kit.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-gray-900 hover:bg-black text-white text-sm font-semibold transition-all group-hover:shadow-md"
                    >
                      <Download className="w-4 h-4" />
                      Download {kit.type === 'link' ? 'Media Page' : 'Press Kit'}
                    </a>
                  </motion.div>
                ))}
              </div>

              {/* Media Inquiries Banner */}
              <div className="rounded-3xl p-8 md:p-12 bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-950 text-white relative overflow-hidden shadow-xl">
                <div className="absolute -right-16 -top-16 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
                <div className="relative z-10 max-w-2xl">
                  <h3 className="text-2xl md:text-3xl font-bold mb-3">Media & Press Inquiries</h3>
                  <p className="text-blue-100 text-base leading-relaxed mb-6 font-normal">
                    Are you a journalist, reviewer, or content creator looking for review licenses, executive interviews, or exclusive media assets?
                  </p>
                  <a
                    href="mailto:pr@globaldelight.com"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-gray-900 font-bold text-sm hover:bg-blue-50 transition-colors shadow-lg"
                  >
                    <Mail className="w-4 h-4 text-blue-600" />
                    Contact PR Team (pr@globaldelight.com)
                  </a>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
export default PressInfo;
