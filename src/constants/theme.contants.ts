const THEME = {
  DEFAULT: 'default',
  LIGHT: 'light',
  DARK: 'dark',
} as const;

type ThemeEnum = typeof THEME[keyof typeof THEME];

export { THEME };
export type { ThemeEnum };
