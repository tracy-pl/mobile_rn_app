import React, { useEffect, useMemo, useState } from 'react';

import { Button } from '~components';
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

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    onRequestPermissions();
  }, []);

  const onRequestPermissions = async () => {
    const [isGranted, ...state] = await isLocationPermissionGranted();

    if (!isGranted) {
      console.log('requesting permissions', isGranted, state);
    }

    setHasAccess(isGranted);
  };

  const isBtnDisabled = useMemo(
    () => disabled || !hasAccess,
    [disabled, hasAccess],
  );

  return (
    <Button disabled={isBtnDisabled} onPress={onSubmit}>
      {btnText}
    </Button>
  );
};

LocationPermissionForm.defaultProps = {
  disabled: false,
};

export default LocationPermissionForm;
