import { createSlice } from '@reduxjs/toolkit';
import { authApi } from './authOperation';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isFetchingCurrentUser: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addMatcher(authApi.endpoints.registerNewUser.matchFulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addMatcher(authApi.endpoints.logInUser.matchFulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addMatcher(authApi.endpoints.logOutUser.matchFulfilled, (state, action) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addMatcher(authApi.endpoints.currentUser.matchPending, (state, action) => {
        state.isFetchingCurrentUser = true;
      })
      .addMatcher(authApi.endpoints.currentUser.matchFulfilled, (state, { payload }) => {
        state.user = { ...payload.data };
        state.isLoggedIn = true;
        state.isFetchingCurrentUser = false;
      })
      .addMatcher(authApi.endpoints.currentUser.matchRejected, (state, action) => {
        state.isFetchingCurrentUser = false;
      });
  },
});

export default authSlice.reducer;