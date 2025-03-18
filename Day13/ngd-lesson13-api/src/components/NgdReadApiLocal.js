import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function NgdReadApiLocal() {
    //Khoi tao state
    const [ngdListUser,setNgdListUser]= useState([])
    //Doc du lieu tu api local va set cho ngListUser
const apiUrl="http://localhost:3001/users"
//Lay danh sach tu apiUrl
useEffect(()=>{
    axios
    .get(apiUrl)
    .then((ngdRespone)=>{
        setNgdListUser(ngdRespone.data)
    })
    .catch((error)=>{
        console.log("Loi");
        
    })
},[])
  return (
    <div>
        <h2>Doc du lieu tu ApiLocal</h2>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>FullName</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                {
                    ngdListUser.map((ngdItem,index)=>{
                        return(
                            <tr>
                                <td>{ngdItem.fullname}</td>
                                <td>{ngdItem.age}</td>
                            </tr>
                        )
                    }
                )
                }
            </tbody>
        </table>
    </div>
  )
}
