import { useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';

import { fontAssets } from '~theme/fonts';
import { imageAssets } from '~theme/images';

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        SplashScreen.preventAutoHideAsync();
        await Promise.all([...imageAssets, fontAssets]);
      } catch (e) {
        // eslint-disable-next-line no-console
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    })();
  }, []);

  return isLoadingComplete;
}
