import { WhatsNewFullLayout } from '../../components/whatsnew/WhatsNewFullLayout';

export function WhatsNewAudimix() {
  return (
    <WhatsNewFullLayout 
      productName="AuDimix"
      logoSrc="/apps/AuDimix-Window.jpeg" 
      heroBgClass="bg-[#2E0505]"
      heroBgUrl="https://images.unsplash.com/photo-1516280440502-3c825a0a3821?auto=format&fit=crop&q=80&w=2000"
      productId="audimix"
      activePlatform="none"
      defaultNotes={[]}
    />
  );
}
