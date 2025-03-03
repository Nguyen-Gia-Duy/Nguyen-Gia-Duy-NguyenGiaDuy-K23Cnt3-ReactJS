import React from 'react'
import NgdLoginComp from './NgdLoginComp';
import NgdLogoutComp from './NgdLogoutComp';

export default function NgdLoginControl(props) {
    var isLoggedIn= props.isLoggedIn;
    var ngdLoginControl = isLoggedIn?<NgdLoginComp/> : <NgdLogoutComp/>
  return (
    <div>
       {ngdLoginControl}
    </div>
  )
}
