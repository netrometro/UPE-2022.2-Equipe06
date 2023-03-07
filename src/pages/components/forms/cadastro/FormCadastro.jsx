import React from 'react'
import {useState} from "react"
import FormInput from '../cadastro/FormInput';
import "./FormCadastro.module.css"
import { Link } from 'react-router-dom';

function FormUsuario() {
  const [values, setValues ] = useState({
    nome:"",
    sobrenome:"",
    email:"",
    password:"",
    confirmPassword:"",
   });
   
   const inputs = [
    {
      id:1,
      name:'nome',
      type:"text",
      placeholder:"Seu primeiro nome",
      label: "Nome "
  
    },
    {
      id:2,
      name:'sobrenome',
      type:"text",
      placeholder:"Seu sobrenome",
      label: "Sobrenome "
  
    },{
      id:3,
      name:'email',
      type:"text",
      placeholder:"E-mail",
      label: "Email "
  
    }
    ,{
      id:5,
      name:'password',
      type:"text",
      placeholder:"Senha",
      label: "Senha "
  
    },{id:6,
      name:'confirmPassword',
      type:"text",
      placeholder:"Digite a senha novamente",
      label: "Validar Senha "
  
    }
   ]
  
   const handleSubmit = (e) => {
    e.preventDefault();
   
    
  }

  const onChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value});
  }
  
  console.log(values);

  return (
   <div className='App'>
    <form onSubmit={handleSubmit}>
      <h1>Cadastro</h1>
      {inputs.map((input)=> (
        <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange} />

      ))}
      
      
      <button>Submit</button>
      <Link to="/login">Clique aqui para ir direto para o login.</Link>
    </form>
    

   </div>
  );
  
  
  }

export default FormUsuario;
