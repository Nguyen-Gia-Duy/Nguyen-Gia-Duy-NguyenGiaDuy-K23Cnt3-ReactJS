import React, { Component } from 'react';
import NgdStudent from './NgdStudent';

export default class NgdStudentList extends Component {
  render() {
    let { renderNgdStudents, onNgdHandleView, onNgdHandleEdit, onNgdHandleDelete } = this.props;

    return (
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>STT</th>
            <th>Mã SV</th>
            <th>Họ tên</th>
            <th>Tuổi</th>
            <th>Giới tính</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {renderNgdStudents.map((student, index) => (
            <NgdStudent
              key={student.ngdID}
              ngdIndex={index + 1}
              renderNgdStudent={student}
              onNgdHandleView={onNgdHandleView}
              onNgdHandleEdit={onNgdHandleEdit}
              onNgdHandleDelete={onNgdHandleDelete}
            />
          ))}
        </tbody>
      </table>
    );
  }
}