import React from 'react'

export default function NgdListProduct({renderNgdProducts}) {

    const ngdElement=renderNgdProducts.map((ngdItem,index)=>{
        return(
        <>
        <tr key={index}>
            <td>{index+1}</td>
            <td>{ngdItem.ngdId}</td>
            <td>{ngdItem.ngdTenSanPham}</td>
            <td>{ngdItem.ngdUserName}</td>
            <td>{ngdItem.ngdPass}</td>
        </tr>
        </>)
    })

  return (
    <div>
        <h2>Danh sách tài khoản</h2>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>ID</th>
                    <th>Ten san pham</th>
                    <th>UserName</th>
                    <th>Password</th>
                </tr>
            </thead>
            <tbody>
                {ngdElement}
            </tbody>
        </table>
    </div>
  )
}
