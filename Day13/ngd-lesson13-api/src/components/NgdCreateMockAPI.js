import React, { useState } from 'react'
import axios from 'axios'
export default function NgdCreateMockAPI() {
    //Khoi tao state
    const [ngdFullName,setNgdFullName]= useState('')
    const [ngdAge,setNgdAge]= useState(0)
    const [ngdActive,setNgdActive]= useState(true)
    //api post
    const ngdCreateUserApi ="https://67d8e29400348dd3e2a887ee.mockapi.io/K23CNT3_NguyenGiaDuy/ngd_users";
    //Khi submit form
     const ngdHandleSubmit=(event)=>{
        event.preventDefault();
        console.log("ngdAvtive:",ngdActive);
    let ngdNewUser={ngdFullName,ngdAge,ngdActive};
    console.log(ngdNewUser);
    // Ghi du lieu vao api
    axios
    .post(ngdCreateUserApi,ngdNewUser)
    .then((ngd_respone)=>{

    })
    }
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
                    <label for="ngdAge">Age</label>
                    <input type="number" name='ngdAge' id="ngdAge" 
                     value={ngdAge}
                     onChange={(ev)=>setNgdAge(ev.target.value)}/>
                </div>
                <div className=' mb-1'>
                    <label for="ngdActive">Active</label>
                    <input type="radio" name='ngdActive' id="ngdActive_hd" value={'true'} onChange={(ev)=>setNgdActive(ev.target.value)}/>
                    <label for="ngdActive_hd">Hoat dong</label>
                    <input type="radio" name='ngdActive' id="ngdActive_kh" value={'false'} onChange={(ev)=>setNgdActive(ev.target.value)}/>
                    <label for="ngdActive_kh">Khoa</label>
                </div>
                <button onClick={ngdHandleSubmit}>Create</button>
            </form>
        </div>
    )
}
