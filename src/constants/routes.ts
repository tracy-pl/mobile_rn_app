export const STACKS = {
  ROOT: 'root',
  AUTH: 'auth',
};

export const ROUTES = {
  FORGET_PASSWORD: 'forget-password',
  LOGIN: 'login',
  MAIN: 'Trasy',
  MY_ROUTES: 'Moje trasy',
  TRACKING: 'tracking',
  SUBSCRIPTION: 'Subskrypcja',
  SETTINGS: 'Ustawienia'
} as const;

export type ROUTES_ENUM = typeof ROUTES[keyof typeof ROUTES];
