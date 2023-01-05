import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context';

import '~utils/ignore';
import '~constants';

import RootNavigation from '~routes';
import { useCachedResources, useOnAppClose } from '~hooks';
import { ErrorBoundary, ReduxProvider, ThemeProvider } from '~providers';

const App = () => {
  useOnAppClose();

  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) return null;

  return (
    <ErrorBoundary>
      <ReduxProvider>
        <ThemeProvider>
          <SafeAreaProvider initialMetrics={initialWindowMetrics}>
            <RootNavigation />
          </SafeAreaProvider>
        </ThemeProvider>
      </ReduxProvider>
    </ErrorBoundary>
  );
};

export default App;
