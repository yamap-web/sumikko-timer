'use client';

import { Timer } from '@/components/Timer';
import PictureInPictureWindow, {
  usePictureInPicture,
} from '@/hooks/usePictureInPicture';
import { useTimer } from '@/hooks/useTimer';

export default function Home() {
  const { handleOpenPipWindow, handleClosePipWindow, pipWindow } =
    usePictureInPicture({
      width: 400,
      height: 300,
    });

  const { timeLeft, isRunning, handleToggleTimer, handleReset, addTime } =
    useTimer();

  return (
    <div className="grid items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="">
        <h1 className="font-bold text-5xl mb-4 text-center">
          すみっこタイマー
        </h1>
        <div className="flex space-x-2 mb-3">
          <button className="btn" onClick={handleOpenPipWindow}>
            Open
          </button>
          <button className="btn" onClick={handleClosePipWindow}>
            Close
          </button>
        </div>
        <div className="border rounded-lg">
          <PictureInPictureWindow pipWindow={pipWindow}>
            <Timer
              timeLeft={timeLeft}
              isRunning={isRunning}
              onToggleTimer={handleToggleTimer}
              onReset={handleReset}
              addTime={addTime}
            />
          </PictureInPictureWindow>
        </div>
      </main>
    </div>
  );
}
