import React from 'react'
import NgdUseState from './components/NgdUseState'
import NgdUseEffect from './components/NgdUseEffect'

export default function NgdApp() {
  return (
    <div className='container border my-2'>
        <h1>Demo React hook</h1>
        <NgdUseState />
        <NgdUseEffect />
    </div>
  )
}