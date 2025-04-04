import React from 'react'
import {Link} from 'react-router-dom'
export default function NgdNavBar() {
  return (
    <div>
        <ul>
            <Link to={"/"}>Home</Link>   |   
            <Link to={"/list-event"}>ngd-event</Link>   |   
            <Link to={"/create-event"}>ngd-event-add</Link>
            
        </ul>
    </div>
  )
}
