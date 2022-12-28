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

  return (
    <S.MapView
      {...props}
      {...additionalProps}
      showsUserLocation
      provider={PROVIDER_GOOGLE}
      customMapStyle={customMapStyleConfig}
    >
      {props.children}
    </S.MapView>
  );
};
