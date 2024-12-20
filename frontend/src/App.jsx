import React, { useState } from 'react';
import ProtectRouter from "./protection_axios/ProtectRouter"
import ProtectLogin from "./protection_axios/ProtectLogin.jsx"
import { AuthProvider } from "./context_login_Register/AuthContext.jsx"
import { Register, Login, Dashboard, VerifyPsdEmail, ResetPassword } from "./pages"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navigate } from "react-router-dom";
import HomePage from './HomePage';
import Pve3d from './pve/Pve3d';
import Pvp2d from './pvp/Pvp2d';
import Pve2d from './pve/Pve2d';
import Pvp3d from './pvp/Pvp3d';
import Profile from './pages/Profile.jsx'
import SecurityProfile from './pages/SecurityProfile'
import SearchPage from './pages/SearchPage'

function App() {
  const [username, setUsername] = useState('');


  const handleUsernameSubmit = (username) => {
    sessionStorage.setItem('username', username);
    setUsername(username);
  };

  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* ProtectLogin componnent Private if are already logged in */}
          <Route path="/login" element={
            // <ProtectLogin>
              <Login />
            // </ProtectLogin>
          } />
          <Route path="/register" element={
            // <ProtectLogin>
              <Register />
            // </ProtectLogin>
          } />
          <Route path="/password-reset" element={
              <VerifyPsdEmail />
          } />

          <Route path="/password-reset/confirm" element={
              <ResetPassword />
          } />

          {/* ProtectRouter component Private if are not logged in */}
          <Route element={<ProtectRouter />}>
            <Route path="/profil" element={<Profile />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/pve3d" element={<Pve3d />} />
            <Route path="/pvp3d" element={<Pvp3d />} />
            <Route path="/pvp2d" element={<Pvp2d />} />
            <Route path="/pve2d" element={<Pve2d />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/SecurityProfile" element={<SecurityProfile />} />
            <Route path="/Search" element={<SearchPage />} />
            
            
          </Route>

          {/* Catch all other routes */}
            {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
            {/* we should to replace / to /404-error page (Error 404 Page )*/}
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;