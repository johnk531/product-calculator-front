import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import api from "./services/api";

// import das rotas
import Home from './routes/home/home';
import Login from './routes/login/login';
import Produto from './routes/produto/produto';
import Receita from './routes/receita/receita';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="produto" element={<Produto />} />
          <Route path="receita" element={<Receita />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}