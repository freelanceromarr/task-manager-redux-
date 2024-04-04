import apiSlice from "../createApi";
export const taskApi = apiSlice.injectEndpoints({
  addTagType: ["task"],
  endpoints: (builder) => ({
    getTasks: builder.query({
      query: () => ({
        url: "/tasks",
      }),
    }),
    getTask: builder.query({
        query: (id) => ({
          url: `tasks/${id}`,
        }),
      }),
    postTask: builder.mutation({
      query: (data) => ({
        url: "/tasks",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { dispatch , queryFulfilled }) {
        //pessimistic cache update
        try {
          const { data: project } = await queryFulfilled;
          console.log(project);
          dispatch(taskApi.util.updateQueryData("getTasks", undefined, (draft)=>{
            draft.push(project)
            }
            ))
        } catch (error) {
          //nothing to handle
        }
      },
    }),
    updateTask: builder.mutation({
        query: ({id, data}) => ({
            url: `/tasks/${id}`,
            method: "PATCH",
            body: data,
          }),
          async onQueryStarted(arg, {dispatch, queryFulfilled}){
            try {
                const {data:res}= await queryFulfilled;
                console.log(res);
                dispatch(taskApi.util.updateQueryData("getTasks", undefined, (draft)=>{
                    return draft?.map(task=>{
                        if (task.id === res?.id) {
                            return res;
                        }else{return task}
                    })

                }))
            } catch (error) {
                //noting to show
            }
          }
    }),
    updateStatus: builder.mutation({
        query: ({id, data}) => ({
            url: `/tasks/${id}`,
            method: 'PATCH',
            body: data
        }),
        async onQueryStarted({id, data:updatedTask}, {dispatch, queryFulfilled}){
            const statusUpdated=  dispatch(taskApi.util.updateQueryData("getTasks", undefined, (draft)=>{
                return draft.map(task=>{
                     if (task?.id=== id) {
                         return {...updatedTask}
                     }else{
                         return task
                     }
                 })
             }
             ))
            try {
                await queryFulfilled;
            } catch (error) {
                // error handling
                statusUpdated.undo()
            }
        }

    }),
    deleteTask: builder.mutation({
        query: (id) => ({
            url: `/tasks/${id}`,
            method: 'DELETE'
        }),
        async onQueryStarted(arg, {dispatch, queryFulfilled}) {
            console.log(arg);
            const taskAfterDelete = dispatch(taskApi.util.updateQueryData('getTasks', undefined, (draft)=>{
                return draft.filter(task=>task.id !== arg)
            }))
            try {
                await queryFulfilled;
            } catch (error) {
                taskAfterDelete.undo()
            }
        }
    })
  }),
});
export const { useGetTasksQuery, usePostTaskMutation, useGetTaskQuery, useUpdateTaskMutation, useUpdateStatusMutation, useDeleteTaskMutation } = taskApi;
