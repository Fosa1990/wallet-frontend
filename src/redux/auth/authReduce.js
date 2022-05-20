import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { tokenService } from '../../services/tokenService';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://amazing-wallet.herokuapp.com/api',
    // baseUrl: 'http://localhost:8081/api',

    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;

      if (token) {
        headers.set('authorization', `Bearer ${token}`);
        tokenService.set(token);
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

    logoutUser: builder.mutation({
      query: () => ({
        url: '/auth/signout',
      }),
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
  useLogoutUserMutation,
  useFetchCurrentUserQuery,
} = authApi;
