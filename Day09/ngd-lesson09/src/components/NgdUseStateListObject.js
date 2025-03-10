import React, { useState } from "react";

const NgdUseStateListObject = () => {
  const [students, setStudents] = useState([
    { id: "SV001", name: "Nguyen Gia Duy", age: 20, class: "K23CNT3" },
    { id: "SV002", name: "Nguyễn Van A", age: 22, class: "K23CNT4" },
    { id: "SV003", name: "Nguyễn Thi B", age: 21, class: "K23CNT1" },
    { id: "SV004", name: "Nguyễn Anh C", age: 19, class: "K23CNT2" }
  ]);

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
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.class}</td>
              <td>
                <button>Sửa</button>
                <button>Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NgdUseStateListObject;