import { LocationObject } from 'expo-location';
import { LatLng } from 'react-native-maps/lib/sharedTypes';
import { ICoord } from '~types/models';

export function getLatLng(coord: ICoord | LocationObject): LatLng {
  if ('coords' in coord) {
    return {
      latitude: coord.coords.latitude,
      longitude: coord.coords.longitude,
    };
  }

  return {
    latitude: coord.latitude,
    longitude: coord.longitude,
  };
}
