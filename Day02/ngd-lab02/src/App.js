import logo from './logo.svg';
import './App.css';
import NgdComplnfor from './components/NgdComplnfor';
function App() {
  return (
    <div className="App">
     <h1> Nguyen Gia Duy-K23CNT3-REACTJS</h1>
     <hr/>
     {/* Su dung component NgdComplnfor*/}
     <NgdComplnfor />
     <NgdComplnfor HoVaTen="Nguyen Gia Duy" MaSV="2310900031" NgaySinh="08/02/2005" DienThoai="0867740789" TenLop="K23Cnt3"/>
    </div>
  );
}

export default App;
