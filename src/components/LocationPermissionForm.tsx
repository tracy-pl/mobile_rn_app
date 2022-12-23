import * as Location from 'expo-location';
import { Linking } from 'react-native';
import React, { useEffect, useState } from 'react';

import Button from '~components/Button';
import Text from '~components/Text';
import { isLocationPermissionGranted } from '~services/location';
import showToast from '~utils/common/showToast';

import packageJson from '../../package.json';

interface ILocationPermissionFormProps {
  btnText?: string;
  onSubmit?: () => void;
}

// const LocationPermissionForm: React.FC<ILocationPermissionFormProps> = ({
//   onSubmit,
//   btnText,
// }) => {
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false);
//   const [hasAccess, setHasAccess] = useState(false);
//
//   const onRequestPermissions = async () => {
//     setLoading(true);
//
//     try {
//       const isGranted = await isLocationPermissionGranted();
//       if (!isGranted) {
//         console.info('requesting permissions', isGranted);
//       }
//
//       setHasAccess(isGranted);
//     } catch (e) {
//       console.error(e);
//       Alert.alert('Error', 'Something went wrong');
//       setError(true);
//     }
//
//     setLoading(false);
//   };
//
//   const isBtnDisabled = useMemo(
//     () => disabled || loading || (!error && !hasAccess),
//     [disabled, error, hasAccess, loading],
//   );
//
// useEffect(() => {
//   isLocationPermissionGranted()
// }, []);
//
//   return (
//     <>
//       <Text>Location permission is required to use this app.</Text>
//       <Button disabled={isBtnDisabled} onPress={onSubmit} isLoading={loading}>
//         {btnText}
//       </Button>
//     </>
//   );
// };

const NewForm: React.FC<ILocationPermissionFormProps> = ({
  onSubmit,
  btnText,
}) => {
  const [foreground, requestForeground] = Location.useForegroundPermissions();
  const [background, requestBackground] = Location.useBackgroundPermissions();
  const [isUserInformed, setIsUserInformed] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => {
      if (!isUserInformed || !foreground.granted || !background.granted) {
        showToast({
          type: 'error',
          topText: 'Location permission denied',
          bottomText: '',
        });
        setIsUserInformed(true);
        isLocationPermissionGranted();
      }
    }, 5000);

    return () => clearInterval(id);
  }, [foreground, background, isUserInformed]);

  // In this example, we follow a couple of rules for the permissions
  //  1. Foreground permission needs to be granted before asking background permission
  //  2. Whenever the user repeatedly blocks a permission, `canAskAgain` will be false and we _have_ to open app settings
  //  3. When opening app settings, we need to manually refresh the permissions in order to update the states

  return (
    <>
      <Text>Foreground permission:</Text>
      <Text>status: {foreground?.status || 'pending'}</Text>
      {foreground && !foreground.granted && foreground.canAskAgain && (
        // If the permission is not granted, but we can request again, show this
        <Button onPress={requestForeground}>Grant permission</Button>
      )}
      {foreground && !foreground.granted && !foreground.canAskAgain && (
        // If the permission is not granted, and we can't request it again, show this.
        //
        // Unfortunately, we have to manually refresh the foreground status in this case.
        // When the user comes back from the app settings page, after manually granting permission,
        // the user has to press this button again, in order to update the state of that permission.
        // We use `requestXPermissionAsync` to update the scoped permission when running in Expo Go.
        //
        // You could try to implement appState and auto-refreshes, but for this example
        // I just check before sending people to the app settings.
        // NOTE: this is not a great scenario to be in, and Google will have some issues with this flow.
        <Button
          onPress={() =>
            requestForeground().then(p => !p.granted && Linking.openSettings())
          }
        >
          Grant permission through settings
        </Button>
      )}

      <Text>Background permission:</Text>
      <Text>status: {background?.status || 'pending'}</Text>
      {!foreground?.granted && (
        // We don't have the foreground permission yet,
        // which is required for Android to use background location
        <Text>Grant foreground location permission first</Text>
      )}
      {foreground?.granted &&
        background &&
        !background.granted &&
        background.canAskAgain && (
          // If the permission is not granted, but we can request again, show this.
          // This handles the permission status update automatically for you, when users are coming back from the app settings
          <Button onPress={requestBackground}>Grant permission</Button>
        )}
      {foreground?.granted &&
        background &&
        !background.granted &&
        !background.canAskAgain && (
          // If the permission is not granted, and we can't request it again, show this.
          // Same here, we have to manually refresh the background status in this case.
          // NOTE: this is not a great scenario to be in, and Google will have some issues with this flow.
          <Button
            onPress={() =>
              requestBackground().then(
                p => !p.granted && Linking.openSettings(),
              )
            }
          >
            Grant permission through settings
          </Button>
        )}
      {btnText && (
        <Button
          disabled={
            !isUserInformed && (!background?.granted || !foreground?.granted)
          }
          onPress={onSubmit}
        >
          {btnText}
        </Button>
      )}
      <Text>App version: {packageJson.version}</Text>
    </>
  );
};

NewForm.defaultProps = {
  btnText: '',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onSubmit: () => {},
};

// LocationPermissionForm.defaultProps = {
//   disabled: false,
// };

export default NewForm;
