import { Timer } from './components/Timer';

export default function Home() {
  return (
    <div className="grid items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="">
        <h1 className=" text-5xl mb-4">P in P Timer</h1>
        <Timer />
      </main>
    </div>
  );
}
