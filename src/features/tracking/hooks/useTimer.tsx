import { useEffect, useState } from 'react';

export function useTimer() {
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime(prev => prev + 1000);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timerOn]);
  return { time, setTimerOn };
}
