export const STACKS = {
  ROOT: 'root',
  AUTH: 'auth',
};

export const ROUTES = {
  FORGET_PASSWORD: 'forget-password',
  LOGIN: 'login',
  SIGNUP: 'signup',
  MAIN: 'Trasy',
  MY_ROUTES: 'Moje trasy',
  PRE_TRACKING: 'Pre-tracking',
  TRACKING: 'tracking',
  SUBSCRIPTION: 'Subskrypcja',
  SETTINGS: 'Ustawienia',
} as const;

export type ROUTES_ENUM = typeof ROUTES[keyof typeof ROUTES];
