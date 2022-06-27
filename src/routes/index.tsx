import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from '../components/Header';

import { ListEvents } from '../pages/ListEvents';
import { CreateEvent } from '../pages/CreateEvent';
import { CheckoutPage } from '../pages/Checkout';
import { Profile } from '../pages/Profile';


const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ListEvents />} />
        <Route path="/evento/criar" element={<CreateEvent />} />
        <Route path="/evento/comprar/:id" element={<CheckoutPage />} />
        <Route path="/perfil" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
};

export default AppRoutes;
