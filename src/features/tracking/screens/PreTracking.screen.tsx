import React, { useMemo } from 'react';

import { ROUTES } from '~constants';
import { NavigationService } from '~services';
import { Button, Container } from '~components';

import useTracking from '../hooks/useTracking';
import { Map } from '../components/Map';

const latitudeDelta = 0.01;
const longitudeDelta = 0.01;

const PreTrackingScreen = () => {
  const { lastTrackedLocation } = useTracking();

  const region = useMemo(() => {
    const { latitude, longitude } = lastTrackedLocation || {};
    return {
      latitude,
      longitude,
      latitudeDelta,
      longitudeDelta,
    };
  }, [lastTrackedLocation]);

  const handlePress = () => {
    NavigationService.navigate(ROUTES.TRACKING);
  };

  return (
    <Container>
      <Map region={region} />
      <Button onPress={handlePress}>Rozpocznij śledzenie</Button>
    </Container>
  );
};

export default PreTrackingScreen;
