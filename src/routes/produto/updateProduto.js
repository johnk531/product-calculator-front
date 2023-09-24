import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import useApi from "../../services/useApi";

const UpdateProduto = () =>{
  const api = useApi();

  const [_id, setId] = useState("64ed40cf12696b6b85cc18bb"),
        [nome, setNome] = useState(""),
        [marca, setMarca] = useState(""),
        [quantidade, setQuantidade] = useState(""),
        [tipoquantidade, setTipoquantidade] = useState(""),
        [valor, setValor] = useState(""),
        [_id_user, setIdUser] = useState("64ebd47f7060b4333aad3816");

  const handleUpdadeProdutos = async (event) => {    
    event.preventDefault();
    if (nome && marca && quantidade && tipoquantidade && valor && _id_user) {
      try {
        const res = await api.createProduct(nome, marca, quantidade, tipoquantidade, valor, _id_user);
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
      <h1>Página de Produtos</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Voltar a home</Link>
          </li>
        </ul>
      </nav>
      <div>
      <form onSubmit={handleUpdadeProdutos}>
        <label>
          Nome:
          <input type="text" name="nome" value={nome} onChange={e => setNome(e.target.value)} />
        </label>
        <br />
        <label>
          Marca:
          <input type="text" name="marca" value={marca} onChange={e => setMarca(e.target.value)} />
        </label>
        <br />
        <label>
          Quantidade:
          <input type="text" name="quantidade" value={quantidade} onChange={e => setQuantidade(e.target.value)} />
        </label>
        <br />
        <label>
          Medida:
          <input type="text" name="tipoquantidade" value={tipoquantidade} onChange={e => setTipoquantidade(e.target.value)} />
        </label>
        <br />
        <label>
          Valor:
          <input type="text" name="valor" value={valor} onChange={e => setValor(e.target.value)} />
        </label>
        <input type="hidden" name="_id" value={_id} onChange={e => setValor(e.target.value)} />
        <br />
        <input type="submit" value="Entrar" />
      </form>
      </div>
    </div>
  );
}

export default UpdateProduto;