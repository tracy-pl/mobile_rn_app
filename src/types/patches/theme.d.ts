import 'styled-components';
import { ThemeInterface } from '~theme';

export type ThemeInterface = typeof theme & Schema;
declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends ThemeInterface {}
}
