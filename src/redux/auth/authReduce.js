import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import axios from 'axios';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://amazing-wallet.herokuapp.com/api',

    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;

      if (token) {
        headers.set('authorization', `Bearer ${token}`);
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
        // при логауте надо очистить токен!
      }
      return headers;
    },
  }),
  tagTypes: ['Auth'],
  endpoints: builder => ({
    registerUser: builder.mutation({
      queryFn: async (newUser, queryApi, extraOptions, baseQuery) => {
        const res = await baseQuery({
          url: '/auth/signup',
          method: 'POST',
          body: newUser,
        });
        console.log('==REDUX==registerUser==');
        return res;
      },
      invalidatesTags: ['Auth'],
    }),

    loginUser: builder.mutation({
      queryFn: async (userData, queryApi, extraOptions, baseQuery) => {
        const res = await baseQuery({
          url: '/auth/signin',
          method: 'POST',
          body: userData,
        });
        console.log('==REDUX==loginUser==');
        return res;
      },
      invalidatesTags: ['Auth'],
    }),

    logoutUser: builder.mutation({
      query: () => ({
        url: '/auth/signout',
      }),
      invalidatesTags: ['Auth'],
    }),

    fetchCurrentUser: builder.query({
      queryFn: async (arg, queryApi, extraOptions, baseQuery) => {
        console.log('==REDUX==fetchCurrentUser==');
        const res = await baseQuery({
          url: '/users/current',
        });
        return res;
      },
      invalidatesTags: ['Auth'],
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useLogoutUserMutation,
  useFetchCurrentUserQuery,
} = authApi;
