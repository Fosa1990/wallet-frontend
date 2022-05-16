import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    // baseUrl: 'https://amazing-wallet.herokuapp.com/api',
    baseUrl: 'http://localhost:8081/api',

    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;

      if (token) {
        headers.set('authorization', `Bearer ${token}`);
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
        return res;
      },
      invalidatesTags: ['Auth'],
    }),

    fetchCurrentUser: builder.query({
      queryFn: async (arg, queryApi, extraOptions, baseQuery) => {
        console.log('__CurrentUser__', arg);
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
  useFetchCurrentUserQuery,
} = authApi;
