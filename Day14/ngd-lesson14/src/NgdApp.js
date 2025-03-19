import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import NgdNavNar from "./components/NgdNavNar";
import NgdHome from "./components/NgdHome";
import NgdListUser from './components/NgdListUser';
import NgdCreateUser from './components/NgdCreateUser';
import NgdEditUser from './components/NgdEditUser';
function NgdApp() {
 
  return (
    <div className="container border my-3">
     <h1>Nguyen Gia Duy-Mini Project</h1>
     <hr/>

     <Router>
      <NgdNavNar/>
      <Routes>
      <Route path='/' element = {<NgdHome/>}/>
      <Route path='/list-user' element = {<NgdListUser />}/>
      <Route path='/create-user' element = {<NgdCreateUser/>}/>
      <Route path='/edit-user/:id' element={<NgdEditUser />} /> {/* Sửa user động */}
      </Routes>
     </Router>
    </div>
  );
}

export default NgdApp;
