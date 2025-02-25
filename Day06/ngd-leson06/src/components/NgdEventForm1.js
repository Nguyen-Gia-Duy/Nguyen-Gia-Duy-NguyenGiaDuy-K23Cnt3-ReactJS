import React, { Component } from 'react';

class NgdEventForm1 extends Component {
    constructor(props){
        super(props);
        this.state = {
            ngdStudentName:'Nguyen Duy',
        }
    }
    // Hàm xử lý sự kiện khi dữ liệu trên textbox (ngdStudentName) thay đổi
    ngdHandleChange = (event)=>{
        // Cập nhật lại state
        this.setState({
            ngdStudentName:event.target.value,
        })
    }
    // Khi submit form, lấy dữ liệu và hiển thị
    ngdHandleSubmit = (ev)=>{
        alert('Xin chào:' + this.state.ngdStudentName);
        ev.preventDefault();
    }
    render() {
        return (
            <div className='alert alert-info'>
                <h2>Form Input</h2>
                <form  onSubmit={this.ngdHandleSubmit}>
                    <label htmlFor='ngdStudentName'>
                        <input type='text' name='ngdStudentName' id='ngdStudentName' 
                            value={this.state.ngdStudentName}
                            onChange={this.ngdHandleChange}
                        />
                    </label>
                    <button className='btn btn-primary'>Click here</button>
                </form>
            </div>
        );
    }
}

export default NgdEventForm1;