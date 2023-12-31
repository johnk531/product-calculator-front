import React, { useState } from 'react';

//services
import useApi from '../../services/useApi';

//components
import { Logo } from '../../components/Logo.style';
import { StyledButton } from '../../components/Button.style';
import { Container } from '../../components/Container.style';
import { Form } from '../../components/Form.style';

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
    <Container>
      <Logo><img src={logo} alt='Logo Product Calculator'/></Logo>
      <Form>
        <form onSubmit={handleLogin}>
          <div>
            <label>
              Email:
              <input type='text' name='email' id='email' value={email} onChange={e => setEmail(e.target.value)} placeholder='Set a email' required />
            </label>
          </div>
          <div>
            <label>
              Password:
              <input type='password' name='password' id='password' value={password} onChange={e => setPassword(e.target.value)} placeholder='Set a password' required />
            </label>
          </div>
          <StyledButton>Signin</StyledButton>
        </form>
        <div>
          <div>          
            <Link to='/forget-password'>Forget Password</Link>
            <Link to='/signup'>Signup</Link>
          </div>
        </div>
      </Form>
    </Container>
  );
}

export default Login;