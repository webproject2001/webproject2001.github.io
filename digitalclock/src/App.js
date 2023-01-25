import './App.css';
import React,{useState} from "react";
function App() {
  let time=new Date().toLocaleTimeString();
  const [ctime,setCtime] = useState(time);
  const  updateTime=()=>{
     time=new Date().toLocaleTimeString();
     setCtime(time);

  }
  setInterval(updateTime,1000);

  return (
    <div className='center-div'>
      <p><b>Digital Clock </b> </p>
    <h1>{ctime}</h1>
    </div>
  );
}

export default App;
