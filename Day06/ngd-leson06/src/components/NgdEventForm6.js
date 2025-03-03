import React, { Component } from 'react'

 class NgdEventForm6 extends Component {
    constructor(props){
        super(props);
        this.studentName=React.createRef();
        this.age=React.createRef();
        this.course=React.createRef();

    };
    handleSubmit=(event)=>{
        alert('Thong tin sinh vien khi submit: '+this.studentName.current.value+'-'+this.age.current.value+'-'+this.course.current.value);
        event.preventDefault();

    }
  render() {
    return (
    <form onSubmit={this.handleSubmit}>
        <label>
            Ten sinh vien: <input type='text' ref={this.studentName}/>

        </label> <br/>
        <label>
            Chon khoa hoc: 
            <select defaultValue="js" ref={this.course}>
            <option value="html">Html</option>
            <option value="js">js</option>
            <option value="css">css</option>
            <option value="reacrjs">ReactJs</option>
            </select>
        </label> <br/>
        <input type="submit" value="submit"/>
    </form>
    );
  };
 }
export default NgdEventForm6;