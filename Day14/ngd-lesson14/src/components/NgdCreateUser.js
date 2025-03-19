import React, { useState } from 'react'
import axios from 'axios'
export default function NgdCreateUser() {
    //Khoi tao state
    const [ngdFullName,setNgdFullName]= useState('')
    const [ngdEmail,setNgdEmail]= useState('')
    const [ngdPhone,setNgdPhone]= useState('')
    const [ngdActive,setNgdActive]= useState(true)
    //api post
    const ngdCreateUserApi ="https://67d8e29400348dd3e2a887ee.mockapi.io/K23CNT3_NguyenGiaDuy/ngd_users";
    //Khi submit form
     const ngdHandleSubmit=(event)=>{
        event.preventDefault();
        console.log("ngdAvtive:",ngdActive);
    let ngdNewUser={ngdFullName,ngdEmail,ngdPhone,ngdActive};
    console.log(ngdNewUser);
    // Ghi du lieu vao api
    axios
    .post(ngdCreateUserApi,ngdNewUser)
    .then((ngd_respone)=>{

    })
    }
    //quay laij trang truoc
    const ngdHandleBack = () => {
        window.history.back();
    };
    return (
        <div className='alert alert-info'>
            <h2>Them moi users</h2>
            <hr />
            <form>
                <div className=' mb-1'>
                    <label for="ngdFullName">FullName</label>
                    <input type="text" name='ngdFullName' id="ngdFullName" 
                    value={ngdFullName}
                    onChange={(ev)=>setNgdFullName(ev.target.value)}/>
                </div>
                <div className=' mb-1'>
                    <label for="ngdEmail">Email</label>
                    <input type="email" name='ngdEmail' id="ngdEmail" 
                     value={ngdEmail}
                     onChange={(ev)=>setNgdEmail(ev.target.value)}/>
                </div>
                <div className=' mb-1'>
                    <label for="ngdPhone">Phone</label>
                    <input type="number" name='ngdPhone' id="ngdPhone" 
                     value={ngdPhone}
                     onChange={(ev)=>setNgdPhone(ev.target.value)}/>
                </div>
                <div className=' mb-1'>
                    <label for="ngdActive">Active</label>
                    <input type="radio" name='ngdActive' id="ngdActive_hd" value={'true'} onChange={(ev)=>setNgdActive(ev.target.value)}/>
                    <label for="ngdActive_hd">Hoat dong</label>
                    <input type="radio" name='ngdActive' id="ngdActive_kh" value={'false'} onChange={(ev)=>setNgdActive(ev.target.value)}/>
                    <label for="ngdActive_kh">Khoa</label>
                </div>
                <button onClick={ngdHandleSubmit}>Create</button>
                <button type="button" onClick={ngdHandleBack} style={{ marginLeft: '10px' }}>Back</button>
            </form>
        </div>
    )
}
