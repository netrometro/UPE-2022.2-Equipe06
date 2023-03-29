import React from "react";
import styles from '../forms/cadastro/FormCadastro.module.css'
import GetCarrinho from "../utils/carrinho";

function Cart() {
    return(
        <div>
            <div className={styles.FormCadastro}>
                <GetCarrinho/>
            </div>
        </div>
    )
}

export default Cart;