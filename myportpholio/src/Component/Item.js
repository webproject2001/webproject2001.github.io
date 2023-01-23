import React from 'react'

export default function Item(props) {
  return (
   <>
   <li className="nav-item active">
         <a className="nav-link" href={props.nav.path}>{props.nav.name}</a>
    </li>
   </>
  )
}
