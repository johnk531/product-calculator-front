import React, { useState } from 'react';

//services
import useApi from '../../services/useApi';

//components
import { Logo } from '../../components/Logo.style';
import { StyledButton } from '../../components/Button.style';

//assets
import logo from '../../assets/img/logo-pc.png';

const Login = () =>{
  const api = useApi();

  const [email, setEmail] = useState(''),
        [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    if (email && password) {
      try {
        const res = await api.signin(email,password);
        console.log(res);
      } catch (error) {
        console.log('Ocorreu um erro no servidor!', error);
      }
    } else {
        console.log('email ou senha não preenchidos!');
    }
  }

  return (
    <div>
      <Logo><img src={logo} alt='Logo Product Calculator'/></Logo>
      <div>
        <form onSubmit={handleLogin}>
          <label for='email'>E-mail:</label>        
          <input type='text' name='email' id='email' value={email} onChange={e => setEmail(e.target.value)} />
          <br />
          <label for='password'>Senha:</label>        
          <input type='password' name='password' id='password' value={password} onChange={e => setPassword(e.target.value)} />
          <br />
          <StyledButton>Entrar</StyledButton>
        </form>
      </div>
    </div>
  );
}

export default Login;