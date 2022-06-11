import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import '~utils/ignore';
import '~constants';

import { ThemeProvider } from '~components';
import RootNavigation from '~routes';
import { store, persistor } from '~redux';
import { useCachedResources } from '~hooks';

const App = () => {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) return null;

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider>
          <SafeAreaProvider initialMetrics={initialWindowMetrics}>
            <RootNavigation />
          </SafeAreaProvider>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
