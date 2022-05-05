import { configureStore } from '@reduxjs/toolkit'
import grocerySlice from './grocerySlice'
import cityListenerSlice from "./CityListenerSlice"

export const store = configureStore({
  reducer: {
    groceryReducer: grocerySlice,
    cityListenerReducer: cityListenerSlice
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch