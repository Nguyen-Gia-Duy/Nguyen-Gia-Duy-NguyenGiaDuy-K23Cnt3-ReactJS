import React from 'react';

const NgdStudentDetail = ({ student, onClose }) => {
    return (
        <div className="card">
            <div className="card-body">
                <h3 className="card-title">Thông tin chi tiết</h3>
                <p><strong>Mã sinh viên:</strong> {student.ngdID}</p>
                <p><strong>Họ tên:</strong> {student.ngdStudentName}</p>
                <p><strong>Tuổi:</strong> {student.ngdAge}</p>
                <p><strong>Giới tính:</strong> {student.ngdGender}</p>
                <p><strong>Ngày sinh:</strong> {student.ngdBirthday}</p>
                <p><strong>Nơi sinh:</strong> {student.ngdBirthPlace}</p>
                <p><strong>Địa chỉ:</strong> {student.ngdAddress}</p>
                <button className="btn btn-secondary" onClick={onClose}>Đóng</button>
            </div>
        </div>
    );
};

export default NgdStudentDetail;