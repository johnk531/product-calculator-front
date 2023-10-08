import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import useApi from "../../services/useApi";

const ListaUsuarios = () =>{
  const api = useApi();

  const [usuarios, setUsuarios] = useState("");

  const buscaUsuarios = async () => {    
    try {
        const res = await api.listUser();
        setUsuarios(res);
    } catch (error) {
        console.log("Ocorreu um erro no servidor!");
    }    
  }

  useEffect(() => {
    buscaUsuarios();
  }, [])

  return (
    <div>
      <h1>Página de Usuários</h1>
      <nav>
        <ul>
            {usuarios.length > 0 ?
                <>
                    {usuarios.map((user) => (
                        <li key={user._id}>{user.email}</li>
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

export default ListaUsuarios;