import React from 'react'
import { IGroceryState } from '../App';

interface IGroceryProps {
  item: IGroceryState
}

const GroceryItem = ({item}: IGroceryProps) => {
  return (
    <div>
      <div>{item.content}</div>
      <button>Done</button>
    </div>
  )
}

export default GroceryItem