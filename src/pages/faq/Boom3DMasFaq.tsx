import { FaqTemplate, FaqCategory } from '../../components/faq/FaqTemplate';
import { MessageSquare, CircleDot, Settings, Star, ShoppingCart, Compass } from 'lucide-react';

const categories: FaqCategory[] = [
  {
    id: 'most-asked',
    title: 'Most Asked Questions',
    icon: <MessageSquare className="w-8 h-8" />,
    faqs: [
      { question: 'Sound output switches automatically when I connect the external display. How to fix this issue?', answer: 'Answer coming soon...' },
      { question: 'Notification alerts are clipping when Boom 3D is active.', answer: 'Answer coming soon...' },
      { question: 'I\'ve launched Boom 3D app. Why can\'t I feel any difference in sound?', answer: 'Answer coming soon...' },
      { question: 'When my Mac wakes from sleep/restart, it loses sound.', answer: 'Answer coming soon...' },
      { question: 'When I connect the HDMI/Bluetooth speakers, I get no sound.', answer: 'Answer coming soon...' },
      { question: 'I have already purchased Boom 3D for Mac. Is it possible to extend the license for Windows/iOS/Android?', answer: 'Answer coming soon...' },
    ]
  },
  {
    id: 'boom-account',
    title: 'Boom Account',
    icon: <CircleDot className="w-8 h-8" />,
    faqs: [
      { question: 'I\'m an existing user, Is it mandatory for me to Join Boom?', answer: 'Answer coming soon...' },
      { question: 'Why do I need to Join Boom?', answer: 'Answer coming soon...' },
      { question: 'How to Join Boom?', answer: 'Answer coming soon...' },
      { question: 'I\'m having a problem with Joining Boom.', answer: 'Answer coming soon...' },
      { question: 'I\'m having a problem creating Boom account', answer: 'Answer coming soon...' },
      { question: 'Where to find my purchase details?', answer: 'Answer coming soon...' },
      { question: 'I have already purchased Boom 3D for Mac. Is it possible to extend the license for Windows/iOS/Android?', answer: 'Answer coming soon...' },
      { question: 'How to create Boom account?', answer: 'Answer coming soon...' },
    ]
  },
  {
    id: 'general',
    title: 'General',
    icon: <Settings className="w-8 h-8" />,
    faqs: [
      { question: 'What is Boom 3D?', answer: 'Answer coming soon...' },
      { question: 'What does Boom 3D do when it\'s initially launched?', answer: 'Answer coming soon...' },
      { question: 'What are Quick Controls?', answer: 'Answer coming soon...' },
      { question: 'Which OS supports Boom 3D?', answer: 'Answer coming soon...' },
      { question: 'I\'ve purchased Boom 3D from Mac App Store. How do I get system-wide Boom effects?', answer: 'Answer coming soon...' },
      { question: 'How do I uninstall Boom 3D?', answer: 'Answer coming soon...' },
      { question: 'Where can I find my profile?', answer: 'Answer coming soon...' },
      { question: 'Why can\'t I apply audio effects and customize Equalizer? I am on a 2-day trial.', answer: 'Answer coming soon...' },
      { question: 'Can I apply Boom effects of YouTube/Netflix/ Spotify/ Tidal, etc?', answer: 'Answer coming soon...' },
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
      { question: 'How to remove Boom 3D from Dock and keep as menu app?', answer: 'Answer coming soon...' },
      { question: 'What is "Unsupported Audio Driver"? Why am I getting this notification?', answer: 'Answer coming soon...' },
    ]
  },
  {
    id: 'purchase-upgrade',
    title: 'Purchase/Upgrade',
    icon: <ShoppingCart className="w-8 h-8" />,
    faqs: []
  },
  {
    id: 'boom-remote',
    title: 'Boom Remote',
    icon: <Compass className="w-8 h-8" />,
    faqs: [
      { question: 'What is the Boom Remote?', answer: 'Answer coming soon...' },
      { question: 'How to Pair/Set up a connection?', answer: 'Answer coming soon...' },
      { question: 'How to increase Boom 3D\'s volume using the Boom Remote?', answer: 'Answer coming soon...' },
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

export function Boom3DMasFaq() {
  return (
    <FaqTemplate 
      title="Boom 3D MAS FAQ"
      description="Frequently asked questions about the Boom 3D Mac App Store edition — features, restrictions, purchase and refund policy, and how it differs from the direct download version."
      keywords="Boom 3D MAS FAQ, Boom 3D App Store help, Boom 3D Mac App Store questions, Boom 3D purchase support, Boom 3D refund policy"
      logoSrc="/faq/Boom3D.png"
      logoAlt="Boom 3D MAS Logo"
      categories={categories}
    />
  );
}
