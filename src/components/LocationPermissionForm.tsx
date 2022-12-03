import React, { useEffect, useMemo, useState } from 'react';

import Button from '~components/Button';
import Text from '~components/Text';

import { isLocationPermissionGranted } from '~services/location';

interface ILocationPermissionFormProps {
  btnText: string;
  onSubmit: () => void;
  disabled?: boolean;
}

const LocationPermissionForm: React.FC<ILocationPermissionFormProps> = ({
  onSubmit,
  btnText,
  disabled,
}) => {
  const [hasAccess, setHasAccess] = useState(false);

  const onRequestPermissions = async () => {
    const isGranted = await isLocationPermissionGranted();

    if (!isGranted) {
      console.info('requesting permissions', isGranted);
    }

    setHasAccess(isGranted);
  };

  const isBtnDisabled = useMemo(
    () => disabled || !hasAccess,
    [disabled, hasAccess],
  );

  useEffect(() => {
    onRequestPermissions();
  }, []);

  return (
    <>
      <Text>Location permission is required to use this app.</Text>
      <Button disabled={isBtnDisabled} onPress={onSubmit}>
        {btnText}
      </Button>
    </>
  );
};

LocationPermissionForm.defaultProps = {
  disabled: false,
};

export default LocationPermissionForm;
