import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from '../components/Header';

import { ListEvents } from '../pages/ListEvents';
import { CreateEvent } from '../pages/CreateEvent';
import { CheckoutPage } from '../pages/Checkout';


const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ListEvents />} />
        <Route path="/evento/criar" element={<CreateEvent />} />
        <Route path="/evento/comprar/:id" element={<CheckoutPage />} />
      </Routes>
    </BrowserRouter>
  )
};

export default AppRoutes;
