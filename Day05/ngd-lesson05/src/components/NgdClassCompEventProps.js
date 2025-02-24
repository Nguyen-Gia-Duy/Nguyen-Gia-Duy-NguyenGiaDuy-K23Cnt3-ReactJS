import React, { Component } from 'react'

 class NgdClassCompEventProps extends Component {
    //ham su li su kien
    ngdEventHandleClick1=()=>{
        alert("Hello..." + this.props.ngdRenderTitle);
    }
  render() {
    return (
      <div className='alert alert-danger'>
        <button className='btn btn-primary' onClick={this.ngdEventHandleClick1}>Button 1</button>

      </div>
    );
  }
}
export default NgdClassCompEventProps;