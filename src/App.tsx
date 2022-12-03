import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import '~utils/ignore';
// TODO: check this import
import '~constants';

import RootNavigation from '~routes';
import { ThemeProvider } from '~providers';
import { store, persistor } from '~redux';
import { useCachedResources, useOnAppClose } from '~hooks';

const App = () => {
  useOnAppClose();

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
