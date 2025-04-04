import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { useState } from 'react';
import NgdNavBar from "./ngd_components/NgdNavBar";
import NgdHome from "./ngd_components/NgdHome";
import NgdListEvent from './ngd_components/NgdListEvent';
import NgdFormEventAdd from './ngd_components/NgdFormEventAdd';
import NgdFormEventEdit from './ngd_components/NgdFormEventEdit';

function NgdApp() {
  const [eventList, setEventList] = useState([]);

  const ngdHandleAddNewEvent = (eventData) => {
    setEventList([...eventList, eventData]);
    console.log("Đã thêm sự kiện mới:", eventData);
  };

  return (
    <div className="container border my-3">
      <h1>Nguyen Gia Duy - Mini Project</h1>
      <hr />

      <Router>
        <NgdNavBar />
        <Routes>
          <Route path='/' element={<NgdHome />} />
          <Route path='/list-event' element={<NgdListEvent />} />
          <Route
            path='/create-event'
            element={<NgdFormEventAdd onNgdAddNew={ngdHandleAddNewEvent} />}
          />
          <Route path='/edit-event/:id' element={<NgdFormEventEdit />} />
        </Routes>
      </Router>
    </div>
  );
}

export default NgdApp;
