import React, { Component } from 'react';

class NgdEventForm5 extends Component {
    constructor(props){
        super(props);
        this.state = {
            ngdName:'Duy',
            ngdAge:20,
            ngdGender:'Female',
            ngdCourse:'CSS3'
        }
    }

    // Hàm xử lý sự kiện change
    ngdHandleChange = (event)=>{
        // lấy tên điều khiển
        let name = event.target.name;
        // Lấy giá trị trên điều khiển đang thao tác
        let value = event.target.value;

        // Cập nhật state
        this.setState({
            [name]:value,
        })
    }
    // Sự kiện khi submit form
    ngdHandleSubmit = (ev)=>{
        ev.preventDefault();
        alert(this.state.ngdName + "\n" + this.state.ngdAge);

        // Chuyển dữ liệu trên form lên App component (TvcApp);
        this.props.onNgdHandleSubmit(this.state);
    }
    render() {
        return (
            <div className='alert alert-danger'>
                <h2>Form Student Info </h2>
                <form>
                    <div>
                        <label htmlFor='ngdName'>Student Name:</label>
                        <input type='text' name='ngdName' id='tvcName' 
                            value={this.state.ngdName}
                            onChange={this.ngdHandleChange} />
                    </div>
                    <div>
                        <label htmlFor='ngdAge'>Student Age:</label>
                        <input type='text' name='ngdAge' id='ngdAge' 
                            value={this.state.ngdAge}
                            onChange={this.ngdHandleChange} />
                    </div>
                    <div>
                        <label htmlFor='ngdGender'>Student Gender:</label>
                        <div>
                            <input type='radio' name='ngdGender' id='ngdMale' className='mx-2'
                                value={'Male'}
                                checked={this.state.ngdGender === 'Male'}
                                onChange={this.ngdHandleChange} />
                            <label htmlFor='ngdMale'> Male</label>
                        </div>
                        <div>
                            <input type='radio' name='ngdGender' id='ngdFemale' className='mx-2'
                                value={'Female'}
                                checked={this.state.ngdGender === 'Female'}
                                onChange={this.ngdHandleChange} />
                            <label htmlFor='ngdFemale'> Female</label>
                        </div>
                        <div>
                            <input type='radio' name='ngdGender' id='ngdNone' className='mx-2'
                                value={'None'}
                                checked={this.state.ngdGender === 'None'}
                                onChange={this.ngdHandleChange} />
                            <label htmlFor='ngdNone'> None</label>
                        </div>
                    </div>
                    <div>
                        <label htmlFor='ngdCourse'>
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
                    </div>
                    <button onClick={this.ngdHandleSubmit}>Submit</button>
                </form>
            </div>
        );
    }
}

export default NgdEventForm5;