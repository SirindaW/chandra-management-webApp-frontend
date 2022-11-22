import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import Auth from './components/Auth/Auth.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import Event from './components/Event/Event.jsx';
import Reservation from './components/Reservation/Reservation.jsx';
import Housekeeping from './components/Housekeeping/Housekeeping.jsx';
import Guests from './components/Guests/Guests.jsx';

import { authUrl, dashboardUrl, eventUrl, reservationUrl, housekeepUrl, guestsUrl } from './constants/pathUrl.js';
import { useDispatch, useSelector } from 'react-redux';
import { AUTH } from './constants/actionTypes.js';

const App = () => {
   const dispatch = useDispatch();
   const { authData } = useSelector((state) => state.auth);
   const user = JSON.parse(localStorage.getItem('user'));
   const IsLogin = ({ comp }) => (authData ? comp : <Navigate to={authUrl} replace />);

   useEffect(() => {
      if (!authData) {
         dispatch({ type: AUTH, data: user });
      }
   }, [authData]);
   return (
      <BrowserRouter>
         <div className="w-full flex">
            {authData && <Sidebar />}
            <div className="w-full">
               {authData && <Navbar />}
               <Routes>
                  <Route path={authUrl} exact element={<Auth />} />

                  <Route path={dashboardUrl} exact element={<Dashboard />} />
                  <Route path={reservationUrl} exact element={<Reservation />} />
                  <Route path={eventUrl} exact element={<Event />} />
                  <Route path={housekeepUrl} exact element={<Housekeeping />} />
                  <Route path={guestsUrl} exact element={<Guests />} />

                  <Route path="*" element={<IsLogin comp={<Navigate to={dashboardUrl} replace />} />} />
               </Routes>
            </div>
         </div>
      </BrowserRouter>
   );
};

export default App;
