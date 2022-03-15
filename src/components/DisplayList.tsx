import React from 'react'
import { IGroceryState } from '../App'
import { removeGrocery, editGrocery } from '../redux/grocerySlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import GroceryItem from "./GroceryItem";
import { Button } from 'react-bootstrap';

interface IGroceryProps {
    list: IGroceryState[];
}

const DisplayList = ({list}: IGroceryProps) => {
    const groceryStore = useAppSelector((state) => state.groceryReducer.value);
    const dispatch = useAppDispatch();

    const handleDelete = (item: number) => {
        dispatch(removeGrocery(item))
    }
    const handleUpdate = (item: IGroceryState) => {
        dispatch(editGrocery(item))
    }
                    
    console.log(groceryStore, "displaylist")
    return (
        <div className="grocery-list">
            <ul>
                {groceryStore.length ? groceryStore.map((item, index) => {
                    
                    return(
                        <div className="grocery-item-wrapper" key={index}>
                            <div className="btn-wrapper">
                                <button className="delete-btn" onClick={() => handleDelete(item.id)}>X</button>
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