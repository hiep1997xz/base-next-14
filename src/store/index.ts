/* eslint-disable @typescript-eslint/no-explicit-any */
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { FLUSH, PAUSE, PERSIST, persistReducer, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { createWrapper } from 'next-redux-wrapper';
import themeReducer from './slices/theme';
import baseReducer from './slices/base';
import authReducer from './slices/auth';

const persistConfig = {
  key: 'info',
  keyPrefix: '',
  storage,
  whitelist: ['auth']
};

const rootReducer = combineReducers({
  theme: themeReducer,
  base: baseReducer,
  auth: authReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = () => {
  return configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
      }),
    devTools: process.env.NODE_ENV === 'development'
  });
};

export const wrapper = createWrapper(store);
export type AppStore = ReturnType<typeof store>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

export default store;
