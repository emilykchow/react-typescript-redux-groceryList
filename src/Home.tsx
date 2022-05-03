import React, { useState } from 'react';
import './App.css';
import DisplayList from './components/DisplayList';
import InputField from './components/InputField';
import { incomingItem } from './network/network';

// export interface IGroceryState {
//   id: number,
//   content: string,
//   done: boolean
// }

function Home() {
  const [grocery, setGrocery] = useState<incomingItem>({_id: '0', content: "", done: false})
  const [list, setList] = useState<incomingItem[]>([])
  const [id, setId] = useState("");
  const [edit, setEdit] = useState(false)

  return (
    <div>
      <h1>Grocery List</h1>
      <InputField grocery={grocery} setGrocery={setGrocery} list={list} setList={setList} id={id} setId={setId} edit={edit} setEdit={setEdit}/>
      <DisplayList setGrocery={setGrocery} list={list} setEdit={setEdit} id={id} setId={setId}/>
    </div>
  );
}

export default Home;
