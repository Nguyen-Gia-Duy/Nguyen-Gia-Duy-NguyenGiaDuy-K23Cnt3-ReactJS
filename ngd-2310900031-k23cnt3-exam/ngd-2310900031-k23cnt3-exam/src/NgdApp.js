import React, { useState } from "react";
import NgdProductList from "./components/NgdProductList";
import NgdProductAdd from "./components/NgdProductAdd";

const NgdApp = () => {
  const [products, setProducts] = useState([
    { ngdpid: "2310900031", ngdpname: "Nguyen Gia Duy", ngdpquantity: "10", ngdpprice: "1000000" },
    { ngdpid: "230002", ngdpname: "Điện thoại ", ngdpquantity: "20", ngdpprice: "800000" },
    { ngdpid: "230003", ngdpname: "Tai nghe ", ngdpquantity: "30", ngdpprice: "500000" },
  ]);

  // Thêm sản phẩm mới
  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  // Xóa sản phẩm
  const removeProduct = (ngdpid) => {
    setProducts(products.filter(product => product.ngdpid !== ngdpid));
  };

  // Cập nhật sản phẩm
  const updateProduct = (updatedProduct) => {
    setProducts(products.map(product => (product.ngdpid === updatedProduct.ngdpid ? updatedProduct : product)));
  };

  return (
    <div className="container mt-4">
      <h1 className="text-primary">Quản lý Sản Phẩm</h1>
      <NgdProductList products={products} removeProduct={removeProduct} updateProduct={updateProduct} />
      <NgdProductAdd addProduct={addProduct} />
    </div>
  );
};

export default NgdApp;