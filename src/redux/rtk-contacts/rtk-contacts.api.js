// import { createApi } from '@reduxjs/toolkit/query/react';
// import axios from 'axios';
// const axiosBaseQuery =
//   ({ baseUrl } = { baseUrl: '' }) =>
//   async ({ url, method, data, params }) => {
//     try {
//       const result = await axios({ url: baseUrl + url, method, data, params });
//       return { data: result.data };
//     } catch (axiosError) {
//       let err = axiosError;
//       return {
//         error: {
//           status: err.response?.status,
//           data: err.response?.data || err.message,
//         },
//       };
//     }
//   };

// export const contactsApi = createApi({
//   reducerPath: 'rtk-contacts',
//   baseQuery: axiosBaseQuery({
//     baseUrl: 'https://connections-api.herokuapp.com',
//   }),
//   tagTypes: ['Contacts'],
//   endpoints: (builder) => ({
//     getContacts: builder.query({
//       query: () => axios.get('/contacts').then((response) => response.data),
//       providesTags: (result) =>
//         result
//           ? [
//               ...result.map(({ id }) => ({ type: 'Contacts', id })),
//               { type: 'Contacts', id: 'LIST' },
//             ]
//           : [{ type: 'Contacts', id: 'LIST' }],
//     }),

//     deleteContacts: builder.mutation({
//       query: (id) => axios.delete(`contacts/${id}`).then(() => id),
//       invalidatesTags: ['Contacts'],
//     }),

//     addUser: builder.mutation({
//       query: (newUser) =>
//         axios.post('/contacts', newUser).then((response) => response.data),
//       invalidatesTags: ['Contacts'],
//     }),
//   }),
// });

// export const {
//   useGetContactsQuery,
//   useDeleteContactsMutation,
//   useAddUserMutation,
// } = contactsApi;


import { createApi } from '@reduxjs/toolkit/query/react';
import axios from 'axios';

const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: '' }) =>
  async ({ url, method, data, params }) => {
    try {
      const result = await axios({ url: baseUrl + url, method, data, params });
      return { data: result.data };
    } catch (axiosError) {
      let err = axiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

export const contactsApi = createApi({
  reducerPath: 'contacts',
  baseQuery: axiosBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
  }),
  tagTypes: ['Contacts'],
  endpoints: builder => ({
    fetchContacts: builder.query({
      query: () => ({
        url: '/contacts',
        method: 'get',
      }),

      providesTags: ['Contacts'],
    }),
    postContacts: builder.mutation({
      query: value => ({
        url: '/contacts',
        method: 'post',
        data: value,
      }),
      invalidatesTags: ['Contacts'],
    }),
    changeContacts: builder.mutation({
      query: value => ({
        url: `/contacts/${value.id}`,
        method: 'PATCH',
        data: {
          name: value.name,
          number: value.number,
        },
      }),
      invalidatesTags: ['Contacts'],
    }),
    deleteContacts: builder.mutation({
      query: id => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const {
  useFetchContactsQuery,
  usePostContactsMutation,
  useDeleteContactsMutation,
  useChangeContactsMutation,
} = contactsApi;

// const axiosBaseQuery =
//   ({ baseUrl } = { baseUrl: '' }) =>
//   async ({ url, method, data, params }) => {
//     try {
//       const result = await axios({ url: baseUrl + url, method, data, params });
//       return { data: result.data };
//     } catch (axiosError) {
//       let err = axiosError;
//       return {
//         error: {
//           status: err.response?.status,
//           data: err.response?.data || err.message,
//         },
//       };
//     }
//   };

// export const contactsApi = createApi({
//   reducerPath: 'contacts',
//   baseQuery: axiosBaseQuery({
//     baseUrl: 'https://connections-api.herokuapp.com',
//   }),
//   tagTypes: ['Contacts'],
//   endpoints: builder => ({
//     fetchContacts: builder.query({
//       query: () => ({
//         url: '/contacts',
//         method: 'get',
//       }),

//       providesTags: ['Contacts'],
//     }),
//     postContacts: builder.mutation({
//       query: value => ({
//         url: '/contacts',
//         method: 'post',
//         data: value,
//       }),
//       invalidatesTags: ['Contacts'],
//     }),
//     changeContacts: builder.mutation({
//       query: value => ({
//         url: `/contacts/${value.id}`,
//         method: 'PATCH',
//         data: {
//           name: value.name,
//           number: value.number,
//         },
//       }),
//       invalidatesTags: ['Contacts'],
//     }),
//     deleteContacts: builder.mutation({
//       query: id => ({
//         url: `/contacts/${id}`,
//         method: 'DELETE',
//       }),
//       invalidatesTags: ['Contacts'],
//     }),
//   }),
// });

// export const {
//   useFetchContactsQuery,
//   usePostContactsMutation,
//   useDeleteContactsMutation,
//   useChangeContactsMutation,
// } = contactsApi;