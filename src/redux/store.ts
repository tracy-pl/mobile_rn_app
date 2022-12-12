import { persistReducer } from 'redux-persist';
import persistStore from 'redux-persist/es/persistStore';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { appReducer } from './app';
import { userReducer } from './user';

import { authReducer } from '~features/auth/redux';
import { trackingReducer } from '~features/tracking/redux';

const defaultMiddlewareConfig = { serializableCheck: false };

const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
  user: userReducer,
  tracking: trackingReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

const setupStore = () => {
  return configureStore({
    devTools: __DEV__,
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware(defaultMiddlewareConfig),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;

const store = setupStore();
const persistor = persistStore(store);

export { store, persistor };
