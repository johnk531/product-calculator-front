import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import das rotas
import Home from './routes/home/home';
import Login from './routes/login/login';
import Produto from './routes/produto/produto';
import Receita from './routes/receita/receita';
import ListaUsuarios from "./routes/usuario/lista";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="produto" element={<Produto />} />
          <Route path="receita" element={<Receita />} />
          <Route path="usuario/lista" element={<ListaUsuarios />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}