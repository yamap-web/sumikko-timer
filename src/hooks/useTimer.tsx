import { useEffect, useState } from 'react';

export function useTimer() {
  const [timeLeft, setTimeLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isRunning) {
      timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            setIsRunning(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      clearInterval(timer);
    };
  }, [isRunning]);

  function handleToggleTimer(toggle: string) {
    if (timeLeft <= 0) return;
    switch (toggle) {
      case 'start':
        setIsRunning(true);
        break;
      case 'stop':
        setIsRunning(false);
        break;
    }
  }

  function handleReset() {
    setIsRunning(false);
    setTimeLeft(0);
  }

  function addTime(seconds: number) {
    setTimeLeft((prev) => prev + seconds);
  }

  return { timeLeft, isRunning, handleToggleTimer, handleReset, addTime };
}
