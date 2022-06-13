export const STACKS = {
  ROOT: 'root',
};

export const ROUTES = {
  FORGET_PASSWORD: 'forget-password',
  LOGIN: 'login',
  MAIN: 'main',
} as const;

export type ROUTES_ENUM = typeof ROUTES[keyof typeof ROUTES];
