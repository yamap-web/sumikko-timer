'use client';

import { useRef } from 'react';
import PictureInPictureWindow, {
  usePictureInPicture,
} from '@/hooks/usePictureInPicture';
import { useTimer } from '@/hooks/useTimer';
import { Timer } from '@/components/Timer';
import { Footer } from '@/components/Footer';

export default function Home() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { handleOpenPipWindow, handleClosePipWindow, pipWindow } =
    usePictureInPicture({ containerRef });

  const { timeLeft, isRunning, handleStart, handleStop, handleReset, addTime } =
    useTimer();

  return (
    <div className="grid grid-rows-[1fr,auto] min-h-screen">
      <main className="grid items-center justify-items-center font-[family-name:var(--font-geist-sans)]">
        <div>
          <h1 className="font-bold text-4xl sm:text-5xl mb-4 text-center">
            すみっこタイマー
          </h1>
          <div className="text-center sm:text-start">
            <button
              className="btn btn-link"
              onClick={pipWindow ? handleClosePipWindow : handleOpenPipWindow}
            >
              {pipWindow ? 'もどって来ていいよ!' : '画面のすみっこへGo!'}
            </button>
          </div>
          <div
            className="rounded-lg sm:h-72 sm:w-[400px] sm:border sm:shadow-lg"
            ref={containerRef}
          >
            <PictureInPictureWindow pipWindow={pipWindow}>
              <Timer
                timeLeft={timeLeft}
                isRunning={isRunning}
                onStart={handleStart}
                onStop={handleStop}
                onReset={handleReset}
                addTime={addTime}
              />
            </PictureInPictureWindow>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
