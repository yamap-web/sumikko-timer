type TimerProps = {
  isRunning: boolean;
  handleStart: () => void;
  handleStop: () => void;
  handleReset: () => void;
};

export function Timer({
  isRunning,
  handleStart,
  handleStop,
  handleReset,
}: TimerProps) {
  function formatTime() {
    return `05:00`;
  }

  return (
    <div className="grid justify-items-center p-6">
      <p className="text-9xl">{formatTime()}</p>
      <div className="mt-2 space-x-2 w-full grid grid-cols-2">
        {!isRunning ? (
          <button className="btn btn-primary" onClick={handleStart}>
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
            スタート
          </button>
        ) : (
          <button className="btn btn-outline btn-primary" onClick={handleStop}>
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
            ストップ
          </button>
        )}
        <button className="btn btn-neutral" onClick={handleReset}>
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
          もどす
        </button>
      </div>
      <div className="mt-5 space-x-2 grid grid-cols-5 w-full">
        <button className="btn btn-outline btn-sm">+10:00</button>
        <button className="btn btn-outline btn-sm">+5:00</button>
        <button className="btn btn-outline btn-sm">+3:00</button>
        <button className="btn btn-outline btn-sm">+1:00</button>
        <button className="btn btn-outline btn-sm">+0:30</button>
      </div>
    </div>
  );
}
