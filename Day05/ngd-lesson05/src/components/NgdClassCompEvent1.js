import React, { Component } from 'react'

class NgdClassCompEvent1 extends Component {
    //Ham su li su kien
    ngdEventHandleclick1 =()=>{
        alert("Button 1 clicked");
    }
    ngdEventHandleclick2 =(name)=>{
        alert("Button 2 clicked;name="+name);
    }
  render() {
    return (
      <div className='alert alert-danger'> 
        <button className='btn btn-primary mx-1' onClick={this.ngdEventHandleclick1}>Button1</button>
        <button className='btn btn-success mx-1'
        onClick={()=>this.ngdEventHandleclick2("Nguyen DUy")}>Button2</button>
      </div>
    );
  }
}
export default NgdClassCompEvent1;