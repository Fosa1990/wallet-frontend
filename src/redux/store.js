import { configureStore } from '@reduxjs/toolkit';
// import logger from 'redux-logger';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { setupListeners } from '@reduxjs/toolkit/query';
import { authApi } from './auth/authReduce';
import authSlice from './auth/authSlice';
import { globalReducer } from './globalSlice';
import { rtkQueryErrorLogger } from './auth/midleware';
import storage from 'redux-persist/lib/storage';
import categoriesReducer from './categories/categoriesReducer';
import financesReducer from './finances/financesReducer';
import { transactionApi } from './transactions/transactionOperation';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authSlice.reducer),
    global: globalReducer,
    [authApi.reducerPath]: authApi.reducer,
    [transactionApi.reducerPath]: transactionApi.reducer,
    categories: categoriesReducer,
    finances: financesReducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    transactionApi.middleware,
    /* .concat(logger), */
    rtkQueryErrorLogger,
    authApi.middleware,
  ],
});
export const persistor = persistStore(store);

setupListeners(store.dispatch);
