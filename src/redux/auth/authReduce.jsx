import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://amazing-wallet.herokuapp.com/api/',
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
          url: '/users/signup',
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
          url: '/users/login',
          method: 'POST',
          body: userData,
        });
        return res;
      },
      invalidatesTags: ['Auth'],
    }),

    fetchCurrentUser: builder.query({
      queryFn: async (arg, queryApi, extraOptions, baseQuery) => {
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
