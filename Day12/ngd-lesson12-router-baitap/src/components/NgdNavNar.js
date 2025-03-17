import React from 'react'
import {Link} from 'react-router-dom'
export default function NgdNavNar() {
  return (
    <div>
        <ul>
            <Link to={"/"}>Trang chu</Link> |
            <Link to={"/about"}>Gioi Thieu</Link> |
            <Link to={"/contact"}>Lien He</Link> |
            <Link to={"/list-product"}>Danh Sach San Pham</Link> |
            <Link to={"/create-product"}>Them san pham</Link>
            
        </ul>
    </div>
  )
}
