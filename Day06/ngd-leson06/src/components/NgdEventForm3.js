import React, { Component } from 'react';

class NgdEventForm3 extends Component {
    constructor(props){
        super(props);
        this.state = {
            ngdGioiTinh:'Nam',
        }
    }

    // Hàm xử lý sự kiện change
    ngdHandleChange = (event)=>{
        this.setState({
            ngdGioiTinh:event.target.value,
        })
    }

    // Hàm xử lý sự kiện submit form
    ngdHandleSubmit = (event)=>{
        event.preventDefault();
        alert("Giới tính của bạn là: " + this.state.ngdGioiTinh)
    }
    render() {
        return (
            <div className='alert alert-success'>
                <h2> Form input - radio</h2>
                <form>
                    <div>
                        <label htmlFor=''>Giới tính:</label> 
                        <input type='radio' name='ngdGioiTinh'  id='ngdNam' className='mx-2'
                            value="Nam" checked={this.state.ngdGioiTinh === 'Nam'} onChange={this.ngdHandleChange}/> 
                            <label htmlFor='ngdNam'>Nam</label>  
                        <input type='radio' name='ngdGioiTinh'  id='ngdNu' className='mx-2'
                            value="Nữ" checked={this.state.ngdGioiTinh === 'Nữ'} onChange={this.ngdHandleChange}/> 
                            <label htmlFor='ngdNu'>Nữ</label>  
                        <input type='radio' name='ngdGioiTinh' id='ngdKhac' className='mx-2'
                            value="Khác" checked={this.state.ngdGioiTinh === 'Khác'} onChange={this.ngdHandleChange}/> 
                            <label htmlFor='ngdKhac'>Khác</label>
                    </div>
                    <button onClick={this.ngdHandleSubmit}>Submit</button>
                </form>
            </div>
        );
    }
}

export default NgdEventForm3;