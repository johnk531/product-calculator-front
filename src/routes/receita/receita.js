import React from 'react';
import { Link } from 'react-router-dom';

const Receita = () =>{
  return (
    <div>
      <h1>Página de Receitas</h1>
      <nav>
        <ul>
          <li>
            teste de receitas
          </li>
          <li>
            <Link to="/home">Voltar a home</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Receita;