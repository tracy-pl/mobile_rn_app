import React, { useEffect, useMemo } from 'react';

import { CloseIcon } from 'native-base';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';

import { ROUTES } from '~constants';
import { NavigationService } from '~services';
import { Button, Container } from '~components';

import { useTracking } from '../hooks/useTracking';

import { Map } from '../components/Map';

const latitudeDelta = 0.01;
const longitudeDelta = 0.01;

const PreTrackingScreen = () => {
  const { startTracking, lastTrackedLocation, inTracking } = useTracking();

  const region = useMemo(() => {
    if (!lastTrackedLocation) return null;

    const { latitude, longitude } = lastTrackedLocation;
    return {
      latitude,
      longitude,
      latitudeDelta,
      longitudeDelta,
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastTrackedLocation?.longitude, lastTrackedLocation?.latitude]);

  useEffect(() => {
    if (inTracking) NavigationService.navigate(ROUTES.TRACKING);
  }, [inTracking]);

  const handleExit = () => {
    NavigationService.goBack();
  };

  return (
    <Container>
      <View
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row',
          marginBottom: 40,
        }}
      >
        <View>
          <Text
            style={{
              fontSize: 32,
              fontWeight: '700',
              letterSpacing: -1.2,
              color: '#18214d',
            }}
          >
            Dodaj trasę
          </Text>
          <Text style={{ fontSize: 16, color: '#18214d', opacity: 0.5 }}>
            Egzaminacyjną
          </Text>
        </View>
        <CloseButton onPress={handleExit}>
          <CloseIcon />
        </CloseButton>
      </View>
      <Map region={region} />
      <Button style={{ marginTop: 20 }} onPress={startTracking}>
        Rozpocznij śledzenie
      </Button>
    </Container>
  );
};

export default PreTrackingScreen;

const CloseButton = styled(Button)`
  background-color: #e7e7e7;
  width: 30px;
  height: 30px;
  border-radius: 15px;
`;
