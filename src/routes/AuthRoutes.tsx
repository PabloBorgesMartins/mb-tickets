import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// import SignIn from '../pages/SignIn';
import { SignUp } from "../pages/SignUp";

const AuthRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<SignIn />} /> */}
        <Route path="/" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AuthRoutes;
