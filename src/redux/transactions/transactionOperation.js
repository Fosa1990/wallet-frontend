import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from '../../api/api';
import { BASE_URL } from '../../helpers/constants';

export const transactionApi = createApi({
  reducerPath: 'transactionApi',
  baseQuery: axiosBaseQuery({
    // baseUrl: BASE_URL.SERVER,
    baseUrl: BASE_URL.BACK,
    refetchOnReconnect: true,
  }),

  tagTypes: ['Post'],
  endpoints: builder => ({
    getTransactions: builder.query({
      query: () => ({
        url: `/api/transactions`,
        method: 'GET',
      }),
      providesTags: (result, error, arg) =>
        result
          ? [...result.map(({ id }) => ({ type: 'Post', id })), 'Post']
          : ['Post'],
    }),

    createTransactions: builder.mutation({
      query: data => ({
        url: `/api/transactions`,
        method: 'POST',
        data,
      }),
      invalidatesTags: ['Post'],
    }),

    deleteTransactions: builder.mutation({
      query: transactionId => ({
        url: `/api/transactions/${transactionId}`,
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
