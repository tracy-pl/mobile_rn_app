import RNMapView from 'react-native-maps';
import styled from 'styled-components/native';

export namespace S {
  export const MapView = styled(RNMapView)`
    flex: 1;
    border-radius: 16px;
    border-width: 1px;
    border-style: solid;
    border-color: rgba(3, 27, 54, 0.1);
  `;
}
