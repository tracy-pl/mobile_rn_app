import { useMemo, useRef } from 'react';
import MapView, { Polyline } from 'react-native-maps';

import { colors } from '~theme';
import { getLatLng } from '~utils/common/location.utils';
import { Map } from '../components/Map';
import useTracking from '../hooks/useTracking';
import { NavigationService } from '~services';
import { ROUTES } from '~constants';
import { S } from './Tracking.styles';
import { useTimer } from '~features/tracking/hooks/useTimer';

const latitudeDelta = 0.01;
const longitudeDelta = 0.01;

// const paddingMap = { bottom: 20, left: 20, right: 20, top: 50 };

const TrackingScreen = () => {
  const mapView = useRef<MapView>();
  const {
    trackingCoordinates,
    startTracking,
    stopTracking,
    inTracking,
    lastTrackedLocation,
  } = useTracking();
  const { time, setTimerOn } = useTimer();
  const hours = `${`${Math.floor((time / 3600000) % 60)}`.slice(-3)}`;
  const minutes = `${`0${Math.floor((time / 60000) % 60)}`.slice(-2)}`;
  // const seconds = `${`0${Math.floor((time / 1000) % 60)}`.slice(-2)}`;

  const handlePress = () => {
    if (!inTracking) {
      setTimerOn(true);
      startTracking();
      // NavigationService.navigate(ROUTES.MAIN); // temporary
    } else {
      setTimerOn(true);
      stopTracking();
      // NavigationService.navigate(ROUTES.MAIN); // temporary
    }
  };
  const region = useMemo(() => {
    const { latitude, longitude } = lastTrackedLocation || {};
    return {
      latitude,
      longitude,
      latitudeDelta,
      longitudeDelta,
    };
  }, [lastTrackedLocation]);

  // TODO: fix point tracking
  // now we recreate region when location updates
  // const onMapReady = useCallback(() => {
  //   if (trackingCoordinates.length) {
  //     setTimeout(() => {
  //       if (trackingCoordinates.length < 2) {
  //         mapView.current?.animateToRegion({
  //           latitude: Number(trackingCoordinates[0]?.latitude),
  //           latitudeDelta: 0.04571552714557825,
  //           longitude: Number(trackingCoordinates[0]?.latitude),
  //           longitudeDelta: 0.10340318083763123,
  //         });
  //       } else {
  //         mapView.current?.fitToElements({
  //           edgePadding: paddingMap,
  //           animated: true,
  //         });
  //       }
  //     }, 1000);
  //   }
  // }, [trackingCoordinates]);

  return (
    <>
      <Map
        mapRef={mapView}
        // TODO: fix
        followsUserLocation
        region={region}
        // onMapReady={onMapReady}
        showsUserLocation
      >
        <Polyline
          coordinates={trackingCoordinates.map(getLatLng)}
          strokeColor={colors.blue}
        />
      </Map>
      <S.Modal>
        <S.TextContainer>
          <S.TopText>Czas śledzenia</S.TopText>
          <S.BottomText>
            {hours}:{minutes} min
          </S.BottomText>
        </S.TextContainer>
        <S.TextContainer>
          <S.TopText>Przebyta trasa</S.TopText>
          <S.BottomText>4,0 km</S.BottomText>
        </S.TextContainer>
      </S.Modal>
      <S.Center>
        <S.FinishButton onPress={handlePress}>
          {inTracking ? 'STOP' : 'Zakońć śledzenie'}
        </S.FinishButton>
      </S.Center>
      <S.Gradient colors={['rgba(0, 0, 0, 0)', `${colors.black}`]} />
    </>
  );
};

export default TrackingScreen;
