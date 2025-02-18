'use client';

import { useRef } from 'react';
import { Timer } from '@/components/Timer';
import PictureInPictureWindow, {
  usePictureInPicture,
} from '@/hooks/usePictureInPicture';
import { useTimer } from '@/hooks/useTimer';
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
          <h1 className="font-bold text-5xl mb-4 text-center">
            すみっこタイマー
          </h1>
          <div className="flex space-x-2 mb-3">
            {!pipWindow ? (
              <button className="btn btn-link" onClick={handleOpenPipWindow}>
                画面のすみっこへGo!
              </button>
            ) : (
              <button className="btn btn-link" onClick={handleClosePipWindow}>
                もどって来ていいよ!
              </button>
            )}
          </div>
          <div
            className="rounded-lg h-72 w-[400px] border shadow-lg"
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
