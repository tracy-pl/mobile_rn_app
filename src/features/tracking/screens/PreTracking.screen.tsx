import React, { useMemo } from 'react';

import { CloseIcon } from 'native-base';
import { View } from 'react-native';
import { ROUTES } from '~constants';
import { NavigationService } from '~services';
import { Container } from '~components';

import useTracking from '../hooks/useTracking';
import { Map } from '../components/Map';
import { S } from '~features/tracking/screens/PreTracking.styles';

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

  const handleExit = () => {
    NavigationService.goBack();
  };

  return (
    <Container>
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
      <S.BottomButton onPress={handlePress}>
        Rozpocznij śledzenie
      </S.BottomButton>
    </Container>
  );
};

export default PreTrackingScreen;
