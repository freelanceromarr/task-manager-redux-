import { configureStore } from '@reduxjs/toolkit';
import apiSlice from '../features/createApi';
import projectFilterReducer from'../features/projects/projectsFilter'

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    projectFilter: projectFilterReducer

  },
  middleware: (GDM)=>GDM().concat(apiSlice.middleware)
});
