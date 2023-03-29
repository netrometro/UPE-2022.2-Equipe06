import React from "react";
import LoginFunction from "../forms/login/FormLogin"
import styles from '../forms/cadastro/FormCadastro.module.css'
import { createContext } from 'react';
import { useState } from "react";

export const LoginContext = createContext();


function Login() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    return(
        <div>
            <div className={styles.FormCadastro}>
            <LoginContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
                <LoginFunction/>
            </LoginContext.Provider>
            </div>
        </div>
    )
}

export default Login