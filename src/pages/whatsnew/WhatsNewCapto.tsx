import { useState } from 'react';
import { WhatsNewFullLayout } from '../../components/whatsnew/WhatsNewFullLayout';

export function WhatsNewCapto() {
  const [platform, setPlatform] = useState<'macOS' | 'windows'>('macOS');

  return (
    <WhatsNewFullLayout 
      productName="Capto"
      logoSrc="/capto/capto-logo.png" 
      heroMockupSrc="/capto/capto-app-mockup.png"
      heroBgClass="bg-[#0A1128]"
      productId="capto"
      activePlatform={platform}
      onPlatformChange={(newPlatform) => {
        if (newPlatform === 'macOS' || newPlatform === 'windows') {
          setPlatform(newPlatform);
        }
      }}
      macOSNotes={[]}
      windowsNotes={[]}
    />
  );
}
