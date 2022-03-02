import React from 'react'
import { IGroceryState } from '../App'
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import GroceryItem from "./GroceryItem";

interface IGroceryProps {
    list: IGroceryState[];
}

const DisplayList = ({list}: IGroceryProps) => {
    const groceryStore = useAppSelector((state) => state.groceryReducer.value);
    const dispatch = useAppDispatch();

    return (
        <div>
            <ul>
                {groceryStore.length ? groceryStore.map((item, index) => {
                    return(
                        <GroceryItem key={index} item={item}/>
                    )
                }) : null}

            </ul>
        </div>
    )
}

export default DisplayList;