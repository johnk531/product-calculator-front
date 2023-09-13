import React from 'react';
import { Link } from 'react-router-dom';

const Produto = () =>{
  return (
    <div>
      <h1>Página de Produtos</h1>
      <nav>
        <ul>
          <li>
            teste de produtos
          </li>
          <li>
            <Link to="/">Voltar a home</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Produto;