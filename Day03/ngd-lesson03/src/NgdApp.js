import NgdcClassComp from "./components/NgdcClassComp";
import NgdFuncComp from "./components/NgdFuncComp";
import NgdJsxExpression from "./components/NgdJsxExpression";


function NgdApp() {
  return (
    <div className="container border mt-3 bg-white">
     <h1> ReactJS Lesson03-Nguyen Gia Duy</h1>
    <NgdJsxExpression/>
    <hr/>
    {/* Su dung function components */}
    <NgdFuncComp/>

    {/* su dug clas components */}
    <NgdcClassComp></NgdcClassComp>
    </div>
  );
}

export default NgdApp;
