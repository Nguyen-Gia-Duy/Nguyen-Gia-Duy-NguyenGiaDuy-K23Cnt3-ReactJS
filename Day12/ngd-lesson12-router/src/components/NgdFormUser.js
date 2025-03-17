import React,  {useState} from 'react'

export default function NgdFormUser({onNgdAddNew}) {
    const [ngdId,setngdId]= useState('')
    const [ngdFullName,setngdFullName]= useState('')
    const [ngdUserName,setngdUserName]= useState('')
    const [ngdPass,setngdPass]= useState('')

    

    

    const ngdHandleSubmit=(event)=>{
        event.preventDefault();
        console.log(ngdId,ngdFullName,ngdUserName,ngdPass)
        onNgdAddNew({ngdId,ngdFullName,ngdUserName,ngdPass})
    }
  return (
    <div>
        <form>
            <p>Mã sinh viên: 
                <input type='text' name='ngdId' value={ngdId} onChange={(ev)=>setngdId(ev.target.value)}/>
            </p>
            <p>Họ và tên: : 
                <input type='text' name='ngdFullName' value={ngdFullName} onChange={(ev)=>setngdFullName(ev.target.value)}/>
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
