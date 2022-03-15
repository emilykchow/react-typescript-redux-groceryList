import React, { useState } from 'react';
import './App.css';
import DisplayList from './components/DisplayList';
import InputField from './components/InputField';

export interface IGroceryState {
  id: number,
  content: string,
  done: boolean
}

function App() {
  const [grocery, setGrocery] = useState<IGroceryState>({id: 0, content: "", done: false})
  const [list, setList] = useState<IGroceryState[]>([])
  const [id, setId] = useState(0);
  const [edit, setEdit] = useState(false)

  return (
    <div className="App">
      <h1>Grocery List</h1>
      <InputField grocery={grocery} setGrocery={setGrocery} list={list} setList={setList} id={id} setId={setId} edit={edit} setEdit={setEdit}/>
      <DisplayList list={list}/>
    </div>
  );
}

export default App;
