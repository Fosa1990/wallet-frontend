import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from '../../api/api';
import { SERVER_BASE_URL } from '../../helpers/constants';

export const transactionApi = createApi({
  reducerPath: 'transactionApi',
  baseQuery: axiosBaseQuery({
    baseUrl: SERVER_BASE_URL,
    refetchOnReconnect: true,
  }),

  tagTypes: ['Post'],
  endpoints: builder => ({
    getTransactions: builder.query({
      query: () => ({
        url: '/transactions',
        method: 'GET',
      }),
      providesTags: (result, error, arg) =>
        result
          ? [...result.map(({ id }) => ({ type: 'Post', id })), 'Post']
          : ['Post'],
    }),

    createTransactions: builder.mutation({
      query: data => ({
        url: '/transactions',
        method: 'POST',
        data,
      }),
      invalidatesTags: ['Post'],
    }),

    deleteTransactions: builder.mutation({
      query: transactionId => ({
        url: `/transactions/${transactionId}`,
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
