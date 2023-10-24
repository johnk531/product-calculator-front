import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import das rotas
import Home from './routes/home/home';
import Login from './routes/login/login';
import Produto from './routes/produto/produto';
import CreateProduto from "./routes/produto/createProduto";
import ReadProduto from "./routes/produto/readProduto";
import UpdateProduto from "./routes/produto/updateProduto";
import Receita from './routes/receita/receita';
import CreateReceita from "./routes/receita/createReceita";
import ReadReceita from "./routes/receita/readReceita";
import UpdateReceita from "./routes/receita/updateReceita";
import Usuario from "./routes/usuario/usuario";

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
          <Route path="produto/update/:_id" element={<UpdateProduto />} />
          <Route path="receita" element={<Receita />} />
          <Route path="receita/create" element={<CreateReceita />} />
          <Route path="receita/read/:_id" element={<ReadReceita />} />
          <Route path="receita/update/:_id" element={<UpdateReceita />} />
          <Route path="usuario/lista" element={<Usuario />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}