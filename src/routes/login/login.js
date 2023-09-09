import React from 'react';
import { Link } from 'react-router-dom';

const Login = () =>{
  return (
    <div>
      <h1>Página de Login</h1>
      <nav>
        <ul>
          <li>
            teste de login
          </li>
          <li>
            <Link to="/home">Voltar a home</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Login;