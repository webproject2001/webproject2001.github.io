import React from 'react'
import Item from './Item'

export default function Navitem() {
  return (
    <>
      <div class=" navbar-collapse collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <Item  nav={{path:"./index.html" , name:"Home"}} />
            <Item  nav={{path:"./about.html" , name:"About"}} />
            <Item  nav={{path:"./gallary.html" , name:"Gallry"}} />
            <Item  nav={{path:"./menu.html" , name:"Menu"}} />
            <Item  nav={{path:"./reservation.html" , name:"Reservation"}} />
            <Item  nav={{path:"./contact.html" , name:"Contact"}} />

          </ul>
         
        </div>
    </>
  )
}
