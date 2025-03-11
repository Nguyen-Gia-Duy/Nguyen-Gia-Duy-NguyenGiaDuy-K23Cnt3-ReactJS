import React, { useEffect, useState } from 'react'

export default function NgdUseEffect() {
    // state
    const [ngdCount, setNgdCount] = useState(0);

    // useEffect sử dụng 1 tham số: Được thực hiện mỗi khi render / re-render
    useEffect(()=>{
        console.log("Đây là useEffect một tham số");
    });

    // useEffect sử dụng 2 tham số; tham số thứ 2 là mảng rỗng => Được gọi duy nhất một lần khi render
    useEffect(()=>{
        console.log("Đây là useEffect 2 tham số, tham số thứ 2 là mảng rỗng []");
    },[]);


    // useEffect sử dụng 2 tham số; tham số thứ 2 là mảng các đối số phụ thuộc
    //  => Được gọi mỗi khi đối số thay đổi
    // khởi tạo state là một mảng 
    const ngdArr = [10,12,20,22];
    const [ngdArray, setNgdArray] = useState(ngdArr);
    useEffect(()=>{
        console.log("Đây là useEffect 2 tham số, tham số thứ 2 là mảng đối số phụ thuộc [ngdArray]");
    },[ngdArray]);

    useEffect(()=>{
        console.log("Đây là useEffect 2 tham số, tham số thứ 2 là mảng [ngdCount]");
    },[ngdCount]);
    // Hàm xử lý sự kiện khi thêm mới phần tử vào mảng
    const ngdHandleAddList=()=>{
        setNgdArray([
            ...ngdArray,
            parseInt(Math.random()*100),
        ])
    }
  return (
    <div className='alert alert-info'>
        <h2>Demo useEffect</h2>
        <h3>Count: {ngdCount}</h3>
        <button onClick={()=>setNgdCount(ngdCount+1)}>Click here</button>

        <div>
            <h3>Array: {ngdArray.toString()}</h3>
            <button onClick={ngdHandleAddList}>Thêm </button>
        </div>
    </div>
  )
}