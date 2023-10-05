import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import useApi from "../../services/useApi";

const ReadReceita = () =>{
  const api = useApi(),
        { _id } = useParams();

  const [receita, setReceita] = useState("");

  const buscaReceita = async () => {    
    try {
        const res = await api.readRecipe(_id);
        setReceita(res);
    } catch (error) {
        console.log("Ocorreu um erro no servidor!");
        setReceita(null);
    }
  }

  useEffect(() => {
    buscaReceita();
  }, [])

  return (
    <div>
      <h1>Página de Receitas</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Voltar a home</Link>
          </li>
            {receita != undefined ?
                <>
                    <li key={receita._id}>{receita._id}</li>
                    <li key={receita.nome}>{receita.nome}</li>
                    <Link to={"/receita/delete/" + receita._id}>Apagar</Link>
                    <Link to={"/receita/update/" + receita._id}>Editar</Link>
                </>
                :
                    <li>Carregando...</li>
            }
        </ul>
      </nav>
    </div>
  );
}

export default ReadReceita;