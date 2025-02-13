import { useState } from 'react';

export function useTimer() {
  const [isRunning, setIsRunning] = useState(false);

  function handleStart() {
    setIsRunning(true);
  }

  function handleStop() {
    setIsRunning(false);
  }

  function handleReset() {}

  return { isRunning, handleStart, handleStop, handleReset };
}
