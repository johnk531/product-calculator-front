import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import useApi from "../../services/useApi";

const Produto = () =>{
  const api = useApi();

  const [produtos, setProdutos] = useState("");

  const buscaProdutos = async () => {    
    try {
        const res = await api.listProduct();
        setProdutos(res);
    } catch (error) {
        console.log("Ocorreu um erro no servidor!");
    }    
  }

  useEffect(() => {
    buscaProdutos();
  }, [])

  return (
    <div>
      <h1>Página de Produtos</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Voltar a home</Link>
          </li>
          {produtos.length > 0 ?
                <>
                    {produtos.map((produto) => (
                        <li key={produto._id}><Link to={"/produto/read/" + produto._id}>{produto.nome}</Link></li>
                    ))}
                </>
                :
                    <li>Carregando...</li>
            }
        </ul>
      </nav>
    </div>
  );
}

export default Produto;