import apiSlice from "../createApi";

 export const projectApi = apiSlice.injectEndpoints({
    addTagTypes: ['projects'],
    endpoints: (builder)=>({
        getProjects: builder.query({
            query: ()=>({
                url: '/projects'
            })
        })
    })

})


export const {useGetProjectsQuery}= projectApi;