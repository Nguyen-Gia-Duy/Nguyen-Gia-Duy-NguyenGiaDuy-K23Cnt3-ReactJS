import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

export default function NgdFormEventEdit() {
    // State để lưu thông tin event
    const [event, setEvent] = useState({
        ngdEventName: '',
        ngdEventAdd: '',
        ngdEventDate: '',
        ngdStatus1: false,
        ngdStatus2: true
    });

    const navigate = useNavigate();  // Dùng để chuyển hướng sau khi cập nhật
    const { id } = useParams();  // Lấy ID từ URL
    const ngdApiOnline = "https://67d8e29400348dd3e2a887ee.mockapi.io/ngdApi/2310900031/ngdEvent";

    // Lấy thông tin Event từ API khi component load
    useEffect(() => {
        axios.get(`${ngdApiOnline}/${id}`)
            .then(response => setEvent(response.data))
            .catch(error => console.log("Lỗi khi lấy dữ liệu:", error.message));
    }, [id]);

    // Cập nhật state khi nhập dữ liệu vào form
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setEvent({
            ...event,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    // Gửi request cập nhật event
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`${ngdApiOnline}/${id}`, event)
            .then(() => {
                alert("Cập nhật thành công!");
                navigate('/list-event');  // Quay lại danh sách event
            })
            .catch(error => console.log("Lỗi khi cập nhật:", error.message));
    };

    return (
        <div className="container mt-4">
            <h2>Chỉnh sửa người dùng</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label"> Tên</label>
                    <input type="text" name="ngdEventName" value={event.ngdEventName} onChange={handleChange} className="form-control" required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Add</label>
                    <input type="text" name="ngdEventAdd" value={event.ngdEventAdd} onChange={handleChange} className="form-control" required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Date</label>
                    <input type="date" name="ngdEventDate" value={event.ngdEventDate} onChange={handleChange} className="form-control" required />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" name="ngdStatus1" checked={event.ngdStatus1} onChange={handleChange} className="form-check-input" />
                    <label className="form-check-label">Hoạt động</label>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" name="ngdStatus2" checked={event.ngdStatus2} onChange={handleChange} className="form-check-input" />
                    <label className="form-check-label">Khóa</label>
                </div>

                <button type="submit" className="btn btn-primary">Lưu thay đổi</button>
                <button type="button" className="btn btn-secondary ms-2" onClick={() => navigate('/list-event')}>Hủy</button>
            </form>
        </div>
    );
}
