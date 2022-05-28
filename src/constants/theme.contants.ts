import { dark, light } from '~theme/shemas';

const THEME = {
  DEFAULT: 'default',
  LIGHT: 'light',
  DARK: 'dark',
} as const;

type ThemeEnum = typeof THEME[keyof typeof THEME];

const COLOR_SCHEMES = {
  [THEME.LIGHT]: light,
  [THEME.DARK]: dark,
};

export { THEME, COLOR_SCHEMES };
export type { ThemeEnum };
