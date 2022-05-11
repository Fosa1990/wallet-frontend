import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { configureStore } from '@reduxjs/toolkit';
import authSlice from './auth/authSlice';
import { contactApi } from './Example_DELET/contact-operation';
import contactsSlice from './Example_DELET/contactsSlice';

const authPersistconfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistconfig, authSlice),
    [contactApi.reducerPath]: contactApi.reducer,
    contacts: contactsSlice,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }),
    contactApi.middleware,
  ],
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);