import React, { Component } from "react";
import NgdStudent from "./NgdStudent";

class NgdStudentList extends Component {
    constructor(props){
        super(props);

    }
        // Hàm xử lý sự kiện xêm
    ngdHandleView = (ngdStudent)=>{
        // Chuyển dữ liệu lên TvcApp
        this.props.onNgdHandleView(ngdStudent);
    }


  render() {
    // lấy dữ liệu trong props từ TvcApp chuyển xuống
    let {renderNgdStudents} = this.props;
    console.log("List:",renderNgdStudents);
    
    // chuyển dữ liệu vào TvcStudent để hiển thị
    let ngdElementStudent = renderNgdStudents.map((ngdItem,index)=>{
        return <NgdStudent key={index} renderNgdStudent={ngdItem} onNgdHandleView={this.ngdHandleView} />
    })
    return (
      <div className="card-body">
        <h3 className="card-title">Danh sách sinh viên</h3>
        <div className="table-responsive pt-3">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>#</th>
                <th>Mã sinh viên</th>
                <th>Tên sinh viên</th>
                <th>Tuổi</th>
                <th>Giới tính</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>

             {ngdElementStudent}
              
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default NgdStudentList;