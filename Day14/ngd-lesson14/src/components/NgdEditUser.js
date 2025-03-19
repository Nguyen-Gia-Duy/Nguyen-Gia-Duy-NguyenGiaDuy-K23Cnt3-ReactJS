import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

export default function NgdEditUser() {
    // State để lưu thông tin user
    const [user, setUser] = useState({
        ngdFullName: '',
        ngdEmail: '',
        ngdPhone: '',
        ngdActive: false
    });

    const navigate = useNavigate();  // Dùng để chuyển hướng sau khi cập nhật
    const { id } = useParams();  // Lấy ID từ URL
    const ngdApiOnline = "https://67d8e29400348dd3e2a887ee.mockapi.io/K23CNT3_NguyenGiaDuy/ngd_users";

    // Lấy thông tin user từ API khi component load
    useEffect(() => {
        axios.get(`${ngdApiOnline}/${id}`)
            .then(response => setUser(response.data))
            .catch(error => console.log("Lỗi khi lấy dữ liệu:", error.message));
    }, [id]);

    // Cập nhật state khi nhập dữ liệu vào form
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setUser({
            ...user,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    // Gửi request cập nhật user
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`${ngdApiOnline}/${id}`, user)
            .then(() => {
                alert("Cập nhật thành công!");
                navigate('/list-user');  // Quay lại danh sách user
            })
            .catch(error => console.log("Lỗi khi cập nhật:", error.message));
    };

    return (
        <div className="container mt-4">
            <h2>Chỉnh sửa người dùng</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Họ và Tên</label>
                    <input type="text" name="ngdFullName" value={user.ngdFullName} onChange={handleChange} className="form-control" required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" name="ngdEmail" value={user.ngdEmail} onChange={handleChange} className="form-control" required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Số điện thoại</label>
                    <input type="text" name="ngdPhone" value={user.ngdPhone} onChange={handleChange} className="form-control" required />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" name="ngdActive" checked={user.ngdActive} onChange={handleChange} className="form-check-input" />
                    <label className="form-check-label">Hoạt động</label>
                </div>
                <button type="submit" className="btn btn-primary">Lưu thay đổi</button>
                <button type="button" className="btn btn-secondary ms-2" onClick={() => navigate('/list-user')}>Hủy</button>
            </form>
        </div>
    );
}
