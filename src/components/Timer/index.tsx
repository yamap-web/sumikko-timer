import { ResetIcon, StartIcon, StopIcon } from './Icons';

type TimerProps = {
  timeLeft: number;
  isRunning: boolean;
  onStart: () => void;
  onStop: () => void;
  onReset: () => void;
  addTime: (seconds: number) => void;
};

export function Timer({
  timeLeft,
  isRunning,
  onStart,
  onStop,
  onReset,
  addTime,
}: TimerProps) {
  const frequentlyUsedTimers = [
    { seconds: 10 * 60, text: '+10:00' },
    { seconds: 5 * 60, text: '+5:00' },
    { seconds: 3 * 60, text: '+3:00' },
    { seconds: 60, text: '+1:00' },
    { seconds: 30, text: '+0:30' },
  ];

  function formatTime(seconds: number): string {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  }

  const formattedTimeLeftText = formatTime(timeLeft);

  return (
    <div className="font-roboto grid justify-items-center p-6">
      <p className="text-8xl sm:text-9xl">{formattedTimeLeftText}</p>
      <div className="mt-2 space-x-2 w-full grid grid-cols-2">
        <button
          className={`text-xs btn btn-primary ${isRunning && 'btn-outline'}`}
          onClick={() => (isRunning ? onStop() : onStart())}
        >
          {isRunning ? <StopIcon /> : <StartIcon />}
          {isRunning ? 'ストップ' : 'スタート'}
        </button>
        <button
          className="text-xs btn btn-outline btn-secondary"
          onClick={onReset}
        >
          <ResetIcon />
          ０にもどす
        </button>
      </div>
      <div className="mt-5 space-x-2 grid grid-cols-5 w-full">
        {frequentlyUsedTimers.map(({ seconds, text }) => (
          <button
            key={text}
            className="btn btn-outline btn-sm"
            onClick={() => addTime(seconds)}
          >
            {text}
          </button>
        ))}
      </div>
    </div>
  );
}
