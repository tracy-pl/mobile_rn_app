import React, { RefObject, useMemo } from 'react';
import MapView, { MapViewProps, PROVIDER_GOOGLE } from 'react-native-maps';

import { S } from './Map.styles';
import { customMapStyleConfig } from './Map.constants';

interface IMap extends MapViewProps {
  mapRef?: RefObject<MapView>;
}

export const Map: React.FC<IMap> = props => {
  const additionalProps = useMemo(() => {
    const result: { ref?: IMap['mapRef'] } = {};

    if (props.mapRef) result.ref = props.mapRef;

    return result;
  }, [props.mapRef]);

  // TODO: animate region change
  // userLocationChanged(event) {
  //   const newRegion = event.nativeEvent.coordinate;
  //
  //   this.region = {
  //     ...this.region,
  //     latitude: newRegion.latitude,
  //     longitude: newRegion.longitude
  //   };
  //
  //   this.animateToRegion();
  // }
  //
  // animateToRegion() {
  //   if(this.map) {
  //     this.map.animateToRegion({latitude: this.region.latitude, longitude: this.region.longitude,
  //       latitudeDelta: this.region.latitudeDelta, longitudeDelta: this.region.longitudeDelta}, 1000);
  //   }
  // }
  //
  // regionChanged(event) {
  //   this.region = {
  //     longitudeDelta: event.longitudeDelta,
  //     latitudeDelta: event.latitudeDelta,
  //     latitude: event.latitude,
  //     longitude: event.longitude
  //   }
  // }

  return (
    <S.MapView
      {...props}
      {...additionalProps}
      // initialRegion={this.region}
      // onUserLocationChange={(event) => followsUserLocation && this.userLocationChanged(event)}
      // onRegionChange={this.regionChanged}
      cacheEnabled
      loadingEnabled
      showsUserLocation
      provider={PROVIDER_GOOGLE}
      showsMyLocationButton={false}
      customMapStyle={customMapStyleConfig}
      followsUserLocation={props.followsUserLocation}
    >
      {props.children}
    </S.MapView>
  );
};
