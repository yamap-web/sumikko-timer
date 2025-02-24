type TimerCardProps = {
  timeLeft: number;
  isRunning: boolean;
  onStart: () => void;
  onStop: () => void;
  onReset: () => void;
  addTime: (seconds: number) => void;
};

export function TimerCard({
  timeLeft,
  isRunning,
  onStart,
  onStop,
  onReset,
  addTime,
}: TimerCardProps) {
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

  const isNoTimeLeft = timeLeft === 0;
  const isFullTimeLeft = timeLeft === 60 * 100 - 1;

  return (
    <div className="font-roboto grid justify-items-center px-6 py-5">
      <p className="text-9xl">{formattedTimeLeftText}</p>
      <div className="mt-2 space-x-2 w-full grid grid-cols-2">
        <button
          className={`btn btn-primary ${
            (isRunning || isNoTimeLeft) && 'btn-outline'
          } ${isNoTimeLeft && 'btn-disabled'}`}
          disabled={isNoTimeLeft}
          onClick={() => (isRunning ? onStop() : onStart())}
        >
          {isRunning ? <StopIcon /> : <StartIcon />}
          {isRunning ? 'ストップ' : 'スタート'}
        </button>
        <button
          className={`btn btn-outline btn-secondary ${
            isNoTimeLeft && 'btn-disabled'
          }`}
          disabled={isNoTimeLeft}
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
            className={`btn btn-outline btn-sm ${
              isFullTimeLeft && 'btn-disabled'
            }`}
            onClick={() => addTime(seconds)}
          >
            {text}
          </button>
        ))}
      </div>
    </div>
  );
}

function StartIcon() {
  return (
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
        d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
      />
    </svg>
  );
}

function StopIcon() {
  return (
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
        d="M15.75 5.25v13.5m-7.5-13.5v13.5"
      />
    </svg>
  );
}

function ResetIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-6 rotate-180"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m15 15 6-6m0 0-6-6m6 6H9a6 6 0 0 0 0 12h3"
      />
    </svg>
  );
}
