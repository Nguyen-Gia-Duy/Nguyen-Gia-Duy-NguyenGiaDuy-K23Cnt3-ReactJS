import React, { Component } from 'react'
import NgdFuncCompEvent1 from './components/NgdFuncCompEvent1';
import NgdClassCompEvent1 from './components/NgdClassCompEvent1';
import NgdFuncCompEventProps from './components/NgdFuncCompEventProps';
import NgdClassCompEventProps from './components/NgdClassCompEventProps';
import NgdClassCompEventState from './components/NgdClassCompEventState';
import NgdClassCompEventPostData from './components/NgdClassCompEventPostData';

 class NgdApp extends Component {
  constructor(props){
    super(props);
    this.state={
      ngdNoiDung:"chua co gi"
    }
  }
  //Ham su li su kien khi components com chuyen du lieu len
  ngdHandleDataToApp=(content)=>{
    alert(content);
  }
  render() {
    return (
      <div className='container border mt-3'>
        <h1 className='texr-center alert alert-info my-2'>K23cnt3-Nguyen Gia Duy-event end form</h1>
        <hr/>
        <div>
          <h2>Class components -ebent</h2>
          <NgdClassCompEvent1/>
        </div>
        <hr/>
        <div>
          <h2> function components event props</h2>
          <NgdFuncCompEventProps ngdRenderName="Nguyen Gia Duy"/>
        </div>
        <hr/>
        <div>
          <h2>class Components -evnet</h2>
          <NgdClassCompEventProps ngdRenderTitle="welcome to duy"/>
        </div>
        <hr/>
        <div>
          <h2>class Components -evnet-state</h2>
          <NgdClassCompEventState/>
        </div>
        <hr/>
        <div>
          <h1>{this.state.ngdNoiDung}</h1>
          <h2>class Components -evnet-Post Data to App</h2>
          <NgdClassCompEventPostData onNgdDataToApp={this.ngdHandleDataToApp}/>
        </div>
        <hr/>
        <div>
          <h2>Function Components -evnet</h2>
        </div>
        <NgdFuncCompEvent1/>
      </div>
    );
  }
}
export default NgdApp;