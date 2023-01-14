import React from 'react';
import "./navbar.css";
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <div className='header'>
        
     <nav>

     
      <ul>
        <li>
            <Link to="/"> Home</Link>
        </li>
        <li>
            <Link to="/Contact"> Contact</Link>
        </li>
        
      </ul>
      </nav>

    </div>
  )
}

export default Navbar
