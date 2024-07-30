import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
    reducerPath: 'contactsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://live.devnimble.com/api/v1/' }),
    endpoints: (builder) => ({
        getContacts: builder.query({
            query: () => 'contacts?sort=created:desc',
        }),
        getContactById: builder.query({
            query: (id) => `contact/${id}`,
        }),
        createContact: builder.mutation({
            query: (contact) => ({
                url: 'contact',
                method: 'POST',
                body: contact,
            }),
        }),
        deleteContact: builder.mutation({
            query: (id) => ({
                url: `contact/${id}`,
                method: 'DELETE',
            }),
        }),
        addTagsToContact: builder.mutation({
            query: ({ id, tags }) => ({
                url: `contact/${id}/tags`,
                method: 'PUT',
                body: tags,
            }),
        }),
    }),
});

export const {
    useGetContactDetailQuery,
    useGetContactsQuery,
    useGetContactByIdQuery,
    useCreateContactMutation,
    useDeleteContactMutation,
    useAddTagsToContactMutation,
} = contactsApi;