import { useState } from 'react';
import './App.css';
import ToDoLists from './ToDoLists';
import AddCircleSharpIcon from '@mui/icons-material/AddCircleSharp';
function App() {
  const [inputList,setInputList]= useState("");
  const [Items,setItems]=useState([]);
  const itemEvent = (event)=>{
    setInputList(event.target.value);
  };
const listOfItems=()=>{
setItems((oldItems)=>{
return [...oldItems,inputList];
});
setInputList("");
};

const deleteItem=(id)=>{
setItems((oldItems)=>{
return oldItems.filter((arrElem,index)=>{
return index !== id ;
})
})

};
  return (
   <>
   <div className='main-div'>
    <div className='center-div '>
     <br/>
     <h1>ToDo List</h1>
     <input type="text" placeholder="Add items"  value={inputList} onChange={ itemEvent}/>
     {/* <button onClick={listOfItems} >+</button> */} 
     <AddCircleSharpIcon onClick= {listOfItems} />
<ol>
 {
  Items.map( (itemval,index)=>{
   return <ToDoLists 
    key={index}
    id={index}
    text={itemval} 
    onSelect={deleteItem}
    />;
  } )
 }
</ol>
    </div>
   </div>

   </>
  );
}

export default App;
