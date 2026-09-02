import { FaqTemplate, FaqCategory } from '../../components/faq/FaqTemplate';
import { MessageSquare, CircleDot, Settings, Star, ShoppingCart, Compass } from 'lucide-react';

const categories: FaqCategory[] = [
  {
    id: 'most-asked',
    title: 'Most Asked Questions',
    icon: <MessageSquare className="w-8 h-8" />,
    faqs: [
      { question: 'Why there is an orange indicator in Monterey', answer: 'Answer coming soon...' },
      { question: 'Sound output switches automatically when I connect the external display. How to fix this issue?', answer: 'Answer coming soon...' },
      { question: 'Notification alerts are clipping when Boom 3D is active.', answer: 'Answer coming soon...' },
      { question: 'Difficulties in installing Audio Component', answer: 'Answer coming soon...' },
      { question: 'I have just purchased the Boom 3D app, but did not received an Activation code. What should I do?', answer: 'Answer coming soon...' },
      { question: 'I\'m an existing user. How to register on Boom 3D using my Registration key?', answer: 'Answer coming soon...' },
      { question: 'When my Mac wakes from sleep/restart, it loses sound.', answer: 'Answer coming soon...' },
      { question: 'When I connect the HDMI/Bluetooth speakers, I get no sound.', answer: 'Answer coming soon...' },
      { question: 'I\'ve Boom 3D installed on 2 devices, and cannot install it on a new device. (overdraft issue).', answer: 'Answer coming soon...' },
      { question: 'How can the web store users retrieve their lost registration code?', answer: 'Answer coming soon...' },
      { question: 'I have already purchased Boom 3D for Mac. Is it possible to extend the license for Windows/iOS/Android?', answer: 'Answer coming soon...' },
      { question: 'I have just purchased the Boom 3D app and Logged in to Boom account, but app shows I\'m still in trial version.', answer: 'Answer coming soon...' },
    ]
  },
  {
    id: 'boom-account',
    title: 'Boom Account',
    icon: <CircleDot className="w-8 h-8" />,
    faqs: [
      { question: 'I\'m having a problem creating Boom account', answer: 'Answer coming soon...' },
      { question: 'Where to find my purchase details?', answer: 'Answer coming soon...' },
      { question: 'I have already purchased Boom 3D for Mac. Is it possible to extend the license for Windows/iOS/Android?', answer: 'Answer coming soon...' },
      { question: 'I already have a registration code, But I am unable to register', answer: 'Answer coming soon...' },
      { question: 'How to create Boom account?', answer: 'Answer coming soon...' },
    ]
  },
  {
    id: 'general',
    title: 'General',
    icon: <Settings className="w-8 h-8" />,
    faqs: [
      { question: 'What is Boom 3D?', answer: `Boom requires to be the audio input device, in order to receive the systems audio to enhance it. Though the macOS shows Microphone ON indication for Boom, Boom does not access your system’s actual microphone. Boom app just read systemwide audio from its own audio component "BoomAudio".
Also, note that we are Apple-identified developers. Our app has been reviewed by apple before putting into Mac AppStore. Boom application published in our website and BoomAudio component, both have been notarized by Apple.` },
      { question: 'What does Boom 3D do when its initially Launched?', answer: 'Answer coming soon...' },
      { question: 'What are Quick Controls?', answer: 'Answer coming soon...' },
      { question: 'Which OS supports Boom 3D?', answer: 'Answer coming soon...' },
      { question: 'How do I install Boom 3D purchased from your website?', answer: 'Answer coming soon...' },
      { question: 'How do I uninstall Boom 3D?', answer: 'Answer coming soon...' },
      { question: 'On how many devices can I access Boom 3D?', answer: 'Answer coming soon...' },
      { question: 'How to use Boom on the second device?', answer: 'Answer coming soon...' },
      { question: 'Where can I find my profile?', answer: 'Answer coming soon...' },
      { question: 'I\'ve Boom 3D installed on 2 devices, and cannot install it on a new device. (overdraft issue).', answer: 'Answer coming soon...' },
      { question: 'Can I apply Boom effects of YouTube/Netflix/ Spotify/ Tidal, etc?', answer: 'Answer coming soon...' },
      { question: 'How to unregister?', answer: 'Answer coming soon...' },
      { question: 'How do I hide the "Sound output changed" notification?', answer: 'Answer coming soon...' },
      { question: 'How do I hide the Boom 3D icon from Dock?', answer: 'Answer coming soon...' },
    ]
  },
  {
    id: 'features',
    title: 'Features',
    icon: <Star className="w-8 h-8" />,
    faqs: [
      { question: 'How can I set-up 3D speakers?', answer: 'Answer coming soon...' },
      { question: 'How can I adjust Bass?', answer: 'Answer coming soon...' },
      { question: 'How can I adjust the Intensity?', answer: 'Answer coming soon...' },
      { question: 'Where to find 3D Soft Rendering and what does it do?', answer: 'Answer coming soon...' },
      { question: 'How can I use Boom Audio Player?', answer: 'Answer coming soon...' },
      { question: 'How to add songs to playlist?', answer: 'Answer coming soon...' },
      { question: 'How to create playlist?', answer: 'Answer coming soon...' },
      { question: 'How to rename Playlist?', answer: 'Answer coming soon...' },
      { question: 'How to delete a playlist?', answer: 'Answer coming soon...' },
      { question: 'How to sort Playlist?', answer: 'Answer coming soon...' },
      { question: 'How to shuffle or repeat songs?', answer: 'Answer coming soon...' },
      { question: 'I do not find my favorite Radio channels.', answer: 'Answer coming soon...' },
      { question: 'How to change the Boom Control without opening the app?', answer: 'Answer coming soon...' },
      { question: 'How to create customized presets?', answer: 'Answer coming soon...' },
      { question: 'How can I get appropriate 3D surround sound effect based on my headphones or speakers?', answer: 'Answer coming soon...' },
      { question: 'What is controlled boost?', answer: 'Answer coming soon...' },
      { question: 'How to access Apps volume Controller option?', answer: 'Answer coming soon...' },
      { question: 'How can I mute, decrease or increase the volume of other running applications from Boom 3D?', answer: 'Answer coming soon...' },
      { question: 'I hear some distortions, what adjustments can I do?', answer: 'Answer coming soon...' },
      { question: 'Does Boom work with FaceTime and AirPlay?', answer: 'Answer coming soon...' },
      { question: 'Why can\'t I experience Boom 3D on some apps in spite of installing Boom Audio Component?', answer: 'Answer coming soon...' },
      { question: 'Which applications are not compatible with Boom 3D?', answer: 'Answer coming soon...' },
      { question: 'Why does the sound of some apps are not loud enough with Boom turned ON than with it OFF?', answer: 'Answer coming soon...' },
      { question: 'How to get Boom working with Audirvana plus?', answer: 'Answer coming soon...' },
      { question: 'I hear audio distortions when USB DAC is connected.', answer: 'Answer coming soon...' },
      { question: 'Boom prevents sleep even when no audio is being played.', answer: 'Answer coming soon...' },
      { question: 'How to access Boom Radio?', answer: 'Answer coming soon...' },
      { question: 'What is "Unsupported Audio Driver"? Why am I getting this notification?', answer: 'Answer coming soon...' },
    ]
  },
  {
    id: 'purchase',
    title: 'Purchase/Upgrade',
    icon: <ShoppingCart className="w-8 h-8" />,
    faqs: [
      { question: 'How can the web store users retrieve their lost registration code?', answer: 'Answer coming soon...' },
    ]
  },
  {
    id: 'remote',
    title: 'Boom Remote',
    icon: <Compass className="w-8 h-8" />,
    faqs: [
      { question: 'What is the Boom Remote?', answer: 'Answer coming soon...' },
      { question: 'How to Pair/Set up a connection?', answer: 'Answer coming soon...' },
      { question: 'How to change tracks/files using the Boom Remote?', answer: 'Answer coming soon...' },
      { question: 'Does the Boom Remote work on Bluetooth, Ad hoc/Hotspot and other networks?', answer: 'Answer coming soon...' },
      { question: 'What is the maximum/recommended range within which the Boom Remote works best?', answer: 'Answer coming soon...' },
      { question: 'Can the Boom Remote control multiple Macs?', answer: 'Answer coming soon...' },
      { question: 'Can multiple devices running the Boom Remote control a Mac?', answer: 'Answer coming soon...' },
      { question: 'How do I delete authorized devices?', answer: 'Answer coming soon...' },
      { question: 'Why can\'t I edit or add new presets from the Boom Remote?', answer: 'Answer coming soon...' },
    ]
  }
];

export function Boom3DMacFaq() {
  return (
    <FaqTemplate 
      title="Boom 3D Mac FAQ"
      description="Answers to frequently asked questions about Boom 3D for Mac — 3D surround sound, the 31-band equalizer, volume boosting, licensing, and troubleshooting."
      keywords="Boom 3D FAQ, Boom 3D Mac help, 3D surround sound questions, Boom 3D equalizer support, Boom 3D license help, Boom 3D troubleshooting"
      logoSrc="/faq/Boom3D.png"
      logoAlt="Boom 3D Logo"
      breadcrumbLabel="Boom 3D for Mac"
      categories={categories}
    />
  );
}
