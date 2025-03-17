import React from 'react'

export default function NgdListUser({renderNgdUsers}) {

    const ngdElement=renderNgdUsers.map((ngdItem,index)=>{
        return(
        <>
        <tr key={index}>
            <td>{index+1}</td>
            <td>{ngdItem.ngdId}</td>
            <td>{ngdItem.ngdFullName}</td>
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
                    <th>FUllName</th>
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
