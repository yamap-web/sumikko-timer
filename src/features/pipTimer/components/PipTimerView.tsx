import type { RefObject } from 'react';
import PictureInPictureWindow from '@/hooks/usePictureInPicture';
import { useTimer } from '@/features/pipTimer/hooks/useTimer';
import { TimerCard } from './TimerCard';

type PipTimerViewProps = {
  autoPip: boolean;
  containerRef: RefObject<HTMLDivElement | null>;
  pipWindow: Window | null;
  handleOpenPipWindow: () => Promise<void>;
};

export function PipTimerView({
  autoPip,
  containerRef,
  pipWindow,
  handleOpenPipWindow,
}: PipTimerViewProps) {
  const { timeLeft, isRunning, handleStart, handleStop, handleReset, addTime } =
    useTimer();

  function handleStartWithPip() {
    handleStart();
    if (autoPip && !pipWindow) {
      handleOpenPipWindow();
    }
  }

  return (
    <div
      className="rounded-lg sm:h-72 sm:w-[400px] sm:border-4 sm:shadow-lg"
      ref={containerRef}
    >
      <PictureInPictureWindow pipWindow={pipWindow}>
        <TimerCard
          timeLeft={timeLeft}
          isRunning={isRunning}
          onStart={handleStartWithPip}
          onStop={handleStop}
          onReset={handleReset}
          addTime={addTime}
        />
      </PictureInPictureWindow>
    </div>
  );
}
