import React, { useState } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import NgdNavNar from './components/NgdNavNar'
import NgdTrangChu from './components/NgdTrangChu'
import NgdLienHe from './components/NgdLienHe'
import NgdGioiThieu from './components/NgdGioiThieu'
import NgdListProduct from './components/NgdListProduct'
import NgdFormProduct from './components/NgdFormProduct'
export default function NgdApp() {

    const listProducts =[
      {ngdId:"001", ngdTenSanPham:"o to",ngdUserName:"Nguyen Duy",ngdPass:"123456"},
      {ngdId:"002", ngdTenSanPham:"xe may",ngdUserName:"Nguyen Du",ngdPass:"123456@"},
      {ngdId:"003", ngdTenSanPham:"may bay",ngdUserName:"Nguyen Huy",ngdPass:"123456!"},
    ]
    const[ngdProducts,setNgdProducts]=useState(listProducts)
    //Ham xử lí sự kiện ngdHandleAdd
    const ngdHandleAdd=(ngdParam)=>{
      console.log("ngdHandleAdd",ngdParam);

      setNgdProducts(prev =>{
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
            <Route path='/' element = {<NgdTrangChu/>}/>
            <Route path='/about' element = {<NgdGioiThieu/>}/>
            <Route path='/contact' element = {<NgdLienHe/>}/>
            <Route path='/list-product' element = {<NgdListProduct renderNgdProducts={ngdProducts}/>}/>
            <Route path='/create-product' element = {<NgdFormProduct onNgdAddProduct={ngdHandleAdd}/>}/>
          </Routes>
        
      </Router>
    </div>
  )
}
