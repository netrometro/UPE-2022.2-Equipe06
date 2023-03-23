import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import api from "../../../../services/api.js";

function LoginFunction() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const headers = {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    api
      .post("/login", { email, password }, {headers})
      .then((response) => {
        console.log(response.data);
        if (response.data.result === true) {
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("email", response.data.email);
          localStorage.setItem("userId", response.data.userId);
          alert("logado com sucesso!");
          navigate("/home");
        } else if (response.data.error === "Usuário não encontrado") {
          setError("Usuário não encontrado");
        } else {
          setError("Senha incorreta");
        }
      })
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        Senha:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      {error && <p>{error}</p>}
      <button type="submit">Entrar</button>
    </form>
  );
}

export default LoginFunction;