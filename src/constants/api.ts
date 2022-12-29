// @ts-ignore
import { API_BASE_URL as ApiBaseUrl } from '@env';
import { IS_ANDROID, IS_DEV_ENV } from './env';

const API_BASE_URL =
  IS_ANDROID && IS_DEV_ENV
    ? ApiBaseUrl.replace('localhost', '10.0.2.2')
    : ApiBaseUrl;

export { API_BASE_URL };
