import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const apiSlice = createApi({
    reducerPath: 'projectApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:9000',
    }),
    endpoints: (builder)=>({})
})

export default apiSlice;

