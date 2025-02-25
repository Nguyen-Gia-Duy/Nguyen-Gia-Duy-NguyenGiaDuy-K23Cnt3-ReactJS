import React from 'react'

export default function NgdFuncCompEvent1() {
    //ham su li du lieu
 
    const ngdEventButton2Click=()=>{
        alert("Button 2 - clicked");
    };
    const ngdEventButton3Click=(name)=>{
        alert("Name:" + name);
    };
  return (
    <div className='alert alert-info '>
        {/* <button className='btn btn-primary' onClick={ngdEventButton1Click()}>Button 1</button> */}
        <button className='btn btn-primary mx-1'onClick={ngdEventButton2Click}>Button 2</button>
        {/* <button className='btn btn-success'onClick={()=>ngdEventButton3Click("Nguyen Duy")}>Button 3</button> */}
        <button className='btn btn-success'onClick={()=>ngdEventButton3Click("Nguyen Gia Duy")}>Button 4</button>
      
    </div>
  );
}
