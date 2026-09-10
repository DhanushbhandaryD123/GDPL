export interface PressArticle {
  id: string;
  year: number;
  slug: string;
  cleanUrl: string;
  seoTitle: string;
  seoDescription: string;
  headline: string;
  subheadline: string;
  dateline: string;
  category: string;
  date: string;
  bodyParagraphs: string[];
  highlightsTitle?: string;
  highlights?: string[];
  requirements?: string;
  pricingAvailability?: string;
  aboutText: string;
  contact: {
    name: string;
    email: string;
    phone: string;
    fax?: string;
  };
}

export const PRESS_ARTICLES_LIST: PressArticle[] = [
  {
    id: 'pr-2008-4',
    year: 2008,
    slug: 'w2d-1pt1-released',
    cleanUrl: '/press-pages/2008/w2d-1pt1-released',
    seoTitle: 'Web2 Delight 1.1 Released | Global Delight',
    seoDescription: 'Global Delight releases Web2 Delight 1.1 with UI improvements, performance optimizations, easier transfers, and enhanced Flickr Creative Commons search.',
    headline: 'Web2 Delight 1.1 Released',
    subheadline: 'UI tweaks to enhance user experience enrich this must-have utility!',
    dateline: 'NEW UDUPI, India, May 12, 2008',
    category: 'Other',
    date: '12/05/2008',
    bodyParagraphs: [
      'Global Delight releases minor updates to their must-have utility Web2 Delight. This release includes several UI tweaks as well as size/performance optimizations.',
      'The first release of Web2 Delight has been well received. Over 30,000 people have downloaded the release version during the brief period it has been available. The feedback from users has been very helpful in refining the product. Numerous feature requests have poured in and we are committed to rolling them with future product updates.',
      'With Web2 Delight 1.1, Global Delight continues its focus on making everyday media management simpler and more enjoyable for Mac users. The update brings together improvements driven by user feedback, along with enhancements designed to make browsing, saving, and transferring web content more convenient. By refining the existing experience rather than adding unnecessary complexity, the new release makes Web2 Delight faster, more intuitive, and easier to use.',
      'The latest version also strengthens Web2 Delight’s integration with popular Mac applications such as iPhoto and iTunes, allowing users to move entire collections with greater convenience. These improvements reflect Global Delight’s commitment to building practical utilities around the way people actually use their Macs.',
      'The combination of performance improvements, streamlined controls, and enhanced collection management makes Web2 Delight 1.1 a meaningful refinement of the original release. The team at Global Delight will continue listening closely to its growing user community as it works toward future updates and new features.'
    ],
    highlightsTitle: "What’s new in this release?",
    highlights: [
      'Thumbnail View user experience is more intuitive; Enlarged Stream and Download buttons provided on mouse hover over the individual thumbnails',
      'Improved Save mechanism - Overall size of the application reduced by 20 MB',
      'Transfer entire collections to iPhoto/ iTunes',
      'Creative Common License search for Flickr',
      'More than 20 UI tweaks to improve overall user experience'
    ],
    requirements: 'Web2 Delight requires Mac OS X version 10.4.9 or later, and is designed to run on any Intel-based or PowerPC G4/ G5 based Mac running above 1.25 GHz and iPhoto v6.0.6, iTunes v7.2 and QuickTime v7.2',
    aboutText: 'Global Delight is a perfect blend of Mac and iPhone aficionados, tech geeks and right-brained technologists that aspire to create something exceptionally extraordinary. At Global Delight, we understand our users and their desire to savor the experience of using their Macs and iPhone for various Web 2.0 and media-related software. The idea is to rethink solutions to complicated problems and imagine simple, elegant, engaging products that are delightful to the eye and easy to use. For more information about Global Delight and its products, please visit the company’s official website.',
    contact: {
      name: 'Guruprasad Kamath',
      email: 'guru@globaldelight.com',
      phone: '+91-820-253-5458',
      fax: '+91 820 2583458'
    }
  },

  {
    id: 'pr-2008-3',
    year: 2008,
    slug: 'w2d-1pt5-released',
    cleanUrl: '/press-pages/2008/w2d-1pt5-released',
    seoTitle: 'Web2 Delight 1.5 Released with 25+ New Features',
    seoDescription: 'Global Delight releases Web2 Delight 1.5 with 25+ new features, video exports, site support, improved sorting, Favorites, and enhanced UI.',
    headline: 'Web2 Delight 1.5 released with 25 New features',
    subheadline: 'Additional site support, enhanced features, video export options and numerous UI tweaks!',
    dateline: 'NEW UDUPI, India, September 02, 2008',
    category: 'Other',
    date: '02/09/2008',
    bodyParagraphs: [
      'Global Delight releases major update to their must-have utility Web2 Delight for transferring videos and photos from the Internet to Mac, iPods and iPhones. This release includes new feature additions, several UI tweaks and enhancements on the existing feature set.',
      '“Over 60,000 downloads have helped us analyze the way people use their videos and photos on their iPods/iPhones/ Mac, and we have refined the tool to suit users’ needs”, said Rohith Bhat, CEO of Global Delight. “This release includes more than 25 new features and other improvements, which will make the user experience delightful with this must-have utility.”',
      'With Web2 Delight 1.5, Global Delight has expanded the application beyond basic downloading by giving users greater flexibility in how they find, organize, save, and enjoy their online videos and photos. The new export options make it easier to prepare downloaded videos for different devices, while improved sorting and browsing tools help users quickly find the content they want.',
      'The update also puts a stronger emphasis on personalization and ease of use. Features such as Favorites, rubber band selection, zoom controls, slideshow improvements, and the Medley provide users with more convenient ways to manage and view their collections. These additions, combined with the new site support and enhanced video capabilities, make version 1.5 a substantial evolution of Web2 Delight and demonstrate Global Delight’s continued focus on responding to customer feedback.'
    ],
    highlightsTitle: "What's new in this Release:",
    highlights: [
      'New features have been added based on customer demand, which include adding a new video site, retaining original FLV videos and an export option to AVI, MOV and 3GP formats',
      'Downloading videos using URLs and including the ability to download H.264 videos if available',
      'More sorting options for searching the videos/ photos, such as newly added to the site, date, and rating',
      'Rubber band selection and zoom control for resizing thumbnails dynamically',
      'Option to start the slideshow from the full-screen mode',
      'Medley to view all the downloadable videos/ photos in a single location',
      'Creating a Favorites collection with drag-and-drop features'
    ],
    pricingAvailability: 'Web2 Delight v1.5 is available for immediate download from the official website. It is a free update for existing users of version 1.1 and is available at the same low price of $19.95 for new customers.',
    requirements: 'Web2 Delight requires Mac OS X version 10.4.9 or later, and is designed to run on any Intel-based or PowerPC G4/ G5 based Mac running above 1.25 GHz and iPhoto v6.0.6, iTunes v7.2 and QuickTime v7.2',
    aboutText: 'Global Delight is a perfect blend of Mac and iPhone aficionados, tech geeks and right-brained technologists who aspire to create something exceptionally extraordinary. At Global Delight, we understand our users and their desire to savor the experience of using their Macs and iPhones for various Web 2.0 and media-related software. The idea is to rethink solutions to complicated problems and imagine simple, elegant, engaging products that are delightful to the eye and easy to use.',
    contact: {
      name: 'Guruprasad Kamath',
      email: 'guru@globaldelight.com',
      phone: '+91-820-253-5458',
      fax: '+91 820 2583458'
    }
  },

  {
    id: 'pr-2009-6',
    year: 2009,
    slug: 'voila-macworld-award-finalists',
    cleanUrl: '/press-pages/2009/voila-macworld-award-finalists',
    seoTitle: 'Voila Named Finalist in 2009 Macworld Awards | Global Delight',
    seoDescription: 'Voila from Global Delight becomes a finalist in two categories at the 2009 Macworld Awards, recognized for its screen capture and annotation capabilities.',
    headline: 'Voila from Global Delight makes into the 2009 Macworld Awards finals',
    subheadline: 'Voila from Global Delight has been selected as a finalist in the prestigious Annual Macworld Awards ceremony.',
    dateline: 'NEW UDUPI, India, June 12, 2009',
    category: 'Voila',
    date: '12/06/2009',
    bodyParagraphs: [
      'Global Delight, makers of productivity and entertainment software for Mac and iPhone, are pleased to announce that Voila, screen-capturing and annotation software, has been nominated in two categories for the prestigious 2009 Macworld Awards. The awards recognize the most innovative and successful products developed by the companies for the Mac community.',
      '“We were delighted when Voila was nominated for the prestigious Macworld Award in the Consumer Software category by the Macworld Editorial team”, said Mr Rohith Bhat, CEO of Global Delight. “We are even more excited that Voila has now been recognized by the Macworld Readers and has another nomination in the Readers\' Choice: Best Software category. We are very happy to know that Macworld readers love the product for its capability and quality; we remain committed to making Voila the best screen capturing and annotation software on the Mac,” he added.',
      'Being selected in both the Consumer Software and Readers\' Choice categories was an important milestone for Voila and the team behind the product. The recognition from both the Macworld Editorial team and readers was particularly encouraging, as it reflected interest from both technology experts and people who were using Voila in their everyday work.',
      'Voila was designed to make capturing and communicating ideas from the Mac more convenient. Its screen capture and annotation capabilities allow users to capture what is on their screen and add their own explanations, making it useful for a range of everyday tasks. The nomination also highlighted Global Delight’s efforts to create Mac software that combines useful features with a simple and approachable user experience.',
      'For Global Delight, the recognition was also an opportunity to connect more closely with the Mac community and understand what users valued most about Voila. The company looked forward to building on this response and continuing to improve the product in future releases.',
      'The winners of the Annual 2009 Macworld Awards were announced on June 18, 2009 at the Honorable Artillery Company (HAC) in London. The Juries, composed of the Macworld Editorial team and Macworld readers, jointly select the award winners.'
    ],
    aboutText: 'Global Delight is a perfect blend of Mac and iPhone aficionados, tech geeks and right-brained technologists who aspire to create something exceptionally extraordinary. At Global Delight, we understand our users and their desire to savor the experience of using their Macs and iPhones for various Web 2.0 and media-related software. The idea is to rethink solutions to complicated problems and imagine simple, elegant, engaging products that are delightful to the eye and easy to use.',
    contact: {
      name: 'Guruprasad Kamath',
      email: 'guru@globaldelight.com',
      phone: '+91-820-253-5458',
      fax: '+91 820 2583458'
    }
  },

  {
    id: 'pr-2010-1',
    year: 2010,
    slug: 'Camera-Plus-Pro-A-Perfect-Gift-For-Your-iPhone-Camera',
    cleanUrl: '/press-pages/2010/Camera-Plus-Pro-A-Perfect-Gift-For-Your-iPhone-Camera',
    seoTitle: 'Camera Plus Pro 3.0 Released for iPhone | Global Delight',
    seoDescription: 'Camera Plus Pro 3.0 celebrates its first birthday with a Retina-ready interface, photo and video tools, editing features, social sharing and more.',
    headline: 'Camera Plus Pro – A Perfect Gift For Your iPhone Camera',
    subheadline: 'Major 3.0 update brings Retina-display graphics, video recording enhancements, and social media integration.',
    dateline: 'UDUPI, India, December 21, 2010',
    category: 'Camera Plus',
    date: '21/12/2010',
    bodyParagraphs: [
      'The camera is one of the most used features of the iPhone®. For over a year, Camera Plus Pro has been an ideal companion to the iPhone photographer. And now, to celebrate its first birthday, Camera Plus Pro has released a major update with a beautiful interface and greater user experience complete with cool animations! The new version is a way of saying thanks to all its users for the support!',
      'With the 3.0 update, the Camera Plus Pro user interface is now fully compatible with the retina display supported by the new iOS devices. The 3.0 update brings together the features that have made Camera Plus Pro a useful everyday camera companion, while giving the app a fresh look and feel. The redesigned interface takes advantage of the Retina display, making the experience sharper and more engaging on compatible devices. The update also reflects the feedback and expectations of users who have been using Camera Plus Pro since its launch.',
      'From capturing a quick photograph to editing, organizing and sharing it, Camera Plus Pro brings the entire process together in one place. This makes it particularly useful for iPhone users who want more control over their photos and videos without having to switch between several different applications. With its combination of camera tools, editing options and social sharing features, CPP continues to offer a practical and feature-rich experience for iPhone photographers.',
      'Hailed by the New York Times as "the best of the bunch”, Camera Plus Pro (CPP) has been constantly innovating. It is the first app to support both photo capture and video recording for all active models of the iPhone. It supports zoom for both photo capture and video recording. The recording of video can be paused and then resumed too! It still has the simplest implementation for recording time-lapse videos. Additionally, it is one of the earlier apps to support geo tag for photos way back in 2009.',
      'CPP is the first camera app to innovate in the space of managing photos from its very inception on Dec 19, 2009. Users could for the first time do multiple selections of photos and videos and perform functions on them. This meant the user could upload multiple photos to social media sites in one go, and lock or delete them. A feature well appreciated by its power users has been to auto tag and later search for the photos.',
      'Camera Plus Pro has the fastest auto save feature for photos. This means users can shoot picture after picture without any hindrance, while the saving happens in the background. It also has the fastest photo edit and retouch feature for the iPhone, ranging from crop to brightness adjustment, sharpness and applying cool filters to photos. And all this being accomplished on full-resolution photos unlike most other editing apps.',
      'CPP is an ideal social media companion. The user can share his photos and videos on most used sites like Facebook®, YouTube™, Flickr®, Picasa™ or Twitter™, or simply e-mail it. Picked by Gizmodo in its "Essential iPhone Apps Directory", CPP believed in reducing the clutter from users’ iPhones. It is a complete camera app in that it allows the user to capture, edit, share and manage the photos and videos easily and seamlessly.'
    ],
    highlightsTitle: 'Highlights of version 3.0:',
    highlights: [
      'Classy user interface with retina-display-compatible graphics and animations',
      'Photo capture and video recording supporting 3G, 3GS, iPhone 4 and iPod touch camera',
      'Video recording through both front and back cameras with flash, zoom, pause, trimming video, recording time-lapse and filters',
      'Photo capture with auto-save, flash, timer, anti-shake, big button among others',
      'Integration with YouTube, Twitter, Facebook, Flickr, Picasa',
      'Photo edit – crop, filters, and retouch features like brightness, sharpness and many more',
      'Geo tagging',
      'Auto tagging, private collection with password protection and search to manage photos and videos'
    ],
    requirements: 'Requires iOS 4.1 or newer. Works with iPhone 3G, 3GS, 4 and iPod touch®.',
    pricingAvailability: 'Camera Plus Pro can be purchased at $1.99 and is available for download on the App Store.',
    aboutText: 'Global Delight is the perfect blend of Mac, iPhone, iPad aficionados, tech geeks and right-brained technologists who aspire to create something exceptional and extraordinary. At Global Delight, we understand our users and their collective desire to savour the experience of using our software for various tasks. The idea is to rethink solutions to complicated problems and come up with simple, elegant and engaging products that are just as delightfully well-designed as they are easy to use.',
    contact: {
      name: 'Guruprasad Kamath',
      email: 'guru@globaldelight.com',
      phone: '+91-820-253-5458',
      fax: '+91 820 2583458'
    }
  },

  {
    id: 'pr-2010-9',
    year: 2010,
    slug: 'camera-plus-pro-video-recording',
    cleanUrl: '/press-pages/2010/camera-plus-pro-video-recording',
    seoTitle: 'Camera Plus Pro Adds Video Recording | Global Delight',
    seoDescription: 'Global Delight announces video recording for Camera Plus Pro, adding high-quality video capture, geo-tagging, sharing and privacy features for iPhone users.',
    headline: 'Global Delight confirms Video-Recording feature in the next version of Camera Plus Pro',
    subheadline: 'Camera Plus Pro truly becomes an all-in-one camera app for the iPhone with the latest feature addition, video recording.',
    dateline: 'Macworld Expo, San Francisco, February 12, 2010',
    category: 'Camera Plus',
    date: '12/02/2010',
    bodyParagraphs: [
      'Global Delight - Makers and Publishers of Mac®, iPhone™ and iPod® touch products - today confirmed that video recording will be a part of the next major update for their popular camera app for the iPhone, Camera Plus Pro. It recently won the third spot in the Best Photography App section of the 2009 Best App Ever Awards, courtesy of 148Apps.',
      'With the addition of video-recording in Camera Plus Pro, users will be able to record High-Quality videos at full resolution on their iPhone 2G, 3G and 3GS. Users can apply Geo-Tags to their videos and upload it instantly via YouTube™, Facebook™ and Twitter™.',
      'A frequently requested feature, Camera Plus Pro now with video recording gives users complete freedom and power to convert their iPhone into a powerful device for capturing still shots and video recording. Users can also protect their private videos with the password feature. The current version 1.3 of Camera Plus Pro, available on the App Store for $1.99, already has still capturing and a robust set of photo editing tools along with multiple photo uploads to Twitter, Picasa™, Facebook and Flickr®.',
      'The addition of video recording builds on the features that users already enjoy in Camera Plus Pro and brings two important camera functions together in a single application. Instead of switching between separate apps for taking photographs and recording videos, users will be able to handle both from the same place. The ability to geo-tag and share videos also makes it easier for users to capture moments and share them while they are still fresh.',
      'Video recording was one of the features most requested by Camera Plus Pro users, making this update a direct response to the community that has supported the app. With the new capability, Global Delight is taking another step toward its goal of making Camera Plus Pro a complete camera companion for iPhone users.',
      'Camera Plus Pro is following on the success of its lite version, Camera Plus, which has been downloaded 5 million times ever since its launch in October, 2009. The lite version comes with zoom, flash, crop, B/W filter and instant uploading to Flickr and Facebook and currently ranks within top 10 on the major App Stores within the photography section.',
      'Global Delight will be exhibiting this new version of Camera Plus Pro at the Macworld Expo, 11-13 Feb, San Francisco. The show attendees will get an opportunity to view the demo at Booth# 1366-55 at the Mobile Application Showcase.'
    ],
    pricingAvailability: 'Camera Plus Pro v1.3 is priced at $1.99 and is available for download on the App Store.',
    requirements: 'Camera Plus Pro runs on iPhone OS 3.1 or later.',
    aboutText: 'Global Delight is a perfect blend of Mac and iPhone aficionados, tech geeks and right-brained technologists who aspire to create something exceptionally extraordinary. At Global Delight, we understand our users and their desire to savor the experience of using their Macs and iPhones for various Web 2.0 and media-related software. The idea is to rethink solutions to complicated problems and imagine simple, elegant, engaging products that are delightful to the eye and easy to use.',
    contact: {
      name: 'Guruprasad Kamath',
      email: 'guru@globaldelight.com',
      phone: '+91-820-253-5458',
      fax: '+91 820 2583458'
    }
  },

  {
    id: 'pr-2010-4',
    year: 2010,
    slug: 'Camera-Plus-Prov2pt6-and-Halloween-Contest',
    cleanUrl: '/press-pages/2010/Camera-Plus-Prov2pt6-and-Halloween-Contest',
    seoTitle: 'Camera Plus Pro 2.6 Released with iPod Touch Support',
    seoDescription: 'Global Delight releases Camera Plus Pro 2.6 with iPod touch support, enhanced video features, EXIF export, and a Halloween contest celebrating 250,000 downloads.',
    headline: 'Global Delight releases Camera Plus Pro v2.6 with iPod touch compatibility and announces a Halloween Contest',
    subheadline: 'Global Delight provides a unique opportunity to users to capture their Halloween moments to celebrate the release of the latest version of Camera Plus Pro and 250,000 downloads, and win attractive cash prizes.',
    dateline: 'NEW UDUPI, India, October 27th, 2010',
    category: 'Camera Plus',
    date: '27/10/2010',
    bodyParagraphs: [
      'Global Delight - Makers and Publishers of Mac®, iPhone™ and iPod® touch products - released a new version of Camera Plus Pro with iPod touch compatibility and other enhanced features. With this version, users can enjoy the best video recording quality with filters on their iPhone 3G, 3GS, 4 and iPod touch. The latest version also features several bug fixes reported by users.',
      'A most sought-after feature included in the latest version is the ability to export the EXIF tags attached to the Photos and Videos while syncing to the Camera Roll. This has been made possible with the latest iOS update 4.1. Better-looking labels have been used to take advantage of the Retina Display on the iPhone 4 and the new iPod touch.',
      'The new release is another step in making Camera Plus Pro useful across more iOS devices. With iPod touch compatibility, users who rely on the device for photography and video can now take advantage of the app’s camera features, while the improved labels make everyday navigation more pleasant on Retina Display devices. The EXIF export feature also gives users a convenient way to retain important information associated with their photos and videos when moving them to the Camera Roll.',
      'With a view to celebrate 250,000 downloads of Camera Plus Pro and Halloween, an exciting contest has been announced for the users. Users are required to capture or record their Halloween moments using Camera Plus Pro and share it via Facebook, Twitter or YouTube. Participants will get a chance to win attractive cash prizes and other goodies.',
      'Dylan Copeland of the Australian Macworld, in a recent review of Camera Plus Pro, said, "If I was pressed to choose only one app for taking, editing and sharing images, then Camera Plus Pro would be my pick. CPP has the photo-taking features which I use most often, the design of the editing UI is intelligent, and the sharing options are the most comprehensive of any app I have tried."',
      'With the combination of the new device support, user-requested improvements, and the Halloween promotion, version 2.6 gives existing users another reason to update while inviting new users to try Camera Plus Pro. The release also highlights Global Delight’s continued focus on improving the app based on how its users capture, manage, and share their photos and videos.'
    ],
    pricingAvailability: 'Camera Plus Pro can be purchased at $0.99 (50% off; actual price $1.99) and is available for download on the App Store.',
    requirements: 'Requires iOS 4.1 or newer. Works with iPhone 3G, 3GS, 4 and iPod touch.',
    aboutText: 'Global Delight is a perfect blend of Mac and iPhone aficionados, tech geeks and right-brained technologists who aspire to create something exceptionally extraordinary. At Global Delight, we understand our users and their desire to savor the experience of using their Macs and iPhones for various Web 2.0 and media-related software. The idea is to rethink solutions to complicated problems and imagine simple, elegant, engaging products that are delightful to the eye and easy to use.',
    contact: {
      name: 'Guruprasad Kamath',
      email: 'guru@globaldelight.com',
      phone: '+91-820-253-5458',
      fax: '+91 820 2583458'
    }
  },

  {
    id: 'pr-2013-4',
    year: 2013,
    slug: 'global-delight-announces-back-to-school-half-off-sale',
    cleanUrl: '/press-pages/2013/global-delight-announces-back-to-school-half-off-sale',
    seoTitle: 'Global Delight Back to School Sale: Boom & Voila 50% Off',
    seoDescription: 'Global Delight announces its 2013 Back to School offer, with Boom and Voila up to 50% off for students, educators and Mac users through September 15.',
    headline: 'Global Delight announces “Back to School”: upto 50% off on Boom & Voila',
    subheadline: 'Special 50% off on Voila Screen Capture Tool and Boom Volume Booster from August 5 to September 15, 2013.',
    dateline: 'UDUPI, India; August 5th, 2013',
    category: 'Company',
    date: '08/05/2013',
    bodyParagraphs: [
      'The summer is about to get hotter with Global Delight running a special 50% off on Voila - Screen Capture Tool and Boom - Volume Booster from 5th August to 15th September 2013. These amazing apps are available for download from the Mac App Store or the Global Delight Webstore. Students and educators can now create and share amazing notes, courseware, how-to videos; and record webinars and livestreams in high quality with Voila. With Boom, low Mac volume is a thing of the past. Audio will never sound the same again with a system-wide volume boost and a number of equalizers and custom presets to choose from.',
      'The Back to School offer brings together two apps designed to make everyday Mac tasks a little easier. For students, Voila can be useful when preparing presentations, recording tutorials, capturing information from online classes, or creating visual notes. Boom, on the other hand, can make music, movies, videos and other audio content more enjoyable with its system-wide volume boost and equalizer options.',
      'The limited-time promotion also gives educators and students an opportunity to explore both applications at a reduced price before the new academic year gets fully underway. Whether it is creating course material, sharing an idea, or simply enjoying some entertainment after class, Boom and Voila are built to fit naturally into everyday Mac use.'
    ],
    highlightsTitle: 'App Highlights & Features:',
    highlights: [
      'Boom: System-level audio increase, 14 unique equalizer presets, and Drag and Drop file audio boost for iPods and iPhones',
      'Voila: Save every action on-screen and record fullscreen video with crystal-clear audio',
      'Capture lectures, presentations, and webinars in High Quality',
      'Edit and annotate images with multiple versatile tools',
      'Share lessons and how-to videos instantly on YouTube, Flickr, and FTP/SFTP locations'
    ],
    pricingAvailability: 'Pricing and Availability: Boom and Voila are now available for a discounted price of upto 50% off on their MSRP. Voila: Offer Price $14.99 (Regular Price $29.99). Boom: Offer Price $3.99 (Regular Price $6.99).',
    requirements: 'Boom and Voila run on Intel-based Macs running Mac OS X 10.6.x, 10.7.x and 10.8.x.',
    aboutText: 'Global Delight is a multiple award winning closely knit unit with a penchant for creating apps that bring joy and cheer to all Apple aficionados. Some of our most popular apps include Game Your Video, Voila Screen Capture Tool, Camera Plus Pro and Boom Volume Booster for Mac.',
    contact: {
      name: 'Guruprasad Kamath',
      email: 'guru@globaldelight.com',
      phone: '+91-820-253-5458',
      fax: '+91 820 2583458'
    }
  },

  {
    id: 'pr-2022-1',
    year: 2022,
    slug: 'The-ultimate-audio-experience-with-5-1-surround-sound-for-Mac',
    cleanUrl: '/press-pages/2022/The-ultimate-audio-experience-with-5-1-surround-sound-for-Mac',
    seoTitle: 'Boom 3D Introduces 5.1 Audio on Mac',
    seoDescription: 'Enjoy 5.1 multichannel audio on ANY headphones with Boom 3D Mac. Elevate your movie, music, and gaming experience with extraordinary audio.',
    headline: 'Global Delight Unveils 5.1 support in Boom 3D Mac; The ultimate audio experience with 5.1 surround sound for Mac',
    subheadline: 'The recent v1.4 update of Boom 3D for macOS creates a very immersive virtual surround sound by spatializing all audio channels of 5.1 surround audio from games, music, and movies, enriching the fidelity and depth of sound massively on any standard headphones.',
    dateline: 'Udupi, India - 09/12/2022',
    category: 'Boom',
    date: '09/12/2022',
    bodyParagraphs: [
      'Global Delight is all set to enhance your audio experience. The recent v1.4 update of Boom 3D for macOS creates a very immersive virtual surround sound by specializing all audio channels of 5.1 surround audio from games, music, and movies, enriching the fidelity and depth of sound massively on any standard headphones. Specializing different channels of surround audio tracks on headphones results in the perception of different audio channels distinctively on headphones with clarity. 5.1 audio support adds a new level of realism to the virtual reality experiences of Boom 3D, allowing users to truly feel like they are part of the action.',
      'The latest version of Boom 3D is ready to offer a quality and dramatic sound experience with better audio effects and immersive surround sound. With 5.1 audio support, users can experience more precise positioning of sounds, making dialogue, background effects, music, and in-game audio feel more immersive. Whether it’s hearing footsteps approaching in a game or picking up details in a movie soundtrack, Boom 3D offers a richer listening experience.',
      'Boom 3D undoubtedly has garnered unconditional love for its exclusive features and unparalleled 3D sound effects. However, with an upgrade to 5.1 surround sound, you are sure to be transported to a realistic world of audio experience.',
      'In the earlier version of Boom 3D with a stereo audio driver, 5.1 multichannel audio was being downmixed to stereo by the system audio and then virtualized into 3D surround sound. This new version of Boom 3D can drive multichannel audio directly and spatialize every channel of the surround audio track, creating a very immersive and realistic surround sound experience on headphones without any loss of quality and details due to any downmixing of audio by the system.',
      'Boom 3D\'s inbuilt features such as ambience, fidelity, spatial and night mode have already experienced a positive response from its users. And this new version can take the experience of multitrack audio on headphones to a totally new level. Users can fine-tune their audio as per their listening taste, creating a personalized listening experience.',
      'Additionally, gaming with 5.1 support in Boom 3D will offer you a lifelike experience and give you a feel of diving into the virtual world. You don’t need expensive hi-fi audio equipment to experience true surround sound at home or on the move.',
      'We are excited to offer our users this new feature that can magically disrupt the way users listen to and experience audio on headphones. With 5.1 audio support, Boom 3D makes movies feel more cinematic, games more immersive, and music more engaging. Boom 3D for macOS is available for download now, so be sure to try it out and experience 5.1 audio for yourself.'
    ],
    pricingAvailability: 'Price and Availability: The latest update (Version 1.4) is available on Global Delight’s Web Store, Mac App Store, Steam Store, and SETAPP. Go check out the app and download your free trial.',
    aboutText: 'Global Delight Technologies is one of a kind award-winning firm known to design outstanding products for iOS, Android, Mac and Windows. From audio and video to photo apps, Global Delight aims to offer the best technology to match the expectations of their users.',
    contact: {
      name: 'Vipin Mishra',
      email: 'vipin.mishra@globaldelight.com',
      phone: '+91-820-253-5458'
    }
  }
];

export const findPressArticle = (year?: string, slug?: string): PressArticle | undefined => {
  if (!year || !slug) return undefined;
  const cleanSlug = slug.replace(/\.php$/i, '').toLowerCase();
  return PRESS_ARTICLES_LIST.find(
    (a) => a.year.toString() === year && a.slug.toLowerCase() === cleanSlug
  );
};
