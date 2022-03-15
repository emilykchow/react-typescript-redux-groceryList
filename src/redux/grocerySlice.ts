import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { incomingItem } from '../network/network';

interface IGroceryProps {
  value: incomingItem[];
}

const initialState: IGroceryProps = {
  value: [],
}

const grocerySlice = createSlice({
  name: 'groceryReducerSlice',
  initialState,
  reducers: {
    addGrocery: (state, action: PayloadAction<incomingItem>) => {
      console.log(action.payload, "add redux slice")
        state.value.push(action.payload)
    },
    addMultipleGroceries: (state, action: PayloadAction<incomingItem[]>) => {
      const incomingList = action.payload
      state.value = incomingList
    },
    removeGrocery: (state, action: PayloadAction<string>) => {
        state.value = state.value.filter((item) => item._id !== action.payload)
    },
    editGrocery: (state, action: PayloadAction<incomingItem>) => {
        const filteredState = state.value.filter((item) => item._id !== action.payload._id)
        filteredState.push(action.payload)
        state.value = filteredState
    }
  },
});

export const { addGrocery, removeGrocery, editGrocery, addMultipleGroceries } = grocerySlice.actions

export default grocerySlice.reducer