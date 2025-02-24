import React, { Component } from 'react'

 class NgdClassCompEventState extends Component {
    constructor(props){
        super(props);
        this.state={
            ngdFullName:"Nguyen Gia Duy",
            ngdAge:20,
        }
    }
    //Ham su li su kien
    ngdEventHandleClick1=()=>{
        //Lay du lieu trong state
        alert("FullName:" + this.state.ngdFullName+"\n Age:" +this.state.ngdAge);
    }
  render() {
    return (
      <div className='alert alert-danger'>
        <button className='btn btn-primary' onClick={this.ngdEventHandleClick1}>Button 1- du lieu trong state</button>
        
      </div>
    )
  }
}
export default NgdClassCompEventState;