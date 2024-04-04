
import apiSlice from "../createApi";

export const teamApi = apiSlice.injectEndpoints({
    addTagType: ['team'],
    endpoints: (builder)=>({
        getTeams: builder.query({
            query: ()=>({
                url: '/team'
            })
        })
    })
})

export const {useGetTeamsQuery} = teamApi;