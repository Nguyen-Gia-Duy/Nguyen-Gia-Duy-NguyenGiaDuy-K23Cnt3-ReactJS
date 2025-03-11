import React, { useState } from 'react'

export default function NgdUseState() {
    // khởi tạo state 
    const [ngdCount, setNgdCount] = useState(0);

    // khởi tạo state là một mảng 
    const ngdArr = [10,12,20,22];
    const [ngdArray, setNgdArray] = useState(ngdArr);

    // khởi tạo state với mảng object
    const ngdStudents = [
        {ngdId:"SV001",ngdName:"Nguyen Duy", tvcAge:20},
        {ngdId:"SV002",ngdName:"Nguyễn Van A", tvcAge:10},
    ];
    const [ngdStudentList, setngdStudentList] = useState(ngdStudents);

    // Hàm xử lý sự kiện khi thêm mới phần tử vào mảng
    const ngdHandleAddList=()=>{
        setNgdArray([
            ...ngdArray,
            parseInt(Math.random()*100),
        ])
    }

    // Hàm xử lý sự kiện thêm mới sinh viên
    const ngdHandleAddNewStudent = ()=>{
        let ngdStudent = {
            ngdId:"SV003",
            ngdName:"Nguyễn Thi B",
            ngdAge:20
        };
        // Thêm vào state tvcStudentList
        setngdStudentList([
            ...ngdStudentList,
            ngdStudent
        ])

        console.log("List: ", ngdStudentList);
        
    }
  return (
    <div className='alert alert-danger '>
        <h2>useState Demo</h2>
        <div>
            <h3>Count: {ngdCount}</h3>
            <button onClick={()=>setNgdCount(ngdCount+1)}>Tăng + </button>
            <button onClick={()=>setNgdCount(ngdCount-1)}>Giảm - </button>
        </div>
        <div>
            <h3>Array: {ngdArray.toString()}</h3>
            <button onClick={ngdHandleAddList}>Thêm phần từ</button>
        </div>
        <div>
            <h3>Danh sách sinh viên</h3>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nam</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        ngdStudentList.map((ngdStudent,index)=>{
                            return <>
                                <tr>
                                    <td>{ngdStudent.ngdId}</td>
                                    <td>{ngdStudent.ngdName}</td>
                                    <td>{ngdStudent.ngdAge}</td>
                                </tr>
                            </>
                        })
                    }
                </tbody>
                <tfoot>
                    <button onClick={ngdHandleAddNewStudent}>Thêm mới sinh viên</button>
                </tfoot>
            </table>
        </div>
    </div>
  )
}