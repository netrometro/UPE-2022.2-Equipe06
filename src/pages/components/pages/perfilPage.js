import React from 'react'
import styles from "./Assets/Perfil.module.css"

function PerfilPage() {
  return (
    <div>
      <div className={styles.Perfil}>
        <h1>Perfil de usuário</h1>
        <img id='img_perfil' src='https://cloudfront-us-east-1.images.arcpublishing.com/estadao/ZFV5J2MOXBPOBPL6DGM2RRRXPU.jpg'/>

        <p> Juliette Freire </p>
        <button>Itens curtidos</button>
        <p id='nome'></p>
        <p id='nome'></p>
      </div>
    </div>
  )
}

export default PerfilPage
