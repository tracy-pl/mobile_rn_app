import React, { useMemo } from 'react';
import { useColorScheme } from 'react-native';
import { ThemeProvider as SCThemeProvider } from 'styled-components/native';

import { useAppSelector } from '~redux/hooks';
import { getTheme } from '~redux/slices';
import theme from '~theme';
import { COLOR_SCHEMES, THEME } from '~constants/theme.contants';

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const storedScheme = useAppSelector(getTheme);
  const phoneScheme = useColorScheme() || THEME.LIGHT;
  const currentScheme = useMemo(
    () => (storedScheme === THEME.DEFAULT ? phoneScheme : storedScheme),
    [storedScheme, phoneScheme],
  );

  return (
    <SCThemeProvider theme={{ ...theme, ...COLOR_SCHEMES[currentScheme] }}>
      {children}
    </SCThemeProvider>
  );
};

export default ThemeProvider;
