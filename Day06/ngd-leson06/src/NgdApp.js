import React, { Component } from 'react';
import NgdEventForm1 from './components/NgdEventForm1';
import NgdEventForm2 from './components/NgdEventForm2';
import NgdEventForm3 from './components/NgdEventForm3';
import NgdEventForm4 from './components/NgdEventForm4';
import NgdEventForm5 from './components/NgdEventForm5';
import NgdRenderCondition from './components/NgdRenderCondition';
import NgdRenderArray from './components/NgdRenderArray';
import NgdRenderListObject from './components/NgdRenderListObject';

class NgdApp extends Component {



  // Hàm xử lý nhận dữ liệu từ form student
  ngdHandleSubmitForm = (param)=>{
    console.log("Student:",param);
  }


  render() {
    
    return (
      <div className='container border my-3 bg-white'>
          <h1 className='text-center'>Event Form - Demo</h1>
          <hr/>
          <NgdEventForm1 />
          <NgdEventForm2 />
          <NgdEventForm3 />
          <NgdEventForm4 />
          <NgdEventForm5 onNgdHandleSubmit={this.ngdHandleSubmitForm}/>
          <NgdRenderCondition/>
          <NgdRenderArray/>
          <NgdRenderListObject/>
      </div>
    );
  }
}

export default NgdApp;