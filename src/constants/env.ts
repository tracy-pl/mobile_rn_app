import { Platform } from 'react-native';
// @ts-ignore
import { ENVIROMENT, NODE_ENV } from '@env';
import { EnviromentEnum } from '~types';

export const IS_ANDROID = Platform.OS === 'android';
export const IS_IOS = Platform.OS === 'ios';
export const IS_DEV_ENV =
  __DEV__ || ENVIROMENT === EnviromentEnum.DEV || NODE_ENV === 'development';
