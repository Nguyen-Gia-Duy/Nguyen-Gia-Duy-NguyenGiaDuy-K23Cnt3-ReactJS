import React, { Component } from 'react'
import NgdLoginControl from './NgdLoginControl';
 class NgdRenderCondition extends Component {
    constructor(props){
        super(props);
        this.state={
            isLoggedIn : false,
        }
    }
    //Ham xu li su kien login
    ngdHandleLogin=()=>{
        this.setState({
            isLoggedIn:true
        })
    }
    //Ham su li su kien logout
    ngdHandleLogout=()=>{
        this.setState({
            isLoggedIn:false
        })
        }
    
  render() {
    let flag= this.state.isLoggedIn;
    return (
      <div className='alert alert-danger'>
        <h2>Render Cndition</h2>
        <hr/>
        <NgdLoginControl isLoggedIn={flag}/>
        <hr/>
        {
            flag?<button onClick={this.ngdHandleLogout}>Logout</button> 
            : <button onClick={this.ngdHandleLogin}>Login</button>
        }
      </div>
      
    );
  }
}
export default NgdRenderCondition;