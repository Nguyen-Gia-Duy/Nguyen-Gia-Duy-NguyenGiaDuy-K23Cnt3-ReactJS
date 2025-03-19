import React from 'react'
import {Link} from 'react-router-dom'
export default function NgdNavNar() {
  return (
    <div>
        <ul>
            <Link to={"/"}>Trang Chu</Link> |
            <Link to={"/list-user"}>Danh Sach User</Link> |
            <Link to={"/create-user"}>Them Moi User</Link>
            
        </ul>
    </div>
  )
}
