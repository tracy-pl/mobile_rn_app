import React, { useEffect, useMemo } from 'react';

import { CloseIcon } from 'native-base';
import { View } from 'react-native';

import { ROUTES } from '~constants';
import { NavigationService } from '~services';

import { useTracking } from '../../hooks/useTracking';
import { Map } from '../../components/Map';
import { S } from './PreTracking.styles';

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

  const handlePress = () => {
    startTracking();
    NavigationService.navigate(ROUTES.TRACKING);
  };

  const handleExit = () => {
    NavigationService.goBack();
  };

  return (
    <S.OuterContainer>
      <S.TopContainer>
        <View>
          <S.TopText>Dodaj trasę</S.TopText>
          <S.BottomText>Egzaminacyjną</S.BottomText>
        </View>
        <S.CloseButton onPress={handleExit}>
          <CloseIcon />
        </S.CloseButton>
      </S.TopContainer>
      <Map region={region} />
      <S.Center>
        <S.BottomButton onPress={handlePress}>
          Rozpocznij śledzenie
        </S.BottomButton>
      </S.Center>
    </S.OuterContainer>
  );
};

export default PreTrackingScreen;
