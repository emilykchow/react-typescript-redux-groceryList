import { IGroceryState } from './../App';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IGroceryProps {
  value: IGroceryState[];
}

const initialState: IGroceryProps = {
  value: [],
}

const grocerySlice = createSlice({
  name: 'groceryReducerSlice',
  initialState,
  reducers: {

    addGrocery: (state, action: PayloadAction<IGroceryState>) => {
      console.log(action.payload, "redux slice")
        state.value.push(action.payload)
    },
    removeGrocery: (state, action: PayloadAction<number>) => {
        state.value = state.value.filter((item) => item.id !== action.payload)
    },
    editGrocery: (state, action: PayloadAction<IGroceryState>) => {
        const filteredState = state.value.filter((item) => item.id !== action.payload.id)
        filteredState.push(action.payload)
        state.value = filteredState
    }
  },
});

export const { addGrocery, removeGrocery, editGrocery } = grocerySlice.actions

export default grocerySlice.reducer