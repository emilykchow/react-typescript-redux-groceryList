import React from 'react'
import {addGrocery, editGrocery} from "../redux/grocerySlice";
import { useAppDispatch } from '../redux/hooks';
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import { incomingItem, postItem, editItem } from '../network/network';


interface IGroceryProps {
    grocery: incomingItem;
    setGrocery: Function;
    list: incomingItem[];
    setList: Function;
    id: string;
    setId: Function;
    edit: boolean,
    setEdit: Function
}

const InputField = ({grocery, setGrocery, id, setId, edit, setEdit}: IGroceryProps) => {
    const dispatch = useAppDispatch();
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>, value: incomingItem) => {
        e.preventDefault();
        
        if (!edit) {
            setGrocery({...grocery, content: ""})
            const result = postItem(value)
            result.then(res => dispatch(addGrocery(res.response)))
            
        } else {
            setGrocery({...grocery, content: ""})
            console.log(value, "inputfield")
            const result = editItem(value, id)
            result.then(res => dispatch(editGrocery(res.response)))
            setEdit(!edit);
            setId("")
        }
 
    }
  return (
    <div className="Input-field-wrapper">
        <form onSubmit={(e) => handleSubmit(e, grocery)}>
            <InputGroup>
            <FormControl value={grocery.content} onChange={(e) => setGrocery({content: e.target.value, done: false})} as="textarea" aria-label="With textarea" />
            <Button type="submit" variant="success" id="button-addon2">Submit</Button>
        </InputGroup>
        </form>
    </div>
  )
}

export default InputField;