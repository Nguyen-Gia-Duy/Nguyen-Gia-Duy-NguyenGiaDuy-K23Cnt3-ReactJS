import React from 'react'

export default function NgdJsxExpression () {
    //bien
    const name="Nguyen Gia Duy";
    const user={
        fistName:"Duy",
        lastNamee:"Nguyen"
    }
    //ham
    const fullName=(user)=>{
        return user.fistName+''+user.lastNamee;
    }
    //element
    const element=(
        <div>
            {/* bieu thuc jsx*/}
            <h2>{fullName(user)}</h2>
            <hr/>
            <h3>welcome to,{name}</h3>
        </div>
    );
    //ham
    const sayWelcome =(name)=>{
        if(name){
            return <h3> Welcome to, {name}</h3>
        }else{
            return <h3> Welcome to Fit-NTU</h3>
        }
    }
  return (
    <div>
        <h1>NGD-JSX Expression</h1>
        {/* su dung bien element */}
        {element}        
     <hr/>
        {sayWelcome()}
        <hr/>
        {sayWelcome("Nguyen Gia DUy")}
    </div>
  )
}
