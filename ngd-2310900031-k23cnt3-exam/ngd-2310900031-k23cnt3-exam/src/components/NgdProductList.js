import React, { useState } from "react";

const NgdProductList = ({ products, removeProduct, updateProduct }) => {
  const [editProductId, setEditProductId] = useState(null);
  const [updatedInfo, setUpdatedInfo] = useState({ ngdpname: "", ngdpquantity: "", ngdpprice: "" });

  // Bắt đầu chỉnh sửa
  const handleEdit = (product) => {
    setEditProductId(product.ngdpid);
    setUpdatedInfo({ ngdpname: product.ngdpname, ngdpquantity: product.ngdpquantity, ngdpprice: product.ngdpprice });
  };

  // Lưu thông tin sau khi chỉnh sửa
  const handleUpdate = () => {
    updateProduct({ ngdpid: editProductId, ...updatedInfo });
    setEditProductId(null); // Đóng chế độ chỉnh sửa
  };

  return (
    <div className="card p-3 mt-3">
      <h2 className="text-secondary">Danh sách Sản Phẩm</h2>
      <ul className="list-group">
        {products.map((product) => (
          <li key={product.ngdpid} className="list-group-item d-flex justify-content-between align-items-center">
            {editProductId === product.ngdpid ? (
              // Hiển thị form chỉnh sửa
              <>
                <input type="text" className="form-control me-2" value={updatedInfo.ngdpname} onChange={(e) => setUpdatedInfo({ ...updatedInfo, ngdpname: e.target.value })} />
                <input type="number" className="form-control me-2" value={updatedInfo.ngdpquantity} onChange={(e) => setUpdatedInfo({ ...updatedInfo, ngdpquantity: e.target.value })} />
                <input type="number" className="form-control me-2" value={updatedInfo.ngdpprice} onChange={(e) => setUpdatedInfo({ ...updatedInfo, ngdpprice: e.target.value })} />
                <button className="btn btn-success me-2" onClick={handleUpdate}>Lưu</button>
                <button className="btn btn-secondary" onClick={() => setEditProductId(null)}>Hủy</button>
              </>
            ) : (
              // Hiển thị thông tin sản phẩm
              <>
                {product.ngdpname} - Số lượng: {product.ngdpquantity} - Giá: {product.ngdpprice}đ
                <div className="d-flex gap-1">
                  <button className="btn btn-warning me-2" onClick={() => handleEdit(product)}>Sửa</button>
                  <button className="btn btn-danger" onClick={() => removeProduct(product.ngdpid)}>Xóa</button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NgdProductList;