import React, { useEffect, useState } from 'react';
import { fetchTodos, incomingItem } from '../network/network';
import GroceryItem from './GroceryItem';

export function IncomingTodo() {
    const [networkTodos, setNetworkTodos] = useState<incomingItem[]>([]);

    useEffect(() => {
      if(!networkTodos.length) {
          fetchTodos().then(res => setNetworkTodos(res))
      }
    }, [networkTodos])
    return(
        <div>
            {networkTodos.length ? networkTodos.map((item, index) => (
            <GroceryItem key={index} item={item} />)) : null}
        </div>
    )
}