import React, { useMemo } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ColorSchemeName, useColorScheme } from 'react-native';
import { StorageManager, ColorMode, NativeBaseProvider } from 'native-base';
import { ThemeProvider as SCThemeProvider } from 'styled-components/native';

import { useActions, useAppSelector } from '~hooks';
import { getTheme } from '~redux/app';
import { theme, nativeBaseTheme, COLOR_SCHEMES, THEME } from '~theme';

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const { setTheme } = useActions();
  const storedScheme = useAppSelector(getTheme);
  const phoneScheme = useColorScheme() || THEME.LIGHT;
  const currentScheme: ColorSchemeName = useMemo(
    () => (storedScheme === THEME.DEFAULT ? phoneScheme : storedScheme),
    [storedScheme, phoneScheme],
  );
  const colorModeManager: StorageManager = {
    get: async () => currentScheme,
    set: (value: ColorMode) => setTheme(value),
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
        <StatusBar style={currentScheme} />
        {children}
      </NativeBaseProvider>
    </SCThemeProvider>
  );
};

export default ThemeProvider;
