import PipTimer from '../../features/pipTimer';

export function MainContent() {
  return (
    <main className="grid items-center justify-items-center flex-grow font-[family-name:var(--font-geist-sans)]">
      <div>
        <h1 className="font-bold text-4xl sm:text-5xl mb-6 text-center">
          すみっこタイマー
        </h1>
        <PipTimer />
      </div>
    </main>
  );
}
