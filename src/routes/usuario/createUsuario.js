import React, { useState } from "react";

import useApi from "../../services/useApi";

const CreateProduto = () =>{
    const api = useApi();

    const [username, setUsername] = useState(""),
        [email, setEmail] = useState(""),
        [password, setPassword] = useState("");

    const handleCreateUser = async (event) => {    
        event.preventDefault();
        if(username && email && password){
            const res = await api.createUser(username, email, password);
            console.log(res);
        }
        else{
            console.log("Todos os campos são obrigatórios");
        }
    }

    return (
        <div>
            <h1>Página de Cadastro de Usuário</h1>
            <div>
                <form onSubmit={handleCreateUser}>
                    <label>Nome:</label>
                    <input type="text" name="username" value={username} onChange={e => setUsername(e.target.value)} /><br />
                    <label>Email:</label>
                    <input type="text" name="email" value={email} onChange={e => setEmail(e.target.value)} /><br />
                    <label>Senha:</label>
                    <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} /><br />
                    <input type="submit" value="Cadastrar" />
                </form>
            </div>
        </div>
    );
}

export default CreateProduto;