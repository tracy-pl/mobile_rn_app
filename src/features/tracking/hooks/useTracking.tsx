import { useCallback, useEffect, useState } from 'react';
import * as TaskManager from 'expo-task-manager';
import * as Location from 'expo-location';

import { store } from '~redux/store';
import { useAppSelector, useActions } from '~hooks';
import { getLatLng } from '~utils/common/location.utils';
import { trackingActions } from '../redux';

const TASK_FETCH_LOCATION = 'TASK_FETCH_LOCATION';

TaskManager.defineTask(
  TASK_FETCH_LOCATION,
  async ({
    data: { locations },
    error,
  }: TaskManager.TaskManagerTaskBody<{
    locations?: Location.LocationObject[];
  }>) => {
    if (error) {
      console.error(error);
      return;
    }
    locations?.forEach(location => {
      // dispatch action to add new coord
      store.dispatch(
        trackingActions.pushLocation({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          timestamp: location.timestamp,
        }),
      );
    });
  },
);

export const stopLocationUpdates = async () => {
  try {
    await Location.stopLocationUpdatesAsync(TASK_FETCH_LOCATION);
  } catch (err) {
    console.error(err);
  }
};

export const startLocationUpdates = async () => {
  // check if it is already running
  if (await Location.hasStartedLocationUpdatesAsync(TASK_FETCH_LOCATION)) {
    await stopLocationUpdates();
  }

  try {
    await Location.startLocationUpdatesAsync(TASK_FETCH_LOCATION, {
      accuracy: Location.Accuracy.Highest,
      distanceInterval: 6, // minimum change (in meters) betweens updates
      deferredUpdatesInterval: 2000, // minimum interval (in milliseconds) between updates
      // // foregroundService is how you get the task to be updated as often as would be if the app was open
      // foregroundService: {
      //   notificationTitle: 'Using your location',
      //   notificationBody: '',
      //   // notificationBody:
      //   //   'To turn off, go back to the app and switch task off.',
      // },
    });
  } catch (err) {
    console.error(err);
  }
};

export const isLocationUpdatesRunning = async () => {
  try {
    return await Location.hasStartedLocationUpdatesAsync(TASK_FETCH_LOCATION);
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const getLocation = async () => {
  try {
    return await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.Highest,
    });
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export default function useTracking() {
  const { setCurrentLocation, clearTracking } = useActions();
  const { trackingCoordinates, currentLocation } = useAppSelector(
    state => state.tracking,
  );
  const [loading, setLoading] = useState(true);
  const [inTracking, setInTracking] = useState(false);
  const [trackingError, setTrackingError] = useState(null);

  // useEffect(() => {
  //   if (loading && inTracking && currentLocation) setLoading(false);
  //   else setLoading(true);
  // }, [inTracking, currentLocation, loading]);

  const startTracking = useCallback(async () => {
    try {
      await startLocationUpdates();

      const hasStarted = await isLocationUpdatesRunning();

      setInTracking(hasStarted);
    } catch (e) {
      setTrackingError(e);
    }
  }, []);

  const stopTracking = useCallback(async () => {
    setLoading(true);

    try {
      await stopLocationUpdates();

      setInTracking(false);
      clearTracking();
    } catch (e) {
      setTrackingError(e);
    }

    setLoading(false);
  }, [clearTracking]);

  useEffect(() => {
    (async () => {
      try {
        const _currentLocation = await getLocation();

        setCurrentLocation(getLatLng(_currentLocation));
      } catch (e) {
        setTrackingError(e);
      }
    })();

    return () => {
      stopLocationUpdates();
    };
  }, [setCurrentLocation, stopTracking]);

  return {
    trackingCoordinates,
    startTracking,
    stopTracking,
    inTracking,
    trackingError,
    loading,
    currentLocation,
  };
}
