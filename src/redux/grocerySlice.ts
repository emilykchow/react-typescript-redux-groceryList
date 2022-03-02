import { IGroceryState } from './../App';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IGroceryProps {
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
    removeGrocery: (state, action: PayloadAction<number>) => {
        state.value = state.value.filter((item) => item.id !== action.payload)
    }
    
  },
});

export const { addGrocery, removeGrocery } = grocerySlice.actions

export default grocerySlice.reducer