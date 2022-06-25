import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from '../components/Header';

import { ListEvents } from '../pages/ListEvents';


const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ListEvents />} />
      </Routes>
    </BrowserRouter>
  )
};

export default AppRoutes;
