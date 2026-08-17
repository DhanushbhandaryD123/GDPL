import { WhatsNewFullLayout } from '../../components/whatsnew/WhatsNewFullLayout';

export function WhatsNewAudion() {
  return (
    <WhatsNewFullLayout 
      productName="AudiOn"
      logoSrc="/apps/AudiON-android.png" 
      heroBgClass="bg-[#1A1A1A]"
      heroBgUrl="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=2000"
      productId="audion"
      activePlatform="none"
      defaultNotes={[]}
    />
  );
}
