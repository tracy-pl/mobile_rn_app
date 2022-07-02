import * as Location from 'expo-location';

const isGranted = (status: string) =>
  status === Location.PermissionStatus.GRANTED;

const shouldRequestAgain = ({
  status,
  canAskAgain,
}: {
  status: string;
  canAskAgain: boolean;
}) => !isGranted(status) && canAskAgain;

export const isLocationPermissionGranted = async () => {
  let [foregroundPermission, backgroundPermission] = await Promise.all([
    Location.getBackgroundPermissionsAsync().catch(() => null),
    Location.getForegroundPermissionsAsync().catch(() => null),
  ]);

  if (shouldRequestAgain(foregroundPermission)) {
    foregroundPermission = await Location.requestForegroundPermissionsAsync();
  }
  if (shouldRequestAgain(backgroundPermission)) {
    backgroundPermission = await Location.requestBackgroundPermissionsAsync();
  }

  return [
    isGranted(foregroundPermission?.status) ||
      isGranted(backgroundPermission?.status),
    foregroundPermission,
    backgroundPermission,
  ];
};
