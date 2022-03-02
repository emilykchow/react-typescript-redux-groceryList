import { configureStore } from '@reduxjs/toolkit'
import grocerySlice from './grocerySlice'

export const store = configureStore({
  reducer: {
    groceryReducer: grocerySlice
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch