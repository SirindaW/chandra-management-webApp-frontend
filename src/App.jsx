import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import Auth from './components/Auth/Auth.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import Calendar from './components/Calendar/Calendar.jsx';
import Reservation from './components/Reservation/Reservation.jsx';
import Housekeeping from './components/Housekeeping/Housekeeping.jsx';
import Rates from './components/Rates/Rates.jsx';
import Guests from './components/Guests/Guests.jsx';

import { authUrl, dashboardUrl, calendarUrl, reservationUrl, housekeepUrl, ratesUrl, guestsUrl } from './constants/pathUrl.js';

const App = () => {
  // const user = JSON.parse(localStorage.getItem('user'));
  const user = true; 
  const [activeMenu, setActiveMenu] = useState(true);
  const IsLogin = ({ comp }) => (user ? comp : <Navigate to={authUrl} replace />);
  
  return (
    <BrowserRouter>
        <div className="w-full flex">
            {(user && activeMenu) && (
              <Sidebar />
            )}
            <div className="w-full">
              {user && <Navbar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />}
              <Routes>
                  <Route path={authUrl} exact element={!user ? <Auth /> : <Navigate to={dashboardUrl} replace />} />

                  <Route path={dashboardUrl} exact element={<IsLogin comp={<Dashboard />}/>} />
                  <Route path={calendarUrl} exact element={<IsLogin comp={<Calendar />}/>} />
                  <Route path={reservationUrl} exact element={<IsLogin comp={<Reservation />}/>} />
                  <Route path={housekeepUrl} exact element={<IsLogin comp={<Housekeeping />}/>} />
                  <Route path={ratesUrl} exact element={<IsLogin comp={<Rates />}/>} />
                  <Route path={guestsUrl} exact element={<IsLogin comp={<Guests />}/>} />
                  
                  <Route
                      path="*"
                      element={<IsLogin comp={<Navigate to={dashboardUrl} replace />}/>}
                  />
              </Routes>
            </div>
        </div>
    </BrowserRouter>
  );
}

export default App;
