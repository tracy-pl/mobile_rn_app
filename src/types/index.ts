import React from 'react';

export enum EnviromentEnum {
  DEV = 'dev',
  TEST = 'test',
  PROD = 'prod',
}

export type ParentComponent<T = unknown> = React.FC<
  React.PropsWithChildren & T
>;
