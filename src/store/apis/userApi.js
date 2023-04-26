import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const usersApi = createApi({
    reducerPath: 'users',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3001'
    }),
    endpoints: (builder) => ({
            createUser: builder.mutation({
                query: (newUser) => {
                    return {
                        url: 'users',
                        body: newUser,
                        method: 'POST',
                    };
                },
            }),
            getUser: builder.query({
                query: (ref) => `users/${ref}`,
            })
        })
});

export const {
    useCreateUserMutation,
    useGetUserQuery
} = usersApi;
export { usersApi };