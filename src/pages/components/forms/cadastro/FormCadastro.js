import React from "react";
import api from "../../../../services/api.js";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

function CadastroForm() {
  const navigate = useNavigate();
  const [formDados, setFormDados] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
  });

  const [confirmPassword, setConfirmPassword] = useState("");

  const handleName = (e) => {
    setFormDados({
      ...formDados,
      name: e.target.value,
    });
  };

  const handleEmail = (e) => {
    setFormDados({
      ...formDados,
      email: e.target.value,
    });
  };

  const handleUsername = (e) => {
    setFormDados({
      ...formDados,
      username: e.target.value,
    });
  };

  const handlePassword = (e) => {
    setFormDados({
      ...formDados,
      password: e.target.value,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formDados.password !== confirmPassword) {
      alert("As senhas não coincidem");
      return;
    }
    api
      .post("/user/register", formDados)
      .then((res)=>{
        console.log(res);
        if(res.data.error === ("Já existe usuário cadastrado com esses dados")){
         alert("Usuário já existe")
         window.location.reload();
        } 
        else {
         alert("Cadastrado!")
         navigate("/login")
        }  
      })
      .catch((err) => {
        console.log(err.response.data);
      });
    console.log(formDados);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Cadastro</h1>
      <label>
        Nome:
        <input type="text" value={formDados.name} onChange={handleName} />
      </label>
      <label>
        Username:
        <input
          type="text"
          value={formDados.username}
          onChange={handleUsername}
        />
      </label>
      <label>
        Email:
        <input type="email" value={formDados.email} onChange={handleEmail} />
      </label>
      <label>
        Crie uma Senha:
        <input
          type="password"
          value={formDados.password}
          onChange={handlePassword}
        />
      </label>
      <label>
        Confirmar Senha:
        <input
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={(event) =>
            setConfirmPassword(event.target.value)}
        />
      </label>
      <button type="submit" onSubmit={handleSubmit}>
        Cadastrar
      </button>
    </form>
  );
}

export default CadastroForm;
