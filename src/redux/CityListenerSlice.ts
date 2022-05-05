import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ICityListenerState {
    value: Record<string, any>
}

const initialState: ICityListenerState = {
  value: {},
}

export const cityListenerSlice = createSlice({
  name: 'cityListenerSlice',
  initialState,
  reducers: {
    getArtistDetails: (state, action: PayloadAction<Record<string, any>>) => {
        state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { getArtistDetails } = cityListenerSlice.actions

export default cityListenerSlice.reducer