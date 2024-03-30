import { configureStore } from '@reduxjs/toolkit';
import apiSlice from '../features/createApi';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (GDM)=>GDM().concat(apiSlice.middleware)
});
