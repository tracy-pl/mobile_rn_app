import colors from './colors';
import fontSize from './fontSizes';
import sizes from './sizes';
import { fonts } from './fonts';
import { images } from './images';
import { light, dark } from './shemas';

const THEME = {
  DEFAULT: 'default',
  LIGHT: 'light',
  DARK: 'dark',
} as const;

const COLOR_SCHEMES = {
  [THEME.LIGHT]: light,
  [THEME.DARK]: dark,
};

const theme = {
  sizes,
  allColors: colors,
};

export type ThemeEnum = typeof THEME[keyof typeof THEME];

export * from './shemas';
export { colors, fonts, images, fontSize, sizes, THEME, COLOR_SCHEMES };

export default theme;
