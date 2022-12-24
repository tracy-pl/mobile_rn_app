import { extendTheme } from 'native-base';

import fontSize from './fontSizes';
import sizes from './sizes';
import { colors, nativeBaseThemeColors } from './colors';
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

const nativeBaseTheme = extendTheme({
  colors: nativeBaseThemeColors,
  components: {},
  fontConfig: {
    [fonts.inter.regular]: {
      600: {
        normal: fonts.inter.bold,
      },
      500: {
        normal: fonts.inter.semiBold,
      },
      400: {
        normal: fonts.inter.medium,
      },
      300: {
        normal: fonts.inter.regular,
      },
    },
  },
  fonts: {
    heading: fonts.inter.regular,
    body: fonts.inter.regular,
    mono: fonts.inter.regular,
  },
});

export type ThemeEnum = typeof THEME[keyof typeof THEME];

export * from './shemas';
export {
  theme,
  nativeBaseTheme,
  colors,
  fonts,
  images,
  fontSize,
  sizes,
  THEME,
  COLOR_SCHEMES,
};
