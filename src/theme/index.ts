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
  components: {
    Button: {
      // TODO: change to primary
      // defaultProps: {
      //   colorScheme: '',
      // },
    },
  },
  fonts: {
    heading: 'openSans_regular',
    body: 'openSans_regular',
    mono: 'openSans_regular',
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
