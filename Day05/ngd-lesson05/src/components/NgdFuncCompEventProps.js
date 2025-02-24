import React from 'react'

export default function NgdFuncCompEventProps(props) {
    //ham su li su kien
    const ngdHandleButtonClick1=()=>{
        alert("Du lieu tu props:" + props.ngdRenderName);
        console.log("Xin chao:",props.ngdRenderName);
    }
    const ngdHandleButtonClick2=(param)=>{
        //lay du lieu tu props
        alert("Du lieu tu props (Button 2 click):" + props.ngdRenderName);
        //du lieu tu tham so
        console.log("==================");
        console.log("Hi:",param);
        console.log("==================");
    } 
  return (
    <div className='alert alert-danger'>
     <button className='btn btn-primary mx-1'
     onClick={ngdHandleButtonClick1}>Button 1</button>
      <button className='btn btn-success mx-1'
      onClick={()=>ngdHandleButtonClick2("Button 2")}>Button 2</button>
    </div>
  )
}
