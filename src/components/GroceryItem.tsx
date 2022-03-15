import React from 'react'
import { incomingItem } from '../network/network';

const GroceryItem = ({item}: {item: incomingItem}) => {
  return (
    <div>
      <div>{item.title}</div>
      <button>Done</button>
    </div>
  )
}

export default GroceryItem