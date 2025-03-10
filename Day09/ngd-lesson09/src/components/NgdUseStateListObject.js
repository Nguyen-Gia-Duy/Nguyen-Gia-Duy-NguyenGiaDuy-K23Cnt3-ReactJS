import React, { useState } from "react";

const NgdUseStateListObject = () => {
  const [students, setStudents] = useState([
    { id: "SV001", name: "Nguyen Gia Duy", age: 20, class: "K23CNT3" },
    { id: "SV002", name: "Nguyễn Van A", age: 22, class: "K23CNT4" },
    { id: "SV003", name: "Nguyễn Thi B", age: 21, class: "K23CNT1" },
    { id: "SV004", name: "Nguyễn Anh C", age: 19, class: "K23CNT2" }
  ]);

  const [editingStudent, setEditingStudent] = useState(null);
  const [formData, setFormData] = useState({ id: "", name: "", age: "", class: "" });

  const handleDelete = (id) => {
    setStudents(students.filter(student => student.id !== id));
  };

  const handleEdit = (student) => {
    setEditingStudent(student.id);
    setFormData({ ...student });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    setStudents(students.map(student => 
      student.id === editingStudent ? { ...formData } : student
    ));
    setEditingStudent(null);
  };

  return (
    <div>
      <h3>Danh sách sinh viên</h3>
      <table border="1" width="100%">
        <thead>
          <tr>
            <th>STT</th>
            <th>NgdID</th>
            <th>NgdName</th>
            <th>NgdAge</th>
            <th>NgdClass</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={student.id}>
              <td>{index + 1}</td>
              <td>{student.id}</td>
              <td>
                {editingStudent === student.id ? (
                  <input 
                    type="text" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                  />
                ) : (
                  student.name
                )}
              </td>
              <td>
                {editingStudent === student.id ? (
                  <input 
                    type="number" 
                    name="age" 
                    value={formData.age} 
                    onChange={handleChange} 
                  />
                ) : (
                  student.age
                )}
              </td>
              <td>
                {editingStudent === student.id ? (
                  <input 
                    type="text" 
                    name="class" 
                    value={formData.class} 
                    onChange={handleChange} 
                  />
                ) : (
                  student.class
                )}
              </td>
              <td>
                {editingStudent === student.id ? (
                  <button onClick={handleSave}>Lưu</button>
                ) : (
                  <>
                    <button onClick={() => handleEdit(student)}>Sửa</button>
                    <button onClick={() => handleDelete(student.id)}>Xóa</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NgdUseStateListObject;
