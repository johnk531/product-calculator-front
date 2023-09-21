import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import das rotas
import Home from './routes/home/home';
import Login from './routes/login/login';
import Produto from './routes/produto/produto';
import CreateProduto from "./routes/produto/createProduto";
import ReadProduto from "./routes/produto/readProduto";
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
          <Route path="produto/create" element={<CreateProduto />} />
          <Route path="produto/read/:_id" element={<ReadProduto />} />
          <Route path="receita" element={<Receita />} />
          <Route path="usuario/lista" element={<ListaUsuarios />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}