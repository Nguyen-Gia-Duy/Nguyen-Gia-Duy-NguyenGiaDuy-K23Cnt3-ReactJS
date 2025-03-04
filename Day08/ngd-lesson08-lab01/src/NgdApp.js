import React, { Component } from "react";
import NgdControl from "./components/NgdControl";
import NgdStudentList from "./components/NgdStudentList";
import NgdForm from "./components/NgdForm";

class NgdApp extends Component {
  constructor(props){
    super(props);
    this.state = {
      ngdStudents:[
        {ngdId:"SV001",ngdStudentName:"Nguyen Gia Duy",ngdAge:20,ngdGender:"Nam",ngdBirthday:"25/05/1979",ngdBirthPlace:"HN", ngdAddress:"Viet Nam, HaNoi"},
        {ngdId:"SV002",ngdStudentName:"Nguyen Van A",ngdAge:18,ngdGender:"Nữ",ngdBirthday:"25/05/1179",ngdBirthPlace:"HP", ngdAddress:"Trung quốc"},
        {ngdId:"SV003",ngdStudentName:"Nguyen Thi B",ngdAge:51,ngdGender:"Nam",ngdBirthday:"25/05/1079",ngdBirthPlace:"TpHCM", ngdAddress:"Trung Quốc"},
        {ngdId:"SV004",ngdStudentName:"Nguyen Duy Anh",ngdAge:26,ngdGender:"Nam",ngdBirthday:"25/05/1079",ngdBirthPlace:"TpHCM", ngdAddress:"Hồ chí minh"},
      ],
      ngdStudent:"",

    }
  }

  // Hàm xử lý sự kiện view Student
  ngdHandleView = (ngdStudent)=>{
    this.setState({
      ngdStudent:ngdStudent,
    })
  }

  render() {
    // log
    console.log("View Student:", this.state.ngdStudent);
    
    return (
      <div>
        <h1 className="text-center">
          Nguyen Gia Duy - K23CNT3 - Mini Project1
        </h1>
        <section className="container-fluid mt-3">
          <div className="row">

            <div className="col-lg-7 grid-margin stretch-card">
              <div className="card">

                {/* header */}
                <NgdControl  />
                {/* danh sách sinh vien  */}
                <NgdStudentList  renderNgdStudents={this.state.ngdStudents} onNgdHandleView={this.ngdHandleView}/>
              </div>
            </div>

            <div className="col-5 grid-margin">
              {/* form  */}
              <NgdForm  renderNgdStudent = {this.state.ngdStudent}/>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default NgdApp;