import React, { Component } from 'react'

 class NgdClassComp extends Component {
    constructor(props){
        super(props);
        //khoi tao state
        this.state={
            fullname:"Duy hehe",
            age:40,
            phone:"1234567"
        }
    }
    //ham xu li su kien
    changeInfo=(ev)=>{
        //cap nhat state
        this.setState({
            fullname:"Nguyen Gia Duy"
        });
    }
  render() {
    let users=this.props.renderUsers;
    console.log('=====================');
    console.log(users);
    console.log('=====================');
    return (
      <div className='alert alert-success'>
       <h2>trinh bay du lieu tu state</h2>
       <p>info state(fullname):  {this.state.fullname}</p>
       <p>info state(age):  {this.state.age}</p>
       <p>info state(phone):  {this.state.phone}</p>
       <hr/>
       <button className='btn btn-primamry' onClick={this.changeInfo}>Change Info</button>
       <hr/>
       <h3>Lay du lieu tu props</h3>
       <p>Name: {this.props.renderName}</p>
       <p>FullName: {this.props.renderUsers ?this.props.renderUsers .fullname:''}</p>
       <p>Age: {this.props.renderUsers ?this.props.renderUsers .age:''}</p>
       <p>Phone: {this.props.renderUsers ?this.props.renderUsers .phone:''}</p>
    {/* //    <p>Age: {this.props.renderUsers.age}</p>
    //    <p>Phone: {this.props.renderUsers.phone}</p> */}
       </div>
    ); 
  }
}
export default NgdClassComp;