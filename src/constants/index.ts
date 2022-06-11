// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { API_BASE_URL as ApiBaseUrl, NODE_ENV } from '@env';
import { Platform } from 'react-native';

const API_BASE_URL =
  Platform.OS === 'android' && NODE_ENV === 'development'
    ? ApiBaseUrl.replace('localhost', '10.0.2.2')
    : ApiBaseUrl;

export { API_BASE_URL };
