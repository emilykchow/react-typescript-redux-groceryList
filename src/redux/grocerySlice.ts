import { IGroceryState } from './../App';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IGroceryProps[] {
  value: IGroceryState[];
}

const initialState: IGroceryProps = {
  value: [],
}

const grocerySlice = createSlice({
  name: 'groceryReducer',
  initialState,
  reducers: {
    addGrocery: (state, action: PayloadAction<IGroceryState>) => {
      state.value.push(action.payload)
    },
    
  },
})

export const { addGrocery } = grocerySlice.actions

export default grocerySlice.reducer