import { useEffect, useMemo, useState } from 'react';

export function useTimer(initialCountdown: Date) {
  const [countdown, setCountdown] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;

    if (timerOn) {
      interval = setInterval(() => {
        setCountdown(prev => prev + 1000);
      }, 1000);
    } else {
      return clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerOn]);

  function startTimer() {
    setTimerOn(true);
  }

  function stopTimer() {
    setTimerOn(false);
  }

  return { countdown, startTimer, stopTimer };
}
