import React from 'react'
import NgdReadApiLocal from './components/NgdReadApiLocal'
import NgdReadMockAPI from './components/NgdReadMockAPI'
import NgdCreateMockAPI from './components/NgdCreateMockAPI'

export default function NgdApp() {
  return (
    <div className='container border my-3 p-3'>
      <h1> ReactJS- API - Nguyen Gia Duy</h1>
      <hr/>
      <NgdReadApiLocal/>
      <hr/>
      <h2> Doc du lieu tu MockApi(mockapi.io)</h2>
      <NgdReadMockAPI/>
      <NgdCreateMockAPI/>
    </div>
  )
}
