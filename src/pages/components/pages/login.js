import React from "react";
import LoginFunction from "../forms/login/FormLogin"
import styles from '../forms/cadastro/FormCadastro.module.css'

function Login() {
    return(
        <div>
            <div className={styles.FormCadastro}>
                <LoginFunction/>
            </div>
        </div>
    )
}

export default Login