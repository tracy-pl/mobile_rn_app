import * as Location from 'expo-location';
import { PermissionResponse } from 'expo-modules-core/src/PermissionsInterface';

const shouldRequestAgain = ({ canAskAgain, granted }: PermissionResponse) =>
  !granted && canAskAgain;

export const isLocationPermissionGranted = async (): Promise<boolean> => {
  try {
    let foregroundPermission = await Location.getForegroundPermissionsAsync();

    if (shouldRequestAgain(foregroundPermission)) {
      foregroundPermission = await Location.requestForegroundPermissionsAsync();
    }

    let backgroundPermission = await Location.getBackgroundPermissionsAsync();

    if (shouldRequestAgain(backgroundPermission)) {
      backgroundPermission = await Location.requestBackgroundPermissionsAsync();
    }

    return (
      (await Location.isBackgroundLocationAvailableAsync().catch(
        () => false,
      )) &&
      foregroundPermission?.granted &&
      backgroundPermission?.granted
    );
  } catch (error) {
    return false;
  }
};
