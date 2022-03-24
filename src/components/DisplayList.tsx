import React, { useEffect } from 'react'
import { removeGrocery, editGrocery, addMultipleGroceries } from '../redux/grocerySlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { Button, Card } from 'react-bootstrap';
import { fetchItems, incomingItem, updateBackendPayload, deleteItem } from '../network/network';


interface IGroceryProps {
    list: incomingItem[];
    setGrocery: Function;
    setEdit: Function;
    id: string,
    setId: Function
}

const DisplayList = ({list, setGrocery, setEdit, id, setId}: IGroceryProps) => {
    const groceryStore = useAppSelector((state) => state.groceryReducer.value);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if(!groceryStore.length) {
            fetchItems().then(res => {
                console.log(res.response, "Backend response")
                dispatch(addMultipleGroceries(res.response))
            })
        }
      }, [groceryStore, dispatch])

    const handleDelete = (id: string) => {
        const result = deleteItem(id)
        result.then(res => {
            if (res === 204) {
                dispatch(removeGrocery(id))
            }
        })
    }

    const handleUpdate = (item: incomingItem) => {
        setEdit(true)
        setId(item._id)
        setGrocery(item)
        console.log(item)
    }
                    
    // console.log(groceryStore, "display grocery list")
    
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
                            
                            <Card className="grocery-item">
                                <Card.Body>
                                    {item.content}
                                 </Card.Body>   
                            </Card>
                        </div>
                    )
                }) : null}

            </ul>
        </div>
    )
}

export default DisplayList;