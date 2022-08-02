import * as Location from 'expo-location';
import * as TaskManager from 'expo-task-manager';
import { TaskManagerTaskBody } from 'expo-task-manager';
// import { distanceBetween } from 'geofire-common';
import { Alert } from 'react-native';
import { isLocationPermissionGranted } from '~services/location/permission.service';

const LOCATION_TRACKING = 'location-tracking';

TaskManager.defineTask(
  LOCATION_TRACKING,
  async ({ data: { locations }, error }: TaskManagerTaskBody<any>) => {
    if (error) {
      console.error(error);
      return;
    }
    const [location] = locations;

    try {
      // dispatch action to add new coord
      // store.dispatch(
      //   addNewCoord({
      //     newCoord: {
      //       latitude: location.coords.latitude,
      //       longitude: location.coords.longitude,
      //     },
      //   }),
      // );

      // check if current position and last position distance is greater than 10 meters
      const currentPosition = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      };
      // const lastPosition =
      // store.getState().gpsLocation.locationArray.slice(-2)[0] || {};

      // const distance = distanceBetween(
      //   [currentPosition.latitude, currentPosition.longitude],
      //   [lastPosition.latitude, lastPosition.longitude],
      // );

      // if (
      //   currentPosition &&
      //   lastPosition &&
      //   currentPosition.latitude !== lastPosition.latitude &&
      //   currentPosition.longitude !== lastPosition.longitude
      // ) {
      //   console.log(
      //     'distance',
      //     distance,
      //     `with currentPosition: ${currentPosition.latitude}, ${currentPosition.longitude}`,
      //     `with lastPosition: ${lastPosition.latitude}, ${lastPosition.longitude}`,
      //   );

      // distance in kilometers
      // if (distance > THRESHOLD_DISTANCE && distance < 1000) {
      //   // 10 is the max distance, sometime it throw a distance of 20 for no reason (IDK)
      //   console.log('clearing because of reaching threshold')
      //   //clear
      //   store.dispatch(clearLocation())
      // }

      console.log(currentPosition);
    } catch (err) {
      console.error(err);
    }
  },
);

export const stopLocationUpdates = async (): Promise<void> => {
  try {
    Location.hasStartedLocationUpdatesAsync(LOCATION_TRACKING).then(value => {
      if (value) {
        Location.stopLocationUpdatesAsync(LOCATION_TRACKING);
      }
    });
  } catch (err) {
    console.error(err);
  }
};

export const startLocationUpdates = async (): Promise<void> => {
  const isGranted = await isLocationPermissionGranted();
  if (!isGranted) {
    // TODO: form user friendly error message
    Alert.alert(
      'Location Permission',
      'Location permission is required to use this app',
    );
    return;
  }
  console.log('startLocationUpdates');

  // check if it is already running
  if (await Location.hasStartedLocationUpdatesAsync(LOCATION_TRACKING)) {
    await stopLocationUpdates();
  }

  console.log('startLocationUpdates success');

  try {
    await Location.startLocationUpdatesAsync(LOCATION_TRACKING, {
      accuracy: Location.Accuracy.Highest,
      distanceInterval: 6, // minimum change (in meters) betweens updates
      deferredUpdatesInterval: 2000, // minimum interval (in milliseconds) between updates

      // foregroundService is how you get the task to be updated as often as would be if the app was open
      foregroundService: {
        notificationTitle: 'Using your location',
        notificationBody: '',
        // notificationBody:
        //   'To turn off, go back to the app and switch task off.',
      },
    });
  } catch (err) {
    console.error(err);
  }
};

export const isLocationUpdatesRunning = async (): Promise<boolean> => {
  try {
    return await Location.hasStartedLocationUpdatesAsync(LOCATION_TRACKING);
  } catch (err) {
    return false;
    console.error(err);
  }
};

const startLocationTracking = async (): Promise<void> => {
  await Location.startLocationUpdatesAsync(LOCATION_TRACKING, {
    accuracy: Location.Accuracy.Highest,
    timeInterval: 10000,
    distanceInterval: 0,
  });
  const hasStarted = await Location.hasStartedLocationUpdatesAsync(
    LOCATION_TRACKING,
  );
  console.log('tracking started?', hasStarted);
};

export const getLocation =
  async (): Promise<Location.LocationObject | null> => {
    try {
      return await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.Highest,
      });
    } catch (err) {
      return null;
    }
  };
