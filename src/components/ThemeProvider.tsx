import React, { useMemo } from 'react';
import { ColorSchemeName, useColorScheme } from 'react-native';
import { ThemeProvider as SCThemeProvider } from 'styled-components/native';
import { ColorMode, NativeBaseProvider, StatusBar } from 'native-base';
import type { StorageManager } from 'native-base';

import { useAppDispatch, useAppSelector } from '~redux/hooks';
import { getTheme, setTheme } from '~redux/modules';
import { theme, nativeBaseTheme, COLOR_SCHEMES, THEME } from '~theme';

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const dispatch = useAppDispatch();
  const storedScheme = useAppSelector(getTheme);
  const phoneScheme = useColorScheme() || THEME.LIGHT;
  const currentScheme: ColorSchemeName = useMemo(
    () => (storedScheme === THEME.DEFAULT ? phoneScheme : storedScheme),
    [storedScheme, phoneScheme],
  );
  const colorModeManager: StorageManager = {
    get: async () => currentScheme,
    set: (value: ColorMode) => dispatch(setTheme(value)),
  };

  return (
    <SCThemeProvider
      theme={{
        ...theme,
        ...COLOR_SCHEMES[currentScheme],
      }}
    >
      <NativeBaseProvider
        config={{ theme: nativeBaseTheme }}
        colorModeManager={colorModeManager}
      >
        <StatusBar
          barStyle={
            currentScheme === THEME.LIGHT ? 'dark-content' : 'light-content'
          }
        />
        {children}
      </NativeBaseProvider>
    </SCThemeProvider>
  );
};

export default ThemeProvider;
