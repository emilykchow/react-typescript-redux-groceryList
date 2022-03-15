import React, { useEffect } from 'react'
import { removeGrocery, editGrocery, addMultipleGroceries } from '../redux/grocerySlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { Button } from 'react-bootstrap';
import { fetchTodos, incomingItem } from '../network/network';

interface IGroceryProps {
    list: incomingItem[];
}

const DisplayList = ({list}: IGroceryProps) => {
    const groceryStore = useAppSelector((state) => state.groceryReducer.value);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if(!groceryStore.length) {
            fetchTodos().then(res => {
                console.log(res.response, "Backend response")
                dispatch(addMultipleGroceries(res.response))
            })
        }
      }, [groceryStore, dispatch])

    const handleDelete = (item: string) => {
        dispatch(removeGrocery(item))
    }
    const handleUpdate = (item: incomingItem) => {
        dispatch(editGrocery(item))
    }
                    
    console.log(groceryStore, "display grocery list")
    
    return (
        <div className="grocery-list">
            <ul>
                {groceryStore.length ? groceryStore.map((item, index) => {
                    
                    return(
                        <div className="grocery-item-wrapper" key={index}>
                            <div className="btn-wrapper">
                                <button className="delete-btn" onClick={() => handleDelete(item._id)}>X</button>
                                <Button className="edit-btn" onClick={() => handleUpdate(item)} variant="success">Edit</Button>
                            </div>
                            
                            <div className="grocery-item">
                                {item.content}
                            </div>
                        </div>
                    )
                }) : null}

            </ul>
        </div>
    )
}

export default DisplayList;