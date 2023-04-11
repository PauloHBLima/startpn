import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Playbooks from '../pages/Playbooks';
import Register from '../pages/Register';
import EditCard from '../pages/EditCard';

const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/playbooks" element={<Playbooks />} />
        <Route path="/editCard" element={<EditCard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Rotas;
