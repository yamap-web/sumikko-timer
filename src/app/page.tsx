import { Header, MainContent, Footer } from '@/components/layouts';
import IsSupportedPipAlert from '@/features/isSupportedPipAlert';

export default function Home() {
  return (
    <div className="grid grid-rows-[auto,1fr,auto] min-h-screen">
      <IsSupportedPipAlert />
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}
