export const STACKS = {
  ROOT: 'root',
  AUTH: 'auth',
};

export const ROUTES = {
  FORGET_PASSWORD: 'forget-password',
  LOGIN: 'login',
  MAIN: 'main',
  TRACKING: 'tracking',
} as const;

export type ROUTES_ENUM = typeof ROUTES[keyof typeof ROUTES];
