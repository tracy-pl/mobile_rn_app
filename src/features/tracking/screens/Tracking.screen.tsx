import { useMemo, useRef } from 'react';
import MapView, { Polyline } from 'react-native-maps';

import { colors } from '~theme';
import { getLatLng } from '~utils/common/location.utils';

import { useTracking } from '../hooks/useTracking';
import { useTrackingTimer } from '../hooks/useTrackingTimer';

import { Map } from '../components/Map';

import { S } from './Tracking.styles';

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
  const trackingTimerLabel = useTrackingTimer();

  const handlePress = () => {
    if (!inTracking) {
      // startTracking();
      // NavigationService.navigate(ROUTES.MAIN); // temporary
    } else {
      // stopTracking();
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
          <S.BottomText>{trackingTimerLabel} min</S.BottomText>
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
