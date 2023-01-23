import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
   <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
   {/* <img src="./images/coffee1.png" alt="" style="height: 60px;  margin-right:30px ;"> */}
    {/* <button className="navbar-toggler collapse" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
     <span className="navbar-toggler-icon"></span>
   </button>  */}
   <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
     <span className="navbar-toggler-icon"><i className="bi bi-list" aria-hidden="true"></i>
     </span>
   </button>

     <div className="collapse navbar-collapse " id="navbarSupportedContent">
       <ul className="navbar-nav mr-auto">
         <li className="nav-item active">
           <Link className="nav-link" to="/home">Home </Link>
         </li>
         <li className="nav-item active">
           <Link className="nav-link" to="/about">About Us</Link>
         </li>
         <li className="nav-item">
           <Link className="nav-link" to="/menu">Menu</Link>
         </li>
         <li className="nav-item active">
           <Link className="nav-link" to="/gallary">Gallary</Link>
         </li>
         <li className="nav-item">
           <Link className="nav-link" to="/reservation">Reservation</Link>
         </li>
         <li className="nav-item">
             <Link className="nav-link" to="/contactus">Contact Us</Link>
         </li>
       </ul>
     </div>
   </div>
 </nav>   
 

   </>
  )
}

export default Navbar
