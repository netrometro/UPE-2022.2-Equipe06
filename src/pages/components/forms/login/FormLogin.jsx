import React from 'react'
import {useState} from "react"
import FormInput from '../cadastro/FormInput'
import { Link } from 'react-router-dom';

function FormLogin() {

    const [values, setValues ] = useState({
    email:"",
    password:"",
  
   });
   
   const inputs = [
    
    {
      id:1,
      name:'email',
      type:"text",
      placeholder:"Digite seu e-mail",
      label: "Email "
  
    },{
      id:2,
      name:'password',
      type:"text",
      placeholder:"Digite sua senha",
      label: "Senha"
  
    },
    
  
    
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
        <h1>Login</h1>
        {inputs.map((input)=> (
          <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange} />
  
        ))}
        
        
        <button>Confirmar</button>
        <Link to="/cadastro">Clique aqui para fazer cadastro</Link>
      </form>
      
  
     </div>
    );
  }
  
  export default FormLogin;
  