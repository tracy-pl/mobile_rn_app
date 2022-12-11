import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const authSlice = createApi({
  reducerPath: 'api/auth',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://example.com' }),
  endpoints: builder => ({
    login: builder.mutation({
      query: body => ({
        url: '/login',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const authReducer = authSlice.reducer;
