import 'styled-components';
import theme, { Schema } from '~constants/theme';

export type ThemeInterface = typeof theme & Schema;

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends ThemeInterface {}
}
