import { createSlice } from "@reduxjs/toolkit";



const initialState= {
    projects:[]
}
const projectFilterSlice = createSlice({
    name: 'projectFilter',
    initialState,
    reducers: {
        projectFilter: (state, action)=>{
            if (state.projects.length >0) {
                state.projects.map((project)=>{
                    if (project === action.payload) {
                        state.projects = state.projects.filter(pr=>pr !== action.payload)
                    }
                    else{
                        state.projects.push(action.payload)
                    }
                })
            }else{
                state.projects.push(action.payload)
            }
        }
    }
})

export default projectFilterSlice.reducer;
export const {projectFilter}= projectFilterSlice.actions