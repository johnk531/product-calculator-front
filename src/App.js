import React, { useEffect, useState } from "react";
import api from "./services/api";

export default function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    api
      .get("/user/read/john10@gmail.com")
      .then((response) => setUser(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
    console.log(user);
  }, []);

  return (
    <div className="App">
      <p>Usuário: {user?.username}</p>
      <p>E-mail: {user?.email}</p>
    </div>
  );
}