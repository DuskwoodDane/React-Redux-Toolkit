/**
 * 
 */
import { configureStore } from '@reduxjs/toolkit';
import globalSlice from './Reduces/globalSlice';
import cReducesr from './Reduces/CReduces';

export const store = configureStore({
  reducer: {
    globalSlice,
    cReducesr
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch