'use client';

import { useState, useEffect, useRef } from 'react';
import PictureInPictureWindow, {
  usePictureInPicture,
} from '@/hooks/usePictureInPicture';
import { useTimer } from '@/hooks/useTimer';
import { Timer } from '@/components/Timer';
import { Footer } from '@/components/Footer';

export default function Home() {
  const [autoPip, setAutoPip] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { isSupported, handleOpenPipWindow, handleClosePipWindow, pipWindow } =
    usePictureInPicture({ containerRef });

  useEffect(() => {
    if (isSupported) {
      setAutoPip(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { timeLeft, isRunning, handleStart, handleStop, handleReset, addTime } =
    useTimer();

  function handleStartWithPip() {
    handleStart();
    if (autoPip && !pipWindow) {
      handleOpenPipWindow();
    }
  }

  return (
    <div className="grid grid-rows-[1fr,auto] min-h-screen">
      <main className="grid items-center justify-items-center font-[family-name:var(--font-geist-sans)]">
        <div>
          <h1 className="font-bold text-4xl sm:text-5xl mb-6 text-center">
            すみっこタイマー
          </h1>
          <div className="hidden sm:flex flex-col items-center justify-center border border-dashed rounded-lg pt-1 pb-3 mb-6">
            <div className="form-control w-80">
              <label className="label cursor-pointer">
                <span className="label-text text-base font-bold">
                  自動すみっこスタート機能
                </span>
                {autoPip ? <span className='font-bold text-accent'>ON</span> : <span className=''>OFF</span>}
                <input
                  type="checkbox"
                  className="toggle toggle-accent"
                  checked={autoPip}
                  onChange={(e) => setAutoPip(e.target.checked)}
                />
              </label>
            </div>
            <p className="text-sm">
              タイマーをスタートすると自動ですみっこへ向かいます
            </p>
          </div>
          <div
            className="rounded-lg sm:h-72 sm:w-[400px] sm:border-4 sm:shadow-lg"
            ref={containerRef}
          >
            <PictureInPictureWindow pipWindow={pipWindow}>
              <Timer
                timeLeft={timeLeft}
                isRunning={isRunning}
                onStart={handleStartWithPip}
                onStop={handleStop}
                onReset={handleReset}
                addTime={addTime}
              />
            </PictureInPictureWindow>
          </div>
          <div className="flex justify-center sm:border border-dashed rounded-lg my-3">
            <button
              className="btn btn-link px-2"
              onClick={pipWindow ? handleClosePipWindow : handleOpenPipWindow}
            >
              {pipWindow ? 'もどって来ていいよ!' : '画面のすみっこへGo!'}
              {pipWindow ? (
                ''
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
