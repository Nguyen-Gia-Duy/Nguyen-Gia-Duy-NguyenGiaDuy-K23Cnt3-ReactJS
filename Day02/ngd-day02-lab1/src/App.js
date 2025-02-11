import logo from './logo.svg';
import './App.css';
import NgdCompA from './components/NgdCompA';
function App() {
  return (
    <div className="App">
     <h1> Nguyen Gia Duy-K23CNT3-REACTJS</h1>
     <hr/>
     {/* Su dung component NgdCompA*/}
     <NgdCompA />
     <NgdCompA ngd-name="Nguyen Gia Duy" ngd-address="25 Vu ngoc phan"/>
    </div>
  );
}

export default App;
