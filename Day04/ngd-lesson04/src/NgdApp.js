import NgdClassComp from "./components/NgdClassComp";
import NgdFuncComp from "./components/NgdFuncComp";
import NgdFuncComp1 from "./components/NgdFuncComp1";



function NgdApp() {
  const user={
    fullname:'Adidaphat',
    age:'20',
    phone:'1234567890'
  }
  return (
    <div className="container border mt-3">
      <h1>Demo components-props-state</h1>
      <hr/>
      <div className='alert alert-danger'>
      <NgdFuncComp name="Nguyen Duy" address="25 vu ngoc phan" company="Devmaster"/>
      <hr/>
      <NgdFuncComp name="Mai di ngu" address="Ha noi" company="alibaba"/>
      </div>
      <div className='alert alert-info'>
        <NgdFuncComp1 renderInfo={user}/>
      </div>
        <NgdClassComp/>
        {/* Chuyen du lieu tu  NgdApp->NgdClassComp */}
        <NgdClassComp renderName="K23CNT3" renderUsers={user}/>
    </div>
  );
}

export default NgdApp;
