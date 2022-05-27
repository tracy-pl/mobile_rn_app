import AsyncStorage from '@react-native-async-storage/async-storage';

const defaultMiddlewareConfig = { serializableCheck: false };
const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
};

export { defaultMiddlewareConfig, persistConfig };
