import React, { Component } from 'react'

export default class  extends Component {
constructor(props){
    super(props);
    this.state ={
        name:" Nguyen Duy",
    };
}

  render() {
    return (
      <div>
        <h2>NgdCompA</h2>
        <p> Du lieu trong state: {this.state.name}</p>
        <h3>Hien thi du lieu tu props</h3>
        <p>Name: {this.props.ngdName}</p>
        <p>Address:{this.props.ngdAddress}</p>
        </div>
    )
  }
}
