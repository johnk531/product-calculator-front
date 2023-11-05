import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

import useApi from "../../services/useApi";

const Receita = () =>{
  const api = useApi();

  const [receitas, setReceitas] = useState("");

  const buscaReceitas = async () => {    
    try {
        const res = await api.listRecipe();
        setReceitas(res);
    } catch (error) {
        console.log("Ocorreu um erro no servidor!");
    }    
  }

  useEffect(() => {
    buscaReceitas();
  }, [])

  return (
    <div>
      <h1>Página de Receitas</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Voltar a home</Link>
          </li>
          {receitas.length > 0 ?
                <>
                    {receitas.map((receita) => (
                        <li key={receita._id}><Link to={"/receita/read/" + receita._id}>{receita.nome}</Link></li>
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

export default Receita;