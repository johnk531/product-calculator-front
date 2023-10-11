import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import useApi from "../../services/useApi";

const CreateReceita = () =>{
  const api = useApi();

  const [nome, setNome] = useState(""),        
        [products, setProducts] = useState(""),
        [valor, setValor] = useState(""),
        [_id_user, setIdUser] = useState("64ebd47f7060b4333aad3816");

  const handleCreateReceitas = async (event) => {    
    event.preventDefault();
    if (nome && products && valor && _id_user) {
      try {
        const res = await api.createRecipe(nome, products, valor, _id_user);
        console.log(res);
      } catch (error) {
        console.log("Ocorreu um erro no servidor!");
      }
    } else {
        console.log("Todos os campos são obrigatórios!");
    }  
  }

  return (
    <div>
      <h1>Página de Receitas</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Voltar a home</Link>
          </li>
        </ul>
      </nav>
      <div>
      <form onSubmit={handleCreateReceitas}>
        <label>
          Nome:
          <input type="text" name="nome" value={nome} onChange={e => setNome(e.target.value)} />
        </label>
        <br />
        <label>
          Produtos:
          <input type="text" name="products" value={products} onChange={e => setProducts(e.target.value)} />
        </label>
        <br />
        <label>
          Valor:
          <input type="text" name="valor" value={valor} onChange={e => setValor(e.target.value)} />
        </label>
        <br />
        <input type="submit" value="Entrar" />
      </form>
      </div>
    </div>
  );
}

export default CreateReceita;