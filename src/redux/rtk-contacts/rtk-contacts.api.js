import { createApi } from '@reduxjs/toolkit/query/react';
import axios from 'axios';

export const contactsApi = createApi({
  reducerPath: 'rtk-contacts',
  tagTypes: ['Contacts'],
  endpoints: (builder) => ({
    getContacts: builder.query({
      query: () => axios.get('/contacts').then((response) => response.data),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Contacts', id })),
              { type: 'Contacts', id: 'LIST' },
            ]
          : [{ type: 'Contacts', id: 'LIST' }],
    }),

    deleteContacts: builder.mutation({
      query: (id) => axios.delete(`contacts/${id}`).then(() => id),
      invalidatesTags: ['Contacts'],
    }),

    addUser: builder.mutation({
      query: (newUser) =>
        axios.post('/contacts', newUser).then((response) => response.data),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useDeleteContactsMutation,
  useAddUserMutation,
} = contactsApi;
