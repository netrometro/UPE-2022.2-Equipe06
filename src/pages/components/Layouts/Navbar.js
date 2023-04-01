import { Link } from "react-router-dom";
import React, { useState, useContext } from "react";
import styles from "./Assets/Navbar.module.css";
import home_button from "../images/botao-de-inicio-changed.png";
import Container from "./Container";
import promocoes from "../images/etiqueta-de-desconto-changed.png";
import news from "../images/etiqueta-de-preco-changed.png";
import carrinho from "../images/shopping-cart-changed.png";
import perfil from "../images/perfil-de-usuario-changed.png";
import { UserContext } from "../utils/userContext"
import raio from "../images/raio.png";
import PromoRePage from "../pages/PromoRePage";


function Navbar() {
  const { user } = useContext(UserContext);

  return (
    <nav className={styles.navbar}>
      <Container className={styles.Container}>
        <ul>
          {!user && (
            <li className={styles.item}>
              <Link
                className={styles.itemCadastrarProduto}
                to="/cadastro/produto"
              >
                Cadastrar produto
              </Link>
            </li>
          )}
          {!user ? (
            <>
            <li className={styles.item}>
                <Link className={styles.itemLink} to="/addPromo">
                  Add Promoção
                </Link>
              </li>
              <li className={styles.item}>
                <Link className={styles.itemLink} to="/cadastro">
                  registro
                </Link>
              </li>
              <li className={styles.item}>
                <Link className={styles.itemLink} to="/login">
                  login
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className={styles.item}>
                <span className={styles.itemLink}>Olá, {user.name}!</span>
              </li>
            </>
          )}
          <li className={styles.item}>
            <Link to="/">
              {" "}
              <img src={home_button} width={40} height={30} alt="home"></img>
            </Link>
          </li>
          <li className={styles.item}>
            <Link to="/promocoes">
              <img src={promocoes} width={30} height={30}></img>
            </Link>
          </li>
          <li className={styles.item}>
            <Link to="/novidades">
              <img src={news} width={30} height={30}></img>
            </Link>
          </li>
          <li className={styles.item}>
            <Link to="/carrinho">
              <img src={carrinho} width={30} height={30}></img>
            </Link>
          </li>
          {user && (
            <li className={styles.item}>
              <Link to="/perfil">
                <img src={perfil} width={30} height={30}></img>
              </Link>
            </li>
          )}
        </ul>
      </Container>
    </nav>
  );
}

export default Navbar;