import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Home from './components/Home/Home.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Auth from './components/Auth/Auth.jsx';
import { homeUrl, authUrl } from './constants/pathUrl.js';

const App = () => {
  // const user = JSON.parse(localStorage.getItem('user'));
  const user = true; 
  const IsLogin = ({ comp }) => (user ? comp : <Navigate to={authUrl} replace />);
  
  return (
    <BrowserRouter>
        <div className="w-full">
            {user && <Navbar />}
            <Routes>
                <Route path={authUrl} exact element={<Auth />} />
                <Route path={homeUrl} exact element={<IsLogin comp={<Home />}/>} />
                <Route
                    path="*"
                    element={<IsLogin comp={<Navigate to={homeUrl} replace />}/>}
                />
            </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
