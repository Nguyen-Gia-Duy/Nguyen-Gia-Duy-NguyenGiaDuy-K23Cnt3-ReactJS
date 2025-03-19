import React,  {useState} from 'react'

export default function NgdFormUser({onNgdAddNew}) {
    const [ngdId,setngdId]= useState('')
    const [ngdFullName,setngdFullName]= useState('')
    const [ngdEmail,setngdEmail]= useState('')
    const [ngdPhone,setngdPhone]= useState('')

    

    

    const ngdHandleSubmit=(event)=>{
        event.preventDefault();
        console.log(ngdId,ngdFullName,ngdEmail,ngdPhone)
        onNgdAddNew({ngdId,ngdFullName,ngdEmail,ngdPhone})
    }
  return (
    <div>
        <form>
            <p>ID User: 
                <input type='text' name='ngdId' value={ngdId} onChange={(ev)=>setngdId(ev.target.value)}/>
            </p>
            <p>Họ và tên: : 
                <input type='text' name='ngdFullName' value={ngdFullName} onChange={(ev)=>setngdFullName(ev.target.value)}/>
            </p>
            <p>Email : 
                <input type='text' name='ngdEmail' value={ngdEmail} onChange={(ev)=>setngdEmail(ev.target.value)}/>
            </p>
            <p>Phone: 
                <input type='number' name='ngdPhone' value={ngdPhone} onChange={(ev)=>setngdPhone(ev.target.value)}/>
            </p>
            <p>
                <button name='ngdSave' onClick={ngdHandleSubmit}>Save</button>
            </p>
        </form>
    </div>
  )
}
