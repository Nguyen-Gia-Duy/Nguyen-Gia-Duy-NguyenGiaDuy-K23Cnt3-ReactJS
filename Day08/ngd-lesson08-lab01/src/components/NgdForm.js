import React, { Component } from 'react';

export default class NgdForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ngdID: '',
      ngdStudentName: '',
      ngdAge: '',
      ngdGender: 'Nam',
      ngdBirthday: '',
      ngdBirthPlace: 'HN',
      ngdAddress: ''
    };
  }

  // Cập nhật form khi nhận dữ liệu từ props
  componentDidUpdate(prevProps) {
    if (prevProps.renderNgdStudent !== this.props.renderNgdStudent) {
      if (this.props.renderNgdStudent) {
        this.setState({ ...this.props.renderNgdStudent });
      } else {
        // Nếu đang ở chế độ "Thêm mới", reset form
        this.setState({
          ngdID: '',
          ngdStudentName: '',
          ngdAge: '',
          ngdGender: 'Nam',
          ngdBirthday: '',
          ngdBirthPlace: 'HN',
          ngdAddress: ''
        });
      }
    }
  }

  // Xử lý thay đổi dữ liệu input
  handleChange = (event) => {
    let { name, value } = event.target;
    this.setState({ [name]: value });
  };

  // Gửi dữ liệu khi nhấn "Lưu"
  handleSubmit = (event) => {
    event.preventDefault();
    const { ngdID, ...otherState } = this.state;

    if (!ngdID || ngdID.trim() === "") {
        alert("Vui lòng nhập mã sinh viên (ngdID).");
        return;
    }

    if (this.props.isAddingNew) {
        this.props.onNgdHandleSaveNew({ ngdID, ...otherState });
    } else {
        this.props.onNgdHandleUpdate({ ngdID, ...otherState });
    }
  };

  render() {
    return (
      <div className="card ">
        <div className="card-body ">
          <h3 className="card-title">{this.props.isAddingNew ? "Thêm sinh viên mới" : "Chỉnh sửa thông tin"}</h3>
          <form onSubmit={this.handleSubmit}>

            {/* Nhập mã sinh viên khi thêm mới */}
            {this.props.isAddingNew && (
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Mã sinh viên</label>
                <div className="col-sm-9">
                  <input type="text" className="form-control" name="ngdID" value={this.state.ngdID} onChange={this.handleChange} required />
                </div>
              </div>
            )}

            {/* Hiển thị mã sinh viên nhưng không cho sửa khi chỉnh sửa */}
            {!this.props.isAddingNew && (
              <div className="form-group row ">
                <label className="col-sm-3 col-form-label">Mã sinh viên</label>
                <div className="col-sm-9">
                  <input type="text" className="form-control" name="ngdID" value={this.state.ngdID} readOnly />
                </div>
              </div>
            )}

            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Tên sinh viên</label>
              <div className="col-sm-9">
                <input type="text" className="form-control" name="ngdStudentName" value={this.state.ngdStudentName} onChange={this.handleChange} required />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Tuổi</label>
              <div className="col-sm-9">
                <input type="number" className="form-control" name="ngdAge" value={this.state.ngdAge} onChange={this.handleChange} required />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Giới tính</label>
              <div className="col-sm-9">
                <select className="form-control" name="ngdGender" value={this.state.ngdGender} onChange={this.handleChange}>
                  <option>Nam</option>
                  <option>Nữ</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Ngày sinh</label>
              <div className="col-sm-9">
                <input type="date" className="form-control" name="ngdBirthday" value={this.state.ngdBirthday} onChange={this.handleChange} required />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Nơi sinh</label>
              <div className="col-sm-9">
                <select className="form-control" name="ngdBirthPlace" value={this.state.ngdBirthPlace} onChange={this.handleChange}>
                  <option value="HN">Hà Nội</option>
                  <option value="TpHCM">TP. Hồ Chí Minh</option>
                  <option value="ĐN">Đà Nẵng</option>
                  <option value="QN">Quảng Ninh</option>
                  <option value="HD">Hải Dương</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Địa chỉ</label>
              <div className="col-sm-9">
                <textarea className="form-control" name="ngdAddress" value={this.state.ngdAddress} onChange={this.handleChange} required />
              </div>
            </div>
            <button type="submit" className="btn btn-primary me-2">{this.props.isAddingNew ? "Thêm" : "Lưu"}</button>
          </form>
        </div>
      </div>
    );
  }
}