import { useCallback, useEffect, useState } from 'react';
import * as TaskManager from 'expo-task-manager';
import * as Location from 'expo-location';
import { Alert } from 'react-native';

import { store } from '~redux/store';
import { useAppSelector, useActions } from '~hooks';
import { getLatLng } from '~utils/common/location.utils';
import { isLocationPermissionGranted } from '~services/location';

import { trackingActions } from '../redux';
import { NavigationService } from '~services';
import { ROUTES } from '~constants';

const TASK_FETCH_LOCATION = 'TASK_FETCH_LOCATION';

TaskManager.defineTask(
  TASK_FETCH_LOCATION,
  async ({
    data: { locations = [] },
    error,
  }: TaskManager.TaskManagerTaskBody<{
    locations?: Location.LocationObject[];
  }>) => {
    if (error || !locations.length) {
      console.error(error);
      return;
    }

    try {
      const coordinates = locations.map(location => ({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        timestamp: location.timestamp,
      }));
      store.dispatch(trackingActions.pushLocation(coordinates));
      store.dispatch(
        trackingActions.setLastTrackedLocation(
          coordinates[coordinates.length - 1],
        ),
      );
    } catch (e) {
      console.error(e);
    }
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
  // // check if it is already running
  // if (await Location.hasStartedLocationUpdatesAsync(TASK_FETCH_LOCATION)) {
  //   await stopLocationUpdates();
  // }

  try {
    await Location.startLocationUpdatesAsync(TASK_FETCH_LOCATION, {
      accuracy: Location.Accuracy.BestForNavigation,
      showsBackgroundLocationIndicator: true,
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
    throw err;
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

export function useTracking() {
  const { setLastTrackedLocation, clearTracking } = useActions();
  const { trackingCoordinates, lastTrackedLocation, totalDistance, startedAt } =
    useAppSelector(state => state.tracking);
  const [loading, setLoading] = useState(true);
  const [inTracking, setInTracking] = useState(false);
  const [trackingError, setTrackingError] = useState(null);

  const startTracking = useCallback(async () => {
    try {
      if (!(await isLocationPermissionGranted())) {
        Alert.alert(
          'Location permission is not granted',
          'Please enable location permission in settings',
        );
        NavigationService.navigate(ROUTES.SETTINGS);
        return;
      }

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
    getLocation()
      .then(location => setLastTrackedLocation(getLatLng(location)))
      .catch(setTrackingError);
  }, [setLastTrackedLocation]);

  return {
    trackingCoordinates,
    startTracking,
    stopTracking,
    inTracking,
    trackingError,
    loading,
    lastTrackedLocation,
    totalDistance,
    startedAt,
  };
}
