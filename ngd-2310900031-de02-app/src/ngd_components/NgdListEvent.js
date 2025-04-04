import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

export default function NgdListEvent() {
    //Khoi tao state
    const [ngdListEvent,setNgdListEvent]=useState([])
    //api
    const ngdApiOnline="https://67d8e29400348dd3e2a887ee.mockapi.io/ngdApi/2310900031/ngdEvent"
    //Doc du lieu tu api bang axios
    useEffect(()=>{
        axios
        .get(ngdApiOnline)
        .then((ngd_respone)=>{
            setNgdListEvent(ngd_respone.data)
        })
        .catch((error)=>{
            console.log("Loi phat sinh");
            
        })
    },[])
    //view data
    const ngdElementUser= ngdListEvent.map((ngd_item,index)=>{
        return(
            <tr>
                <td>{ngd_item.ngdEventId}</td>
                <td>{ngd_item.ngdEventName}</td>
                <td>{ngd_item.ngdEventAdd}</td>
                <td>{ngd_item.ngdEventDate}</td>
                <td>{ngd_item.ngdStatus?'Hoat dong':'Khoa'}</td>
                <td>
                    <Link to={`/edit-event/${ngd_item.id}`} className='btn btn-primary'>Sua</Link>
                    <button onClick={() => handleDelete(ngd_item.ngdEventId)} className='btn btn-success'>Xoa</button>
                </td>
            </tr>
        )
    })
   // Hàm xóa user
   const handleDelete = (id) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa người dùng này không?")) {
        axios.delete(`${ngdApiOnline}/${id}`)
            .then(() => {
                setNgdListEvent(ngdListEvent.filter(user => user.ngdEventId !== id));
            })
            .catch(error => console.log("Lỗi khi xóa:", error.message));
    }
};


  return (
    <div className='alert alert-danger'>
        <h2>Danh sach</h2>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Add</th>
                    <th>Date</th>
                    <th>Status</th>
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
