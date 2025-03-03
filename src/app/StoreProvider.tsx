'use client';
import { useRef } from 'react';
import { Provider } from 'react-redux';
import store, { AppStore } from '@/store';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { Persistor } from 'redux-persist/es/types';

export default function StoreProvider({ children }: { children: React.ReactNode }) {
  const storeRef = useRef<AppStore>();
  const persistorRef = useRef<Persistor>({} as Persistor);

  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = store();
    persistorRef.current = persistStore(storeRef.current);
  }

  return (
    <Provider store={storeRef.current}>
      <PersistGate loading={null} persistor={persistorRef.current}>
        {children}
      </PersistGate>
    </Provider>
  );
}
