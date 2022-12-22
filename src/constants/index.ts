// @ts-ignore
import { ENVIROMENT } from '@env';
import { EnviromentEnum } from '~types';

export * from './api';
export * from './routes';

export const IS_DEV_ENV = __DEV__ || ENVIROMENT === EnviromentEnum.DEV;
