import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from '../pages/Register';

const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}


export default Rotas;
