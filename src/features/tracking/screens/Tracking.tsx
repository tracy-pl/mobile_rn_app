// import { createRef } from 'react';
import { useMemo, useRef } from 'react';
import MapView, { Polyline, PROVIDER_GOOGLE } from 'react-native-maps';

import { Button } from '~components';
// import { ICoord } from '~types/models';
import useTracking from '../hooks/useTracking';
import { colors } from '~theme';
import { getLatLng } from '~utils/common/location.utils';

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
    currentLocation,
  } = useTracking();

  const handlePress = () => {
    if (!inTracking) startTracking();
    else stopTracking();
  };
  const region = useMemo(() => {
    const { latitude, longitude } = currentLocation || {};
    return {
      latitude,
      longitude,
      latitudeDelta,
      longitudeDelta,
    };
  }, [currentLocation]);

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
      <MapView
        ref={mapView}
        // TODO: fix
        followsUserLocation
        region={region}
        // onMapReady={onMapReady}
        showsUserLocation
        provider={PROVIDER_GOOGLE}
        style={{ flex: 1 }}
      >
        <Polyline
          coordinates={trackingCoordinates.map(getLatLng)}
          strokeColor={colors.blue}
        />
      </MapView>
      <Button onPress={handlePress}>{inTracking ? 'STOP' : 'START'}</Button>
    </>
  );
};

export default TrackingScreen;
