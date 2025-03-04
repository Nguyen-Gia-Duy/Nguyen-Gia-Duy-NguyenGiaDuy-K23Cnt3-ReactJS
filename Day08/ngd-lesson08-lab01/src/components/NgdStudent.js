import React, { Component } from "react";

class NgdStudent extends Component {
    constructor(props){
        super(props);
    }

    // Hàm xử lý chức năng xem
    ngdHandleView = (ngdStudent)=>{
        // Chuyển lên TvcStudentList
        this.props.onNgdHandleView(ngdStudent);
    }
  render() {
    // lấy đối tượng dữ liệu chuyển từ TvcStudentList
    let {renderNgdStudent, key} = this.props;
    console.log("Student:",renderNgdStudent);
    
    return (
      <>
        <tr>
          <td>{key}</td>
          <td>{renderNgdStudent.ngdId}</td>
          <td>{renderNgdStudent.ngdStudentName}</td>
          <td>{renderNgdStudent.ngdAge}</td>
          <td>{renderNgdStudent.ngdGender}</td>
          <td>
            <div className="template-demo">
              <button type="button" className="btn btn-danger btn-icon-text" 
                    onClick={()=>this.ngdHandleView(renderNgdStudent)}
                    >
                Xem
              </button>
              <button type="button" className="btn btn-warning btn-icon-text">
                Sửa
              </button>
              <button type="button" className="btn btn-success btn-icon-text">
                Xóa
              </button>
            </div>
          </td>
        </tr>
      </>
    );
  }
}

export default NgdStudent;