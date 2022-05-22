import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from '../../services/api';
import { BASE_URL, ROUTES } from '../../utils/constants';

const { API, TRANSACTIONS } = ROUTES;

export const transactionApi = createApi({
  reducerPath: 'transactionApi',
  baseQuery: axiosBaseQuery({
    baseUrl: BASE_URL.SERVER,
    refetchOnReconnect: true,
  }),

  tagTypes: ['Post'],
  endpoints: builder => ({
    getTransactions: builder.query({
      query: () => ({
        url: `/${API}/${TRANSACTIONS}`,
        method: 'GET',
      }),
      providesTags: (result, error, arg) =>
        result
          ? [...result.map(({ id }) => ({ type: 'Post', id })), 'Post']
          : ['Post'],
    }),

    createTransactions: builder.mutation({
      query: data => ({
        url: `/${API}/${TRANSACTIONS}`,
        method: 'POST',
        data,
      }),
      invalidatesTags: ['Post'],
    }),

    deleteTransactions: builder.mutation({
      query: transactionId => ({
        url: `/${API}/${TRANSACTIONS}/${transactionId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Post'],
    }),
  }),
});

export const {
  useGetTransactionsQuery,
  useCreateTransactionsMutation,
  useDeleteTransactionsMutation,
} = transactionApi;
