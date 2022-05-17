import { createSlice } from '@reduxjs/toolkit';
import { authApi } from './authReduce';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isFetchingCurrentUser: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder.addMatcher(
      authApi.endpoints.registerUser.matchFulfilled,
      (state, { payload }) => {
        console.log('payload!!!!!', payload);

        state.user = payload.payload.user;
        state.token = payload.payload.token;
        state.isLoggedIn = true;
      },
    );

    builder.addMatcher(
      authApi.endpoints.loginUser.matchFulfilled,
      (state, { payload }) => {
        state.user = payload.payload.user;
        state.token = payload.payload.token;
        state.isLoggedIn = true;
      },
    );

    builder.addMatcher(
      authApi.endpoints.fetchCurrentUser.matchFulfilled,
      (state, { payload }) => {
        console.log(payload);
        console.log(payload.payload);
        console.log(payload.payload.user);

        state.user = payload.payload.user;
        state.isLoggedIn = true;
        state.isFetchingCurrentUser = false;
      },
    );
  },
});

export default authSlice;