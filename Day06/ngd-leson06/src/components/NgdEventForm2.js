import React, { Component } from 'react';

class NgdEventForm2 extends Component {
    constructor(props){
        super(props);
        this.state={
            ngdCourse: 'CSS3',
        }
    }
    // Hàm xử lý sự kiện khi thay đồi khóa học
    ngdHandleChange = (event)=>{
        // Cập nhật lại state
        this.setState({
            ngdCourse:event.target.value,
        })
    }

    // Hàm xử lý sự kiện khi submit form
    ngdHandleSubmit = (event)=>{
        alert("Khóa học bạn chọn:" + this.state.ngdCourse);
        event.preventDefault();
    }
    render() {
        return (
            <div className='alert alert-danger'>
                 <h2>Form Select</h2>
                <form  >
                    <label htmlFor=''>
                      <select name='ngdCourse' id='ngdCourse' 
                            value={this.state.ngdCourse}
                            onChange={this.ngdHandleChange} >
                        <option value={'HTML5'}>HTML5</option>
                        <option value={'CSS3'}>CSS3</option>
                        <option value={'Javascript'}>Javascript</option>
                        <option value={'Jquery'}>Jquery</option>
                        <option value={'Bootstrap'}>Bootstrap</option>
                      </select>
                    </label>
                    <button className='btn btn-primary' onClick={this.ngdHandleSubmit}>Click here</button>
                </form>
            </div>
        );
    }
}

export default NgdEventForm2;