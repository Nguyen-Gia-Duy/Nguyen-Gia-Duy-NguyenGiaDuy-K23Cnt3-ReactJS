import React, { Component } from 'react';

const initialState = [
  { ngdid: 'ngdP001', ngdtendt: 'ngdIPhone 11', ngdsoluong: 15, ngdgia: 1000 },
  { ngdid: 'ngdP002', ngdtendt: 'ngdIPhone 12', ngdsoluong: 20, ngdgia: 1250 },
  { ngdid: 'ngdP003', ngdtendt: 'ngdIPhone 13', ngdsoluong: 10, ngdgia: 1500 },
  { ngdid: 'ngdP004', ngdtendt: 'ngdIPhone 14', ngdsoluong: 15, ngdgia: 2000 },
];

class NgdThucHanh extends Component {
    
  render() {
    return (
      <div className="container">
        <h1 className="text-2xl font-bold mb-4 text-center">Danh Sach Dien Thoai Cua Duy</h1>
        <table className="text-center w-full border-collapse border border-gray-300 ">
          <thead>
            <tr className="bg-gray-100 ">
              <th className="border border-gray-300 p-2"> ID</th>
              <th className="border border-gray-300 p-2">Ten Dien Thoai</th>
              <th className="border border-gray-300 p-2">So Luong</th>
              <th className="border border-gray-300 p-2">GiaTien</th>
              <th className="border border-gray-300 p-2">Tong tien</th>
              <th className="border border-gray-300 p-2">Chuc Nang</th>
            </tr>
          </thead>
          <tbody>
            {initialState.map((product) => (
              <tr key={product.id}>
                <td className="border border-gray-300 p-2">{product.ngdid}</td>
                <td className="border border-gray-300 p-2">{product.ngdtendt}</td>
                <td className="border border-gray-300 p-2">{product.ngdsoluong}</td>
                <td className="border border-gray-300 p-2">${product.ngdgia}</td>
                <td className="border border-gray-300 p-2">${product.ngdsoluong * product.ngdgia}</td>
                <td>
                <button className='btn btn-success mx-1'>Sua</button>
                <button className='btn btn-primary mx-1'>Xoa</button>
            </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default NgdThucHanh;
