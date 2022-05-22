import { toast } from 'react-toastify';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { tokenService } from '../../services/tokenService';
import { BASE_URL, ROUTES } from '../../utils/constants';

const { API, AUTH, SIGNUP, SIGNIN, SIGNOUT, USERS, CURRENT } = ROUTES;

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL.SERVER,

    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;

      if (token) {
        headers.set('authorization', `Bearer ${token}`);
        tokenService.set(token);
      }
      return headers;
    },
  }),
  tagTypes: ['Auth'],
  endpoints: builder => ({
    registerUser: builder.mutation({
      queryFn: async (newUser, queryApi, extraOptions, baseQuery) => {
        const res = await baseQuery({
          url: `/${API}/${AUTH}/${SIGNUP}`,
          method: 'POST',
          body: newUser,
        });
        res.data.code === 201 &&
          toast.warn(
            `You need to confirm your ${res.data.payload.user.email} email to access the Amazing Wallet`,
            {
              className: 'Toastify__error',
              position: 'top-right',
              autoClose: false,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            },
          );

        return res;
      },
      invalidatesTags: ['Auth'],
    }),

    loginUser: builder.mutation({
      queryFn: async (userData, queryApi, extraOptions, baseQuery) => {
        const res = await baseQuery({
          url: `/${API}/${AUTH}/${SIGNIN}`,
          method: 'POST',
          body: userData,
        });

        return res;
      },
      invalidatesTags: ['Auth'],
    }),

    logoutUser: builder.mutation({
      query: () => ({
        url: `/${API}/${AUTH}/${SIGNOUT}`,
      }),
      invalidatesTags: ['Auth'],
    }),

    fetchCurrentUser: builder.query({
      queryFn: async (arg, queryApi, extraOptions, baseQuery) => {
        const res = await baseQuery({
          url: `/${API}/${USERS}/${CURRENT}`,
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
