import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Playbooks from '../pages/Playbooks';
import Register from '../pages/Register';

const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/playbooks" element={<Playbooks />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Rotas;
