import { Alert } from 'react-native';
import * as Location from 'expo-location';
import { PermissionResponse, PermissionStatus } from 'expo-modules-core';

const shouldRequestAgain = ({ status }: PermissionResponse) =>
  status !== PermissionStatus.GRANTED;

export const isLocationPermissionGranted = async (): Promise<boolean> => {
  try {
    let foregroundPermission = await Location.getForegroundPermissionsAsync();

    if (shouldRequestAgain(foregroundPermission)) {
      foregroundPermission = await Location.requestForegroundPermissionsAsync();
    }

    if (foregroundPermission.status !== PermissionStatus.GRANTED)
      throw new Error('Foreground permission not granted');

    let backgroundPermission = await Location.getBackgroundPermissionsAsync();

    if (shouldRequestAgain(backgroundPermission)) {
      backgroundPermission = await Location.requestBackgroundPermissionsAsync();
    }

    return foregroundPermission?.granted && backgroundPermission?.granted;
  } catch (error) {
    Alert.alert(
      'Something went wrong while requesting permissions',
      JSON.stringify(error, null, 2),
    );

    return false;
  }
};
