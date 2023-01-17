import React, {useState} from 'react';


import './App.css';

function App() {

  //state hook useState
  const [newItem, setNewItem]=useState("");
  const [items,setItems]=useState([]);

  const addItem= ()=>{
    if(!newItem){
      alert("Please enter an item and try again")
      return;
    }
    console.log(newItem);
    const item={
      id:Math.floor(Math.random()*1000),
      value:newItem
    }

    setItems(oldList=>[...oldList,item])
    setNewItem("");
  };

  const deletItem =(id)=>{
    const newArray=items.filter((item) => item.id !==id  );
    setItems(newArray);
  }

  const UpdateItem =(id)=>{
    if (!newItem) {
      alert("Please enter an item and try again")
      return;
    }
    const newArray=items.map((item) => {
      if(item.id ===id ){
        item.value=newItem;     
      }
      return item;
  });
    setItems(newArray);
    setNewItem("");
  }

  return (
    <div className="App">
      {/* header */}
      <div className='wraper'>


        <h1>Todo list</h1>




        {/* input and button */}
        <input
          type="text"
          placeholder='type new task ...'
          value={newItem}
          onChange={(e)=>setNewItem(e.target.value)}
        />
        <button className='btnAdd' onClick={() => addItem()}>add</button>




        {/* unorderd list of taskes */}
        <ul>
         {
            items.map(item => {
              
              return (
                <li key={item.id}>{item.value} <button className='btnDelet' onClick={() => deletItem(item.id)}>Delete</button><button className='btnUpdate' onClick={() => UpdateItem(item.id)}>Update  With input text</button> </li>
              )
            }
            )
         }    
        </ul>

      </div>
    </div>
  );
}
export default App;
