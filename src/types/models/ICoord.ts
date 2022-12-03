import { LatLng } from 'react-native-maps/lib/sharedTypes';

export interface ICoord extends LatLng {
  timestamp?: Date;
}
