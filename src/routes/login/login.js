import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import useApi from "../../services/useApi";

const Login = () =>{
  const api = useApi();

  const [email, setEmail] = useState(""),
        [password, setPassword] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();
    if (email && password) {
      try {
        const res = await api.signin(email,password);
        console.log(res);
      } catch (error) {
        console.log("Ocorreu um erro no servidor!");
      }
    } else {
        console.log("email ou senha não preenchidos!");
    }
  }

  return (
    <div>
      <h1>Página de Login</h1>
      <nav>
        <ul>
          <li>
            teste de login
          </li>
          <li>
            <Link to="/">Voltar a home</Link>
          </li>
        </ul>
      </nav>
      <div>
      <form onSubmit={handleLogin}>
        <label>
          E-mail:
          <input type="text" name="email" value={email} onChange={e => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Senha:
          <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
        </label>
        <br />
        <input type="submit" value="Entrar" />
      </form>
      </div>
    </div>
  );
}

export default Login;