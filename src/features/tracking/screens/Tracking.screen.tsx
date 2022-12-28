import { useMemo, useRef } from 'react';
import MapView, { Polyline } from 'react-native-maps';

import { View, Text } from 'react-native';
import styled from 'styled-components';
import { LinearGradient } from 'expo-linear-gradient';
import { Button } from '~components';
import { colors } from '~theme';
import { getLatLng } from '~utils/common/location.utils';
import { Map } from '../components/Map';
import useTracking from '../hooks/useTracking';
import { NavigationService } from '~services';
import { ROUTES } from '~constants';

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

  const handlePress = () => {
    if (!inTracking) {
      startTracking();
      NavigationService.navigate(ROUTES.MAIN); // temporary
    } else {
      stopTracking();
      NavigationService.navigate(ROUTES.MAIN); // temporary
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
      <Modal>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
          <Text style={{ opacity: 0.5, lineHeight: 19 }}>Czas śledzenia</Text>
          <Text style={{ fontSize: 18, lineHeight: 23 }}>0:31 min</Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
          <Text style={{ opacity: 0.5, lineHeight: 19 }}>Przebyta trasa</Text>
          <Text style={{ fontSize: 18, lineHeight: 23 }}>4,0 km</Text>
        </View>
      </Modal>

      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1,
        }}
      >
        <FinishButton onPress={handlePress}>
          {inTracking ? 'STOP' : 'Zakońć śledzenie'}
        </FinishButton>
      </View>
      <LinearGradient
        colors={['rgba(0, 0, 0, 0)', '#000000']}
        // useAngle
        // angle={180}
        // angleCenter={{ x: 0.5, y: 0.5 }}
        style={{
          position: 'absolute',
          zIndex: 0,
          width: '100%',
          height: 182,
          left: 0,
          bottom: 0,
          opacity: 0.8,
        }}
      />
    </>
  );
};

export default TrackingScreen;

const FinishButton = styled(Button)`
  background-color: #ff3b30;
  width: 95%;
  position: absolute;
  bottom: 40px;
`;

const Modal = styled(View)`
  background-color: #fff;
  width: 282px;
  height: 98px;
  position: absolute;
  top: 54px;
  left: 50%;
  margin-left: -141px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  border-radius: 16px;

  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
`;
