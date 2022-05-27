import { useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';

import { fontAssets } from '~theme/fonts';
import { imageAssets } from '~theme/images';

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        SplashScreen.preventAutoHideAsync().catch(console.warn);
        await Promise.all([...imageAssets, fontAssets]);
      } catch (e) {
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync().catch(console.warn);
      }
    })();
  }, []);

  return isLoadingComplete;
}
