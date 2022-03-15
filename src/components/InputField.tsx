import React from 'react'
import {addGrocery, editGrocery} from "../redux/grocerySlice";
import { useAppDispatch } from '../redux/hooks';
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import { incomingItem } from '../network/network';


interface IGroceryProps {
    grocery: incomingItem;
    setGrocery: Function;
    list: incomingItem[];
    setList: Function;
    id: number;
    setId: Function;
    edit: boolean,
    setEdit: Function

}

const InputField = ({grocery, setGrocery, list, setList, id, setId, edit, setEdit}: IGroceryProps) => {
    const dispatch = useAppDispatch();
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>, value: incomingItem) => {
        e.preventDefault();
        
        if (!edit) {
            setId(id+1);
            setList([...list, value]);
            setGrocery("");
            console.log(value, "handleSubmit");
            dispatch(addGrocery(value));
        } else {
            dispatch(editGrocery(value));
        }
 
    }
  return (
    <div className="Input-field-wrapper">
        <form onSubmit={(e) => handleSubmit(e, grocery)}>
            <InputGroup>
            <FormControl value={grocery.content} onChange={(e) => setGrocery({id, content: e.target.value, done: false})} as="textarea" aria-label="With textarea" />
            <Button type="submit" variant="success" id="button-addon2">Submit</Button>
        </InputGroup>
        </form>
    </div>
  )
}

export default InputField;