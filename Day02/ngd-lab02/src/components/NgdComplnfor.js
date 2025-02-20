import React, { Component } from 'react'

export default class  extends Component {
constructor(props){
    super(props);
    this.state ={
        name:" Nguyen Gia Duy",
    };
}

  render() {
    return (
      <div>
        <h2>Thong tin sinh vien</h2>
        <p>Ho va Ten: {this.props.HoVaTen}</p>
        <p>Ma Sinh Vien:{this.props.MaSV}</p>
        <p>Ngày sinh:{this.props.NgaySinh}</p>
        <p>Điện thoại:{this.props.DienThoai}</p>
        <p>Ten Lop:{this.props.TenLop}</p>
        </div>
    )
  }
}
