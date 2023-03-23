import React from "react";
import Logout from "../utils/logout";
import styles from "./Assets/Perfil.module.css";

function PerfilPage() {
  return (
    <div>
      <div className={styles.Perfil}>
        <h1>Perfil de usuário</h1>
        <Logout />
        <p></p>
        <button></button>
        <p id="nome"></p>
        <p id="nome"></p>
      </div>
    </div>
  );
}

export default PerfilPage;
