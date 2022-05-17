import { createSlice } from '@reduxjs/toolkit';
import { authApi } from './authReduce';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isInBase: false,
  isFetchingCurrentUser: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder.addMatcher(
      authApi.endpoints.registerUser.matchFulfilled,
      (state, { payload }) => {
        console.log('__registerUser.payload: ', payload);
        state.user = payload.payload.user;
        state.isLoggedIn = false;
        state.isInBase = payload.payload.user.isInBase;
      },
    );

    builder.addMatcher(
      authApi.endpoints.loginUser.matchFulfilled,
      (state, { payload }) => {
        console.log('__loginUser.payload: ', payload);
        state.user = payload.payload.user;
        state.token = payload.payload.token;
        state.isLoggedIn = true;
      },
    );

    builder.addMatcher(
      authApi.endpoints.fetchCurrentUser.matchFulfilled,
      (state, { payload }) => {
        console.log('__fetchCurrentUser.payload: ', payload);
        state.token = payload.payload.token;
        state.user = payload.payload.user;
        state.isLoggedIn = true;
      },
    );
  },
});

export default authSlice;
