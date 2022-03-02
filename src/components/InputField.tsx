import React from 'react'
import { IGroceryState } from '../App'
import {addGrocery} from "../redux/grocerySlice";
import { useAppDispatch } from '../redux/hooks';

interface IGroceryProps {
    grocery: IGroceryState;
    setGrocery: Function;
    list: IGroceryState[];
    setList: Function;
    id: number;
    setId: Function;

}

const InputField = ({grocery, setGrocery, list, setList, id, setId}: IGroceryProps) => {
    const dispatch = useAppDispatch();
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>, value: IGroceryState) => {
        e.preventDefault();
        setId(id+1);
        setList([...list, value]);
        setGrocery("")
        dispatch(addGrocery(value));
        
    }
  return (
    <div>
        <form onSubmit={(e) => handleSubmit(e, grocery)}>
            <input value={grocery.content} onChange={(e) => setGrocery({id, content: e.target.value, done: false})}/>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default InputField;