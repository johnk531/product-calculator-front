import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import useApi from "../../services/useApi";

const UpdateProduto = () =>{
  const api = useApi(),
        { _id } = useParams();

  const [nome, setNome] = useState(""),
        [marca, setMarca] = useState(""),
        [quantidade, setQuantidade] = useState(""),
        [tipoquantidade, setTipoquantidade] = useState(""),
        [valor, setValor] = useState(""),
        [_id_user, setIdUser] = useState("");

  const buscaProduto = async () => {    
    try {
        const res = await api.readProduct(_id);
        setNome(res.nome);
        setMarca(res.marca);
        setQuantidade(res.quantidade);
        setTipoquantidade(res.tipoquantidade);
        setValor(res.valor);
        setIdUser(res._id_user);
    } catch (error) {
        console.log("Ocorreu um erro no servidor!");
        setProduto(null);
    }
  }

  const handleUpdadeProdutos = async (event) => {    
    event.preventDefault();
    if (nome && marca && quantidade && tipoquantidade && valor && _id_user) {
      try {
        const res = await api.updateProduct(_id, nome, marca, quantidade, tipoquantidade, valor, _id_user);
        console.log(res);
      } catch (error) {
        console.log("Ocorreu um erro no servidor!");
      }
    } else {
        console.log("Todos os campos são obrigatórios!");
    }  
  }

  useEffect(() => {
    buscaProduto();
  }, [])

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
        <input type="hidden" name="_id" value={_id} />
        <br />
        <input type="submit" value="Entrar" />
      </form>
      </div>
    </div>
  );
}

export default UpdateProduto;