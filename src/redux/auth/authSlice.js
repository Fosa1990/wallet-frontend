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
        state.user = payload.payload.user;
        state.isLoggedIn = false;
        state.isInBase = payload.payload.user.isInBase;
      },
    );

    builder.addMatcher(
      authApi.endpoints.loginUser.matchFulfilled,
<<<<<<< HEAD
      (state, { payload }, toast) => {
        console.log('__loginUser.payload: ', payload);
=======
      (state, { payload }) => {
>>>>>>> dev
        state.user = payload.payload.user;
        state.token = payload.payload.token;
        state.isLoggedIn = true;
      },
    );
    builder.addMatcher(authApi.endpoints.logoutUser.matchFulfilled, state => {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    });

    builder.addMatcher(
      authApi.endpoints.fetchCurrentUser.matchFulfilled,
      (state, { payload }) => {
        state.token = payload.payload.token;
        state.user = payload.payload.user;
        state.isLoggedIn = true;
        state.isFetchingCurrentUser = false;
      },
    );
  },
});

export default authSlice;
