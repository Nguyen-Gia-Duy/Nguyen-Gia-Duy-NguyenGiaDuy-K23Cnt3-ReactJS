import React from 'react'

export default function NgdRenderArray() {
    const ngdNumbers=[10,20,30,40,50];
    const ngdElement= ngdNumbers.map((item)=>{
        return <li>{item}</li>
        
    })
  return (
    <div className='alert alert-success'>
        {ngdElement}
    </div>
  )
}
