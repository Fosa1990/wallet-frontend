import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from '../../api/api';

export const contactApi = createApi({
  reducerPath: 'contactApi',
  baseQuery: axiosBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
    refetchOnReconnect: true,
  }),

  tagTypes: ['Post'],
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => ({
        url: '/contacts',
        method: 'GET',
      }),
      providesTags: (result, error, arg) =>
        result ? [...result.map(({ id }) => ({ type: 'Post', id })), 'Post'] : ['Post'],
    }),

    createContact: builder.mutation({
      query: data => ({
        url: '/contacts',
        method: 'POST',
        data,
      }),
      invalidatesTags: ['Post'],
    }),

    deleteContact: builder.mutation({
      query: contactId => ({
        url: `/contacts/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Post'],
    }),
  }),
});

export const { useGetContactsQuery, useCreateContactMutation, useDeleteContactMutation } =
  contactApi;