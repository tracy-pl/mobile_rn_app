import { useEffect, useMemo } from 'react';
import { differenceInMilliseconds } from 'date-fns';

import { useTimer } from '~hooks/useTimer';

import { useTracking } from '../useTracking';

const SECONDS_IN_MINUTE = 60;
const MS_IN_MINUTE = SECONDS_IN_MINUTE * 1000;
const MS_IN_HOUR = SECONDS_IN_MINUTE * MS_IN_MINUTE;

export const useTrackingTimer = (): string => {
  const { startedAt } = useTracking();
  const startedAtTimestamp = useMemo(
    () => (startedAt ? differenceInMilliseconds(new Date(), startedAt) : 0),
    [startedAt],
  );
  const { countdown, startTimer, stopTimer } = useTimer(
    startedAtTimestamp,
    MS_IN_MINUTE,
  );

  useEffect(() => {
    startTimer();
    return stopTimer;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return useMemo(() => {
    const hours = `${Math.floor(
      (countdown / MS_IN_HOUR) % SECONDS_IN_MINUTE,
    )}`.slice(-3);
    const minutes = `0${Math.floor(
      (countdown / MS_IN_MINUTE) % SECONDS_IN_MINUTE,
    )}`.slice(-2);

    return `${hours}:${minutes} min`;
  }, [countdown]);
};
