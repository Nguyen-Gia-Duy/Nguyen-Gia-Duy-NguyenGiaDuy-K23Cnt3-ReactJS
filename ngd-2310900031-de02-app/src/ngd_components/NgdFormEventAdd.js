import React,  {useState} from 'react'

export default function NgdFormUser({onNgdAddNew}) {
    const [ngdEventId,setngdEventId]= useState('')
    const [ngdEventName,setngdEventName]= useState('')
    const [ngdEventAdd,setngdEventAdd]= useState('')
    const [ngdEventDate,setngdEventDate]= useState('')
   

    

    

    const ngdHandleSubmit=(event)=>{
        event.preventDefault();
        console.log(ngdEventId,ngdEventName,ngdEventAdd,ngdEventDate)
        onNgdAddNew({ngdEventId,ngdEventName,ngdEventAdd,ngdEventDate})
    }
  return (
    <div>
        <form>
            <p>ID 
                <input type='text' name='ngdEventId' value={ngdEventId} onChange={(ev)=>setngdEventId(ev.target.value)}/>
            </p>
            <p>Ten su kien
                <input type='text' name='ngdEventName' value={ngdEventName} onChange={(ev)=>setngdEventName(ev.target.value)}/>
            </p>
            <p>Su kien
                <input type='text' name='ngdEventAdd' value={ngdEventAdd} onChange={(ev)=>setngdEventAdd(ev.target.value)}/>
            </p>
            <p>Ngay 
                <input type='date' name='ngdEventDate' value={ngdEventDate} onChange={(ev)=>setngdEventDate(ev.target.value)}/>
            </p>
          
            <p>
                <button name='ngdSave' onClick={ngdHandleSubmit}>Save</button>
            </p>
        </form>
    </div>
  )
}
