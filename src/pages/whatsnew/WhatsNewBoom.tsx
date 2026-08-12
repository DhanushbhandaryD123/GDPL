import { useState } from 'react';
import { WhatsNewFullLayout, ReleaseVersion } from '../../components/whatsnew/WhatsNewFullLayout';

export function WhatsNewBoom() {
  const [platform, setPlatform] = useState<'macOS' | 'windows'>('windows'); // Default to windows as shown in first screenshot

  const macOSNotes: ReleaseVersion[] = [
    {
      version: "2.3.0",
      date: "Jun 18, 2026",
      features: [
        "Spatial Surround: Experience true surround sound on your headphones with enhanced multi-channel audio support.",
        "New Trap EQ Preset: Enjoy punchy bass and crisp highs with the newly added Trap EQ preset.",
        "Expanded Headphone EQ Support: We've added support for more headphone models for a more personalized listening experience."
      ],
      enhancements: [
        "UI Enhancements: Enjoy a cleaner, more intuitive interface for faster and easier sound customization."
      ],
      downloadUrl: "https://www.globaldelight.com/boom/download"
    },
    { version: "2.2.6", date: "Jun 06, 2025" },
    { version: "2.2.5", date: "May 05, 2025" },
    { version: "2.2.4", date: "Feb 24, 2025" },
    { version: "2.2.3", date: "Nov 28, 2024" },
    { version: "2.2.2", date: "Nov 07, 2024" },
    { version: "2.2.1", date: "Oct 13, 2024" },
    { version: "2.2", date: "Jul 05, 2024" },
    { version: "2.1.1", date: "Mar 27, 2024" },
    { version: "2.1", date: "Feb 29, 2024" },
    { version: "2.0.2", date: "Oct 09, 2023" },
    { version: "2.0.1", date: "Sep 21, 2023" },
    { version: "2.0", date: "Aug 18, 2023" },
    { version: "1.4.7", date: "Aug 07, 2023" },
    { version: "1.4.6", date: "Jun 20, 2023" }
  ];

  const windowsNotes: ReleaseVersion[] = [
    {
      version: "2.0.0",
      date: "Feb 06, 2025",
      features: [
        "Introducing Boom 3D Headphone EQ : Now supporting automatic headphone equalization for over 5000+ headphone models! This feature fine-tunes your audio by compensating for any sound imperfections, ensuring a richer and more immersive listening experience.",
        "Boost Your Sound with the New Pre-Amp Feature : We've added a Pre-Amp feature to Boom 3D, allowing you to amplify audio levels for a richer and more powerful sound experience. Fine-tune your volume and enhance even the softest sounds with precision!"
      ],
      bugFixes: [
        "We've squashed some bugs to make your experience smoother, faster, and more reliable!"
      ],
      enhancements: [
        "Output Device Switching: Addressed the device selection issue during sleep to resume, quit and launch, and on startup."
      ],
      downloadUrl: "https://www.globaldelight.com/boom/download"
    },
    {
      version: "1.6",
      date: "Mar 18, 2024",
      features: [
        "You can now set Boom 3D as your default player, making it easier to immerse yourself in enhanced audio across all your audio files."
      ],
      bugFixes: [
        "We've squished some pesky bugs to enhance your experience."
      ],
      enhancements: [
        "Enjoy smoother performance with major stability enhancements."
      ],
      downloadUrl: "https://www.globaldelight.com/boom/download"
    }
  ];

  return (
    <WhatsNewFullLayout 
      productName="Boom 3D"
      logoSrc="/boom3D/boom3d-logo.png" 
      heroMockupSrc="/boom3D/boom3d-app-mockup.png" // We might need to ensure this image path exists or use a fallback
      heroBgClass="bg-[#050B1B]"
      productId="boom3d"
      activePlatform={platform}
      onPlatformChange={(newPlatform) => {
        if (newPlatform === 'macOS' || newPlatform === 'windows') {
          setPlatform(newPlatform);
        }
      }}
      macOSNotes={macOSNotes}
      windowsNotes={windowsNotes}
    />
  );
}
