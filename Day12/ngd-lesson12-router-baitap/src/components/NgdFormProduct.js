import React,  {useState} from 'react'

export default function NgdFormProduct({onNgdAddProduct}) {
    const [ngdId,setngdId]= useState('')
    const [ngdTenSanPham,setngdTenSanPham]= useState('')
    const [ngdUserName,setngdUserName]= useState('')
    const [ngdPass,setngdPass]= useState('')

    const ngdHandleSubmit=(event)=>{
        event.preventDefault();
        console.log(ngdId,ngdTenSanPham,ngdUserName,ngdPass)
        onNgdAddProduct({ngdId,ngdTenSanPham,ngdUserName,ngdPass})
    }
  return (
    <div>
        <form>
            <p>Mã san pham: 
                <input type='text' name='ngdId' value={ngdId} onChange={(ev)=>setngdId(ev.target.value)}/>
            </p>
            <p>Ten san pham : 
                <input type='text' name='ngdTenSanPham' value={ngdTenSanPham} onChange={(ev)=>setngdTenSanPham(ev.target.value)}/>
            </p>
            <p>Tài khoản: 
                <input type='text' name='ngdUserName' value={ngdUserName} onChange={(ev)=>setngdUserName(ev.target.value)}/>
            </p>
            <p>Mật khẩu: 
                <input type='password' name='ngdPass' value={ngdPass} onChange={(ev)=>setngdPass(ev.target.value)}/>
            </p>
            <p>
                <button name='ngdSave' onClick={ngdHandleSubmit}>Save</button>
            </p>
        </form>
    </div>
  )
}
