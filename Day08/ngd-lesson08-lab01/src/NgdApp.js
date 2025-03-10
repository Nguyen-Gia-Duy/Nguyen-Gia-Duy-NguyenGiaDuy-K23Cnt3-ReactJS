import React, { Component } from 'react';
import NgdControl from './components/NgdControl';
import NgdStudentList from './components/NgdStudentList';
import NgdForm from './components/NgdForm';
import NgdStudentDetail from './components/NgdStudentDetail';

class NgdApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ngdStudents: [
        { ngdID: "SV001", ngdStudentName: "Nguyễn Gia Duy", ngdAge: 19, ngdGender: "Nam", ngdBirthday: "08/02/2005", ngdBirthPlace: "HN", ngdAddress: "Gia Lâm" },
        { ngdID: "SV002", ngdStudentName: "Nguyen Van A", ngdAge: 19, ngdGender: "Nam", ngdBirthday: "01/12/2005", ngdBirthPlace: "QN", ngdAddress: "Yên Xá" },
        { ngdID: "SV003", ngdStudentName: "Nguyuyen Thi B", ngdAge: 19, ngdGender: "Nam", ngdBirthday: "07/12/2005", ngdBirthPlace: "HD", ngdAddress: "Hải Dương" },
        { ngdID: "SV004", ngdStudentName: "Nguyễn Huy Anh", ngdAge: 20, ngdGender: "Nam", ngdBirthday: "43/02/2005", ngdBirthPlace: "HD", ngdAddress: "Yên Xá" },
        { ngdID: "SV005", ngdStudentName: "Trần Thái Linh", ngdAge: 20, ngdGender: "Nữ", ngdBirthday: "12/01/2005", ngdBirthPlace: "HCM", ngdAddress: "Long Thành" }
      ],
      filteredStudents: [],
      selectedStudent: null,
      showDetail: false,
      isAddingNew: false,
      searchKeyword: ''
    };
  }

  componentDidMount() {
    this.setState({ filteredStudents: this.state.ngdStudents });
  }

  // 🔎 Xử lý tìm kiếm sinh viên theo tên
  onNgdHandleSearch = (keyword) => {
    this.setState({ searchKeyword: keyword }, this.filterStudents);
  };

  // Hàm lọc danh sách sinh viên dựa vào từ khóa tìm kiếm
  filterStudents = () => {
    const { ngdStudents, searchKeyword } = this.state;
    const filtered = ngdStudents.filter(student =>
      student.ngdStudentName.toLowerCase().includes(searchKeyword.toLowerCase())
    );
    this.setState({ filteredStudents: filtered });
  };

  // 🔎 Xử lý khi bấm "Xem"
  onNgdHandleView = (ngdStudent) => {
    this.setState({
      selectedStudent: ngdStudent,
      showDetail: true,
      isAddingNew: false
    });
  };

  // ❌ Xử lý khi bấm "Đóng"
  onNgdHandleCloseDetail = () => {
    this.setState({ showDetail: false });
  };

  // ✏️ Xử lý khi bấm "Sửa"
  onNgdHandleEdit = (ngdStudent) => {
    this.setState({ selectedStudent: ngdStudent, showDetail: false, isAddingNew: false });
  };

  // 🗑 Xử lý khi bấm "Xóa"
  onNgdHandleDelete = (studentID) => {
    this.setState(prevState => {
      const updatedStudents = prevState.ngdStudents.filter(student => student.ngdID !== studentID);
      return { ngdStudents: updatedStudents, showDetail: false };
    }, this.filterStudents);
  };

  // ✅ Cập nhật sinh viên sau khi chỉnh sửa
  onNgdHandleUpdate = (updatedStudent) => {
    this.setState(prevState => {
      const updatedStudents = prevState.ngdStudents.map(student =>
        student.ngdID === updatedStudent.ngdID ? updatedStudent : student
      );
      return { ngdStudents: updatedStudents, selectedStudent: null, isAddingNew: false };
    }, this.filterStudents);
  };

  // 🆕 Xử lý khi bấm "Thêm mới"
  onNgdHandleAddNew = () => {
    this.setState({
      selectedStudent: null,
      showDetail: false,
      isAddingNew: true
    });
  };

  // 🆕 Xử lý khi lưu sinh viên mới
  onNgdHandleSaveNew = (newStudent) => {
    this.setState(prevState => ({
      ngdStudents: [...prevState.ngdStudents, newStudent],
      selectedStudent: null,
      isAddingNew: false
    }), this.filterStudents);
  };

  render() {
    return (
      <div>
        <h1 className='text-center '>Nguyen Gia Duy - K23CNT3 - Mini Project</h1>
        <section className='container-fluid mt-3'>
          <div className="row">
            <div className="col-lg-7 grid-margin stretch-card">
              <div className="card">
                <NgdControl
                  onNgdHandleAddNew={this.onNgdHandleAddNew}
                  onNgdHandleSearch={this.onNgdHandleSearch}
                />
                <NgdStudentList
                  renderNgdStudents={this.state.filteredStudents}
                  onNgdHandleView={this.onNgdHandleView}
                  onNgdHandleEdit={this.onNgdHandleEdit}
                  onNgdHandleDelete={this.onNgdHandleDelete}
                />
              </div>
            </div>

            <div className="col-5 grid-margin">
              {this.state.showDetail ? (
                <NgdStudentDetail
                  student={this.state.selectedStudent}
                  onClose={this.onNgdHandleCloseDetail}
                />
              ) : (
                <NgdForm
                  renderNgdStudent={this.state.selectedStudent}
                  onNgdHandleUpdate={this.onNgdHandleUpdate}
                  onNgdHandleSaveNew={this.onNgdHandleSaveNew}
                  isAddingNew={this.state.isAddingNew}
                />
              )}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default NgdApp;