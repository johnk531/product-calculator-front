import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import useApi from "../../services/useApi";

const ReadProduto = () =>{
  const api = useApi(),
        { _id } = useParams();

  const [produto, setProduto] = useState("");

  const buscaProduto = async () => {    
    try {
        const res = await api.readProduct(_id);
        setProduto(res);
    } catch (error) {
        console.log("Ocorreu um erro no servidor!");
        setProduto(null);
    }
  }

  useEffect(() => {
    buscaProduto();
  }, [])

  return (
    <div>
      <h1>Página de Usuários</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Voltar a home</Link>
          </li>
            {produto != undefined ?
                <>
                    <li key={produto._id}>{produto._id}</li>
                    <li key={produto.nome}>{produto.nome}</li>
                    <li key={produto.marca}>{produto.marca}</li>
                    <li key={produto.quantidade}>{produto.quantidade}</li>
                    <li key={produto.tipoquantidade}>{produto.tipoquantidade}</li>
                    <li key={produto.valor}>{produto.valor}</li>
                    <li key={produto._id_user}>{produto._id_user}</li>
                </>
                :
                    <li>Carregando...</li>
            }
        </ul>
      </nav>
    </div>
  );
}

export default ReadProduto;