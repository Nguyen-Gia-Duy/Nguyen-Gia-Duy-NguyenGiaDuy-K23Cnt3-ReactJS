import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function NgdReadMockAPI() {
    //Khoi tao state
    const [ngdListUser,setNgdListUser]=useState([])
    //api
    const ngdApiOnline="https://67d8e29400348dd3e2a887ee.mockapi.io/K23CNT3_NguyenGiaDuy/ngd_users"
    //Doc du lieu tu api bang axios
    useEffect(()=>{
        axios
        .get(ngdApiOnline)
        .then((ngd_respone)=>{
            setNgdListUser(ngd_respone.data)
        })
        .catch((error)=>{
            console.log("Loi phat sinh");
            
        })
    },[])
    //view data
    const ngdElementUser= ngdListUser.map((ngd_item,index)=>{
        return(
            <tr>
                <td>{ngd_item.ngdId}</td>
                <td>{ngd_item.ngdFullName}</td>
                <td>{ngd_item.ngdAge}</td>
                <td>{ngd_item.ngdActive?'Hoat dong':'Khoa'}</td>
                <td>
                    <button>Sua</button>
                    <button>Xoa</button>
                </td>
            </tr>
        )
    })

  return (
    <div className='alert alert-danger'>
        <h2>Danh sach</h2>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>FullName</th>
                    <th>Age</th>
                    <th>Active</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                  ngdElementUser
                }
            </tbody>
        </table>
    </div>
  )
}
