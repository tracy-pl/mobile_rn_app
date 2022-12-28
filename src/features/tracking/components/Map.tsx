import MapView, { MapViewProps, PROVIDER_GOOGLE } from 'react-native-maps';
import React, { RefObject, useMemo } from 'react';

const config = [
  {
    featureType: 'poi.attraction',
    elementType: 'labels',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'poi.business',
    elementType: 'labels',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'poi.government',
    elementType: 'labels',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'poi.medical',
    elementType: 'labels',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'poi.place_of_worship',
    elementType: 'labels',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'poi.school',
    elementType: 'labels',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'poi.sports_complex',
    elementType: 'labels',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
];

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
    <MapView
      {...props}
      {...additionalProps}
      style={{
        flex: 1,
        borderRadius: 16,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'rgba(3, 27, 54, 0.1)',
      }}
      showsUserLocation
      provider={PROVIDER_GOOGLE}
      customMapStyle={config}
    >
      {props.children}
    </MapView>
  );
};
