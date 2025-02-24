import { useEffect, useRef, useState } from 'react';

export function useTimer() {
  const [timeLeft, setTimeLeft] = useState(300);
  const [isRunning, setIsRunning] = useState(false);

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const soundRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    soundRef.current = new Audio('/time-up.mp3');
  }, []);

  useEffect(() => {
    function countDown() {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          soundRef.current?.play().catch(() => {
            console.error('効果音の再生に失敗しました');
          });
          setIsRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }

    if (isRunning) {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
      timerRef.current = setInterval(countDown, 1000);
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [isRunning]);

  function handleStart() {
    if (timeLeft <= 0) return;
    setIsRunning(true);
  }

  function handleStop() {
    setIsRunning(false);
  }

  function handleReset() {
    setIsRunning(false);
    setTimeLeft(0);
  }

  function addTime(seconds: number) {
    setTimeLeft((prevValue) => {
      let newValue = prevValue + seconds;
      if (newValue >= 60 * 100) newValue = 60 * 100 - 1;
      if (newValue < 0) newValue = 0;

      return newValue;
    });
  }

  return { timeLeft, isRunning, handleStart, handleStop, handleReset, addTime };
}
