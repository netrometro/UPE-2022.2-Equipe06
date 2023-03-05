import React from "react";
import FormLogin from '../forms/login/FormLogin'
import styles from '../forms/cadastro/FormCadastro.module.css'

function Cadastro() {
    return(
        <div>
            <div className={styles.FormCadastro}>
                <FormLogin/>
            </div>
        </div>
    )
}

export default Cadastro