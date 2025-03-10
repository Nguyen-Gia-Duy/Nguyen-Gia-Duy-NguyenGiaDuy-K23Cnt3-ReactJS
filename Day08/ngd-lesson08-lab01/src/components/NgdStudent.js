import React, { Component } from 'react';

export default class NgdStudent extends Component {
  render() {
    let { renderNgdStudent, ngdIndex, onNgdHandleView, onNgdHandleEdit, onNgdHandleDelete } = this.props;

    return (
      <tr>
        <td>{ngdIndex}</td>
        <td>{renderNgdStudent.ngdID}</td>
        <td>{renderNgdStudent.ngdStudentName}</td>
        <td>{renderNgdStudent.ngdAge}</td>
        <td>{renderNgdStudent.ngdGender}</td>
        <td>
          <button className="btn btn-info btn-sm me-2" onClick={() => onNgdHandleView(renderNgdStudent)}>Xem</button>
          <button className="btn btn-warning btn-sm me-2" onClick={() => onNgdHandleEdit(renderNgdStudent)}>Sửa</button>
          <button className="btn btn-danger btn-sm" onClick={() => onNgdHandleDelete(renderNgdStudent.ngdID)}>Xóa</button>
        </td>
      </tr>
    );
  }
}