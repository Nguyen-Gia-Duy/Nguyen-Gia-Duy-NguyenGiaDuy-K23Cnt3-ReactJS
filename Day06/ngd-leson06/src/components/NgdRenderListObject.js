import React, { Component } from 'react'

 class NgdRenderListObject extends Component {
    constructor(props){
        super(props);
        this.state={
            ngdStudens:[
         {ngdId:1,ngdName:"Nguyen Duy",ngdAge:20},
         {ngdId:2,ngdName:"Nguyen Gia Duy",ngdAge:30},
         {ngdId:3,ngdName:"Nguyen Duy Khanh",ngdAge:40},
         {ngdId:4,ngdName:"Nguyen Duy Manh",ngdAge:50},
                ],
        }
    }
  render() {
    //Ham hien thi du lieu
    let {ngdStudens}=this.state;
    let ngdElement=ngdStudens.map((ngdItem)=>{
        return(
            <li>{ngdItem.ngdId}-{ngdItem.ngdName}</li>
        );
    })
    let ngdRenderElement= ngdStudens.map((ngdItem,index)=>{
        return(
            <tr>
            <td>{ngdItem.ngdId}</td>
            <td>{ngdItem.ngdName}</td>
            <td>{ngdItem.ngdAge}</td>
            <td>
                <button className='btn btn-success mx-1'>Sua</button>
                <button className='btn btn-primary mx-1'>Xoa</button>
            </td>
        </tr>
        )
    })
    return (
      <div>
        <h2>Danh sach sinh vien </h2>
        {ngdElement}
        <hr/>
        <h2> O tren xau--Su dung css</h2>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>ngdID</th>
                    <th>ngdName</th>
                    <th>ngdAge</th>
                    <th>ngdAction</th>
                </tr>
            </thead>
            <tbody>
            {ngdRenderElement}
            </tbody>
        </table>
      </div>
    );
  }
}
export default NgdRenderListObject;