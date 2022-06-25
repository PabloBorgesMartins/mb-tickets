import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from '../components/Header';

import { ListEvents } from '../pages/ListEvents';
import { CreateEvent } from '../pages/CreateEvent';


const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ListEvents />} />
        <Route path="/evento/criar" element={<CreateEvent />} />
      </Routes>
    </BrowserRouter>
  )
};

export default AppRoutes;
