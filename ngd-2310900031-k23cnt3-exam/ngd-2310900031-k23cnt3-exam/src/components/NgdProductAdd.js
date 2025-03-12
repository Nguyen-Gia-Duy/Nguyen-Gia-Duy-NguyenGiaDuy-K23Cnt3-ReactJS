

import React, { useState } from "react";

const NgdProductAdd = ({ addProduct }) => {
  const [newProduct, setNewProduct] = useState({ ngdpid: "", ngdpname: "", ngdpquantity: "", ngdpprice: "" });

  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newProduct.ngdpid && newProduct.ngdpname && newProduct.ngdpquantity && newProduct.ngdpprice) {
      addProduct(newProduct);
      setNewProduct({ ngdpid: "", ngdpname: "", ngdpquantity: "", ngdpprice: "" });
    }
  };

  return (
    <div className="card p-3 mt-3">
      <h2>Thêm Sản Phẩm</h2>
      <form onSubmit={handleSubmit} className="d-flex gap-2">
        <input type="text" className="form-control" name="ngdpid" placeholder="ID" value={newProduct.ngdpid} onChange={handleChange} required />
        <input type="text" className="form-control" name="ngdpname" placeholder="Tên Sản Phẩm" value={newProduct.ngdpname} onChange={handleChange} required />
        <input type="number" className="form-control" name="ngdpquantity" placeholder="Số Lượng" value={newProduct.ngdpquantity} onChange={handleChange} required />
        <input type="number" className="form-control" name="ngdpprice" placeholder="Giá" value={newProduct.ngdpprice} onChange={handleChange} required />
        <button type="submit" className="btn btn-primary">Thêm</button>
      </form>
    </div>
  );
};

export default NgdProductAdd;