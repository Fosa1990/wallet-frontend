import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from '../../services/api';
import { BASE_URL, ROUTES } from '../../utils/constants';

const { API, TRANSACTIONS } = ROUTES;

export const transactionApi = createApi({
  reducerPath: 'transactionApi',
  baseQuery: axiosBaseQuery({
    baseUrl: BASE_URL.HOST,
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

    updateTransactions: builder.mutation({
      query: data => {
        const { transactionId, ...body } = data;
        return {
          url: `/${API}/${TRANSACTIONS}/${transactionId}`,
          method: 'PUT',
          data: body,
        };
      },
      invalidatesTags: ['Post'],
    }),
  }),
});

export const {
  useGetTransactionsQuery,
  useCreateTransactionsMutation,
  useDeleteTransactionsMutation,
  useUpdateTransactionsMutation,
} = transactionApi;
