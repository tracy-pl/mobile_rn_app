import { DefaultTheme } from 'styled-components';
import { ThemeInterface } from '~types/patches/theme';

type ThemeGetter = (props: {
  theme: DefaultTheme;
}) => ThemeInterface[keyof ThemeInterface];

export const getColors: ThemeGetter = ({ theme }) => theme.colors;
