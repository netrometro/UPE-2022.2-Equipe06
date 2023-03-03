import logo from './logo.svg';
import React, { useEffect, useState, useRef } from "react";
import './App.css';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import FormInput from './pages/componets/FormInput';



function App() {
 const [values, setValues ] = useState({
  username:"",
  nome:"",
  email:"",
  cpf:"",
  password:"",
  confirmPassword:"",
 });
 
 const inputs = [
  {
    id:1,
    name:'username',
    type:"text",
    placeholder:"Username",
    label: "Username "

  },
  {
    id:2,
    name:'nome',
    type:"text",
    placeholder:"Nome completo",
    label: "Nome completo "

  },{
    id:3,
    name:'email',
    type:"text",
    placeholder:"E-mail",
    label: "Email "

  },{
    id:4,
    name:'cpf',
    type:"text",
    placeholder:"CPF",
    label: "CPF "

  },{
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
      <h1>Cadastramento</h1>
      {inputs.map((input)=> (
        <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange} />

      ))}
      
      
      <button>Submit</button>
    </form>
    

   </div>
  );
}

export default App;
