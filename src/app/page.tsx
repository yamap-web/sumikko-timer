import { Header, MainContent, Footer } from '@/components/layouts';

export default function Home() {
  return (
    <div className="grid grid-rows-[auto,1fr,auto] min-h-screen">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}
