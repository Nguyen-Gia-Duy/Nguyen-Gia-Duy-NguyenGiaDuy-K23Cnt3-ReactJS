import React, { useState } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import NgdNavNar from './components/NgdNavNar'
import NgdHome from './components/NgdHome'
import NgdContact from './components/NgdContact'
import NgdAbout from './components/NgdAbout'
import NgdListUser from './components/NgdListUser'
import NgdFormUser from './components/NgdFormUser'
export default function NgdApp() {

    const listUsers =[
      {ngdId:"SV001", ngdFullName:"Nguyen Gia Duy",ngdUserName:"Nguyen Duy",ngdPass:"123456"},
      {ngdId:"SV002", ngdFullName:"Nguyen Thi Du",ngdUserName:"Nguyen Du",ngdPass:"123456@"},
      {ngdId:"SV003", ngdFullName:"Nguyen Van Huy",ngdUserName:"Nguyen Huy",ngdPass:"123456!"},
    ]
    const[ngdUsers,setNgdUsers]=useState(listUsers)
    //Ham xử lí sự kiện ngdHandleAdd
    const ngdHandleAdd=(ngdParam)=>{
      console.log("ngdHandleAdd",ngdParam);

      setNgdUsers(prev =>{
        return[
          ...prev,
          ngdParam
        ]
      })
    }
  return (
    <div className='container border my-3'>
      <h1>React-Router-Dom-Demo-[Nguyen Gia Duy-K23cnt3]</h1>
      <hr/>
      <Router>
        <NgdNavNar/>
        
          <Routes>
            <Route path='/' element = {<NgdHome/>}/>
            <Route path='/about' element = {<NgdAbout/>}/>
            <Route path='/contact' element = {<NgdContact/>}/>
            <Route path='/list-user' element = {<NgdListUser renderNgdUsers={ngdUsers}/>}/>
            <Route path='/create-user' element = {<NgdFormUser onNgdAddNew={ngdHandleAdd}/>}/>
          </Routes>
        
      </Router>
    </div>
  )
}
