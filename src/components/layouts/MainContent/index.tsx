import { PipTimerLayout } from '../PipTimerLayout';

export function MainContent() {
  return (
    <main className="grid items-center justify-items-center font-[family-name:var(--font-geist-sans)]">
      <div>
        <h1 className="font-bold text-4xl sm:text-5xl mb-6 text-center">
          すみっこタイマー
        </h1>
        <PipTimerLayout />
      </div>
    </main>
  );
}
