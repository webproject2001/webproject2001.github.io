import React from 'react'
import CancelSharpIcon from '@mui/icons-material/CancelSharp';
const ToDoLists = (props) => {
  

    return (
    <>
   <div className='todo-style'>
   <li> 
    <CancelSharpIcon  onClick={()=>{props.onSelect(props.id); }} />
   {props.text} </li>
    </div>
    </>
    )
  
};

export default ToDoLists
