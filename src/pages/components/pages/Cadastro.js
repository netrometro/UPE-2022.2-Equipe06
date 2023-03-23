import React from "react";
import FormUsuario from '../forms/cadastro/FormCadastro'
import styles from '../forms/cadastro/FormCadastro.module.css'
import Cadastro from "../forms/cadastro/FormCadastro";
function CadastroPage() {
    return(
        <div>
            <div className={styles.FormCadastro}>
                <Cadastro/>
            </div>
        </div>
    )
}

export default CadastroPage;