import { useCallback, useEffect, useState } from 'react';

export function useTimer(initialCountdown: number, ms = 1000) {
  const [countdown, setCountdown] = useState<number>(initialCountdown);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;

    if (isRunning) {
      interval = setInterval(() => {
        setCountdown(prev => prev + ms);
      }, ms);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning, ms]);

  const startTimer = useCallback(() => setIsRunning(true), []);
  const stopTimer = useCallback(() => setIsRunning(false), []);

  return { countdown, startTimer, stopTimer };
}
