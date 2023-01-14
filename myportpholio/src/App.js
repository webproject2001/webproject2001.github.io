import React from 'react';
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import {Routes,Route} from "react-router-dom";

const App = () => {
  return (
<>
<Routes>
  <Route  path="/" element={<Home/>}   />
  <Route  path="/Contact" element={<Contact/>}   />
  
</Routes>


</>

    // <div className='App'>
    //   <Home/>
    //   <Contact/>
    // </div>
  )
}

export default App
