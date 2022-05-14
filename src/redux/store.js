import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

//import  userApi (or reducer)
//import  transactionApi (or reducer)
// import  userSlice 

const reducer = combineReducers({
  //   user: userReducer,
  //   transaction: financeReducer,
});

///that will  be  saved in local storage
const userPersistConfig = {
  key: 'authtoken',
  storage,
  whitelist: ['token'],
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: 

  //     { user: persistedReducer(userPersistConfig, userSlice.reducer)
  //     [userApi.reducerPath]: userApi.reducer,
  //   [transactionApi.reducerPath]: transactionApi.reducer,
  //   },

  middleware: getDefaultMiddleware => getDefaultMiddleware()
  // add  our middleware  below
  // .concat(userApi.middleware)
  //.concat(transactionApi.middleware),
  devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

// eslint-disable-next-line
export default { store, persistor };
