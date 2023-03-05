import React from "react";
import FormUsuario from '../forms/cadastro/FormCadastro'
import styles from '../forms/cadastro/FormCadastro.module.css'

function Cadastro() {
    return(
        <div>
            <div className={styles.FormCadastro}>
                <FormUsuario/>
            </div>
        </div>
    )
}

export default Cadastro