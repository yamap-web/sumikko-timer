import { Header, MainContent, Footer } from '@/components/layouts';
import IsSupportedPipAlert from '@/features/isSupportedPipAlert';

export default function Home() {
  return (
    <div className="h-dvh flex flex-col">
      <IsSupportedPipAlert />
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}
