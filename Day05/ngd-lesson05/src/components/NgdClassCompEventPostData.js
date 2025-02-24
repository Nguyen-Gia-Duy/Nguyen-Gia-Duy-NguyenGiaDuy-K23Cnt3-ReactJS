import React, { Component } from 'react'

 class NgdClassCompEventPostData extends Component {
    constructor(props){
        super(props);

    }
    //ham xi li su kien
    ngdEventHandleClick=()=>{
        //chuyen du lieu len App thong qua props
        this.props.onNgdDataToApp("Du lieu tu components con-NgdClassCompEventPostData")
    }
  render() {
    return (
      <div className='alert alert-success'>
        <button className="btn btn-primary"
        onClick={this.ngdEventHandleClick}>Button 1-Chuyen du lieu len App</button>
      </div>
    )
  }
}
export default NgdClassCompEventPostData;