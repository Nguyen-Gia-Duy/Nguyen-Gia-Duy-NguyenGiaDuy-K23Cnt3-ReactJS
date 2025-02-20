import React from 'react'

export default function NgdFuncComp(props) {
  return (
    <div>
        <h2>Demo:function components Props</h2>
        <p>lay du lieu tu props de hien thi</p>
        <p>Name:{props.name}</p>
        <p>Address:{props.address}</p>
        <p>Company:{props.company}</p>
        <p>Note:{props.note}</p>
    </div>
  )
}
